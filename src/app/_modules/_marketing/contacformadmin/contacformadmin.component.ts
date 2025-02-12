import { Component, Injectable                  } from '@angular/core';
import { BaseService                            } from '../../../_services/_config/base.service';
import { _BaseModel, ENV_LIST_CONTACTFORM_ADMIN } from '../../../_models/common/common';
import { _environment                           } from '../../../../environments/environment';
import { _BaseSortEvent                         } from '../../../_directives/BaseSortableHeader.directive';
import { AuthService                            } from '../../../_services/_config/auth.service';
import { ConfigService                          } from '../../../_services/_config/config.service';
import { BaseComponent                          } from '../../../_components/basecomponent';
//
@Component({
  selector: 'app-contacform-admin',
  templateUrl: './contacformadmin.component.html',
  styleUrl: './contacformadmin.component.css'
})
export class ContacFormAdminComponent extends BaseComponent {
  //
  constructor(public _service: _BaseService,
    public _authService: AuthService,
    public _configService: ConfigService
  ) 
  {
    //
    super(_service, _authService, _configService, ENV_LIST_CONTACTFORM_ADMIN);
  }
}

//
@Injectable({
  providedIn: 'root'
})
class _BaseService extends BaseService {

}

