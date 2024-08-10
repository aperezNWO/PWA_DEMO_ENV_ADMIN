import { Component, QueryList, ViewChildren                           } from '@angular/core';
import { Observable                                                   } from 'rxjs';
import { _BaseModel                                                   } from '../../../_models/common/common';
import { _BaseService                                                 } from '../../../_services/_config/base.service';
import { _BaseSortEvent, BaseSortableHeader                           } from '../../../_directives/BaseSortableHeader.directive';
import { _environment                                                 } from '../../../../environments/environment';

@Component({
  selector: 'app-net-core-config',
  templateUrl: './net-core-config.component.html',
  styleUrl: './net-core-config.component.css'
})
export class NetCoreConfigComponent {
    //
    public mainPagesList!: Observable<_BaseModel[]>;
    public total!        : Observable<number>;
    //
	  @ViewChildren(BaseSortableHeader) headers: QueryList<BaseSortableHeader> | undefined;
    //
    constructor(public service: _BaseService) {
      //
      _environment.netCoreConfigList_base_.forEach((element: any) => {
        console.log("loading to service : " + element);
        service._SEARCH_PAGES.push(element);
      });
      //
      this.mainPagesList = service.Pagelist;
      this.total         = service.total;
    }
    //
    onSort({ _column, _direction }: _BaseSortEvent) {
      // resetting other headers
      this.headers?.forEach((header) => {
        if (header.sortable !== _column) {
          header.direction = '';
        }
      });
      //
      this.service.sortColumn    = _column;
      this.service.sortDirection = _direction;
    }
}
