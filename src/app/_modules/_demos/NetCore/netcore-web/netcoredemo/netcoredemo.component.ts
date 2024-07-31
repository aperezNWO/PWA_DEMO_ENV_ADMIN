import { Component, QueryList, ViewChildren                       } from '@angular/core';
import { Observable                                               } from 'rxjs';
import { netCoreDemo                                              } from '../../../../../_models/netCoreDemo/netCoreDemo';
import { _NetCoreDemoPageSortEvent, NetCoreDemoListSortableHeader } from '../../../../../_directives/Demos/netcoreDemo/NetCoreDemoListSortableHeader.directive';
import { NetcoreDemoService                                       } from '../../../../../_services/netcoreDemo/netcore-demo.service';
import { AuthService                                              } from '../../../../../_services/config/auth.service';

@Component({
  selector: 'app-netcoredemo',
  templateUrl: './netcoredemo.component.html',
  styleUrl: './netcoredemo.component.css'
})
export class NetcoredemoComponent {
    //
    public netCoreDemoPageList!: Observable<netCoreDemo[]>;
    public total!             : Observable<number>;
    // 
    @ViewChildren(NetCoreDemoListSortableHeader) headers: QueryList<NetCoreDemoListSortableHeader> | undefined;
    //
    constructor(public service    : NetcoreDemoService,
                public authService: AuthService,
    ) 
    {
        this.netCoreDemoPageList = service.NetcoreDemoPagelist;
        this.total               = service.total;
    }
    //
    onSort({ _column, _direction }: _NetCoreDemoPageSortEvent) {
      //
      console.log ("onSort.column   :" + _column);
      //
      console.log ("onSort.direction:" + _column);
      // resetting other headers
      this.headers?.forEach((header) => {
        if (header.netcoredemopagesortable !== _column) {
          header.netcoredemopagedirection= '';
        }
      });
      //
      this.service.sortColumn    = _column;
      this.service.sortDirection = _direction;
  }
}
