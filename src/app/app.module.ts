
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
import { NavComponent                           } from './_modules/home/nav/nav.component';
import { PageNotFoundComponent                  } from './_modules/home/page-not-found/page-not-found.component';
import { HomeComponent                          } from './_modules/home/home/home.component';
import { CurriculumComponent                    } from './_modules/angular/curriculum/curriculum.component';
import { DevPagesListsComponent                 } from './_modules/angular/devPages/devPagesList.component';
import { FeaturePagesComponent                  } from './_modules/angular/feature-pages/feature-pages.component';
import { AngularComponent                       } from './_modules/angular/angular-web/angular.component';
import { devPagesListService                    } from './_services/devPagesList.service';
import { ConfigService                          } from './_services/config.service';
import { PhpWebComponent                        } from './_modules/Php/php-web/php-web.component';
import { NodeJsWebComponent                     } from './_modules/Nodejs/node-js-web/node-js-web.component';
import { NetcoreWebComponent                    } from './_modules/NetCore/netcore-web/netcore-web.component';
import { MarketingComponent                     } from './_modules/home/marketing/marketing.component';
import { DevPageSortableHeader                  } from './_directives/devPagesListSortable.directive';
import { CurriculumSortableHeader               } from './_directives/curriculumSortable.directive';
import { FeaturePageSortableHeader              } from './_directives/featurePageListSortable.directive';
import { NodeJsDirective                        } from './_directives/node-js.directive';
import { MarketingSortableHeader                } from './_directives/marketing.directive';
//
export function initialize(_configService: ConfigService, http: HttpClient) {
  //
  _configService.loadFeaturesData();
  //
  _configService.loadDevPages();
  //
  _configService.loadCurriculumData();
  //
  _configService.loadMarketing();
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
    NodeJsDirective,
    MarketingComponent,
    MarketingSortableHeader,
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
