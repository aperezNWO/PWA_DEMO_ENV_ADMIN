import { Component, QueryList, ViewChildren   } from '@angular/core';
import { Observable                           } from 'rxjs';
import { FeaturePage                          } from '../../_models/FeaturePage';
import { FeaturePageSortableHeader            } from '../../_directives/featurePageListSortable.directive';
import {  _FeaturePageSortEvent               } from '../../_directives/featurePageListSortable.directive';
import { FeaturesPagesListService             } from '../../_services/features-pages-list.service';
//
@Component({
  selector: 'app-feature-pages',
  templateUrl: './feature-pages.component.html',
  styleUrl: './feature-pages.component.css'
})
export class FeaturePagesComponent {
//
public featurePagesList!: Observable<FeaturePage[]>;
public total!           : Observable<number>;
  // 
@ViewChildren(FeaturePageSortableHeader) headers: QueryList<FeaturePageSortableHeader> | undefined;
  //
constructor(public service: FeaturesPagesListService) {
  this.featurePagesList = service.featurepageLists;
  this.total            = service.total;
}
//
onSort({ _column, _direction }: _FeaturePageSortEvent) {
    //
    console.log ("onSort.column   :" + _column);
    //
    console.log ("onSort.direction:" + _column);
    // resetting other headers
    this.headers?.forEach((header) => {
      if (header.featurepagesortable !== _column) {
        header.featurepagedirection= '';
      }
    });
    //
    this.service.sortColumn    = _column;
    this.service.sortDirection = _direction;
}
}
