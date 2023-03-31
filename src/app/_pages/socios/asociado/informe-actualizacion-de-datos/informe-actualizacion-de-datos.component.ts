import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SocioService } from 'src/app/_service/socio.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { DetallesFacturaComponent } from '../facturacion/detalles-factura/detalles-factura.component';

export class InformeActualizacionDeDatos {
	FechaIngreso:string;
  Direccion:string;
  CiudadDireccion:string;
  Celular:string;
  Telefono1:string;
  Telefono2:string;
  Email:string;
  EstadoTramite:string;
  Facturacion:string;
  Directorio:string;
}

@Component({
  selector: 'app-informe-actualizacion-de-datos',
  templateUrl: './informe-actualizacion-de-datos.component.html',
  styleUrls: ['./informe-actualizacion-de-datos.component.scss']
})
export class InformeActualizacionDeDatosComponent implements OnInit {

  elemento = new FormGroup({
    FechaInicio: new FormControl(),
    FechaFin: new FormControl(),
    
  });
  loginform = true;
  recoverform = false;


  datosPersonas: InformeActualizacionDeDatos[] = [];

	displayedColumns: string[] = [
    'FechaIngreso', 
    'Direccion', 
    'CiudadDireccion', 
    'Celular', 
    'Telefono1',
    'Telefono2',
    'Email',
    'EstadoTramite',
    'Fecturacion',
    'Directorio',
  ];
	dataSource = new MatTableDataSource(this.datosPersonas);

  @ViewChild(MatPaginator) paginator: MatPaginator;

	/**
	   * traer los datos y organizarlos en una lista
	   * 
	  */
	traerYOrganizarDatos(): void {
		let act;

		this.sociosService.informeActualizacionDeDatos(sessionStorage.getItem('Codigo'),"''", "''").subscribe((data:any)=>{
			///*
			data.result.forEach(element => {
				act = new InformeActualizacionDeDatos();

        act.FechaIngreso=element.FechaMovimiento;
        act.Direccion=element.DetaDireccion;
        act.CiudadDireccion=element.CiudadDireccion
        act.Celular=element.CelularDireccion
        act.Telefono1=element.Tel1Direccion
        act.Telefono2=element.Tel2Direccion
        act.Email=element.EmailDireccion
        act.EstadoTramite=element.Estadotramite
        act.Facturacion=element.Facturacion
        act.Directorio=element.Directorio;


				this.datosPersonas.push(act)

			});
			//*/
			this.dataSource = new MatTableDataSource(this.datosPersonas);
      err =>{

        Swal.fire(
          '',
          'No se han encontrado datos',
          'warning'
        )
      }});
	}
	/**
	 * 
	 *Fin de traer los datos
	*/

	constructor(private sociosService: SocioService,
		private router: Router,
		public dialog: MatDialog) { }


	ngOnInit(): void {
		this.traerYOrganizarDatos();
    this.dataSource.paginator = this.paginator;
	}

	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}


  onSubmit() { 

    let act;
     
    let inicio=this.elemento.value.FechaInicio;

    let fin= this.elemento.value.FechaFin;

    this.sociosService.informeActualizacionDeDatos(sessionStorage.getItem('Codigo'),inicio, fin).subscribe((data:any)=>{
      data.result.forEach(element => {
				act = new InformeActualizacionDeDatos();

        act.FechaIngreso=element.FechaMovimiento;
        act.Direccion=element.DetaDireccion;
        act.CiudadDireccion=element.CiudadDireccion
        act.Celular=element.CelularDireccion
        act.Telefono1=element.Tel1Direccion
        act.Telefono2=element.Tel2Direccion
        act.Email=element.EmailDireccion
        act.EstadoTramite=element.Estadotramite
        act.Facturacion=element.Facturacion
        act.Directorio=element.Directorio;


				this.datosPersonas.push(act)

			});
			//*/
			this.dataSource = new MatTableDataSource(this.datosPersonas);
    }, err =>{

      Swal.fire(
        '',
        'No se han encontrado datos',
        'warning'
      )
    });
  }


}
