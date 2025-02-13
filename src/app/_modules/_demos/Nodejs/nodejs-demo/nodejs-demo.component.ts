import { Component, Injectable                                          } from '@angular/core';
import { AuthService                                                    } from '../../../../_services/_config/auth.service';
import { _BaseModel, ENV_LIST_NODEJS_DEMO                               } from '../../../../_models/common/common';
import { _BaseSortEvent                                                 } from '../../../../_directives/BaseSortableHeader.directive';
import { BaseService                                                    } from '../../../../_services/_config/base.service';
import { _environment                                                   } from '../../../../../environments/environment';
import { BaseComponent                                                  } from '../../../../_components/basecomponent';
import { ConfigService                                                  } from '../../../../_services/_config/config.service';

@Component({
  selector: 'app-nodejs-demo',
  templateUrl: './nodejs-demo.component.html',
  styleUrl: './nodejs-demo.component.css'
})
export class NodejsDemoComponent extends BaseComponent {
 
  //
  constructor(public _service       : BaseService,
              public _authService   : AuthService,
              public _configService: ConfigService)
  {
      //
      super(_service,_authService,_configService, ENV_LIST_NODEJS_DEMO)
  }
}
