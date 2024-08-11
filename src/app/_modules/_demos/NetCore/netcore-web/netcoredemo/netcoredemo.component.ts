import { Component                                                } from '@angular/core';
import { AuthService                                              } from '../../../../../_services/_config/auth.service';
import { _BaseModel, ENV_LIST_NETCORE_DEMO                        } from '../../../../../_models/common/common';
import { _BaseSortEvent                                           } from '../../../../../_directives/BaseSortableHeader.directive';
import {  BaseService                                             } from '../../../../../_services/_config/base.service';
import { _environment                                             } from '../../../../../../environments/environment';
import { BaseComponent                                            } from '../../../../basecomponent';

@Component({
  selector: 'app-netcoredemo',
  templateUrl: './netcoredemo.component.html',
  styleUrl: './netcoredemo.component.css'
})
export class NetcoredemoComponent extends BaseComponent {

     //
    constructor(public _service    : BaseService,
                public _authService: AuthService,)
    {
        //
        super(_service, _authService,ENV_LIST_NETCORE_DEMO)
    }
}
