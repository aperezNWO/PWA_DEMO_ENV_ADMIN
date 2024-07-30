import { NgModule                } from '@angular/core';
import { RouterModule, Routes    } from '@angular/router';
import { PageNotFoundComponent   } from './_modules/_home/page-not-found/page-not-found.component';
import { HomeComponent           } from './_modules/_home/_homeWeb/home.component';
import { AngularComponent        } from './_modules/_demos/angularDemo/angular-web/angular.component';
import { FeaturePagesComponent   } from './_modules/_demos/angularDemo/feature-pages/feature-pages.component';
import { CppDemoComponent        } from './_modules/_demos/CppDemo/cpp-demo/cpp-demo.component';
import { CppWebComponent         } from './_modules/_demos/CppDemo/cpp-web/cpp-web.component';
import { NetcoreWebComponent     } from './_modules/_demos/NetCore/netcore-web/netcore-web.component';
import { NodejsDemoComponent     } from './_modules/_demos/Nodejs/nodejs-demo/nodejs-demo.component';
import { NodeJsWebComponent      } from './_modules/_demos/Nodejs/node-js-web/node-js-web.component';
import { PhpWebComponent         } from './_modules/_demos/Php/php-web/php-web.component';
import { DemosComponent          } from './_modules/_demos/_demosweb/demos.component';
import { CurriculumComponent     } from './_modules/_education/AngularDemo/curriculum.component';
import { EduWebComponent         } from './_modules/_education/_edu-web/edu-web.component';
import { MarketingComponent      } from './_modules/_marketing/marketing.component';
import { DevPagesListsComponent  } from './_modules/_config/AngularConfig/devPagesList.component';
import { ConfigWebComponent      } from './_modules/_config/_config-web/config-web.component';
import { NodeJsConfigComponent   } from './_modules/_config/node-js-config/node-js-config.component';
import { ContactComponent        } from './_modules/_about/contact/contact.component';
import { TechInfoComponent       } from './_modules/_about/tech-info/tech-info.component';
import { AboutWebComponent       } from './_modules/_about/about-web/about-web.component';
import { ProtectedComponent      } from './_modules/_login/protected/protected.component';
import { CanActivateGuard        } from './_modules/_config/can-activate.guard';

//
const routes: Routes = [
  {  path: 'Home'                     , component: HomeComponent                      },
  {  path: ''                         , component: HomeComponent                      },
  {  path: 'AngularWeb'               , component: AngularComponent                   }, 
  {  path: 'AngularFeaturesPages'     , component: FeaturePagesComponent              },
  {  path: 'AngularReference'         , component: CurriculumComponent                },
  {  path: 'AngularConfig'            , component: DevPagesListsComponent             },
  {  path: 'NodeJsWeb'                , component: NodeJsWebComponent                 }, 
  {  path: 'NodeJsDemo'               , component: NodejsDemoComponent                }, 
  {  path: 'NodeJsWeb'                , component: NodeJsWebComponent                 }, 
  {  path: 'NodeJsConfig'             , component: NodeJsConfigComponent              }, 
  {  path: 'NetCoreWeb'               , component: NetcoreWebComponent                },
  {  path: 'PhpWeb'                   , component: PhpWebComponent                    }, 
  {  path: 'CppDemo'                  , component: CppDemoComponent                   }, 
  {  path: 'CppWeb'                   , component: CppWebComponent                    }, 
  {  path: 'DemosWeb'                 , component: DemosComponent                     }, 
  {  path: 'EduWeb'                   , component: EduWebComponent                    },
  {  path: 'ConfigWeb'                , component: ConfigWebComponent                 
                                      , canActivate: [CanActivateGuard]               }, // Protected component
  {  path: 'Contact'                  , component: ContactComponent                   },
  {  path: 'TechInfo'                 , component: TechInfoComponent                  },
  {  path: 'AboutWeb'                 , component: AboutWebComponent                  },
  {  path: 'Marketing'                , component: MarketingComponent                 
                                      , canActivate: [CanActivateGuard]               }, // Protected component
  {  path: 'protected'                , component: ProtectedComponent                 },
  {  path: '**'                       , component: PageNotFoundComponent              },
];

//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//
export class AppRoutingModule { }
