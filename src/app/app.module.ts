
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
import { CurriculumComponent                    } from './_modules/curriculum/curriculum.component';
import { ConfigService                          } from './_services/config.service';
import { DevPageSortableHeader                  } from './_directives/devpagesortable.directive';
import { NgtablesampleComponent                 } from './_modules/pages/devPages/ngtablesample.component';
import { DemoService                            } from './_services/demo.service';
import { Observable } from 'rxjs';
import { DevPage } from './_models/DevPage';
//
export function initialize(_configService: ConfigService, http: HttpClient) {
		
  //////////////////////////////////////////////////////
   /*
		let csv_informeLogRemoto!                 :  Observable<DevPage[]>;
		csv_informeLogRemoto                      =  http.get<DevPage[]>('assets/pages.json');
		let _DEV_PAGES: DevPage[] = [];
		//
		const csv_observer = {
		next: (csv_data: any)     => { 
				//
				console.log("getting data : " + csv_data);
				//
				_DEV_PAGES = csv_data;
			},
			error           : (err: Error)      => {
				//
			},
			complete        : ()                => {

			},
		}
		//
		csv_informeLogRemoto.subscribe(csv_observer);*/
		
		//////////////////////////////////////////////////////
    _configService.loadJsonData();
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
    NgtablesampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule,
    NgbHighlight, 
    DevPageSortableHeader, 
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
    [DemoService,DatePipe,DecimalPipe,HttpClient],
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
