import { Injectable, PipeTransform                                                     } from '@angular/core';
import { BehaviorSubject, debounceTime, delay, Observable, of, Subject, switchMap, tap } from 'rxjs';
import { DecimalPipe                                                                   } from '@angular/common';
import { _BaseModel, _BaseSearchResult, _SearchState, _SortDirection,  matches, sort   } from '../../_models/common/common';
import { _SortColumn                                                                   } from '../../_directives/BaseSortableHeader.directive';

@Injectable({
  providedIn: 'root'
})
export class BaseService  {
	//
	public _loading               = new BehaviorSubject<boolean>(true);
	public _total                 = new BehaviorSubject<number>(0);
	public _search$               = new Subject<void>();
	//
	private _Pagelist             = new BehaviorSubject<_BaseModel[]>([]);
	//
	public _SEARCH_PAGES          : _BaseModel[] = [];
	//
	public _state: _SearchState = {
		page          : 1,
		pageSize      : 8,
		searchTerm    : '',
		sortColumn    : '',
		sortDirection : '',
	};
	//
	constructor(private pipe: DecimalPipe) {
		//
	}
	//
	public SubscribeData():void
	{
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
					this._Pagelist!.next(result.searchPages);
					this._total!.next(result.total);
				});
			//
			this._search$.next();
	}
	//
	private _search(): Observable<_BaseSearchResult> {
		//
		let _searchPages  : any;
		let _total        : any;
		let _searchResult : _BaseSearchResult = { searchPages: _searchPages, total: _total };

		// 0. get state
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

		//
		_searchPages = sort(this._SEARCH_PAGES, sortColumn, sortDirection);

		// 2. filter
		_searchPages = _searchPages.filter((_searchPage: _BaseModel) => matches(_searchPage, searchTerm, this.pipe));
		_total       = _searchPages.length;

		// 3. paginate
		_searchPages = _searchPages.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);

		// 4. return
		_searchResult = { searchPages: _searchPages, total: _total };

		// 5. return
		return of(_searchResult);
	}
	//////////////////////////////////////////////////////////////////////
	// PROPERTIES
	//////////////////////////////////////////////////////////////////////
	//
	get total() {
		return this._total!.asObservable();
	}
	//
	get loading() {
		return this._loading!.asObservable();
	}
	//
	public get Pagelist() {
		return this._Pagelist!.asObservable();
	}
	//
	public set Pagelist(value: any) {
		this._Pagelist! = value;
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
	set sortColumn(sortColumn: _SortColumn) {
		this._set({ sortColumn });
	}
	//
	set sortDirection(sortDirection: _SortDirection) {
		this._set({ sortDirection });
	}
	//
	private _set(patch: Partial<_SearchState>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}
}
