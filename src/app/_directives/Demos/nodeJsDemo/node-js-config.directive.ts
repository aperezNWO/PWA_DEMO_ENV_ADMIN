import { Directive, EventEmitter, Input, Output   } from '@angular/core';
import { NodeJsConfig                             } from '../../../_models/nodejsDemo/NodeJsConfig';
//
export type _NodeJsConfigSortColumn    = keyof NodeJsConfig      | '';
export type _NodeJsConfigSortDirection = 'asc' | 'desc'          | '';
// DICTIONARY
const nodejsconfigpagerotate: { [key: string]: _NodeJsConfigSortDirection } = { asc: 'desc', desc: '', '': 'asc' };
//
export interface _NodeJsConfigePageSortEvent {
	_column   :  _NodeJsConfigSortColumn;
	_direction:  _NodeJsConfigSortDirection;
}
//
@Directive({
  selector: 'th[nodejsconfigpagessort]',
  host             : {
		'[class.asc]'  : 'direction === "asc"',
		'[class.desc]' : 'direction === "desc"',
		'(click)'      : '_rotateNodeJsConfigPage()',
  },
})
export class NodeJsConfigListSortableHeader {
  //
  @Input()  nodejsconfigpagesortable       :   _NodeJsConfigSortColumn    = '';
  @Input()  nodejsconfigpagedirection      :   _NodeJsConfigSortDirection = '';
  @Output() nodejsconfigpagessort          = new EventEmitter<_NodeJsConfigePageSortEvent>();
  //
  _rotateNodeJsConfigPage()
  {
    this.nodejsconfigpagedirection = nodejsconfigpagerotate[this.nodejsconfigpagedirection];
    this.nodejsconfigpagessort.emit({ 
                _column   : this.nodejsconfigpagesortable, 
                _direction: this.nodejsconfigpagedirection 
    });
  }
}
