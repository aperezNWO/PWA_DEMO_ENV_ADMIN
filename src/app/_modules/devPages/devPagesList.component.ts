import { Component, QueryList, ViewChildren        } from '@angular/core';
import { Observable                                } from 'rxjs';
import { DevPageSortableHeader, _DevPageSortEvent  } from '../../_directives/devPagesListSortable.directive';
import { DevPage                                   } from '../../_models/DevPage';
import { mainPagesListService                      } from '../../_services/mainPagesList.service';
//
@Component({
  selector: 'app-devpageslist',
  templateUrl: './devPagesList.component.html',
  styleUrl: './devPagesList.component.css'
})
//
export class DevPagesListsComponent {
    //
	public mainPagesList!: Observable<DevPage[]>;
	public total!        : Observable<number>;
    // 
	@ViewChildren(DevPageSortableHeader) headers: QueryList<DevPageSortableHeader> | undefined;
    //
	constructor(public service: mainPagesListService) {
		this.mainPagesList = service.devpageLists;
		this.total         = service.total;
	}
    //
	onSort({ _column, _direction }: _DevPageSortEvent) {
		//
		console.log ("onSort.column   :" + _column);
		//
		console.log ("onSort.direction:" + _column);
		// resetting other headers
		this.headers?.forEach((header) => {
			if (header.devpagesortable !== _column) {
				header.devpagedirection = '';
			}
		});
		//
		this.service.sortColumn    = _column;
		this.service.sortDirection = _direction;
	}
}


