/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, PipeTransform                              } from '@angular/core';
import { DecimalPipe                                            } from '@angular/common';
import { _environment                                           } from '../../../environments/environment';
import { _DevPageSortColumn                                     } from '../../_directives/Demos/angularDemo/devPagesListSortable.directive';
import { _SortDirection, compare, BaseService                   } from '../../_models/common/common';
import { AngularConfig, _AngularConfigSearchResult              } from '../../_models/AngularDemo/AngularConfig';
import { BehaviorSubject, Observable, Observer, of, Subject     } from 'rxjs';
import { debounceTime, delay, switchMap, tap                    } from 'rxjs/operators';
//
interface _DevPageSearchState {
	page           : number;
	pageSize       : number;
	searchTerm     : string;
	sortColumn     :  _DevPageSortColumn;
	sortDirection  :  _SortDirection;
}
//
function sort(devpageslist: AngularConfig[], column: _DevPageSortColumn, direction: string): AngularConfig[] {
	if (direction === '' || column === '') {
		return devpageslist;
	} else {
		return [...devpageslist].sort((a, b) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}
//
function matches(devPage: AngularConfig, term: string, pipe: PipeTransform) {
	return (
		devPage.name.toLowerCase().includes(term?.toLowerCase())         ||
		devPage.framework.toLowerCase().includes(term?.toLowerCase())    ||
		devPage.uixFramework.toLowerCase().includes(term?.toLowerCase()) ||
		devPage.description.toLowerCase().includes(term?.toLowerCase())  
	);
}
//
@Injectable({
  providedIn: 'root'
})
export class devPagesListService extends BaseService {
    // 
	private _devpageList$ = new BehaviorSubject<AngularConfig[]>([]);
    //
	private _state: _DevPageSearchState = {
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
				this._devpageList$.next(result.devPages);
				this._total!.next(result.total);
			});
        //
		this._search$.next();
	}
    //
	private _search(): Observable<_AngularConfigSearchResult> {
		//
		let _devpageList                          : any;
		let _total                                : any;
		let _searchResult                         : _AngularConfigSearchResult  = {devPages: _devpageList, total : _total};
		
        // 0. get state
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

		//console.log("external json data : " +  _environment.AngularConfigList); 

		// 1. sort
		let _DEV_PAGES  : AngularConfig[] = [];
		
		_environment.pageSettingDictionary['loadAngularDemoData']._environmentList.forEach((element: any) => {
			_DEV_PAGES.push(element);
			//console.log(element)
		});

		_devpageList   = sort(_DEV_PAGES, sortColumn, sortDirection);

		// 2. filter
		_devpageList   = _devpageList.filter((country: AngularConfig) => matches(country, searchTerm, this.pipe));
		_total         = _devpageList.length;

		// 3. paginate
		_devpageList   = _devpageList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		
		// 4. return
		_searchResult  = { devPages: _devpageList, total : _total };

		// 5. return
		return  of (_searchResult);
	}
	//////////////////////////////////////////////////////////////////////
    // PROPERTIES
    //////////////////////////////////////////////////////////////////////
	//
	public get devpageLists () {
		return this._devpageList$.asObservable();
	}
	//
	get page() {
		return this._state.page;
	}
	//
	set page(page: number) {
		this._set({ page });
	}
	//
	public get pageSize() {
		return this._state.pageSize;
	}
	//
	set pageSize(pageSize: number) {
		this._set({ pageSize });
	}
	//
	get searchTerm() {
		return this._state.searchTerm;
	}
	//
	set searchTerm(searchTerm: string) {
		this._set({ searchTerm });
	}
	//
	set sortColumn(sortColumn: _DevPageSortColumn) {
		this._set({ sortColumn });
	}
	//
	set sortDirection(sortDirection: _SortDirection) {
		this._set({ sortDirection });
	}
    //
	private _set(patch: Partial<_DevPageSearchState>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}
 }