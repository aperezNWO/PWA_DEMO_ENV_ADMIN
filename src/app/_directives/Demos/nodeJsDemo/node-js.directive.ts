import { Directive, EventEmitter, Input, Output   } from '@angular/core';
import { NodeJsFeatures                           } from '../../../_models/nodejsDemo/NodeJsFeatures';
import { _SortDirection, pagerotate               } from '../../../_models/common/common';
//
export type _NodeJsFeatureSortColumn    = keyof NodeJsFeatures      | '';
//
export interface _NodeJsFeaturePageSortEvent {
	_column   :  _NodeJsFeatureSortColumn;
	_direction:  _SortDirection;
}
//
@Directive({
  selector    : 'th[nodejsfeaturepagesort]',
  host        : {
		'[class.asc]'  : 'direction === "asc"',
		'[class.desc]' : 'direction === "desc"',
		'(click)'      : '_rotateNodeJsFeaturePage()',
  },
})
export class NodeJsFeatureListSortableHeader {
 //
 @Input()  nodejsfeaturepagesortable       :   _NodeJsFeatureSortColumn    = '';
 @Input()  nodejsfeaturepagedirection      :   _SortDirection              = '';
 @Output() nodejsfeaturepagesort          = new EventEmitter<_NodeJsFeaturePageSortEvent>();
 //
 _rotateNodeJsFeaturePage() {
   this.nodejsfeaturepagedirection = pagerotate[this.nodejsfeaturepagedirection];
   this.nodejsfeaturepagesort.emit({ 
               _column   : this.nodejsfeaturepagesortable, 
               _direction: this.nodejsfeaturepagedirection 
               });
 }
}
