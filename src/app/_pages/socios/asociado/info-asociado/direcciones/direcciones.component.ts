import { DecimalPipe } from '@angular/common';
import { Component, Directive, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SocioService } from 'src/app/_service/socio.service';

export class Direccion {
	detaDireccion: string;
	emailDireccion: string;
	tel1Direccion: string;
	celularDireccion: string;
	ciudad: string;
}

/**
 * 
 * 
 *  elementos para sort
 * 
 */


export type SortColumn = keyof Direccion | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = { asc: 'desc', desc: '', '': 'asc' };

const compare = (v1: string | number, v2: string | number) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

export interface SortEvent {
	column: SortColumn;
	direction: SortDirection;
}

@Directive({
	selector: 'th[sortable]',
	standalone: true,
	host: {
		'[class.asc]': 'direction === "asc"',
		'[class.desc]': 'direction === "desc"',
		'(click)': 'rotate()',
	},
})
export class NgbdSortableHeader {
	@Input() sortable: SortColumn = '';
	@Input() direction: SortDirection = '';
	@Output() sort = new EventEmitter<SortEvent>();

	rotate() {
		this.direction = rotate[this.direction];
		this.sort.emit({ column: this.sortable, direction: this.direction });
	}
}

/**
 * 
 *  elementos
 */


@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.component.html',
  styleUrls: ['./direcciones.component.scss']
})
export class DireccionesComponent implements OnInit {

  datosDireccion: Direccion[] = [];
  datos=this.datosDireccion;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;


  constructor(private router: Router,
              private sociosService: SocioService,) {}

  ngOnInit(): void {

    let direccion;

    this.sociosService.direccionesAsociado(sessionStorage.getItem('Codigo')).subscribe(data=>{
      
      data.result.forEach(element => {
		direccion=new Direccion();
        direccion.detaDireccion=element.detaDireccion;
        direccion.emailDireccion=element.emailDireccion;
        direccion.tel1Direccion=element.tel1Direccion;
        direccion.celularDireccion=element.celularDireccion;
        direccion.ciudad=element.ciudad;

        this.datosDireccion.push(direccion)
        
      });

    });
  }

  onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});

		// sorting countries
		if (direction === '' || column === '') {
			this.datos=this.datosDireccion;
		} else {
			this.datos = [...this.datosDireccion].sort((a, b) => {
				const res = compare(a[column], b[column]);
				return direction === 'asc' ? res : -res;
			});
		}
	}


}
