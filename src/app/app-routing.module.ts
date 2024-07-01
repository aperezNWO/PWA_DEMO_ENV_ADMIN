import { NgModule                } from '@angular/core';
import { RouterModule, Routes    } from '@angular/router';
import { DemosComponent          } from './_modules/_home/demos/demos.component';
import { HomeComponent           } from './_modules/_home/home/home.component';
import { MarketingComponent      } from './_modules/_home/marketing/marketing.component';
import { PageNotFoundComponent   } from './_modules/_home/page-not-found/page-not-found.component';
import { CppWebComponent         } from './_modules/_demos/CppDemo/cpp-web/cpp-web.component';
import { NetcoreWebComponent     } from './_modules/_demos/NetCore/netcore-web/netcore-web.component';
import { NodeJsWebComponent      } from './_modules/_demos/Nodejs/node-js-web/node-js-web.component';
import { PhpWebComponent         } from './_modules/_demos/Php/php-web/php-web.component';
import { AngularComponent        } from './_modules/_demos/angular/angular-web/angular.component';
import { CurriculumComponent     } from './_modules/_demos/angular/curriculum/curriculum.component';
import { DevPagesListsComponent  } from './_modules/_demos/angular/devPages/devPagesList.component';
import { FeaturePagesComponent   } from './_modules/_demos/angular/feature-pages/feature-pages.component';


const routes: Routes = [
  {  path: 'Home'                     , component: HomeComponent                      },
  {  path: ''                         , component: HomeComponent                      },
  {  path: 'Marketing'                , component: MarketingComponent                 },
  {  path: 'AngularWeb'               , component: AngularComponent                   }, 
  {  path: 'FeaturePages'             , component: FeaturePagesComponent              },
  {  path: 'DevPages'                 , component: DevPagesListsComponent             },  
  {  path: 'Curriculum'               , component: CurriculumComponent                },
  {  path: 'NodeJsWeb'                , component: NodeJsWebComponent                 }, 
  {  path: 'NetCoreWeb'               , component: NetcoreWebComponent                },
  {  path: 'PhpWeb'                   , component: PhpWebComponent                    }, 
  {  path: 'CppWeb'                   , component: CppWebComponent                    }, 
  {  path: 'DemosWeb'                 , component: DemosComponent                     }, 
  {  path: '**'                       , component: PageNotFoundComponent              },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
