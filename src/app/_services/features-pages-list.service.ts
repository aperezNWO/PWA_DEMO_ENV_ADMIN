import { Injectable, PipeTransform                              } from '@angular/core';
import { DecimalPipe                                            } from '@angular/common';
import { BehaviorSubject, Observable, Observer, of, Subject     } from 'rxjs';
import { debounceTime, delay, switchMap, tap                    } from 'rxjs/operators';
import { _FeaturePageSortColumn, _FeaturePageSortDirection      } from '../_directives/featurePageListSortable.directive';
import { FeaturePage, _FeaturePagesSearchResult                 } from '../_models/FeaturePage';
import { _environment                                           } from '../../environments/environment';
//
interface _FeaturePageSearchState {
	page           : number;
	pageSize       : number;
	searchTerm     : string;
	sortColumn     :  _FeaturePageSortColumn;
	sortDirection  :  _FeaturePageSortDirection;
}
//
const compare = (v1: string | number | boolean, v2: string | number | boolean) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
//
function sort(featurePagelist: FeaturePage[], column: _FeaturePageSortColumn, direction: string): FeaturePage[] {
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
function matches(featurePage: FeaturePage, term: string, pipe: PipeTransform) {
	return (
		featurePage.urlCurriculum.toLowerCase().includes(term?.toLowerCase()) ||
		featurePage.descripcion.toLowerCase().includes(term?.toLowerCase())   ||
		featurePage.framework.toLowerCase().includes(term?.toLowerCase())     ||
		featurePage.keywords.toLowerCase().includes(term?.toLowerCase())      
	);
}
//
@Injectable({
  providedIn: 'root'
})
// 
export class FeaturesPagesListService {
    //
	private _loading$          = new BehaviorSubject<boolean>(true);
	private _search$           = new Subject<void>();
	private _featurepageList$  = new BehaviorSubject<FeaturePage[]>([]);
	private _total$            = new BehaviorSubject<number>(0);
    //
	private _state: _FeaturePageSearchState = {
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
			this._featurepageList$.next(result.featurePages);
			this._total$.next(result.total);
		});
		//
		this._search$.next();
	}
    //
	public get featurepageLists () {
		return this._featurepageList$.asObservable();
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
	set sortColumn(sortColumn: _FeaturePageSortColumn) {
		this._set({ sortColumn });
	}
	//
	set sortDirection(sortDirection: _FeaturePageSortDirection) {
		this._set({ sortDirection });
	}
    //
	private _set(patch: Partial<_FeaturePageSearchState>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}
    //
	private _search(): Observable<_FeaturePagesSearchResult> {
		//
		let _devpageList                          : any;
		let total                                 : any;
		let _searchResult                         : _FeaturePagesSearchResult  = {featurePages: _devpageList,total};

        // 0. get state
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        //
		console.log("external json data : " +  _environment.mainPagesList); 

        // 1. sort
		let _FEATURE_PAGES  : FeaturePage[] = [];
		//
		_environment.featuresPagesList.forEach((element: any) => {
			_FEATURE_PAGES.push(element);
			console.log(element)
		});
        //
		_devpageList   = sort(_FEATURE_PAGES, sortColumn, sortDirection);

        // 2. filter
		_devpageList   = _devpageList.filter((featurePage: FeaturePage) => matches(featurePage, searchTerm, this.pipe));
		total          = _devpageList.length;

		// 3. paginate
		_devpageList   = _devpageList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		
		// 4. return
		_searchResult  = { featurePages: _devpageList,total };

		// 5. return
		return  of (_searchResult);
	}
}
