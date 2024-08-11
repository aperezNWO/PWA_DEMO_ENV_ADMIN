import { Inject, Injectable, QueryList, ViewChildren } from "@angular/core";
import { Observable, of                              } from "rxjs";
import { _environment                                } from "../../environments/environment";
import { BaseSortableHeader, _BaseSortEvent          } from "../_directives/BaseSortableHeader.directive";
import { _BaseModel                                  } from "../_models/common/common";
import { AuthService                                 } from "../_services/_config/auth.service";
import { BaseService                                 } from "../_services/_config/base.service";

@Injectable({
    providedIn: 'root'
})
export class BaseComponent {
    //
    public featurePagesList!: Observable<_BaseModel[]>;
    public total!           : Observable<number>; 
    //
    @ViewChildren(BaseSortableHeader) headers: QueryList<BaseSortableHeader> | undefined;
    //
    constructor(public service                                 : BaseService,
                public authService                             : AuthService,
                @Inject('dictionaryName') public dictionaryName: string,
    )
    {
        //
        this.service._SEARCH_PAGES.forEach((element: any) => {
            this.service._SEARCH_PAGES.pop();
            ////console.log(element)
        });
        //
        _environment.pageSettingDictionary[dictionaryName]._environmentList.forEach((element: any) => {
            this.service._SEARCH_PAGES.push(element);
            ////console.log(element)
        });
        this.featurePagesList  = of([]);;
        this.featurePagesList  = service.Pagelist;
        this.total             = service.total;
    } 
    //
    onSort({ _column, _direction }: _BaseSortEvent) {
        // resetting other headers
        this.headers?.forEach((header) => {
            if (header.sortable !== _column) {
            header.direction= '';
            }
        });
        //
        this.service.sortColumn    = _column;
        this.service.sortDirection = _direction;
    }

}