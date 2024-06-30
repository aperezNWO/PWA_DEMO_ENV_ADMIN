import { NgModule                } from '@angular/core';
import { RouterModule, Routes    } from '@angular/router';
import { PageNotFoundComponent   } from './_modules/home/page-not-found/page-not-found.component';
import { CurriculumComponent     } from './_modules/angular/curriculum/curriculum.component';
import { HomeComponent           } from './_modules/home/home/home.component';
import { MarketingComponent      } from './_modules/home/marketing/marketing.component';
import { DevPagesListsComponent  } from './_modules/angular/devPages/devPagesList.component';
import { FeaturePagesComponent   } from './_modules/angular/feature-pages/feature-pages.component';
import { AngularComponent        } from './_modules/angular/angular-web/angular.component';
import { PhpWebComponent         } from './_modules/Php/php-web/php-web.component';
import { NodeJsWebComponent      } from './_modules/Nodejs/node-js-web/node-js-web.component';
import { NetcoreWebComponent     } from './_modules/NetCore/netcore-web/netcore-web.component';


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
  {  path: '**'                       , component: PageNotFoundComponent              },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
