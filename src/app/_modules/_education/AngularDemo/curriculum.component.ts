import { Component, QueryList, ViewChildren                       } from '@angular/core';
import { Observable                                               } from 'rxjs';
import { _BaseModel, SiteRole                                     } from '../../../_models/common/common';
import { AuthService                                              } from '../../../_services/_config/auth.service';
import { _BaseService                                             } from '../../../_services/_config/base.service';
import { _BaseSortEvent, BaseSortableHeader                       } from '../../../_directives/BaseSortableHeader.directive';
import { _environment                                             } from '../../../../environments/environment';
//
@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {
	//
  public curriculumList!: Observable<_BaseModel[]>;
  public total!         : Observable<number>;
  //
  public ConfigRoleString : string = SiteRole.RoleConfig.toString();
  // 
  @ViewChildren(BaseSortableHeader) headers: QueryList<BaseSortableHeader> | undefined;
  //
  constructor( public authService: AuthService,
               public service: _BaseService
              ) 
  {
    //
    this.curriculumList   = service.Pagelist;
    this.total            = service.total;
    //
    _environment.AngularCurriculum_base.forEach((element: any) => {
      service._SEARCH_PAGES.push(element);
      //console.log(element)
    });
  }
  //
  onSort({ _column, _direction }: _BaseSortEvent) {
    //
    console.log ("onSort.column   :" + _column);
    //
    console.log ("onSort.direction:" + _column);
    // resetting other headers
    this.headers?.forEach((header) => {
      if (header.sortable !== _column) {
        header.direction = '';
      }
    });
    //
    this.service.sortColumn    = _column;
    this.service.sortDirection = _direction; 
  }
}




