import { Component, Directive, EventEmitter, Injectable, Input, Output, QueryList, ViewChildren       } from '@angular/core';
import { _environment                                                                                   } from '../../../../../environments/environment';
import { AuthService                                                                                    } from '../../../../_services/_config/auth.service';
import { _BaseModel, _BaseSearchResult, _SearchState,_SortDirection, ENV_LIST_CPP_DEMO, matches, pagerotate, SiteRole, sort } from '../../../../_models/common/common';
import { BehaviorSubject, Subject, tap, debounceTime, switchMap, delay, Observable, of                  } from 'rxjs';
import { _BaseSortEvent, _SortColumn, BaseSortableHeader                                                } from '../../../../_directives/BaseSortableHeader.directive';
import { ConfigService } from '../../../../_services/_config/config.service';
import { BaseService } from '../../../../_services/_config/base.service';
import { BaseComponent } from '../../../basecomponent';
 
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
