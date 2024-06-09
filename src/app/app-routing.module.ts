import { NgModule                } from '@angular/core';
import { RouterModule, Routes    } from '@angular/router';
import { PageNotFoundComponent   } from './_modules/home/page-not-found/page-not-found.component';
import { PagesComponent          } from './_modules/pages/pages.component';
import { CurriculumComponent     } from './_modules/curriculum/curriculum.component';
import { HomeComponent           } from './_modules/home/home/home.component';
import { NgtablesampleComponent  } from './_modules/samples/ngtablesample/ngtablesample.component';


const routes: Routes = [
  {  path: 'Home'                     , component: HomeComponent                      },
  {  path: ''                         , component: HomeComponent                      },
  {  path: 'Pages'                    , component: PagesComponent                     },
  {  path: 'Curriculum'               , component: CurriculumComponent                },
  {  path: 'NgbTableSample'           , component: NgtablesampleComponent             },
  {  path: '**'                       , component: PageNotFoundComponent              },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
