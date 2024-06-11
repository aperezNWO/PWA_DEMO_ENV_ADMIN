import { Component                                       } from '@angular/core';
import { QueryList, ViewChildren                         } from '@angular/core';
import { Observable                                      } from 'rxjs';
import { _DevPageService                                 } from '../../_services/dev-page.service';
import { Dev_Page                                        } from '../../_models/devpage';
import { NgbdSortableHeaderDevPage, SortEventDevPage     } from '../../_services/DevPageSortable.directive';
import { SortEvent } from '../../_services/sortable.directive';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})

export class PagesComponent {

    public _countries!: Observable<Dev_Page[]>;
	public _total!:     Observable<number>;

	@ViewChildren(NgbdSortableHeaderDevPage) headers: QueryList<NgbdSortableHeaderDevPage> | undefined;

	constructor(public service: _DevPageService) {
		this._countries = service.countries;
		this._total     = service.total;
	}
/*
	onSort({ _column, _direction }: SortEventDevPage) {
		// resetting other headers
		this.headers?.forEach((header) => {
			if (header.sortableDevPage !== _column) {
				header.directionDevPage = '';
			}
		});

		this.service.sortColumn    = _column;
		this.service.sortDirection = _direction;
	}
*/		
   //onSort({ column, direction }: SortEvent) {
   onSort(event: Event) {
		//
		console.log("Sort Event: " + event);
		//
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







