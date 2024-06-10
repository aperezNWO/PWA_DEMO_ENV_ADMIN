import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { Dev_Page                               } from '../_models/devpage';

export type SortColumnDevPage                         = keyof Dev_Page | '';
export type SortDirectionDevPage                      = 'asc' | 'desc' | '';

const rotate: { [key: string]: SortDirectionDevPage } = { asc: 'desc', desc: '', '': 'asc' };

export interface SortEventDevPage {
	_column    :  SortColumnDevPage;
	_direction :  SortDirectionDevPage;
}

@Directive({
	selector   : 'th[sortable]',
	standalone : true,
	host       : {
		'[class.asc]' : 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)'     : 'rotate()',
	},
})
export class NgbdSortableHeaderDevPage {
	@Input()  sortableDevPage  : SortColumnDevPage    = '';
	@Input()  directionDevPage : SortDirectionDevPage = '';
	@Output() _sort                                   = new EventEmitter<SortEventDevPage>();

	rotate() {
		this.directionDevPage = rotate[this.directionDevPage];
		this._sort.emit({ _column: this.sortableDevPage, _direction: this.directionDevPage });
	}
}