import { Component, QueryList, ViewChildren    } from '@angular/core';
import { NodeJsConfig                          } from '../../../_models/nodejsDemo/NodeJsConfig';
import { NodeJsConfigListSortableHeader        } from '../../../_directives/Demos/nodeJsDemo/node-js-config.directive';
import { Observable                            } from 'rxjs';
@Component({
  selector: 'app-node-js-config',
  templateUrl: './node-js-config.component.html',
  styleUrl: './node-js-config.component.css'
})
export class NodeJsConfigComponent {
    //
    public mainPagesList!: Observable<NodeJsConfig[]>;
    public total!        : Observable<number>;
    // 
	  @ViewChildren(NodeJsConfigListSortableHeader) headers: QueryList<NodeJsConfigListSortableHeader> | undefined;
    //
    /*
    constructor(public service: NodeJsConfigService) {
      this.mainPagesList = service.devpageLists;
      this.total         = service.total;
    }
      //
    onSort({ _column, _direction }: _DevPageSortEvent) {
      //
      console.log ("onSort.column   :" + _column);
      //
      console.log ("onSort.direction:" + _column);
      // resetting other headers
      this.headers?.forEach((header) => {
        if (header.devpagesortable !== _column) {
          header.devpagedirection = '';
        }
      });
      //
      this.service.sortColumn    = _column;
      this.service.sortDirection = _direction;
    }*/
  }
