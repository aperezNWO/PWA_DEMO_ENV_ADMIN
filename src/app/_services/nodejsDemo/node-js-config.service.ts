import { Injectable, PipeTransform              } from '@angular/core';
import { _NodeJsConfigSortColumn } from '../../_directives/Demos/nodeJsDemo/node-js-config.directive';
import { _SortDirection, compare          } from '../../_models/common/common';
import { _NodeJsConfigSearchResult, NodeJsConfig } from '../../_models/nodejsDemo/NodeJsConfig';
import { BehaviorSubject, debounceTime, delay, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { _environment } from '../../../environments/environment';
//
interface _NodeJsConfigSearchState {
	page           : number;             
	pageSize       : number;
	searchTerm     : string;
	sortColumn     :  _NodeJsConfigSortColumn;
	sortDirection  :  _SortDirection;
}
//
function sort(featurePagelist: NodeJsConfig[], column: _NodeJsConfigSortColumn, direction: string): NodeJsConfig[] {
	if (direction === '' || column === '') {
		return featurePagelist;
	} else {
		return [...featurePagelist].sort((a, b) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}
//
function matches(featurePage: NodeJsConfig, term: string, pipe: PipeTransform) {
	return (
		featurePage.name.toLowerCase().includes(term?.toLowerCase())          ||
		featurePage.description.toLowerCase().includes(term?.toLowerCase())   ||
		featurePage.framework.toLowerCase().includes(term?.toLowerCase())     
	);
}
@Injectable({
  providedIn: 'root'
})
export class NodeJsConfigService {

	//
	private _loading           = new BehaviorSubject<boolean>(true);
	private _featurepageList   = new BehaviorSubject<NodeJsConfig[]>([]);
	private _total             = new BehaviorSubject<number>(0);
	private _search$           = new Subject<void>();

   //
	private _state: _NodeJsConfigSearchState = {
		page          : 1,
		pageSize      : 4, 
		searchTerm    : '',
		sortColumn    : '',
		sortDirection : '',
	};
	//
	constructor(private pipe: DecimalPipe) {
		this._search$
      .pipe(
      tap(() => this._loading!.next(true)),
      debounceTime(200),
      switchMap(() => this._search()),
      delay(200),
      tap(() => this._loading!.next(false)),
      )
      .subscribe((result) => {
      this._featurepageList!.next(result.NodeJsConfigPageList);
      this._total!.next(result.total);
      });
      //
      this._search$.next();
	}
  //
  //
	private _search(): Observable<_NodeJsConfigSearchResult> {
		//
		let _featurepageList                      : any;
		let _total                                : any;
		let _searchResult                         : _NodeJsConfigSearchResult  = {NodeJsConfigPageList: _featurepageList, total : _total};

		// 0. get state
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state!;
        //
		console.log("external json data : " +  _environment.NodeJsDemosList); 

		// 1. sort
		let _FEATURE_PAGES  : NodeJsConfig[] = [];
		//
		_environment.NodeJsDemosList.forEach((element: any) => {
			_FEATURE_PAGES.push(element);
			console.log(element)
		});
        //
		_featurepageList   = sort(_FEATURE_PAGES, sortColumn, sortDirection);

		// 2. filter
		_featurepageList   = _featurepageList.filter((featurePage: NodeJsConfig) => matches(featurePage, searchTerm, this.pipe));
		_total             = _featurepageList.length;

		// 3. paginate
		_featurepageList   = _featurepageList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		
		// 4. return
		_searchResult      = { NodeJsConfigPageList: _featurepageList, total : _total };

		// 5. return
		return  of (_searchResult);
  }
    //////////////////////////////////////////////////////////////////////
	// PROPERTIES
	//////////////////////////////////////////////////////////////////////
	//
	public get configPageLists () {
		return this._featurepageList!.asObservable();
	}
	//
	get total() {
		return this._total!.asObservable();
	}
	//
	get loading() {
		return this._loading!.asObservable();
	}
	//
	get page() {
		return this._state!.page;
	}
	//
	public get pageSize() {
		return this._state!.pageSize;
	}
	//
	get searchTerm() {
		return this._state!.searchTerm;
	}
    //
	set page(page: number) {
		this._set({ page });
	}
	//
	set pageSize(pageSize: number) {
		this._set({ pageSize });
	}
	//
	set searchTerm(searchTerm: string) {
		this._set({ searchTerm });
	}
	//
	set sortColumn(sortColumn: _NodeJsConfigSortColumn) {
		this._set({ sortColumn });
	}
	//
	set sortDirection(sortDirection: _SortDirection) {
		this._set({ sortDirection });
	}
  //
	private _set(patch: Partial<_NodeJsConfigSearchState>) {
		Object.assign(this._state!, patch);
		this._search$.next();
	}
}
