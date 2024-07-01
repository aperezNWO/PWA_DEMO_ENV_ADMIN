import { Component, QueryList, ViewChildren                        } from '@angular/core';
import { Observable                                                } from 'rxjs';
import { marketing                                                 } from '../../../_models/marketing';
import { MarketingSortableHeader, _MarketingSortEvent              } from '../../../_directives/marketing.directive';
import { MarketingService                                          } from '../../../_services/marketing.service';
//
@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css'
})
export class MarketingComponent {
//
public marketingList!   : Observable<marketing[]>;
public total!           : Observable<number>;
// 
@ViewChildren(MarketingSortableHeader) headers: QueryList<MarketingSortableHeader> | undefined;
//
constructor(public service: MarketingService) {
  this.marketingList = service.msarketingLists;
  this.total         = service.total;
}
//
onSort({ _column, _direction }: _MarketingSortEvent) {
    //
    console.log ("onSort.column   :" + _column);
    //
    console.log ("onSort.direction:" + _column);
    // resetting other headers
    this.headers?.forEach((header) => {
      if (header.marketingsortable !== _column) {
        header.marketingdirection= '';
      }
    });
    //
    this.service.sortColumn    = _column;
    this.service.sortDirection = _direction;
}
}




