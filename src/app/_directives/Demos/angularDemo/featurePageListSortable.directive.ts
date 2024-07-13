import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { AngularFeatures                        } from '../../../_models/AngularDemo/AngularFeatures';
import { _SortDirection, pagerotate             } from '../../../_models/common/common';
//
export type _FeaturePageSortColumn    = keyof AngularFeatures  | '';
//
export interface _FeaturePageSortEvent {
	_column   :  _FeaturePageSortColumn;
	_direction:  _SortDirection;
}
//
@Directive({
	selector    : 'th[featurepagesort]',
	standalone  : true,
	host        : {
		'[class.asc]'  : 'direction === "asc"',
		'[class.desc]' : 'direction === "desc"',
		'(click)'      : '_rotateFeaturePage()',
	},
})
//
export class FeaturePageSortableHeader {
	//
	@Input() featurepagesortable       :   _FeaturePageSortColumn    = '';
	@Input() featurepagedirection      :   _SortDirection = '';
	@Output() featurepagesort          = new EventEmitter<_FeaturePageSortEvent>();
    //
	_rotateFeaturePage() {
		this.featurepagedirection = pagerotate[this.featurepagedirection];
		this.featurepagesort.emit({ 
								_column   : this.featurepagesortable, 
								_direction: this.featurepagedirection 
							  });
	}
}