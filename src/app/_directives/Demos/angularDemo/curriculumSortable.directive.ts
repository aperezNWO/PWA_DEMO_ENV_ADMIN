import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { AngularCurriculum                      } from '../../../_models/AngularDemo/AngularCurriculum';

//
export type _CurriculumSortColumn    = keyof AngularCurriculum   | '';
export type _CurriculumSortDirection = 'asc' | 'desc'     | '';
//
const curriculumrotate: { [key: string]: _CurriculumSortDirection } = { asc: 'desc', desc: '', '': 'asc' };
//
export interface _CurriculumSortEvent {
	_column   :  _CurriculumSortColumn;
	_direction:  _CurriculumSortDirection;
}
//
@Directive({
	selector    : 'th[curriculumsort]',
	standalone  : true,
	host        : {
		'[class.asc]'  : 'direction === "asc"',
		'[class.desc]' : 'direction === "desc"',
		'(click)'      : '__rotateCurriculum()',
	},
})
//
export class CurriculumSortableHeader {
    @Input() curriculumsortable       :   _CurriculumSortColumn    = '';
	@Input() curriculumdirection      :   _CurriculumSortDirection = '';
	@Output() curriculumsort          = new EventEmitter<_CurriculumSortEvent>();
     //
	__rotateCurriculum() {
		this.curriculumdirection = curriculumrotate[this.curriculumdirection];
		this.curriculumsort.emit({ 
								_column   : this.curriculumsortable, 
								_direction: this.curriculumdirection 
							  });
	}
}    
//
