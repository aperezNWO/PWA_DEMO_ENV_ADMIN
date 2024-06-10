import { Component                         } from '@angular/core';
import { QueryList, ViewChildren           } from '@angular/core';
import { Observable                        } from 'rxjs';
import { DevPageService                    } from '../../_services/dev-page.service';
import { Dev_Page                          } from '../../_models/devpage';
import { NgbdSortableHeader, SortEvent     } from '../../_services/DevPageSortable.directive';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})

export class PagesComponent {

    public countries!: Observable<Dev_Page[]>;
	public total!:     Observable<number>;

	@ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | undefined;

	constructor(public service: DevPageService) {
		this.countries = service.countries;
		this.total     = service.total;
	}

	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers?.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn    = column;
		this.service.sortDirection = direction;
	}
}






