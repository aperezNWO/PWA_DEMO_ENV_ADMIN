import { Component, QueryList, ViewChildren                             } from '@angular/core';
import { Observable                                                     } from 'rxjs';
import { NodeJsFeatures                                                 } from '../../../../_models/nodejsDemo/NodeJsFeatures';
import { _NodeJsFeaturePageSortEvent, NodeJsFeatureListSortableHeader   } from '../../../../_directives/Demos/nodeJsDemo/node-js.directive';
import { NodeJsFeaturesService                                          } from '../../../../_services/nodejsDemo/node-js-features.service';
import { AuthService                                                    } from '../../../../_services/config/auth.service';

@Component({
  selector: 'app-nodejs-demo',
  templateUrl: './nodejs-demo.component.html',
  styleUrl: './nodejs-demo.component.css'
})
export class NodejsDemoComponent {
 //
 public featurePagesList!: Observable<NodeJsFeatures[]>;
 public total!           : Observable<number>;
 // 
 @ViewChildren(NodeJsFeatureListSortableHeader) headers: QueryList<NodeJsFeatureListSortableHeader> | undefined;
 //
 constructor(public service: NodeJsFeaturesService,
             public authService : AuthService, 
 ) {
   this.featurePagesList = service.featurepageLists;
   this.total            = service.total;
 }
 //
 onSort({ _column, _direction }: _NodeJsFeaturePageSortEvent) {
     //
     console.log ("onSort.column   :" + _column);
     //
     console.log ("onSort.direction:" + _column);
     // resetting other headers
     this.headers?.forEach((header) => {
       if (header.nodejsfeaturepagesortable !== _column) {
         header.nodejsfeaturepagedirection= '';
       }
     });
     //
     this.service.sortColumn    = _column;
     this.service.sortDirection = _direction;
 }
}
