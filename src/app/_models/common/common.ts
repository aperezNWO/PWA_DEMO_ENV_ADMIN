import { BehaviorSubject, Observable, Subject        } from "rxjs";
import { _BaseSortEvent, BaseSortableHeader          } from "../../_directives/BaseSortableHeader.directive";
import { Inject, Injectable, QueryList, ViewChildren } from "@angular/core";
import { AuthService                                 } from "../../_services/_config/auth.service";
import {  BaseService                                } from "../../_services/_config/base.service";
import { _environment                                } from "../../../environments/environment";

//
export enum SiteRole
{
    RoleAnonyumous = 0,
    RoleAdmin      = 1,
    RoleMarketing  = 2,
    RoleConfig     = 3,
    RoleEducation  = 4
}
//
export type SiteRoleType   = SiteRole; 
//
export interface PageInfo
{
    url          : string;
    text         : string;
    pageRoles    : string;
}
//
export interface UserInfo
{
    userId     : number;
    fullName   : string;
    userName   : string;
    pwd        : string;
    userRoles  : string;
}
//
//
export class  LoginInfo
{
    //
    constructor(
        public    P_LOGIN_NAME       : string,
        public    P_LOGIN_PASSWORD   : string,
    )
    {
        //
    }
}
//
export type UserInfoType   = UserInfo; 
//
export type _SortDirection = 'asc' | 'desc' | '';
//
export const pagerotate: { [key: string]: _SortDirection } = { asc: 'desc', desc: '', '': 'asc' };
//
export const compare = (v1: string | number | boolean, v2: string | number | boolean) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
//
export interface BaseModel
{
    id               : number;
    done             : boolean;
    name             : string;
    description      : string;
}

export interface _BaseModel extends BaseModel
{
    field_1          : string;
    field_2          : string;
    field_3          : string;
    field_4          : string;
    field_5          : string;
    field_6          : string;
    field_7          : string;
    field_8          : string;
    field_9          : string;
    field_10         : string;
}

export interface _BaseSearchResult {
    searchPages : _BaseModel[];
    total       : number;
}   

export interface PageSetting {
    f_Name           : string;
    p_Path           : string;
    _environmentList : string[];
}
//
export interface PageSettingDictionary {
   [key: string]: PageSetting;
}
 
export const ENV_LIST_ANGULAR_DEMO = 'ANGULAR_DEMO';

export const ENV_LIST_CPP_DEMO     = 'CPP_DEMO';

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
        _environment.pageSettingDictionary[dictionaryName]._environmentList.forEach((element: any) => {
            this.service._SEARCH_PAGES.push(element);
            ////console.log(element)
        });
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