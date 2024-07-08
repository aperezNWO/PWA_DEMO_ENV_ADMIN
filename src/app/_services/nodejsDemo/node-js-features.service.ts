import { Injectable, PipeTransform                               } from '@angular/core';
import { _environment                                            } from '../../../environments/environment';
import { DecimalPipe                                             } from '@angular/common';
import { BehaviorSubject, Observable, Subject                    } from 'rxjs';
import { debounceTime, delay, of, switchMap, tap                 } from 'rxjs';
import { _NodeJsFeatureSortColumn, _NodeJsFeatureSortDirection   } from '../../_directives/Demos/nodeJsDemo/node-js.directive';
import { _NodeJsFeaturesSearchResult, NodeJsFeatures             } from '../../_models/nodejsDemo/NodeJsFeatures';

//
interface _NodeJsFeaturePageSearchState {
	page           : number;
	pageSize       : number;
	searchTerm     : string;
	sortColumn     :  _NodeJsFeatureSortColumn;
	sortDirection  :  _NodeJsFeatureSortDirection;
}
//
const compare = (v1: string | number | boolean, v2: string | number | boolean) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
//
function sort(featurePagelist: NodeJsFeatures[], column: _NodeJsFeatureSortColumn, direction: string): NodeJsFeatures[] {
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
function matches(featurePage: NodeJsFeatures, term: string, pipe: PipeTransform) {
	return (
		featurePage.urlCurriculum.toLowerCase().includes(term?.toLowerCase()) ||
		featurePage.description.toLowerCase().includes(term?.toLowerCase())   ||
		featurePage.framework.toLowerCase().includes(term?.toLowerCase())     ||
		featurePage.keywords.toLowerCase().includes(term?.toLowerCase())      
	);
}
@Injectable({
  providedIn: 'root'
})
export class NodeJsFeaturesService {
  //
  private _loading           = new BehaviorSubject<boolean>(true);
  private _search$           = new Subject<void>();
  private _featurepageList   = new BehaviorSubject<NodeJsFeatures[]>([]);
  private _total             = new BehaviorSubject<number>(0);
  //
	private _state: _NodeJsFeaturePageSearchState = {
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
      this._featurepageList!.next(result.featurePages);
      this._total!.next(result.total);
      });
      //
      this._search$.next();
	}
  //
	private _search(): Observable<_NodeJsFeaturesSearchResult> {
		//
		let _featurepageList                      : any;
		let _total                                : any;
		let _searchResult                         : _NodeJsFeaturesSearchResult  = {featurePages: _featurepageList, total : _total};

    // 0. get state
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
    
    //
		console.log("external json data : " +  _environment.NodeJsDemosList); 

    // 1. sort
		let _FEATURE_PAGES  : NodeJsFeatures[] = [];
		//
		_environment.NodeJsDemosList.forEach((element: any) => {
			_FEATURE_PAGES.push(element);
			console.log(element)
		});
    //
		_featurepageList   = sort(_FEATURE_PAGES, sortColumn, sortDirection);

    // 2. filter
		_featurepageList   = _featurepageList.filter((featurePage: NodeJsFeatures) => matches(featurePage, searchTerm, this.pipe));
		_total             = _featurepageList.length;

		// 3. paginate
		_featurepageList   = _featurepageList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		
		// 4. return
		_searchResult      = { featurePages: _featurepageList, total : _total };

		// 5. return
		return  of (_searchResult);
  }
  //////////////////////////////////////////////////////////////////////
	// PROPERTIES
	//////////////////////////////////////////////////////////////////////
	//
	public get featurepageLists () {
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
		return this._state.page;
	}
	//
	public get pageSize() {
		return this._state.pageSize;
	}
	//
	get searchTerm() {
		return this._state.searchTerm;
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
	set sortColumn(sortColumn: _NodeJsFeatureSortColumn) {
		this._set({ sortColumn });
	}
	//
	set sortDirection(sortDirection: _NodeJsFeatureSortDirection) {
		this._set({ sortDirection });
	}
  //
	private _set(patch: Partial<_NodeJsFeaturePageSearchState>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}
}
