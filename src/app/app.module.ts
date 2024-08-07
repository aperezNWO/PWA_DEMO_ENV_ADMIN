
import { AppRoutingModule                         } from './app-routing.module';
import { AppComponent                             } from './app.component';
import { APP_INITIALIZER, NgModule, ɵNG_PIPE_DEF                } from '@angular/core';
import { AsyncPipe, DatePipe, DecimalPipe         } from '@angular/common';
import { FormsModule                              } from '@angular/forms';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientModule                       } from '@angular/common/http';
import { BrowserModule, provideClientHydration  } from '@angular/platform-browser';
import { NgbHighlight, NgbModule                } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule    } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent                           } from './_modules/_home/nav/nav.component';
import { PageNotFoundComponent                  } from './_modules/_home/page-not-found/page-not-found.component';
import { ConfigService                          } from './_services/_config/config.service';
import { CppDemoComponent                       } from './_modules/_demos/CppDemo/cpp-demo/cpp-demo.component';
import { CppWebComponent                        } from './_modules/_demos/CppDemo/cpp-web/cpp-web.component';
import { NetcoreWebComponent                    } from './_modules/_demos/NetCore/netcore-web/netcoreweb/netcore-web.component';
import { NodeJsWebComponent                     } from './_modules/_demos/Nodejs/node-js-web/node-js-web.component';
import { PhpWebComponent                        } from './_modules/_demos/Php/php-web/php-web.component';
import { FeaturePagesComponent                  } from './_modules/_demos/angularDemo/feature-pages/feature-pages.component';
import { AngularComponent                       } from './_modules/_demos/angularDemo/angular-web/angular.component';
import { DemosComponent                         } from './_modules/_demos/_demosweb/demos.component';
import { DevPagesListsComponent                 } from './_modules/_config/AngularConfig/devPagesList.component';
import { ConfigWebComponent                     } from './_modules/_config/_config-web/config-web.component';
import { CurriculumComponent                    } from './_modules/_education/AngularDemo/curriculum.component';
import { EduWebComponent                        } from './_modules/_education/_edu-web/edu-web.component';
import { HomeComponent                          } from './_modules/_home/_homeWeb/home.component';
import { MarketingComponent                     } from './_modules/_marketing/marketing.component';
import { ContactComponent                       } from './_modules/_about/contact/contact.component';
import { TechInfoComponent                      } from './_modules/_about/tech-info/tech-info.component';
import { AboutWebComponent                      } from './_modules/_about/about-web/about-web.component';
import { NodejsDemoComponent                    } from './_modules/_demos/Nodejs/nodejs-demo/nodejs-demo.component';
import { NodeJsConfigComponent                  } from './_modules/_config/node-js-config/node-js-config.component';
import { ProtectedComponent                     } from './_modules/_login/protected/protected.component';
import { LoginComponentContent                  } from './_modules/_login/login-content/login-content.component';
import { NetcoredemoComponent                   } from './_modules/_demos/NetCore/netcore-web/netcoredemo/netcoredemo.component';
import { NetCoreConfigComponent                 } from './_modules/_config/net-core-config/net-core-config.component';
import { DevPageSortableHeader                  } from './_directives/Demos/angularDemo/devPagesListSortable.directive';
import { FeaturePageSortableHeader              } from './_directives/Demos/angularDemo/featurePageListSortable.directive';
import { CppFeatureListSortableHeader           } from './_directives/Demos/cppDemo/cpp-feature-list-sortable.directive';
import { NodeJsFeatureListSortableHeader        } from './_directives/Demos/nodeJsDemo/node-js.directive';
import { NodeJsConfigListSortableHeader         } from './_directives/Demos/nodeJsDemo/node-js-config.directive';
import { NetCoreDemoSortableHeader              } from './_directives/Demos/netcoreDemo/NetCoreDemoListSortableHeader.directive';
import { BaseSortableHeader                     } from './_directives/BaseSortableHeader.directive';
import { _environment                           } from '../environments/environment';
//
export function initialize(_configService: ConfigService, http: HttpClient) {
  //
  _configService.loadJsonist();
  //
  interface PageSetting {
    p_Path           : string;
    _environmentList : string[];
  }
  //
  interface PageSettingDictionary {
    [key: string]: PageSetting;
  }
 
  /*
  type PageSettingType  = PageSetting; 
  //
  let _jsonList : PageSetting[] = [];
  //
  _environment.jsonList.forEach((element: any) => {
      _jsonList.push(element);
      //console.log(element)
  });
  //
  const pageSettingDictionary: Record<string, PageSetting> = _jsonList.reduce((acc, pageSetting) => {
    console.log('pageSetting : ' + pageSetting);
    acc[pageSetting.f_name] = pageSetting;
    return acc;
  }, {} as Record<string, PageSetting>);
  */
  //
  const pageSettingDictionary: PageSettingDictionary = {
    loadAngularDemoData               : 
                { 
                    p_Path            : './assets/angularDemo/angular_Demos.json',
                    _environmentList  : _environment.AngularDemosList
                },
    loadAngularCurriculumData_base    :            
                {
                    p_Path             : './assets/angularDemo/angular_Curriculum_base.json',
                    _environmentList   : _environment.AngularCurriculum_base
                },
    loadAngularConfigData              :
                {
                  p_Path             : './assets/angularDemo/angular_Config.json',
                  _environmentList   : _environment.AngularConfigList                
                }

  };
  //
  for (const key in pageSettingDictionary) {
     //
     const pageSetting = pageSettingDictionary[key];
     //
     console.log('reding setting : ' + key);
     //
     _configService.loadJsonData(pageSetting.p_Path,
                                 pageSetting._environmentList).then(() => {
           //
     });
  }
  //
  _configService.loadCppDemoData();
  //
  _configService.loadNodeJsDemoData();
  //
  _configService.loadNodeJsConfigData();
  //
  _configService.loadNetCoreDemoData();
  //
  _configService.loadNetCoreConfigData_base();
  //
  _configService.loadMarketingData_base();
  //
  _configService.loadPagesInfoData();
  //
  _configService.loadUsersData();
  // 
  return () =>  _configService.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PageNotFoundComponent,
    HomeComponent,
    CurriculumComponent,
    DevPagesListsComponent,
    FeaturePagesComponent,
    AngularComponent,
    NetcoreWebComponent,
    PhpWebComponent,
    NodeJsWebComponent,
    MarketingComponent,
    DemosComponent,
    CppWebComponent,
    EduWebComponent,
    ConfigWebComponent,
    AboutWebComponent,
    CppDemoComponent,
    CppFeatureListSortableHeader,
    NodeJsFeatureListSortableHeader,
    NodejsDemoComponent,
    NodeJsConfigComponent,
    NodeJsConfigListSortableHeader,
    ProtectedComponent,
    LoginComponentContent,
    ContactComponent,
    TechInfoComponent,
    NetcoredemoComponent,
    NetCoreDemoSortableHeader,
    NetCoreConfigComponent,
    BaseSortableHeader,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgbHighlight, 
    NgbPaginationModule,
    DevPageSortableHeader,
    FeaturePageSortableHeader,
    DecimalPipe, 
    FormsModule, 
    AsyncPipe, 
  ],
  providers: [
    [
      provideHttpClient(withFetch()),
      ConfigService,
      {
        provide   : APP_INITIALIZER,
        useFactory: initialize,
        deps      : [ConfigService,HttpClient],
        multi     : true
      },
    ],
    [DatePipe,DecimalPipe,HttpClient],
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
