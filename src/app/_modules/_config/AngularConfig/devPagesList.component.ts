import { Component, QueryList, ViewChildren        } from '@angular/core';
import { Observable                                } from 'rxjs';
import { _BaseModel                                } from '../../../_models/common/common';
import { _BaseSortEvent, BaseSortableHeader        } from '../../../_directives/BaseSortableHeader.directive';
import {  BaseService                              } from '../../../_services/_config/base.service';

//
@Component({
  selector: 'app-devpageslist',
  templateUrl: './devPagesList.component.html',
  styleUrl: './devPagesList.component.css'
})
//
export class DevPagesListsComponent {
    //
	public mainPagesList!: Observable<_BaseModel[]>;
	public total!        : Observable<number>;
    // 
	@ViewChildren(BaseSortableHeader) headers: QueryList<BaseSortableHeader> | undefined;
    //
	constructor(public service: BaseService) {
		this.mainPagesList = service.Pagelist;
		this.total         = service.total;
	}
    //
	onSort({ _column, _direction }: _BaseSortEvent) {
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


