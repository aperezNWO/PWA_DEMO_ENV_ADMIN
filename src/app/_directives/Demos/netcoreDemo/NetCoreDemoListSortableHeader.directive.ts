import { Directive, EventEmitter, Input, Output   } from '@angular/core';
import { netCoreDemo                              } from '../../../_models/netCoreDemo/netCoreDemo';
import { _SortDirection, pagerotate               } from '../../../_models/common/common';
//
export type _NetCoreDemoSortColumn               = keyof netCoreDemo      | '';
//
export interface _NetCoreDemoPageSortEvent {
	_column   :  _NetCoreDemoSortColumn;
	_direction:  _SortDirection;
}
//
@Directive({
	selector    : 'th[netcoredemopagesort]',
	host        : {
		'[class.asc]'  : 'direction === "asc"',
		'[class.desc]' : 'direction === "desc"',
		'(click)'      : '_rotateNetCoreDemoPage()',
	},
})
export class NetCoreDemoListSortableHeader {
  //
  @Input()  netcoredemopagesortable       :   _NetCoreDemoSortColumn    = '';
  @Input()  netcoredemopagedirection      :   _SortDirection = '';
  @Output() netcoredemopagesort          =   new EventEmitter<_NetCoreDemoPageSortEvent>();
  //
  _rotateNetCoreDemoPage() {
    this.netcoredemopagedirection = pagerotate[this.netcoredemopagedirection];
    this.netcoredemopagesort.emit({ 
                _column   : this.netcoredemopagesortable, 
                _direction: this.netcoredemopagedirection 
                });
  }
}