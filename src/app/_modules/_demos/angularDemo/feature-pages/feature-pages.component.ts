import { Component, QueryList, ViewChildren               } from '@angular/core';
import { AuthService                                      } from '../../../../_services/_config/auth.service';
import { _BaseModel, ENV_LIST_ANGULAR_DEMO, SiteRole      } from '../../../../_models/common/common'; 
import { _BaseSortEvent, BaseSortableHeader               } from '../../../../_directives/BaseSortableHeader.directive';
import {  BaseService                                     } from '../../../../_services/_config/base.service';
import { _environment                                     } from '../../../../../environments/environment';
import { BaseComponent } from '../../../basecomponent';
//
@Component({
  selector: 'app-feature-pages',
  templateUrl: './feature-pages.component.html',
  styleUrl: './feature-pages.component.css'
})
export class FeaturePagesComponent extends BaseComponent {
   //
   constructor(public _service    : BaseService,
               public _authService: AuthService,)
   {
      //
      super(_service, _authService,ENV_LIST_ANGULAR_DEMO)
   }
}
