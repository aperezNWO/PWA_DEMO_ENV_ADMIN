import { Directive, EventEmitter, Input, Output   } from '@angular/core';
import { _SortDirection, pagerotate               } from '../../../_models/common/common';
import { NetCoreConfig                            } from '../../../_models/netCoreDemo/netCoreConfig';
//
export type _NetCoreConfigSortColumn              = keyof NetCoreConfig      | '';
//
export interface _NetCoreConfigPageSortEvent {
	_column   :  _NetCoreConfigSortColumn;
	_direction:  _SortDirection;
}
//
@Directive({
	selector    : 'th[netcoreconfigpagesort]',
	host        : {
		'[class.asc]'  : 'direction === "asc"',
		'[class.desc]' : 'direction === "desc"',
		'(click)'      : '_rotateNetCoreConfigPage()',
	},
})
export class NetCoreConfigListSortableHeader {
  //
  @Input()  netcoreconfigpagesortable       :   _NetCoreConfigSortColumn    = '';
  @Input()  netcoreconfigpagedirection      :   _SortDirection = '';
  @Output() netcoreconfigpagesort          =   new EventEmitter<_NetCoreConfigPageSortEvent>();
  //
  _rotateNetCoreConfigPage() {
    this.netcoreconfigpagedirection = pagerotate[this.netcoreconfigpagedirection];
    this.netcoreconfigpagesort.emit({ 
                _column   : this.netcoreconfigpagesortable, 
                _direction: this.netcoreconfigpagedirection 
                });
  }
}