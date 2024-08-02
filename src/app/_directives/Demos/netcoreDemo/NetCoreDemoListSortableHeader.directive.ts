import { Directive, EventEmitter, Input, Output   } from '@angular/core';
import { netCoreDemo                              } from '../../../_models/netCoreDemo/netCoreDemo';
import { _SortDirection, pagerotate               } from '../../../_models/common/common';
//
export type _NetCoreDemoSortColumn               = keyof netCoreDemo      | '';
//
export interface _NetCoreDemoSortEvent {
	_column   :  _NetCoreDemoSortColumn;
	_direction:  _SortDirection;
}
//
@Directive({
	selector    : 'th[netcoredemosort]',
	host        : {
		'[class.asc]'  : 'direction === "asc"',
		'[class.desc]' : 'direction === "desc"',
		'(click)'      : '_rotateNetCoreDemoPage()',
	},
})
export class NetCoreDemoSortableHeader {
  //
  @Input()  netcoredemosortable       :   _NetCoreDemoSortColumn    = '';
  @Input()  netcoredemodirection      :   _SortDirection = '';
  @Output() netcoredemosort           =   new EventEmitter<_NetCoreDemoSortEvent>();
  //
  _rotateNetCoreDemoPage() {
    this.netcoredemodirection = pagerotate[this.netcoredemodirection];
    this.netcoredemosort.emit({ 
                _column   : this.netcoredemosortable, 
                _direction: this.netcoredemodirection 
                });
  }
}