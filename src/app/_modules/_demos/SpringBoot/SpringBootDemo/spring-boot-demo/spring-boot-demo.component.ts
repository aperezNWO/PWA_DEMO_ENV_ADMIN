import { Component,Injectable           } from '@angular/core';
import { AuthService                    } from '../../../../../_services/_config/auth.service';
import { ENV_LIST_SPRING_BOOT_DEMO      } from '../../../../../_models/common/common';
import { BaseService                    } from '../../../../../_services/_config/base.service';
import { ConfigService                  } from '../../../../../_services/_config/config.service';
import { BaseComponent                  } from '../../../../../_components/basecomponent';

@Component({
  selector: 'app-spring-boot-demo',
  templateUrl: './spring-boot-demo.component.html',
  styleUrl: './spring-boot-demo.component.css'
})
export class SpringBootDemoComponent  extends BaseComponent {

 //
 constructor(public _service    : BaseService,
    public _authService: AuthService,
    public _configService : ConfigService
)
  {
    //
    super(_service, _authService, _configService, ENV_LIST_SPRING_BOOT_DEMO);
  }
}
