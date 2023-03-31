import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SocioService } from 'src/app/_service/socio.service';
import Swal from 'sweetalert2';

export class InformeActualizacionDeDatos {
	Referencia: string;
	Estado: string;
}

@Component({
	selector: 'app-consulta-de-referencias',
	templateUrl: './consulta-de-referencias.component.html',
	styleUrls: ['./consulta-de-referencias.component.scss']
})
export class ConsultaDeReferenciasComponent implements OnInit {


	datosPersonas: InformeActualizacionDeDatos[] = [];

	displayedColumns: string[] = [
		'Referencia',
		'Estado',
	];
	dataSource = new MatTableDataSource<InformeActualizacionDeDatos>;
	/**
	   * traer los datos y organizarlos en una lista
	   * 
	  */
	traerYOrganizarDatos() {
		let detalles;

		this.sociosService.detallesInformeRadicado(this.data.Radicado).subscribe(data => {
			
			
			data.result.forEach(element => {
				detalles = new InformeActualizacionDeDatos();

				detalles.Referencia = element.numDoc
				detalles.Estado = element.nombreEstado


				this.datosPersonas.push(detalles)

			});
			
			this.dataSource = new MatTableDataSource(this.datosPersonas);
		});
	}
	/**
	 * 
	 *Fin de traer los datos
	*/

	constructor(private sociosService: SocioService,
		private router: Router,
		public dialog: MatDialogRef<ConsultaDeReferenciasComponent>,
		@Inject(MAT_DIALOG_DATA) public data) { }


	ngOnInit(): void {
		this.traerYOrganizarDatos()
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}


	

}
