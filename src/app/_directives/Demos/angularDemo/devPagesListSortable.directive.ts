
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { AngularConfig                          } from '../../../_models/AngularDemo/AngularConfig';
import { _SortDirection, pagerotate             } from '../../../_models/common/common';
//
export type _DevPageSortColumn    = keyof AngularConfig  | '';
//
export interface _DevPageSortEvent {
	_column   :  _DevPageSortColumn;
	_direction:  _SortDirection;
}
//
@Directive({
	selector    : 'th[devpagesort]',
	standalone  : true,
	host        : {
		'[class.asc]'  : 'direction === "asc"',
		'[class.desc]' : 'direction === "desc"',
		'(click)'      : '_rotateDevPage()',
	},
})
//
export class DevPageSortableHeader {
	//
	@Input() devpagesortable       :   _DevPageSortColumn    = '';
	@Input() devpagedirection      :   _SortDirection = '';
	@Output() devpagesort          = new EventEmitter<_DevPageSortEvent>();
    //
	_rotateDevPage() {
		this.devpagedirection = pagerotate[this.devpagedirection];
		this.devpagesort.emit({ 
								_column   : this.devpagesortable, 
								_direction: this.devpagedirection 
							  });
	}
}