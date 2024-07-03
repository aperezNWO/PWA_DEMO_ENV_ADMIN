import { Directive, EventEmitter, Input, Output   } from '@angular/core';
import { CppFeatures                              } from '../../../_models/CppDemo/CppFeatures';
//
export type _CppFeatureSortColumn    = keyof CppFeatures      | '';
export type _CppFeatureSortDirection = 'asc' | 'desc'         | '';
//
const cppfeaturepagerotate: { [key: string]: _CppFeatureSortDirection } = { asc: 'desc', desc: '', '': 'asc' };
//
export interface _CppFeaturePageSortEvent {
	_column   :  _CppFeatureSortColumn;
	_direction:  _CppFeatureSortDirection;
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
  @Input()  cppfeaturepagedirection      :   _CppFeatureSortDirection = '';
  @Output() cppfeaturepagesort          = new EventEmitter<_CppFeaturePageSortEvent>();
  //
  _rotateCppFeaturePage() {
    this.cppfeaturepagedirection = cppfeaturepagerotate[this.cppfeaturepagedirection];
    this.cppfeaturepagesort.emit({ 
                _column   : this.cppfeaturepagesortable, 
                _direction: this.cppfeaturepagedirection 
                });
  }
}