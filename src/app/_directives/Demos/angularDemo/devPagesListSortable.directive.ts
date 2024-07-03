
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { AngularConfig                          } from '../../../_models/AngularDemo/AngularConfig';
//
export type _DevPageSortColumn    = keyof AngularConfig  | '';
export type _DevPageSortDirection = 'asc' | 'desc' | '';
//
const devpagerotate: { [key: string]: _DevPageSortDirection } = { asc: 'desc', desc: '', '': 'asc' };
//
export interface _DevPageSortEvent {
	_column   :  _DevPageSortColumn;
	_direction:  _DevPageSortDirection;
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
	@Input() devpagedirection      :   _DevPageSortDirection = '';
	@Output() devpagesort          = new EventEmitter<_DevPageSortEvent>();
    //
	_rotateDevPage() {
		this.devpagedirection = devpagerotate[this.devpagedirection];
		this.devpagesort.emit({ 
								_column   : this.devpagesortable, 
								_direction: this.devpagedirection 
							  });
	}
}