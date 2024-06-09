import { Component                         } from '@angular/core';
import { QueryList, ViewChildren           } from '@angular/core';
import { Observable                        } from 'rxjs';
import { Country                           } from '../../../_models/country';
import { DemoService                       } from '../../../_services/demo.service';
import { NgbdSortableHeader, SortEvent     } from '../../../_services/sortable.directive';
//
@Component({
  selector: 'app-ngtablesample',
  templateUrl: './ngtablesample.component.html',
  styleUrl: './ngtablesample.component.css'
})

export class NgtablesampleComponent {


	public countries!: Observable<Country[]>;
	public total!:     Observable<number>;

	@ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> | undefined;

	constructor(public service: DemoService) {
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

		this.service.sortColumn = column;
		this.service.sortDirection = direction;
	}
}


