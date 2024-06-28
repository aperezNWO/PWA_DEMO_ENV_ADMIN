import { NgModule                } from '@angular/core';
import { RouterModule, Routes    } from '@angular/router';
import { PageNotFoundComponent   } from './_modules/home/page-not-found/page-not-found.component';
import { CurriculumComponent     } from './_modules/angular/curriculum/curriculum.component';
import { HomeComponent           } from './_modules/home/home/home.component';
import { DevPagesListsComponent  } from './_modules/angular/devPages/devPagesList.component';
import { FeaturePagesComponent   } from './_modules/angular/feature-pages/feature-pages.component';
import { AngularComponent        } from './_modules/angular/angular-web/angular.component';

const routes: Routes = [
  {  path: 'Home'                     , component: HomeComponent                      },
  {  path: ''                         , component: HomeComponent                      },
  {  path: 'FeaturePages'             , component: FeaturePagesComponent              },
  {  path: 'DevPages'                 , component: DevPagesListsComponent             },  
  {  path: 'Curriculum'               , component: CurriculumComponent                },
  {  path: 'AngularDemo'              , component: AngularComponent                   }, 
  {  path: '**'                       , component: PageNotFoundComponent              },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
