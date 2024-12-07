import { Component, Injectable,         } from '@angular/core';
import { BaseComponent                  } from '../../../../_components/basecomponent';
import { ENV_LIST_CPP_DEMO              } from '../../../../_models/common/common';
import { AuthService                    } from '../../../../_services/_config/auth.service';
import { ConfigService                  } from '../../../../_services/_config/config.service';
import { BaseService                    } from '../../../../_services/_config/base.service';

 
//
@Component({
  selector: 'app-cpp-demo',
  templateUrl: './cpp-demo.component.html',
  styleUrl: './cpp-demo.component.css'
})
export class CppDemoComponent extends BaseComponent {
    //
    constructor(public _service    : _BaseService,
                public _authService: AuthService,
				        public _configService : ConfigService
			         )
    {
		//
		super(_service, _authService, _configService, ENV_LIST_CPP_DEMO);
    }
}

@Injectable({
	providedIn: 'root'
})
class _BaseService  extends BaseService {
	
}
