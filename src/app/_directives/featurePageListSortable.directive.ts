import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { FeaturePage                            } from '../_models/FeaturePage';
//
export type _FeaturePageSortColumn    = keyof FeaturePage  | '';
export type _FeaturePageSortDirection = 'asc' | 'desc'     | '';
//
const featurepagerotate: { [key: string]: _FeaturePageSortDirection } = { asc: 'desc', desc: '', '': 'asc' };
//
export interface _DevPageSortEvent {
	_column   :  _FeaturePageSortColumn;
	_direction:  _FeaturePageSortDirection;
}
//
@Directive({
	selector    : 'th[featurepagesortable]',
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
	@Output() featurepagesort          = new EventEmitter<_DevPageSortEvent>();
    //
	_rotateFeaturePage() {
		this.featurepagedirection = featurepagerotate[this.featurepagedirection];
		this.featurepagesort.emit({ 
								_column   : this.featurepagesortable, 
								_direction: this.featurepagedirection 
							  });
	}
}