import { Component                                              } from '@angular/core';
import { AuthService                                            } from '../../../../_services/_config/auth.service';
import { _BaseModel, BaseComponent, ENV_LIST_CPP_DEMO, SiteRole } from '../../../../_models/common/common';
import { _BaseSortEvent                                         } from '../../../../_directives/BaseSortableHeader.directive';
import {  BaseService                                           } from '../../../../_services/_config/base.service';
import { _environment                                           } from '../../../../../environments/environment';
//
@Component({
  selector: 'app-cpp-demo',
  templateUrl: './cpp-demo.component.html',
  styleUrl: './cpp-demo.component.css'
})
export class CppDemoComponent  extends BaseComponent {
    //
    public ConfigRoleString : string = SiteRole.RoleConfig.toString();

    //
    constructor(public _service    : BaseService,
                public _authService: AuthService,)
    {
      //
      super(_service, _authService,ENV_LIST_CPP_DEMO)
    }
 
}
