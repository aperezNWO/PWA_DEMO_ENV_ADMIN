import { Injectable, PipeTransform                              } from '@angular/core';
import { DecimalPipe                                            } from '@angular/common';
import { BehaviorSubject, Observable, Observer, of, Subject     } from 'rxjs';
import { debounceTime, delay, switchMap, tap                    } from 'rxjs/operators';
import { _environment                                           } from '../../environments/environment';
import { _MarketingSortColumn, _MarketingSortDirection          } from '../_directives/marketing.directive';
import { marketing, _MarketingSearchResult                      } from '../_models/marketing';
//
interface _MarketingSearchState {
	page           : number;
	pageSize       : number;
	searchTerm     : string;
	sortColumn     :  _MarketingSortColumn;
	sortDirection  :  _MarketingSortDirection;
}
//
const compare = (v1: string | number | boolean, v2: string | number | boolean) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
//
function sort(marketingList: marketing[], column: _MarketingSortColumn, direction: string): marketing[] {
	if (direction === '' || column === '') {
		return marketingList;
	} else {
		return [...marketingList].sort((a, b) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}
//
function matches(marketingPage: marketing, term: string, pipe: PipeTransform) {
	return (
		marketingPage.name.toLowerCase().includes(term?.toLowerCase())          ||
		marketingPage.description.toLowerCase().includes(term?.toLowerCase())   ||
		marketingPage.category.toLowerCase().includes(term?.toLowerCase())      
	);
}
//
@Injectable({
  providedIn: 'root'
})
// 
export class MarketingService {
    //
	private _loading$          = new BehaviorSubject<boolean>(true);
	private _search$           = new Subject<void>();
	private _marketingList$    = new BehaviorSubject<marketing[]>([]);
	private _total$            = new BehaviorSubject<number>(0);
    //
	private _state: _MarketingSearchState = {
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
			tap(() => this._loading$.next(true)),
			debounceTime(200),
			switchMap(() => this._search()),
			delay(200),
			tap(() => this._loading$.next(false)),
		)
		.subscribe((result) => {
			this._marketingList$.next(result._marketing);
			this._total$.next(result._total);
		});
		//
		this._search$.next();
	}
    //
	private _search(): Observable<_MarketingSearchResult> {
		//
		let __marketingList                        : any;
		let __total                                : any;
		let __searchResult                         : _MarketingSearchResult  = {_marketing: __marketingList, _total : __total};

         // 0. get state
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
         //
		console.log("external json data : " +  _environment.mainPagesList); 
        // 1. sort
		let _MARKETING_PAGES  : marketing[] = [];
		//
		_environment.marketingList.forEach((element: any) => {
			_MARKETING_PAGES.push(element);
			console.log(element)
		});
        //
		__marketingList   = sort(_MARKETING_PAGES, sortColumn, sortDirection);

        // 2. filter
		__marketingList   = __marketingList.filter((marketingPage: marketing) => matches(marketingPage, searchTerm, this.pipe));
		__total           = __marketingList.length;

		// 3. paginate
		__marketingList   = __marketingList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		
		// 4. return
		__searchResult  = { _marketing: __marketingList, _total : __total };

		// 5. return
		return  of (__searchResult);
	}
    //////////////////////////////////////////////////////////////////////
    // PROPERTIES
    //////////////////////////////////////////////////////////////////////
    //
	public get msarketingLists () {
		return this._marketingList$.asObservable();
	}
	//
	get total() {
		return this._total$.asObservable();
	}
	//
	get loading() {
		return this._loading$.asObservable();
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
	set sortColumn(sortColumn: _MarketingSortColumn) {
		this._set({ sortColumn });
	}
	//
	set sortDirection(sortDirection: _MarketingSortDirection) {
		this._set({ sortDirection });
	}
    //
	private _set(patch: Partial<_MarketingSearchState>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}
}
