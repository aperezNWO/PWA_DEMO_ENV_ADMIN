import { Injectable, PipeTransform                          } from '@angular/core';
import { DecimalPipe                                        } from '@angular/common';
import { BehaviorSubject, debounceTime, delay, Observable   } from 'rxjs';
import { of, Subject, switchMap, tap                        } from 'rxjs';
import { _NodeJsConfigSortColumn                            } from '../../_directives/Demos/nodeJsDemo/node-js-config.directive';
import { _SortDirection, BaseService, compare               } from '../../_models/common/common';
import { _NodeJsConfigSearchResult, NodeJsConfig            } from '../../_models/nodejsDemo/NodeJsConfig';
import { _environment                                       } from '../../../environments/environment';
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
		featurePage.description.toLowerCase().includes(term?.toLowerCase())   
	);
}
@Injectable({
  providedIn: 'root'
})
export class NodeJsConfigService extends BaseService {

	//
	private _featurepageList   = new BehaviorSubject<NodeJsConfig[]>([]);
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
		//
		super();
		//
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
		let _configpageList                       : any;
		let _total                                : any;
		let _searchResult                         : _NodeJsConfigSearchResult  = {NodeJsConfigPageList: _configpageList, total : _total};

		// 0. get state
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state!;
        //
		console.log("external json data : " +  _environment.NodeJsConfigList); 

		// 1. sort
		let _CONFIG_PAGES  : NodeJsConfig[] = [];
		//
		_environment.NodeJsConfigList.forEach((element: any) => {
			_CONFIG_PAGES.push(element);
			console.log(element)
		});
        //
		_configpageList   = sort(_CONFIG_PAGES, sortColumn, sortDirection);

		// 2. filter
		_configpageList    = _configpageList.filter((featurePage: NodeJsConfig) => matches(featurePage, searchTerm, this.pipe));
		_total             = _configpageList.length;

		// 3. paginate
		_configpageList    = _configpageList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		
		// 4. return
		_searchResult      = { NodeJsConfigPageList: _configpageList, total : _total };

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
