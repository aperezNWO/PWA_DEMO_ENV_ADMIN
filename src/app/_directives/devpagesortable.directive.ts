import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { DevPage                                } from '../_models/DevPage';

export type _SortColumn    = keyof DevPage  | '';
export type _SortDirection = 'asc' | 'desc' | '';

const rotate: { [key: string]: _SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEvent {
	column   :  _SortColumn;
	direction:  _SortDirection;
}

@Directive({
	selector: 'th[devpagesortable]',
	standalone: true,
	host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
	},
})
export class DevPageSortableHeader {
	@Input() devpagesortable:   _SortColumn    = '';
	@Input() direction      :   _SortDirection = '';
	@Output()                   sort           = new EventEmitter<SortEvent>();

	rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.devpagesortable, direction: this.direction });
	}
}