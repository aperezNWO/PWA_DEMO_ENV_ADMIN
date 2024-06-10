import { Component                                       } from '@angular/core';
import { QueryList, ViewChildren                         } from '@angular/core';
import { Observable                                      } from 'rxjs';
import { DevPageService                                  } from '../../_services/dev-page.service';
import { Dev_Page                                        } from '../../_models/devpage';
import { NgbdSortableHeaderDevPage, SortEventDevPage     } from '../../_services/DevPageSortable.directive';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})

export class PagesComponent {

    public countries!: Observable<Dev_Page[]>;
	public total!:     Observable<number>;

	@ViewChildren(NgbdSortableHeaderDevPage) headers: QueryList<NgbdSortableHeaderDevPage> | undefined;

	constructor(public service: DevPageService) {
		this.countries = service.countries;
		this.total     = service.total;
	}

	onSort($event: Event) {
		//{ _column, _direction }: SortEventDevPage
		// resetting other headers
		//this.headers?.forEach((header) => {
		//	if (header.sortableDevPage !== _column) {
		//		header.directionDevPage = '';
		//	}

		//this.service.sortColumn    = _column;
		//this.service.sortDirection = _direction;
	};
}







