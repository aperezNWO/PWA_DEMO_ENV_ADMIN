import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { marketing                              } from '../_models/marketing';
//
export type _MarketingSortColumn    = keyof marketing    | '';
export type _MarketingSortDirection = 'asc' | 'desc'     | '';
//
const marketingrotate: { [key: string]: _MarketingSortDirection } = { asc: 'desc', desc: '', '': 'asc' };
//
export interface _MarketingSortEvent {
	_column   :  _MarketingSortColumn;
	_direction:  _MarketingSortDirection;
}
//
@Directive({
	selector    : 'th[marketingsort]',
	host        : {
		'[class.asc]'  : 'direction === "asc"',
		'[class.desc]' : 'direction === "desc"',
		'(click)'      : '_rotateMarketing()',
	},
})
//
export class MarketingSortableHeader {
  //
  constructor() { 
     //
  }
    //
    @Input() marketingsortable    :   _MarketingSortColumn    = '';
	@Input() marketingdirection   :   _MarketingSortDirection = '';
	@Output() marketingsort       = new EventEmitter<_MarketingSortEvent>();
    //
	_rotateMarketing() {
		this.marketingdirection = marketingrotate[this.marketingdirection];
		this.marketingsort.emit({ 
								_column   : this.marketingsortable, 
								_direction: this.marketingdirection 
							  });
	}
}





