import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocioService } from 'src/app/_service/socio.service';


export class PersonasAutorizadas {
	cedulaPersona: string;
	estadoPersona: string;
	fechaInactiva: string;
	fechaIngreso: string;
	nombrePersona: string;
	obsPersona: string;
}


/**
 * 
 * elementos para el sort
 */

export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': '', '': 'asc' };
export const compare = (v1: number, v2: number) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

export interface SortEvent {
	column: string | null;
	direction: SortDirection;
}

@Directive({
	selector: 'th[sortable]',
	host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()'
	}
})

export class NgbdSortableHeader {

	@Input() sortable: string | null = null;
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent>();

	rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.sortable, direction: this.direction });
	}
}

/**
 * 
 * fin elementos para el sort
*/




@Component({
	selector: 'app-personas-autorizadas',
	templateUrl: './personas-autorizadas.component.html',
	styleUrls: ['./personas-autorizadas.component.scss']
})
export class PersonasAutorizadasComponent implements OnInit {


	/**
	 * declaraciones tabla completa
	*/
	datosPersonas: PersonasAutorizadas[] = [];
	sortClientList: PersonasAutorizadas[] | null = null;
	filterClient: PersonasAutorizadas[] | null = null;
	cfilterClient: PersonasAutorizadas[] | null = null;
	page = 1;
	pageSize = 5;
	clientDetail: PersonasAutorizadas | null = null;
	totalLengthOfCollection: number = this.datosPersonas.length;
	//Sorting purpose...
	@ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader> = Object.create(null);

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;


	displayedColumns: string[] = ['cedulaPersona', 'nombrePersona', 'estadoPersona', 'fechaIngreso', 'fechaInactiva', 'obsPersona'];
	dataSource = new MatTableDataSource(this.datosPersonas);


	/**
	 * fin declaraciones tabla completa
	*/


	/**
	 * traer los datos y organizarlos en una lista
	 * 
	*/
	traerYOrganizarDatos() {
		let direccion;

		this.sociosService.personasAutorizadas(sessionStorage.getItem('Codigo')).subscribe(data => {
			///*
			data.result.forEach(element => {
				direccion = new PersonasAutorizadas();

				direccion.cedulaPersona = element.cedulaPersona;
				direccion.estadoPersona = element.estadoPersona;
				direccion.fechaInactiva = element.fechaInactiva;
				direccion.fechaIngreso = element.fechaIngreso;
				direccion.nombrePersona = element.nombrePersona;
				direccion.obsPersona = element.obsPersona;

				this.datosPersonas.push(direccion)

			});
			//*/
			this.dataSource = new MatTableDataSource(this.datosPersonas);
		});
	}
	/**
	 * 
	 *Fin de traer los datos
	*/



	constructor(private sociosService: SocioService,//paraa consumir el servicio de llamar los datos del api

		private fb: UntypedFormBuilder,
		private modalService: NgbModal) {


		this.filterClient = this.datosPersonas;
		this.cfilterClient = this.datosPersonas;
		this.sortClientList = this.datosPersonas;
		this.totalLengthOfCollection = this.cfilterClient.length;
	}




	ngOnInit(): void {
		this.traerYOrganizarDatos()
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
	/*
	metodo para odenar (sort)
	*/
	onSort({ column, direction }: SortEvent) {
		this.headers.forEach(header => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		// sorting client

		if (direction === '') {
			this.sortClientList = this.datosPersonas;
			this.cfilterClient = this.datosPersonas;
		} else {
			this.sortClientList = [...this.datosPersonas].sort((a, b) => {
				const res = compare(a[column], b[column]);
				return direction === 'asc' ? res : -res;
			});
			this.cfilterClient = [...this.datosPersonas].sort((a, b) => {
				const res = compare(a[column], b[column]);
				return direction === 'asc' ? res : -res;
			});

		}
	}
	/*
	fin metodo para odenar (sort)
	*/

	/**
	 * metodo para filtrar
	 */
	_searchTerm: string = '';
	get searchTerm(): string {
		return this._searchTerm;
	}
	set searchTerm(val: string) {
		this._searchTerm = val;
		this.filterClient = this.filter(val);
	}

	filter(v: string) {
		return this.datosPersonas.filter(x =>
			x.cedulaPersona?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
			x.estadoPersona?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
			x.fechaInactiva?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
			x.fechaIngreso?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
			x.nombrePersona?.toLowerCase().indexOf(v.toLowerCase()) !== -1 ||
			x.obsPersona?.toLowerCase().indexOf(v.toLowerCase()) !== -1);
	}
	/**
	 * Fin metodo para filtrar
	 */


	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

}

