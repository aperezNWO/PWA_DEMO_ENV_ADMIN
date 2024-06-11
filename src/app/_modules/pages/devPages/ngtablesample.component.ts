import { Component                         } from '@angular/core';
import { QueryList, ViewChildren           } from '@angular/core';
import { Observable                        } from 'rxjs';
import { DevPage                           } from '../../../_models/DevPage';
import { DemoService                       } from '../../../_services/demo.service';
import { DevPageSortableHeader, SortEvent             } from '../../../_directives/devpagesortable.directive';
//
@Component({
  selector: 'app-ngtablesample',
  templateUrl: './ngtablesample.component.html',
  styleUrl: './ngtablesample.component.css'
})

export class NgtablesampleComponent {


	public countries!: Observable<DevPage[]>;
	public total!:     Observable<number>;

	@ViewChildren(DevPageSortableHeader) headers: QueryList<DevPageSortableHeader> | undefined;

	constructor(public service: DemoService) {
		this.countries = service.countries;
		this.total     = service.total;
	}

	onSort({ column, direction }: SortEvent) {
		//
		console.log ("onSort.column   :" + column);
		//
		console.log ("onSort.direction:" + column);

		// resetting other headers
		this.headers?.forEach((header) => {
			if (header.devpagesortable !== column) {
				header.direction = '';
			}
		});

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}
}


