import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { AngularFeatures                        } from '../../../_models/AngularDemo/AngularFeatures';
//
export type _FeaturePageSortColumn    = keyof AngularFeatures  | '';
export type _FeaturePageSortDirection = 'asc' | 'desc'         | '';
//
const featurepagerotate: { [key: string]: _FeaturePageSortDirection } = { asc: 'desc', desc: '', '': 'asc' };
//
export interface _FeaturePageSortEvent {
	_column   :  _FeaturePageSortColumn;
	_direction:  _FeaturePageSortDirection;
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
	@Input() featurepagedirection      :   _FeaturePageSortDirection = '';
	@Output() featurepagesort          = new EventEmitter<_FeaturePageSortEvent>();
    //
	_rotateFeaturePage() {
		this.featurepagedirection = featurepagerotate[this.featurepagedirection];
		this.featurepagesort.emit({ 
								_column   : this.featurepagesortable, 
								_direction: this.featurepagedirection 
							  });
	}
}