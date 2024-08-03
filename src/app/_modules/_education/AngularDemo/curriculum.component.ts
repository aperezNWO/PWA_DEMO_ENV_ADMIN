import { Component, QueryList, ViewChildren                       } from '@angular/core';
import { Observable                                               } from 'rxjs';
import { CurriculumSortableHeader, _CurriculumSortEvent           } from '../../../_directives/Demos/angularDemo/curriculumSortable.directive';
import { AngularCurriculum                                        } from '../../../_models/AngularDemo/AngularCurriculum';
import { CurriculumService                                        } from '../../../_services/angularDemo/curriculum.service';
import { SiteRole                                                 } from '../../../_models/common/common';
import { AuthService                                              } from '../../../_services/_config/auth.service';
//
@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {
	//
  public curriculumList!: Observable<AngularCurriculum[]>;
  public total!         : Observable<number>;
  //
  public ConfigRoleString : string = SiteRole.RoleConfig.toString();
  // 
  @ViewChildren(CurriculumSortableHeader) headers: QueryList<CurriculumSortableHeader> | undefined;
  //
  constructor(public service    : CurriculumService,
              public authService: AuthService,
  ) {
    this.curriculumList   = service.curriculumList;
    this.total            = service.total;
  }
  //
  onSort({ _column, _direction }: _CurriculumSortEvent) {
    //
    console.log ("onSort.column   :" + _column);
    //
    console.log ("onSort.direction:" + _column);
    // resetting other headers
    this.headers?.forEach((header) => {
      if (header.curriculumsortable !== _column) {
        header.curriculumdirection= '';
      }
    });
    //
    this.service.sortColumn    = _column;
    this.service.sortDirection = _direction;
}
}




