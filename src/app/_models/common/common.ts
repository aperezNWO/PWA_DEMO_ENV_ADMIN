//
export enum SiteRole
{
    RoleAnonymous = 1,
    RoleConfig    = 2,
    RoleMarketing = 3
}
export interface PageInfo
{
    url         : string;
    text         : string;
    pageRoles    : string;
}
//
export interface UserInfo
{
    fullName   : string;
    userName   : string;
    pwd        : string;
    userRoles  : string;
}
//
export type _SortDirection = 'asc' | 'desc' | '';
//
export const pagerotate: { [key: string]: _SortDirection } = { asc: 'desc', desc: '', '': 'asc' };
//
export const compare = (v1: string | number | boolean, v2: string | number | boolean) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);
