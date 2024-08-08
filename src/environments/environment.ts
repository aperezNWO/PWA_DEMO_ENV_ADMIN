import { PageSetting, PageSettingDictionary } from '../app/_models/common/common';

interface EnvironmentConfig {
    pageSettingDictionary  : PageSettingDictionary;
    currentUserId          : number;
    currentUserRoles       : string;     
    externalConfig         : {};     //
    AngularConfigList      : [];     // Json pages
    AngularDemosList       : [];     // Json pages
    AngularCurriculum_base : [];     // Json pages
    usersInfo              : [{}];   // 
    routesList             : [{}];   // 
    usersList              : [{}];   // 
    usersDictionary        : [{}];   // 
    jsonList               : PageSetting[];   // 
    NodeJsDemosList        : [{}];   // Json pages
    NodeJsConfigList       : [{}];   // Json pages
    cppDemoList            : [{}];   // Json pages
    cppDemoList_base       : [{}];   // Json pages
    netCoreDemoList        : [{}];   // Json pages
    netCoreConfigList_base : [{}];   // Json pages
    marketingList_base     : [{}];   // Json pages
}


export const _environment : EnvironmentConfig  = {
    pageSettingDictionary  : {},
    currentUserId          : 0,      //
    currentUserRoles       : "",     //
    externalConfig         : {},     // 
    AngularConfigList      : [],     // Json pages
    AngularDemosList       : [],     // Json pages
    AngularCurriculum_base : [],     // Json pages
    usersInfo              : [{}],   // 
    routesList             : [{}],   // 
    usersList              : [{}],   // 
    usersDictionary        : [{}],   // 
    jsonList               : [],      // 
    NodeJsDemosList        : [{}],   // Json pages
    NodeJsConfigList       : [{}],   // Json pages
    cppDemoList            : [{}],   // Json pages
    cppDemoList_base       : [{}],   // Json pages
    netCoreDemoList        : [{}],   // Json pages
    netCoreConfigList_base : [{}],   // Json pages
    marketingList_base     : [{}],   // Json pages
};