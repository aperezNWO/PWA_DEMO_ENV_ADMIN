import { Component, Injectable               } from '@angular/core';
import { _BaseModel, ENV_LIST_NETCORE_CONFIG } from '../../../_models/common/common';
import { BaseService                         } from '../../../_services/_config/base.service';
import { _BaseSortEvent                      } from '../../../_directives/BaseSortableHeader.directive';
import { _environment                        } from '../../../../environments/environment';
import { AuthService                         } from '../../../_services/_config/auth.service';
import { ConfigService                       } from '../../../_services/_config/config.service';
import { BaseComponent                       } from '../../../_components/basecomponent';

@Component({
  selector: 'app-net-core-config',
  templateUrl: './net-core-config.component.html',
  styleUrl: './net-core-config.component.css'
})
export class NetCoreConfigComponent extends BaseComponent {
  //
  constructor(public _service: _BaseService,
    public _authService: AuthService,
    public _configService: ConfigService
  ) {
    //
    super(_service, _authService, _configService, ENV_LIST_NETCORE_CONFIG);
  }
}
//
@Injectable({
  providedIn: 'root'
})
class _BaseService extends BaseService {

}