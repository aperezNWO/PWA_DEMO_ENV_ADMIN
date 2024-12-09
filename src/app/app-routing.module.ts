import { NgModule                          } from '@angular/core';
import { Route, RouterModule, Routes       } from '@angular/router';
import { CurriculumComponent       } from './_modules/_education/AngularDemo/curriculum.component';
import { EduWebComponent           } from './_modules/_education/_edu-web/edu-web.component';
import { MarketingComponent        } from './_modules/_marketing/marketing.component';
import { AngularComponent          } from './_modules/_demos/angularDemo/angular-web/angular.component';
import { FeaturePagesComponent     } from './_modules/_demos/angularDemo/feature-pages/feature-pages.component';
import { CppDemoComponent          } from './_modules/_demos/CppDemo/cpp-demo/cpp-demo.component';
import { CppWebComponent           } from './_modules/_demos/CppDemo/cpp-web/cpp-web.component';
import { NetcoreWebComponent       } from './_modules/_demos/NetCore/netcore-web/netcoreweb/netcore-web.component';
import { NetcoredemoComponent      } from './_modules/_demos/NetCore/netcore-web/netcoredemo/netcoredemo.component';
import { NodejsDemoComponent       } from './_modules/_demos/Nodejs/nodejs-demo/nodejs-demo.component';
import { NodeJsWebComponent        } from './_modules/_demos/Nodejs/node-js-web/node-js-web.component';
import { DemosComponent            } from './_modules/_demos/_demosweb/demos.component';
import { SpringBootWebComponent    } from './_modules/_demos/SpringBoot/SpringBootWeb/spring-boot-web/spring-boot-web.component';
import { SpringBootDemoComponent   } from './_modules/_demos/SpringBoot/SpringBootDemo/spring-boot-demo/spring-boot-demo.component';
import { SpringBootConfigComponent } from './_modules/_config/spring-boot-config/spring-boot-config.component';
import { DevPagesListsComponent    } from './_modules/_config/AngularConfig/devPagesList.component';
import { ConfigWebComponent        } from './_modules/_config/_config-web/config-web.component';
import { NodeJsConfigComponent     } from './_modules/_config/node-js-config/node-js-config.component';
import { NetCoreConfigComponent    } from './_modules/_config/net-core-config/net-core-config.component';
import { CanActivateGuard          } from './_modules/_config/can-activate.guard';
import { ContactComponent          } from './_modules/_about/contact/contact.component';
import { TechInfoComponent         } from './_modules/_about/tech-info/tech-info.component';
import { AboutWebComponent         } from './_modules/_about/about-web/about-web.component';
import { AiPromtsComponent         } from './_modules/_about/ai-promts/ai-promts.component';
import { ProtectedComponent        } from './_modules/_login/protected/protected.component';
import { PageNotFoundComponent     } from './_modules/_home/page-not-found/page-not-found.component';
import { HomeComponent             } from './_modules/_home/_homeWeb/home.component';
import { IndexComponent            } from './_modules/_home/index/index.component';
//
export interface _Route extends Route
{
    caption : string;
}


//
export const routes: _Route[] = [
  {  path: 'Home'                     , component: HomeComponent                    , caption : 'Home'                                  },
  {  path: 'Index'                    , component: IndexComponent                   , caption : 'Index'                                  },
  {  path: ''                         , component: HomeComponent                    , caption : ''                                      },
  {  path: 'AngularWeb'               , component: AngularComponent                 , caption : 'Angular - Main Page'                   }, 
  {  path: 'AngularFeaturesPages'     , component: FeaturePagesComponent            , caption : 'Angular - Demos'                       },
  {  path: 'AngularReference'         , component: CurriculumComponent               
                                      , canActivate: [CanActivateGuard]             , caption : 'Angular - Reference'                   }, // Protected component
  {  path: 'AngularConfig'            , component: DevPagesListsComponent           , caption : 'Angular - Config'                      },
  {  path: 'NodeJsDemo'               , component: NodejsDemoComponent              , caption : 'Node.js   - Demos'                     }, 
  {  path: 'NodeJsWeb'                , component: NodeJsWebComponent               , caption : 'Node.js   - Main Page'                 }, 
  {  path: 'NodeJsConfig'             , component: NodeJsConfigComponent            , caption : 'Nodd.js   - Config'                    }, 
  {  path: 'NetCoreConfig'            , component: NetCoreConfigComponent           , caption : '.NET Core - Config'                    },
  {  path: 'NetCoreDemo'              , component: NetcoredemoComponent             , caption : '.NET Core - Demos'                     },
  {  path: 'NetCoreWeb'               , component: NetcoreWebComponent              , caption : '.NET Core - Main Page'                 },
  {  path: 'CppDemo'                  , component: CppDemoComponent                 , caption : 'C++ - Demos'                           }, 
  {  path: 'CppWeb'                   , component: CppWebComponent                  , caption : 'C++ - Main Page'                       }, 
  {  path: 'CppConfig'                , component: CppWebComponent                  , caption : 'C++ - Main Page'                       }, 
  {  path: 'DemosWeb'                 , component: DemosComponent                   , caption : 'Demos - Main Page'                     }, 
  {  path: 'SpringBootWeb'            , component: SpringBootWebComponent           , caption : 'SprinbBoot - Main Page'                }, 
  {  path: 'SpringBootDemo'           , component: SpringBootDemoComponent          , caption : 'SpringBoot - Demos'                    }, 
  {  path: 'SpringBootConfig'         , component: SpringBootConfigComponent        , caption : 'SprinbBoot - Config'                   }, 
  {  path: 'EduWeb'                   , component: EduWebComponent                  , caption : 'Education  - Main Page'                },
  {  path: 'ConfigWeb'                , component: ConfigWebComponent                 
                                      , canActivate: [CanActivateGuard]             , caption : 'Configuration - Main Page'             }, // Protected component
  {  path: 'Contact'                  , component: ContactComponent                 , caption : 'Contact Form'                          },
  {  path: 'TechInfo'                 , component: TechInfoComponent                , caption : 'Tecnical Specifications'               },
  {  path: 'AiPrompts'                , component: AiPromtsComponent                , caption : 'A.I. Prompts'                          },
  {  path: 'AboutWeb'                 , component: AboutWebComponent                , caption : 'About'                                 },
  {  path: 'Marketing'                , component: MarketingComponent                 
                                      , canActivate: [CanActivateGuard]             , caption : 'Marketing - Main Page'                 }, // Protected component
  {  path: 'protected'                , component: ProtectedComponent               , caption : ''                                      },
  {  path: '**'                       , component: PageNotFoundComponent            , caption : ''                                      },
];

//
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

//
export class AppRoutingModule { }
