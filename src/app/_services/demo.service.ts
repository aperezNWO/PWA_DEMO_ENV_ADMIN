/* eslint-disable @typescript-eslint/adjacent-overload-signatures */
import { Injectable, PipeTransform                } from '@angular/core';
import { DecimalPipe                              } from '@angular/common';
import { DevPage                                  } from '../_models/DevPage';
import { DEV_PAGES                                } from '../_models/DevPages';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap      } from 'rxjs/operators';
import { _SortColumn, _SortDirection              } from '../_directives/devpagesortable.directive';


interface _SearchResult {
	countries: DevPage[];
	total    : number;
}

interface _State {
	page           : number;
	pageSize       : number;
	searchTerm     : string;
	sortColumn     :  _SortColumn;
	sortDirection  :  _SortDirection;
}

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(countries: DevPage[], column: _SortColumn, direction: string): DevPage[] {
	if (direction === '' || column === '') {
		return countries;
	} else {
		return [...countries].sort((a, b) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}

function matches(country: DevPage, term: string, pipe: PipeTransform) {
	return (
		country.name.toLowerCase().includes(term.toLowerCase()) ||
		country.framework.toLowerCase().includes(term.toLowerCase()) ||
		country.description.toLowerCase().includes(term.toLowerCase())  
	);
}
//
@Injectable({
  providedIn: 'root'
})
export class DemoService {

	private _loading$   = new BehaviorSubject<boolean>(true);
	private _search$    = new Subject<void>();
	private _countries$ = new BehaviorSubject<DevPage[]>([]);
	private _total$     = new BehaviorSubject<number>(0);

	private _state: _State = {
		page          : 1,
		pageSize      : 4,
		searchTerm    : '',
		sortColumn    : '',
		sortDirection : '',
	};

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
				this._countries$.next(result.countries);
				this._total$.next(result.total);
			});

		this._search$.next();
	}

	public get countries() {
		return this._countries$.asObservable();
	}
	get total() {
		return this._total$.asObservable();
	}
	get loading() {
		return this._loading$.asObservable();
	}
	get page() {
		return this._state.page;
	}
	public get pageSize() {
		return this._state.pageSize;
	}
	get searchTerm() {
		return this._state.searchTerm;
	}

	set page(page: number) {
		this._set({ page });
	}
	set pageSize(pageSize: number) {
		this._set({ pageSize });
	}
	set searchTerm(searchTerm: string) {
		this._set({ searchTerm });
	}
	set sortColumn(sortColumn: _SortColumn) {
		this._set({ sortColumn });
	}
	set sortDirection(sortDirection: _SortDirection) {
		this._set({ sortDirection });
	}

	private _set(patch: Partial<_State>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}

	private _search(): Observable<_SearchResult> {
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

		// 1. sort
		let countries = sort(DEV_PAGES, sortColumn, sortDirection);

		// 2. filter
		countries = countries.filter((country) => matches(country, searchTerm, this.pipe));
		const total = countries.length;

		// 3. paginate
		countries = countries.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		return of({ countries, total });
	}
}