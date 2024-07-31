import { Directive, EventEmitter, Input, Output   } from '@angular/core';
import { CppFeatures                              } from '../../../_models/CppDemo/CppFeatures';
import { _SortDirection, pagerotate               } from '../../../_models/common/common';
//
export type _CppFeatureSortColumn    = keyof CppFeatures      | '';
//
export interface _CppFeaturePageSortEvent {
	_column   :  _CppFeatureSortColumn;
	_direction:  _SortDirection;
}
//
@Directive({
	selector    : 'th[cppfeaturepagesort]',
	host        : {
		'[class.asc]'  : 'direction === "asc"',
		'[class.desc]' : 'direction === "desc"',
		'(click)'      : '_rotateCppFeaturePage()',
	},
})
export class CppFeatureListSortableHeader {
  //
  @Input()  cppfeaturepagesortable       :   _CppFeatureSortColumn    = '';
  @Input()  cppfeaturepagedirection      :   _SortDirection           = '';
  @Output() cppfeaturepagesort          = new EventEmitter<_CppFeaturePageSortEvent>();
  //
  _rotateCppFeaturePage() {
    this.cppfeaturepagedirection = pagerotate[this.cppfeaturepagedirection];
    this.cppfeaturepagesort.emit({ 
                _column   : this.cppfeaturepagesortable, 
                _direction: this.cppfeaturepagedirection 
                });
  }
}