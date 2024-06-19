import { Injectable, PipeTransform                                        } from '@angular/core';
import { DecimalPipe                                                      } from '@angular/common';
import { _CurriculumSortColumn, _CurriculumSortDirection                  } from '../_directives/curriculumSortable.directive';
import { _CurriculumSearchResult, curriculum                              } from '../_models/curriculum';
import { _environment                                                     } from '../../environments/environment';
import { BehaviorSubject, Observable, Subject, debounceTime, delay        } from 'rxjs';
import { of, switchMap, tap                                               } from 'rxjs';

//
interface _CurriculumSearchState {
	page           : number;
	pageSize       : number;
	searchTerm     : string;
	sortColumn     :  _CurriculumSortColumn;
	sortDirection  :  _CurriculumSortDirection;
}
//
const compare = (v1: string | number | boolean, v2: string | number | boolean) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
//
function sort(curriculumList: curriculum[], column: _CurriculumSortColumn, direction: string): curriculum[] {
	if (direction === '' || column === '') {
		return curriculumList;
	} else {
		return [...curriculumList].sort((a, b) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}
//
function matches(_curriculum: curriculum, term: string, pipe: PipeTransform) {
	return (
		_curriculum.name.toLowerCase().includes(term?.toLowerCase())   ||
		_curriculum.description.toLowerCase().includes(term?.toLowerCase())   ||
		_curriculum.framework.toLowerCase().includes(term?.toLowerCase())     ||
		_curriculum.keywords.toLowerCase().includes(term?.toLowerCase())      
	);
}
@Injectable({
  providedIn: 'root'
})
export class CurriculumService {
  //
	private _loading$          = new BehaviorSubject<boolean>(true);
	private _search$           = new Subject<void>();
	private _curriculumList$   = new BehaviorSubject<curriculum[]>([]);
	private _total$            = new BehaviorSubject<number>(0);
  //
  private _state: _CurriculumSearchState = {
    page          : 1,
    pageSize      : 6, 
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
      this._curriculumList$.next(result._curriculum);
      this._total$.next(result._total);
    });
    //
    this._search$.next();
  }
  //
	private _search(): Observable<_CurriculumSearchResult> {
		//
		let _curriculumList                       : any;
		let _total                                : any;
		let _searchResult                         : _CurriculumSearchResult  = {_curriculum  : _curriculumList
                                                                          , _total       : _total};
    // 0. get state
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
    //
		console.log("external json data : " +  _environment.curriculumList); 

    // 1. sort
		let _CURRICULUM_PAGES  :  curriculum[] = [];
		//
		_environment.curriculumList.forEach((element: any) => {
			_CURRICULUM_PAGES.push(element);
			console.log(element)
		});
    //
		_curriculumList   = sort(_CURRICULUM_PAGES, sortColumn, sortDirection);

    // 2. filter
		_curriculumList   = _curriculumList.filter((curriculumPage: curriculum) => matches(curriculumPage, searchTerm, this.pipe));
		_total            = _curriculumList.length;

		// 3. paginate
		_curriculumList   = _curriculumList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		
		// 4. return
		_searchResult    = { _curriculum : _curriculumList, _total : _total };

		// 5. return
		return  of (_searchResult);
	}
  //////////////////////////////////////////////////////////////////////
  // PROPERTIES
  //////////////////////////////////////////////////////////////////////
 	public get curriculumList () {
		return this._curriculumList$.asObservable();
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
	set sortColumn(sortColumn: _CurriculumSortColumn) {
		this._set({ sortColumn });
	}
	//
	set sortDirection(sortDirection: _CurriculumSortDirection) {
		this._set({ sortDirection });
	}
  //
	private _set(patch: Partial<_CurriculumSearchState>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}
}
