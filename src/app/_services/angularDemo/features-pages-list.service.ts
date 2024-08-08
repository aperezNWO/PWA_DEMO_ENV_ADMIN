import { Injectable, PipeTransform                              } from '@angular/core';
import { DecimalPipe                                            } from '@angular/common';
import { BehaviorSubject, Observable, Observer, of, Subject     } from 'rxjs';
import { debounceTime, delay, switchMap, tap                    } from 'rxjs/operators';
import { AngularFeatures, _AngularFeaturesSearchResult          } from '../../_models/AngularDemo/AngularFeatures';
import { _SortDirection, BaseService, compare                   } from '../../_models/common/common';
import { _environment                                           } from '../../../environments/environment';
import { _FeaturePageSortColumn                                 } from '../../_directives/Demos/angularDemo/featurePageListSortable.directive';
//
interface _FeaturePageSearchState {
	page           : number;
	pageSize       : number;
	searchTerm     : string;
	sortColumn     :  _FeaturePageSortColumn;
	sortDirection  :  _SortDirection;
}
//
function sort(featurePagelist: AngularFeatures[], column: _FeaturePageSortColumn, direction: string): AngularFeatures[] {
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
function matches(featurePage: AngularFeatures, term: string, pipe: PipeTransform) {
	return (
		featurePage.urlCurriculum.toLowerCase().includes(term?.toLowerCase()) ||
		featurePage.description.toLowerCase().includes(term?.toLowerCase())   ||
		featurePage.framework.toLowerCase().includes(term?.toLowerCase())     ||
		featurePage.keywords.toLowerCase().includes(term?.toLowerCase())      
	);
}
//
@Injectable({
  providedIn: 'root'
})
// 
export class FeaturesPagesListService extends BaseService {
	//
	private _featurepageList$  = new BehaviorSubject<AngularFeatures[]>([]);
    //
	private _state: _FeaturePageSearchState = {
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
			this._featurepageList$.next(result.featurePages);
			this._total!.next(result.total);
		});
		//
		this._search$.next();
	}
    //
	private _search(): Observable<_AngularFeaturesSearchResult> {
		//
		let _devpageList                          : any;
		let _total                                : any;
		let _searchResult                         : _AngularFeaturesSearchResult  = {featurePages: _devpageList, total : _total};

        // 0. get state
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        //
		////console.log("external json data : " +  _environment.AngularConfigList); 
		//console.log("external json data : " +  _environment.pageSettingDictionary['loadAngularDemoData']); 

        // 1. sort
		let _FEATURE_PAGES  : AngularFeatures[] = [];
		//
		//_environment.AngularDemosList.forEach((element: any) => {
		_environment.pageSettingDictionary['loadAngularDemoData']._environmentList.forEach((element: any) => {
			_FEATURE_PAGES.push(element);
			//console.log(element)
		});
        //
		_devpageList   = sort(_FEATURE_PAGES, sortColumn, sortDirection);

        // 2. filter
		_devpageList   = _devpageList.filter((featurePage: AngularFeatures) => matches(featurePage, searchTerm, this.pipe));
		_total         = _devpageList.length;

		// 3. paginate
		_devpageList   = _devpageList.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		
		// 4. return
		_searchResult  = { featurePages: _devpageList, total : _total };

		// 5. return
		return  of (_searchResult);
	}
	//////////////////////////////////////////////////////////////////////
    // PROPERTIES
    //////////////////////////////////////////////////////////////////////
    //
	public get featurepageLists () {
		return this._featurepageList$.asObservable();
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
	set sortDirection(sortDirection: _SortDirection) {
		this._set({ sortDirection });
	}
    //
	private _set(patch: Partial<_FeaturePageSearchState>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}
}
