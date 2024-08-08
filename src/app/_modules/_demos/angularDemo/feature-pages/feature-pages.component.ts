import { Component, QueryList, ViewChildren               } from '@angular/core';
import { Observable                                       } from 'rxjs';
import { AngularFeatures                                  } from '../../../../_models/AngularDemo/AngularFeatures';
import { FeaturesPagesListService                         } from '../../../../_services/angularDemo/features-pages-list.service';
import { FeaturePageSortableHeader, _FeaturePageSortEvent } from '../../../../_directives/Demos/angularDemo/featurePageListSortable.directive';
import { AuthService                                      } from '../../../../_services/_config/auth.service';
import { SiteRole                                         } from '../../../../_models/common/common'; 
//
@Component({
  selector: 'app-feature-pages',
  templateUrl: './feature-pages.component.html',
  styleUrl: './feature-pages.component.css'
})
export class FeaturePagesComponent {
  //
  public featurePagesList!: Observable<AngularFeatures[]>;
  public total!           : Observable<number>;
  //
  public ConfigRoleString : string = SiteRole.RoleConfig.toString();
  // 
  @ViewChildren(FeaturePageSortableHeader) headers: QueryList<FeaturePageSortableHeader> | undefined;
  //
  constructor(public service     : FeaturesPagesListService,
              public authService : AuthService
  ) {
      this.featurePagesList = service.featurepageLists;
      this.total            = service.total;
  }
  //
  onSort({ _column, _direction }: _FeaturePageSortEvent) {
      //
      //console.log ("onSort.column   :" + _column);
      //
      //console.log ("onSort.direction:" + _column);
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
