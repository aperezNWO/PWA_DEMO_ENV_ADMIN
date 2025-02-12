import { _SCMItem, PageSetting, PageSettingDictionary } from '../app/_models/common/common';

interface EnvironmentConfig {
    pageSettingDictionary   : PageSettingDictionary;
    currentUserId           : number;
    currentUserRoles        : string;     
    externalConfig          : {};                //
    usersInfo               : [];                // 
    routesList              : [];                // 
    usersList               : [];                // 
    usersDictionary         : [];                // 
    jsonList                : PageSetting[];     // 
    SCMList                 : _SCMItem[];        //
}


export const _environment : EnvironmentConfig  = {
    pageSettingDictionary   : {},
    currentUserId           : 0,       
    currentUserRoles        : "",      
    externalConfig          : {},        // 
    usersInfo               : [],        // 
    routesList              : [],        // 
    usersList               : [],        // 
    usersDictionary         : [],        // 
    jsonList                : [],        // 
    SCMList                 : []         //
};