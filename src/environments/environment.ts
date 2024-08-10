import { PageSetting, PageSettingDictionary } from '../app/_models/common/common';

interface EnvironmentConfig {
    pageSettingDictionary   : PageSettingDictionary;
    currentUserId           : number;
    currentUserRoles        : string;     
    externalConfig          : {};     //
    usersInfo               : [{}];   // 
    routesList              : [{}];   // 
    usersList               : [{}];   // 
    usersDictionary         : [{}];   // 
    jsonList                : PageSetting[];   // 
    NodeJsDemosList         : [{}];   // Json pages
    NodeJsConfigList        : [{}];   // Json pages
    cppDemoList             : [{}];   // Json pages
    cppDemoList_base        : [{}];   // Json pages
    marketingList_base      : [{}];   // Json pages
}


export const _environment : EnvironmentConfig  = {
    pageSettingDictionary   : {},
    currentUserId           : 0,      //
    currentUserRoles        : "",     //
    externalConfig          : {},     // 
    usersInfo               : [{}],   // 
    routesList              : [{}],   // 
    usersList               : [{}],   // 
    usersDictionary         : [{}],   // 
    jsonList                : [],      // 
    NodeJsDemosList         : [{}],   // Json pages
    NodeJsConfigList        : [{}],   // Json pages
    cppDemoList             : [{}],   // Json pages
    cppDemoList_base        : [{}],   // Json pages
    marketingList_base      : [{}],   // Json pages
};