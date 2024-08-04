import { BehaviorSubject, Subject } from "rxjs";
import { _NetCoreConfigSortColumn } from "../../_directives/Demos/netcoreDemo/NetCoreConfigListSortableHeader.directive";

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
export class BaseService {
    //
	public _loading               = new BehaviorSubject<boolean>(true);
	public _total                 = new BehaviorSubject<number>(0);
    public _search$               = new Subject<void>();
    //
	get total() {
		return this._total!.asObservable();
	}
    //
	get loading() {
		return this._loading!.asObservable();
	}
}
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
