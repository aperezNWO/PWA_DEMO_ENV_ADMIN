import { Injectable, PipeTransform               } from '@angular/core';
import { DecimalPipe                             } from '@angular/common';
import { _NetCoreDemoSortColumn                  } from '../../_directives/Demos/netcoreDemo/NetCoreDemoListSortableHeader.directive';
import { _SortDirection, BaseService, compare                 } from '../../_models/common/common';
import { _NetCoreDemoSearchResult, netCoreDemo   } from '../../_models/netCoreDemo/netCoreDemo';
import { _environment                            } from '../../../environments/environment';
import { BehaviorSubject, debounceTime, delay, Observable, of, Subject, switchMap, tap } from 'rxjs';
//
interface _NetCoreDemoPageSearchState {
	page           : number;
	pageSize       : number;
	searchTerm     : string;
	sortColumn     :  _NetCoreDemoSortColumn;
	sortDirection  :  _SortDirection;
}
//
function sort(netcoreDemoPagelist: netCoreDemo[], column: _NetCoreDemoSortColumn, direction: string): netCoreDemo[] {
	if (direction === '' || column === '') {
		return netcoreDemoPagelist;
	} else {
		return [...netcoreDemoPagelist].sort((a, b) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}
//
function matches(netcoreDemoPagelist: netCoreDemo, term: string, pipe: PipeTransform) {
	return (
		netcoreDemoPagelist.name.toLowerCase().includes(term?.toLowerCase())          ||
		netcoreDemoPagelist.description.toLowerCase().includes(term?.toLowerCase())   ||
		netcoreDemoPagelist.framework.toLowerCase().includes(term?.toLowerCase())     ||
		netcoreDemoPagelist.keywords.toLowerCase().includes(term?.toLowerCase())      
	);
}
//
@Injectable({
  providedIn: 'root'
})
export class NetcoreDemoService extends BaseService {
	//
	private _netcoreDemoPagelist   = new BehaviorSubject<netCoreDemo[]>([]);
    //
	private _state: _NetCoreDemoPageSearchState = {
		page          : 1,
		pageSize      : 4, 
		searchTerm    : '',
		sortColumn    : '',
		sortDirection : '',
	};
	//
	constructor(private pipe: DecimalPipe) {
	  //
	  super()
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
          this._netcoreDemoPagelist!.next(result.netcoreDemoPages);
          this._total!.next(result.total);
      });
      //
      this._search$.next();
	}
    //
	private _search(): Observable<_NetCoreDemoSearchResult> {
		//
		let _netCoreDemoList                      : any;
		let _total                                : any;
		let _searchResult                         : _NetCoreDemoSearchResult  = {netcoreDemoPages: _netCoreDemoList, total : _total};

        // 0. get state
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
    
        //
		console.log("external json data : " +  _environment.netCoreDemoList); 

        // 1. sort
		let _NETCOREDEMO_PAGES  : netCoreDemo[] = [];
		//
		_environment.netCoreDemoList.forEach((element: any) => {
			_NETCOREDEMO_PAGES.push(element);
			console.log(element)
		});
		//
		_netCoreDemoList   = sort(_NETCOREDEMO_PAGES, sortColumn, sortDirection);

		// 2. filter
		_netCoreDemoList   = _netCoreDemoList.filter((NetCoreDemoPage: netCoreDemo) => matches(NetCoreDemoPage, searchTerm, this.pipe));
			_total             = _netCoreDemoList.length;

			// 3. paginate
			_netCoreDemoList   = _netCoreDemoList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
			
			// 4. return
			_searchResult      = { netcoreDemoPages: _netCoreDemoList, total : _total };

			// 5. return
			return  of (_searchResult);
    }
    //////////////////////////////////////////////////////////////////////
	// PROPERTIES
	//////////////////////////////////////////////////////////////////////
	//
	public get NetcoreDemoPagelist () {
		return this._netcoreDemoPagelist!.asObservable();
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
	set sortColumn(sortColumn: _NetCoreDemoSortColumn) {
		this._set({ sortColumn });
	}
	//
	set sortDirection(sortDirection: _SortDirection) {
		this._set({ sortDirection });
	}
    //
	private _set(patch: Partial<_NetCoreDemoPageSearchState>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}
}
