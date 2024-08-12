import { Component, QueryList, ViewChildren                                                } from '@angular/core';
import { AuthService                                              } from '../../../../../_services/_config/auth.service';
import { _BaseModel, ENV_LIST_NETCORE_DEMO                        } from '../../../../../_models/common/common';
import { _BaseSortEvent, BaseSortableHeader                                           } from '../../../../../_directives/BaseSortableHeader.directive';
import {  BaseService                                             } from '../../../../../_services/_config/base.service';
import { _environment                                             } from '../../../../../../environments/environment';
import { BaseComponent                                            } from '../../../../basecomponent';
import { ConfigService                                            } from '../../../../../_services/_config/config.service';

@Component({
  selector: 'app-netcoredemo',
  templateUrl: './netcoredemo.component.html',
  styleUrl: './netcoredemo.component.css'
})
export class NetcoredemoComponent extends BaseComponent {
    //
    @ViewChildren(BaseSortableHeader) headers: QueryList<BaseSortableHeader> | undefined;
    //
    constructor(public _service    : BaseService,
                public _authService: AuthService,
                public _configService: ConfigService)
    {
        //
        super(_service, _authService,_configService, ENV_LIST_NETCORE_DEMO)
    }
      //
      onSort({ _column, _direction }: _BaseSortEvent) {
        // resetting other headers
        this.headers?.forEach((header) => {
            if (header.sortable !== _column) {
                header.direction= '';
            }
        });
        //
        this.service.sortColumn    = _column;
        this.service.sortDirection = _direction;
    }
}
