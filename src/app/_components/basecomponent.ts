import { Inject, Injectable, QueryList, ViewChildren } from "@angular/core";
import { Observable, of                              } from "rxjs";
import { _BaseModel, SiteRole                        } from "../_models/common/common";
import { _environment                                } from "../../environments/environment";
import { ConfigService                               } from "../_services/_config/config.service";
import { BaseService                                 } from "../_services/_config/base.service";
import { AuthService                                 } from "../_services/_config/auth.service";
import { _BaseSortEvent, BaseSortableHeader          } from "../_directives/BaseSortableHeader.directive";

@Injectable({
	providedIn: 'root'
})
export class BaseComponent
{
    //
    @ViewChildren(BaseSortableHeader) headers: QueryList<BaseSortableHeader> | undefined;
    //
	public PagesList!       : Observable<_BaseModel[]>;
	public total!           : Observable<number>; 
	//
	public ConfigRoleString : string = SiteRole.RoleConfig.toString(); 
    //
    constructor( public __service       : BaseService,
                 public __authService   : AuthService,
                 public __configService : ConfigService,
                 @Inject('dictionaryKey') public _dictionaryKey: string,
               )
    {
        //
        this.PagesList       = of([]);
        //
        const pageSetting    = _environment.pageSettingDictionary[_dictionaryKey];
        //
        let _environmentList : string[] = [];

        __configService.loadJsonData(pageSetting.p_Path,
                                    _environmentList).then(() => {
            //
            this.__service._SEARCH_PAGES.splice(0,this.__service._SEARCH_PAGES.length);
            //
            this.__service._SEARCH_PAGES = [];
            _environmentList.forEach((element: any) => {
                this.__service._SEARCH_PAGES.push(element);
            });
            //
            this.__service.SubscribeData();
            //    
            this.PagesList  = __service.Pagelist;
            this.total      = __service.total;
        });
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
        this.__service.sortColumn    = _column;
        this.__service.sortDirection = _direction;
    }
}