import { Component, Injectable                       } from '@angular/core';
import { BaseComponent                               } from '../../../_components/basecomponent';
import { _BaseModel, ENV_LIST_ANGULAR_EDU,           } from '../../../_models/common/common';
import { AuthService                                 } from '../../../_services/_config/auth.service';
import {  BaseService                                } from '../../../_services/_config/base.service';
import { _BaseSortEvent                              } from '../../../_directives/BaseSortableHeader.directive';
import { _environment                                } from '../../../../environments/environment';
import { ConfigService                               } from '../../../_services/_config/config.service';
//
@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent extends BaseComponent {
  //
  constructor(public _service: BaseService,
    public _authService: AuthService,
    public _configService: ConfigService
  ) {
    //
    super(_service, _authService, _configService, ENV_LIST_ANGULAR_EDU);
  }
}

