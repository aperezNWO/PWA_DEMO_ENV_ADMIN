import { Directive, EventEmitter, Input, Output   } from '@angular/core';
import { NodeJsFeatures                           } from '../../../_models/nodejsDemo/NodeJsFeatures';
//
export type _NodeJsFeatureSortColumn    = keyof NodeJsFeatures      | '';
export type _NodeJsFeatureSortDirection = 'asc' | 'desc'            | '';
//
const nodejsfeaturepagerotate: { [key: string]: _NodeJsFeatureSortDirection } = { asc: 'desc', desc: '', '': 'asc' };
//
export interface _NodeJsFeaturePageSortEvent {
	_column   :  _NodeJsFeatureSortColumn;
	_direction:  _NodeJsFeatureSortDirection;
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
 @Input()  nodejsfeaturepagedirection      :   _NodeJsFeatureSortDirection = '';
 @Output() nodejsfeaturepagesort          = new EventEmitter<_NodeJsFeaturePageSortEvent>();
 //
 _rotateNodeJsFeaturePage() {
   this.nodejsfeaturepagedirection = nodejsfeaturepagerotate[this.nodejsfeaturepagedirection];
   this.nodejsfeaturepagesort.emit({ 
               _column   : this.nodejsfeaturepagesortable, 
               _direction: this.nodejsfeaturepagedirection 
               });
 }

}
