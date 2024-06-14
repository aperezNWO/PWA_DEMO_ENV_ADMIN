import { Component                         } from '@angular/core';
import { QueryList, ViewChildren           } from '@angular/core';
import { Observable                        } from 'rxjs';
import { DevPage                           } from '../../../_models/DevPage';
import { mainPagesListService              } from '../../../_services/mainPagesList.service';
import { DevPageSortableHeader, _DevPageSortEvent  } from '../../../_directives/devPagesListSortable.directive';
//
@Component({
  selector: 'app-ngtablesample',
  templateUrl: './ngtablesample.component.html',
  styleUrl: './ngtablesample.component.css'
})

export class NgtablesampleComponent {
    //
	public mainPagesList!: Observable<DevPage[]>;
	public total!        : Observable<number>;
    // 
	@ViewChildren(DevPageSortableHeader) headers: QueryList<DevPageSortableHeader> | undefined;

	constructor(public service: mainPagesListService) {
		this.mainPagesList = service.countries;
		this.total         = service.total;
	}

	onSort({ column, direction }: _DevPageSortEvent) {
		//
		console.log ("onSort.column   :" + column);
		//
		console.log ("onSort.direction:" + column);

		// resetting other headers
		this.headers?.forEach((header) => {
			if (header.devpagesortable !== column) {
				header.devpagedirection = '';
			}
		});

		this.service.sortColumn    = column;
		this.service.sortDirection = direction;
	}
}


