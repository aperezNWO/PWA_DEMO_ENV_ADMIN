import { Component, QueryList, ViewChildren    } from '@angular/core';
import { Observable                            } from 'rxjs';
import { NodeJsConfig                          } from '../../../_models/nodejsDemo/NodeJsConfig';
import { _NodeJsConfigePageSortEvent           } from '../../../_directives/Demos/nodeJsDemo/node-js-config.directive';
import { NodeJsConfigListSortableHeader        } from '../../../_directives/Demos/nodeJsDemo/node-js-config.directive';
import { NodeJsConfigService                   } from '../../../_services/nodejsDemo/node-js-config.service';

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
    constructor(public service: NodeJsConfigService) {
      this.mainPagesList = service.configPageLists;
      this.total         = service.total;
    }
    //
    onSort({ _column, _direction }: _NodeJsConfigePageSortEvent) {
      //
      //console.log ("onSort.column   :" + _column);
      //
      //console.log ("onSort.direction:" + _column);
      // resetting other headers
      this.headers?.forEach((header) => {
        if (header.nodejsconfigpagesortable !== _column) {
          header.nodejsconfigpagedirection = '';
        }
      });
      //
      this.service.sortColumn    = _column;
      this.service.sortDirection = _direction;
    }
  }
