import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { AngularCurriculum                      } from '../../../_models/AngularDemo/AngularCurriculum';
import { _SortDirection, pagerotate             } from '../../../_models/common/common';

//
export type _CurriculumSortColumn    = keyof AngularCurriculum   | '';
//
export interface _CurriculumSortEvent {
	_column   :  _CurriculumSortColumn;
	_direction:  _SortDirection;
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
	@Input() curriculumdirection      :   _SortDirection = '';
	@Output() curriculumsort          = new EventEmitter<_CurriculumSortEvent>();
     //
	__rotateCurriculum() {
		this.curriculumdirection = pagerotate[this.curriculumdirection];
		this.curriculumsort.emit({ 
								_column   : this.curriculumsortable, 
								_direction: this.curriculumdirection 
							  });
	}
}    
//
