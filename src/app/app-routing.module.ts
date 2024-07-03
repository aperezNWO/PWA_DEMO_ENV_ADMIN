import { NgModule                } from '@angular/core';
import { RouterModule, Routes    } from '@angular/router';
import { PageNotFoundComponent   } from './_modules/_home/page-not-found/page-not-found.component';
import { HomeComponent           } from './_modules/_home/_homeWeb/home.component';
import { CppWebComponent         } from './_modules/_demos/CppDemo/cpp-web/cpp-web.component';
import { NetcoreWebComponent     } from './_modules/_demos/NetCore/netcore-web/netcore-web.component';
import { NodeJsWebComponent      } from './_modules/_demos/Nodejs/node-js-web/node-js-web.component';
import { PhpWebComponent         } from './_modules/_demos/Php/php-web/php-web.component';
import { AngularComponent        } from './_modules/_demos/angular/angular-web/angular.component';
import { DemosComponent          } from './_modules/_demos/_demosweb/demos.component';
import { FeaturePagesComponent   } from './_modules/_demos/angular/feature-pages/feature-pages.component';
import { CurriculumComponent     } from './_modules/_education/AngularDemo/curriculum.component';
import { EduWebComponent         } from './_modules/_education/_edu-web/edu-web.component';
import { MarketingComponent      } from './_modules/_marketing/marketing.component';
import { DevPagesListsComponent  } from './_modules/_config/AngularConfig/devPagesList.component';
import { ConfigWebComponent      } from './_modules/_config/_config-web/config-web.component';
import { AboutWebComponent } from './_modules/_about/about-web/about-web.component';

const routes: Routes = [
  {  path: 'Home'                     , component: HomeComponent                      },
  {  path: ''                         , component: HomeComponent                      },
  {  path: 'Marketing'                , component: MarketingComponent                 },
  {  path: 'AngularWeb'               , component: AngularComponent                   }, 
  {  path: 'FeaturePages'             , component: FeaturePagesComponent              },
  {  path: 'NodeJsWeb'                , component: NodeJsWebComponent                 }, 
  {  path: 'NetCoreWeb'               , component: NetcoreWebComponent                },
  {  path: 'PhpWeb'                   , component: PhpWebComponent                    }, 
  {  path: 'CppWeb'                   , component: CppWebComponent                    }, 
  {  path: 'DemosWeb'                 , component: DemosComponent                     }, 
  {  path: 'AngularReference'         , component: CurriculumComponent                },
  {  path: 'EduWeb'                   , component: EduWebComponent                    },
  {  path: 'ConfigWeb'                , component: ConfigWebComponent                 },
  {  path: 'AngularConfig'            , component: DevPagesListsComponent             },
  {  path: 'AboutWeb'                 , component: AboutWebComponent                  },
  {  path: '**'                       , component: PageNotFoundComponent              },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
