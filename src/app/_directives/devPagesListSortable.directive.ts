import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { DevPage                                } from '../_models/DevPage';

export type _DevPageSortColumn    = keyof DevPage  | '';
export type _DevPageSortDirection = 'asc' | 'desc' | '';

const rotate: { [key: string]: _DevPageSortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface _DevPageSortEvent {
	column   :  _DevPageSortColumn;
	direction:  _DevPageSortDirection;
}

@Directive({
	selector: 'th[devpagesortable]',
	standalone: true,
	host: {
		'[class.asc]'  : 'direction === "asc"',
		'[class.desc]' : 'direction === "desc"',
		'(click)'      : '_rotateDevPage()',
	},
})

export class DevPageSortableHeader {
	//
	@Input() devpagesortable       :   _DevPageSortColumn    = '';
	@Input() devpagedirection      :   _DevPageSortDirection = '';
	@Output() devpagesort          = new EventEmitter<_DevPageSortEvent>();
    //
	_rotateDevPage() {
		this.devpagedirection = rotate[this.devpagedirection];
		this.devpagesort.emit({ column: this.devpagesortable, direction: this.devpagedirection });
	}
}