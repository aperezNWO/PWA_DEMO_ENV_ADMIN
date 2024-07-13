import { Directive, EventEmitter, Input, Output   } from '@angular/core';
import { NodeJsConfig                             } from '../../../_models/nodejsDemo/NodeJsConfig';
import { _SortDirection, pagerotate               } from '../../../_models/common/common';
//
export type _NodeJsConfigSortColumn    = keyof NodeJsConfig      | '';
//
export interface _NodeJsConfigePageSortEvent {
	_column   :  _NodeJsConfigSortColumn;
	_direction:  _SortDirection;
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
  @Input()  nodejsconfigpagedirection      :   _SortDirection             = '';
  @Output() nodejsconfigpagessort          = new EventEmitter<_NodeJsConfigePageSortEvent>();
  //
  _rotateNodeJsConfigPage()
  {
    this.nodejsconfigpagedirection = pagerotate[this.nodejsconfigpagedirection];
    this.nodejsconfigpagessort.emit({ 
                _column   : this.nodejsconfigpagesortable, 
                _direction: this.nodejsconfigpagedirection 
    });
  }
}
