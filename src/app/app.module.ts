
import { AppRoutingModule                         } from './app-routing.module';
import { AppComponent                             } from './app.component';
import { APP_INITIALIZER, NgModule                } from '@angular/core';
import { AsyncPipe, DatePipe, DecimalPipe         } from '@angular/common';
import { FormsModule                              } from '@angular/forms';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientModule                       } from '@angular/common/http';
import { BrowserModule                          } from '@angular/platform-browser';
import { NgbHighlight, NgbModule                } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule    } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService                          } from './_services/_config/config.service';
import { CppDemoComponent                       } from './_modules/_demos/CppDemo/cpp-demo/cpp-demo.component';
import { CppWebComponent                        } from './_modules/_demos/CppDemo/cpp-web/cpp-web.component';
import { NetcoreWebComponent                    } from './_modules/_demos/NetCore/netcore-web/netcoreweb/netcore-web.component';
import { NodeJsWebComponent                     } from './_modules/_demos/Nodejs/node-js-web/node-js-web.component';
import { FeaturePagesComponent                  } from './_modules/_demos/angularDemo/feature-pages/feature-pages.component';
import { AngularComponent                       } from './_modules/_demos/angularDemo/angular-web/angular.component';
import { NetcoredemoComponent                   } from './_modules/_demos/NetCore/netcore-web/netcoredemo/netcoredemo.component';
import { NodejsDemoComponent                    } from './_modules/_demos/Nodejs/nodejs-demo/nodejs-demo.component';
import { DemosComponent                         } from './_modules/_demos/_demosweb/demos.component';
import { DevPagesListsComponent                 } from './_modules/_config/AngularConfig/devPagesList.component';
import { ConfigWebComponent                     } from './_modules/_config/_config-web/config-web.component';
import { NodeJsConfigComponent                  } from './_modules/_config/node-js-config/node-js-config.component';
import { NetCoreConfigComponent                 } from './_modules/_config/net-core-config/net-core-config.component';
import { CurriculumComponent                    } from './_modules/_education/AngularDemo/curriculum.component';
import { EduWebComponent                        } from './_modules/_education/_edu-web/edu-web.component';
import { MarketingComponent                     } from './_modules/_marketing/marketing/marketing.component';
import { ContactComponent                       } from './_modules/_about/contact/contact.component';
import { TechInfoComponent                      } from './_modules/_about/tech-info/tech-info.component';
import { AboutWebComponent                      } from './_modules/_about/about-web/about-web.component';
import { ProtectedComponent                     } from './_modules/_login/protected/protected.component';
import { LoginComponentContent                  } from './_modules/_login/login-content/login-content.component';
import { NavComponent                           } from './_modules/_home/nav/nav.component';
import { PageNotFoundComponent                  } from './_modules/_home/page-not-found/page-not-found.component';
import { HomeComponent                          } from './_modules/_home/_homeWeb/home.component';
import { BaseSortableHeader                     } from './_directives/BaseSortableHeader.directive';
import { _environment                           } from '../environments/environment';
import { SpringBootWebComponent                 } from './_modules/_demos/SpringBoot/SpringBootWeb/spring-boot-web/spring-boot-web.component';
import { SpringBootDemoComponent                } from './_modules/_demos/SpringBoot/SpringBootDemo/spring-boot-demo/spring-boot-demo.component';
import { SpringBootConfigComponent              } from './_modules/_config/spring-boot-config/spring-boot-config.component';
import { IndexComponent                         } from './_modules/_home/index/index.component';
import { ContacFormAdminComponent               } from './_modules/_marketing/contacformadmin/contacformadmin.component';
import { MarketingWebComponent                  } from './_modules/_marketing/_marketing-web/marketing-web.component';
//
export function initialize(_configService: ConfigService, http: HttpClient) {
  //
   _configService.loadJsonist().then(()=> {
      //
      _configService.loadPagesInfoData();
      //
      _configService.loadUsersData();
  });
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
    NodeJsWebComponent,
    MarketingComponent,
    DemosComponent,
    CppWebComponent,
    EduWebComponent,
    ConfigWebComponent,
    AboutWebComponent,
    CppDemoComponent,
    NodejsDemoComponent,
    NodeJsConfigComponent,
    ProtectedComponent,
    LoginComponentContent,
    ContactComponent,
    TechInfoComponent,
    NetcoredemoComponent,
    NetCoreConfigComponent,
    BaseSortableHeader,
    SpringBootWebComponent,
    SpringBootDemoComponent,
    SpringBootConfigComponent,
    IndexComponent,
    ContacFormAdminComponent,
    MarketingWebComponent
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
    [DatePipe,DecimalPipe,HttpClient]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
