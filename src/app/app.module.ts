
import { AppRoutingModule                         } from './app-routing.module';
import { AppComponent                             } from './app.component';
import { APP_INITIALIZER, NgModule                } from '@angular/core';
import { AsyncPipe, DatePipe, DecimalPipe         } from '@angular/common';
import { FormsModule                              } from '@angular/forms';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientModule                       } from '@angular/common/http';
import { BrowserModule, provideClientHydration  } from '@angular/platform-browser';
import { NgbHighlight, NgbModule                } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule    } from '@ng-bootstrap/ng-bootstrap';
import { NavComponent                           } from './_modules/_home/nav/nav.component';
import { PageNotFoundComponent                  } from './_modules/_home/page-not-found/page-not-found.component';
import { devPagesListService                    } from './_services/angularDemo/devPagesList.service';
import { ConfigService                          } from './_services/config.service';
import { CppDemoComponent                       } from './_modules/_demos/CppDemo/cpp-demo/cpp-demo.component';
import { CppWebComponent                        } from './_modules/_demos/CppDemo/cpp-web/cpp-web.component';
import { NetcoreWebComponent                    } from './_modules/_demos/NetCore/netcore-web/netcore-web.component';
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
import { AboutWebComponent                      } from './_modules/_about/about-web/about-web.component';
import { NodejsDemoComponent                    } from './_modules/_demos/Nodejs/nodejs-demo/nodejs-demo.component';
import { DevPageSortableHeader                  } from './_directives/Demos/angularDemo/devPagesListSortable.directive';
import { FeaturePageSortableHeader              } from './_directives/Demos/angularDemo/featurePageListSortable.directive';
import { MarketingSortableHeader                } from './_directives/marketing/marketing.directive';
import { CurriculumSortableHeader               } from './_directives/Demos/angularDemo/curriculumSortable.directive';
import { CppFeatureListSortableHeader           } from './_directives/Demos/cppDemo/cpp-feature-list-sortable.directive';
import { NodeJsFeatureListSortableHeader        } from './_directives/Demos/nodeJsDemo/node-js.directive';
import { NodeJsConfigComponent } from './_modules/_config/node-js-config/node-js-config.component';
//
export function initialize(_configService: ConfigService, http: HttpClient) {
  //
  _configService.loadAngularDemoData();
  //
  _configService.loadAngularCurriculumData();
  //
  _configService.loadAngularConfigData();
  //
  _configService.loadCppDemoData();
  //
  _configService.loadNodeJsDemoData();
  //
  _configService.loadMarketingData();
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
    MarketingSortableHeader,
    DemosComponent,
    CppWebComponent,
    EduWebComponent,
    ConfigWebComponent,
    AboutWebComponent,
    CppDemoComponent,
    CppFeatureListSortableHeader,
    NodeJsFeatureListSortableHeader,
    NodejsDemoComponent,
    NodeJsConfigComponent
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
    CurriculumSortableHeader,
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
    [devPagesListService,DatePipe,DecimalPipe,HttpClient],
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
