import { Component, QueryList, ViewChildren                           } from '@angular/core';
import { Observable                                                   } from 'rxjs';
import { NetCoreConfig                                                } from '../../../_models/netCoreDemo/netCoreConfig';
import { _NetCoreConfigPageSortEvent                                  } from '../../../_directives/Demos/netcoreDemo/NetCoreConfigListSortableHeader.directive';
import { NetCoreConfigListSortableHeader                              } from '../../../_directives/Demos/netcoreDemo/NetCoreConfigListSortableHeader.directive';
import { NetcoreconfigService                                         } from '../../../_services/netcoreDemo/netcoreconfig.service';

@Component({
  selector: 'app-net-core-config',
  templateUrl: './net-core-config.component.html',
  styleUrl: './net-core-config.component.css'
})
export class NetCoreConfigComponent {
    //
    public mainPagesList!: Observable<NetCoreConfig[]>;
    public total!        : Observable<number>;
    //
	  @ViewChildren(NetCoreConfigListSortableHeader) headers: QueryList<NetCoreConfigListSortableHeader> | undefined;
     //
     constructor(public service: NetcoreconfigService) {
      this.mainPagesList = service.NetcoreConfigPagelist;
      this.total         = service.total;
    }
    //
    onSort({ _column, _direction }: _NetCoreConfigPageSortEvent) {
      //
      console.log ("onSort.column   :" + _column);
      //
      console.log ("onSort.direction:" + _column);
      // resetting other headers
      this.headers?.forEach((header) => {
        if (header.netcoreconfigpagesortable !== _column) {
          header.netcoreconfigpagedirection = '';
        }
      });
      //
      this.service.sortColumn    = _column;
      this.service.sortDirection = _direction;
    }
}
