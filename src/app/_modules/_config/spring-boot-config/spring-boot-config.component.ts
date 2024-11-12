import { Component,  Injectable                     } from '@angular/core';
import { BaseComponent                              } from '../../basecomponent';
import { _BaseModel, ENV_LIST_SPRING_BOOT_CONFIG    } from '../../../_models/common/common';
import { _BaseSortEvent                             } from '../../../_directives/BaseSortableHeader.directive';
import {  BaseService                               } from '../../../_services/_config/base.service';
import { _environment                               } from '../../../../environments/environment';
import { AuthService                                } from '../../../_services/_config/auth.service';
import { ConfigService                              } from '../../../_services/_config/config.service';


@Component({
  selector: 'app-spring-boot-config',
  templateUrl: './spring-boot-config.component.html',
  styleUrl: './spring-boot-config.component.css'
})
export class SpringBootConfigComponent extends BaseComponent 
{
  //
  constructor(public _service: _BaseService,
    public _authService: AuthService,
    public _configService: ConfigService
  ) 
  {
    //
    super(_service, _authService, _configService, ENV_LIST_SPRING_BOOT_CONFIG);
  }
}
//
@Injectable({
  providedIn: 'root'
})
class _BaseService extends BaseService {

}

