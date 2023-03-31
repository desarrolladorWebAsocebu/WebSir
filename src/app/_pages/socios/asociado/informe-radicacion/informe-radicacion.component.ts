import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { date } from 'ngx-custom-validators/src/app/date/validator';
import { SocioService } from 'src/app/_service/socio.service';
import Swal from 'sweetalert2';
import { ConsultaDeReferenciasComponent } from './consulta-de-referencias/consulta-de-referencias.component';
import { MatPaginator } from '@angular/material/paginator';


export class InformeRadocacion {
  NumRadicacion: string;
  FechaRadicacion: string;
  Descripcion: string;
  NumDocumentos: string;

  TipoDocumento: string;
  SoporteFisico: string;
  idRadica: number;
}

@Component({
  selector: 'app-informe-radicacion',
  templateUrl: './informe-radicacion.component.html',
  styleUrls: ['./informe-radicacion.component.scss']
})
export class InformeRadicacionComponent implements OnInit,AfterViewInit {

  elemento = new FormGroup({
    FechaInicio: new FormControl(),
    FechaFin: new FormControl(),

  });

  datosRadicado: InformeRadocacion[] = [];

  displayedColumns: string[] = [
    'ver',
    'NumRadicacion',
    'FechaRadicacion',
    'Descripcion',
    'NumDocumentos',
    'TipoDocumento',
    'SoporteFisico',
  ];


  dataSource = new MatTableDataSource<InformeRadocacion>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
     * traer los datos y organizarlos en una lista
     * 
    */
  traerYOrganizarDatos() {
    let radicado;

    let fechaInicio = this.elemento.value.FechaInicio;

    let fechaFin = this.elemento.value.FechaFin;



    if (fechaInicio == null) {
      fechaInicio = String(new Date().getFullYear()) + '.01.01';
    } else {
      fechaInicio = fechaInicio.replace(/-/g, '.');
    }
    if (fechaFin == null) {
      
      fechaFin = String(new Date().getDay()) + ' ' + String(new Date().getMonth() + 1) + ' ' + String(new Date().getFullYear());
      
      let arr = fechaFin.split(' ');

      fechaFin = arr[2] 
      if(Number(arr[1])<10){
        fechaFin=fechaFin+'.0'+arr[1];
      }
      else{
        fechaFin=fechaFin+'.'+arr[1];
      }
      if(Number(arr[0])<10){
        fechaFin=fechaFin+'.0'+arr[0];
      }
      else{
        fechaFin=fechaFin+'.'+arr[0];
      }
    }
    else {
      fechaFin = fechaFin.replace(/-/g, '.');
    }

    for (let i = 0; i < this.datosRadicado.length; i++) {
      this.datosRadicado.pop();
    }

    radicado = null;
    this.dataSource = null;








    this.sociosService.InformeConsultaRadicados(sessionStorage.getItem('Codigo'), fechaInicio, fechaFin).subscribe(data => {


      data.result.forEach(element => {

        radicado = new InformeRadocacion();

        radicado.NumRadicacion = element.numRadica;
        radicado.FechaRadicacion = element.fechaRadica;
        radicado.Descripcion = element.tituloRadica;
        radicado.NumDocumentos = element.noDocRadica;

        radicado.TipoDocumento = element.nombreTipoDoc;
        radicado.SoporteFisico = element.nombreSoporFisico;
        radicado.idRadica = element.idRadica;

        this.datosRadicado.push(radicado)

      });

      this.dataSource = new MatTableDataSource(this.datosRadicado);

      this.dataSource.paginator = this.paginator;
    }, err => {

      Swal.fire(
        '',
        'No se han encontrado datos',
        'warning'
      )
    });


  }


  /**
   * 
   *Fin de traer los datos
  */

  constructor(private sociosService: SocioService,
    private router: Router,
    public dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.traerYOrganizarDatos();
  }
  ngOnInit(): void {
    this.traerYOrganizarDatos()
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onSubmit() {

    this.traerYOrganizarDatos();
  }

  detalles(numRadicado: number) {
    const dialogRef = this.dialog.open(ConsultaDeReferenciasComponent, {
      width: '60%',
      data: { Radicado: numRadicado },
    });
  }

}
