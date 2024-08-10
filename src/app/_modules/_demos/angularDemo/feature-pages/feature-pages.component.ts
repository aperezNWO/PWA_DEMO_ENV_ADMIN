import { Component, QueryList, ViewChildren               } from '@angular/core';
import { Observable                                       } from 'rxjs';
import { AuthService                                      } from '../../../../_services/_config/auth.service';
import { _BaseModel, ENV_LIST_ANGULAR_DEMO, SiteRole      } from '../../../../_models/common/common'; 
import { _BaseSortEvent, BaseSortableHeader               } from '../../../../_directives/BaseSortableHeader.directive';
import { _BaseService                                     } from '../../../../_services/_config/base.service';
import { _environment                                     } from '../../../../../environments/environment';
//
@Component({
  selector: 'app-feature-pages',
  templateUrl: './feature-pages.component.html',
  styleUrl: './feature-pages.component.css'
})
export class FeaturePagesComponent {
  //
  public featurePagesList!: Observable<_BaseModel[]>;
  public total!           : Observable<number>;
  //
  public ConfigRoleString : string = SiteRole.RoleConfig.toString();
  // 
  @ViewChildren(BaseSortableHeader) headers: QueryList<BaseSortableHeader> | undefined;
  //
  constructor(public service     : _BaseService,
              public authService : AuthService
  ) 
  {
      //
      _environment.pageSettingDictionary[ENV_LIST_ANGULAR_DEMO]._environmentList.forEach((element: any) => {
        service._SEARCH_PAGES.push(element);
        ////console.log(element)
      });
      this.featurePagesList = service.Pagelist;
      this.total            = service.total;
  }
  //
  onSort({ _column, _direction }: _BaseSortEvent) {
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
