import { Component, Injectable                                    } from '@angular/core';
import { AuthService                                              } from '../../../../../_services/_config/auth.service';
import { _BaseModel, ENV_LIST_NETCORE_DEMO                        } from '../../../../../_models/common/common';
import { _BaseSortEvent                                           } from '../../../../../_directives/BaseSortableHeader.directive';
import {  BaseService                                             } from '../../../../../_services/_config/base.service';
import { _environment                                             } from '../../../../../../environments/environment';
import { ConfigService                                            } from '../../../../../_services/_config/config.service';
import { BaseComponent                                            } from '../../../../../_components/basecomponent';

@Component({
  selector: 'app-netcoredemo',
  templateUrl: './netcoredemo.component.html',
  styleUrl: './netcoredemo.component.css'
})
export class NetcoredemoComponent extends BaseComponent {
    //
    constructor(public _service    : _BaseService,
                public _authService: AuthService,
                public _configService: ConfigService)
    {
        //
        super(_service,_authService,_configService, ENV_LIST_NETCORE_DEMO)
    }
}
//
@Injectable({
	providedIn: 'root'
})
class _BaseService  extends BaseService {
	
}
