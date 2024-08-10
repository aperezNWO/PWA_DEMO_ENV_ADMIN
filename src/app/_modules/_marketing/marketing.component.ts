import { Component, QueryList, ViewChildren                        } from '@angular/core';
import { Observable                                                } from 'rxjs';
import { _BaseService                                              } from '../../_services/_config/base.service';
import { _BaseModel                                                } from '../../_models/common/common';
import { _environment                                              } from '../../../environments/environment';
import { _BaseSortEvent, BaseSortableHeader                        } from '../../_directives/BaseSortableHeader.directive';
//
@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.css'
})
export class MarketingComponent {   
//
public marketingList!   : Observable<_BaseModel[]>;
public total!           : Observable<number>;
// 
@ViewChildren(BaseSortableHeader) headers: QueryList<BaseSortableHeader> | undefined;
//
constructor(public service: _BaseService) 
{
  //
  this.marketingList   = service.Pagelist;
  this.total            = service.total;
  //
  _environment.pageSettingDictionary['']._environmentList.forEach((element: any) => {
    service._SEARCH_PAGES.push(element);
  });
}
//
onSort({ _column, _direction }: _BaseSortEvent) {
    //
    //console.log ("onSort.column   :" + _column);
    //
    //console.log ("onSort.direction:" + _column);
    // resetting other headers
    this.headers?.forEach((header) => {
      if (header.sortable !== _column) {
        header.direction= '';
      }
    });
    //
    this.service.sortColumn    = _column;
    this.service.sortDirection = _direction;
}
}




