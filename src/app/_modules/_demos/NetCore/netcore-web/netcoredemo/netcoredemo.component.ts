import { Component, QueryList, ViewChildren                       } from '@angular/core';
import { AuthService                                              } from '../../../../../_services/_config/auth.service';
import { _BaseModel, ENV_LIST_NETCORE_DEMO, SiteRole                        } from '../../../../../_models/common/common';
import { _BaseSortEvent, BaseSortableHeader                       } from '../../../../../_directives/BaseSortableHeader.directive';
import {  BaseService                                             } from '../../../../../_services/_config/base.service';
import { _environment                                             } from '../../../../../../environments/environment';
import { ConfigService                                            } from '../../../../../_services/_config/config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-netcoredemo',
  templateUrl: './netcoredemo.component.html',
  styleUrl: './netcoredemo.component.css'
})
export class NetcoredemoComponent {
    //
    public PagesList!       : Observable<_BaseModel[]>;
    public total!           : Observable<number>; 
    //
    public ConfigRoleString : string = SiteRole.RoleConfig.toString(); 
    //
    @ViewChildren(BaseSortableHeader) headers: QueryList<BaseSortableHeader> | undefined;
    //
    constructor(public _service    : BaseService,
                public _authService: AuthService,
                public _configService: ConfigService)
    {

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
        this._service.sortColumn    = _column;
        this._service.sortDirection = _direction;
    }
}
