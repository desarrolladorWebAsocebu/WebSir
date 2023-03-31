import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SocioService } from 'src/app/_service/socio.service';
import { CambiarContraseniaComponent } from '../info-asociado/cambiar-contrasenia/cambiar-contrasenia.component';
import { DetallesFacturaComponent } from './detalles-factura/detalles-factura.component';

export class Facturacion {
	id:string;
    asociado:string;
    fecha:string;
    factura:string;
    estado:string;
    estadoDescrip:string;
}

@Component({
	selector: 'app-facturacion',
	templateUrl: './facturacion.component.html',
	styleUrls: ['./facturacion.component.scss']
})
export class FacturacionComponent implements OnInit {

	datosfactura: Facturacion[] = [];

	displayedColumns: string[] = ['NumFactura', 'FechaFactura', 'EstadoFactura', 'impresión', 'Detalles'];
	dataSource = new MatTableDataSource(this.datosfactura);
	/**
	   * traer los datos y organizarlos en una lista
	   * 
	  */
	traerYOrganizarDatos() {
		let factura;

		this.sociosService.facturacion(sessionStorage.getItem('Codigo')).subscribe(data => {
			///*
			data.result.forEach(element => {
				factura = new Facturacion();

				factura.id=element.id;
				factura.asociado=element.asociado;
				factura.fecha=element.fecha;
				factura.factura=element.factura;
				factura.estado=element.estado;
				factura.estadoDescrip=element.estadoDescrip;

				this.datosfactura.push(factura);

			});
			//*/
			this.dataSource = new MatTableDataSource(this.datosfactura);
		});
	}
	/**
	 * 
	 *Fin de traer los datos
	*/

	constructor(private sociosService: SocioService,
		private router: Router,
		public dialog: MatDialog) { }


	ngOnInit(): void {
		this.traerYOrganizarDatos()
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}



	detalles(fecha:string) {
		const dialogRef = this.dialog.open(DetallesFacturaComponent, {
			width: '65%',
			data: {fecha},

		});
	}
}
