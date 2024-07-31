import { Directive, EventEmitter, Input, Output   } from '@angular/core';
import { netCoreDemo                              } from '../../../_models/netCoreDemo/netCoreDemo';
import { _SortDirection, pagerotate               } from '../../../_models/common/common';
//
export type _NetCoreConfigSortColumn               = keyof netCoreDemo      | '';
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
  @Output() netcoredemopagesort          =   new EventEmitter<_NetCoreConfigPageSortEvent>();
  //
  _rotateNetCoreConfigPage() {
    this.netcoreconfigpagedirection = pagerotate[this.netcoreconfigpagedirection];
    this.netcoredemopagesort.emit({ 
                _column   : this.netcoreconfigpagesortable, 
                _direction: this.netcoreconfigpagedirection 
                });
  }
}