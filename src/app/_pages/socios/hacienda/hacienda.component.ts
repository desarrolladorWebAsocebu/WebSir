import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { SocioService } from 'src/app/_service/socio.service';
import Swal from 'sweetalert2';
import { ConsultaDeReferenciasComponent } from '../asociado/informe-radicacion/consulta-de-referencias/consulta-de-referencias.component';
import { HaciendaService } from './../../../_service/hacienda.service';
import { element } from 'protractor';

export class hacienda {
  codigoHda:string;
  nombreHda:string;
  prefijoHda:string;
  nombreZona:string;
  vereda:string;
  ciudadSinZona:string;
  nombreEstado:string;
  obsHda:string;
  contactoHda:string;
  contactoEmailHda:string;
  contactoFaxlHda:string;
  contactoCellHda:string;
  tele1Hda:string;
  tele2Hda:string;
  nombreLocaH:string;
  nombreLocaN:string;
  hierroHda:string;
  IdHda:string;
}

@Component({
  selector: 'app-hacienda',
  templateUrl: './hacienda.component.html',
  styleUrls: ['./hacienda.component.scss']
})
export class HaciendaComponent implements OnInit {

  datosHaaciendas: hacienda[] = [];

  displayedColumns: string[] = [
    'Codigo',
    'Nombre',
    'Prefijo',
    'Ciudad',
    'Mostrar',
  ];


  dataSource = new MatTableDataSource<hacienda>;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  /**
     * traer los datos y organizarlos en una lista
     * 
    */
  traerYOrganizarDatos() {
    let haciendas;



    haciendas = null;
    this.dataSource = null;

    this.haciendaService.traerHaciendas(sessionStorage.getItem('Codigo')).subscribe(data => {

      
      data.result.forEach(element => {

        haciendas = new hacienda();
        haciendas.codigoHda=element.codigoHda;
        haciendas.nombreHda=element.nombreHda;
        haciendas.prefijoHda=element.prefijoHda;
        haciendas.nombreZona=element.nombreZona;
        haciendas.vereda=element.vereda;
        haciendas.ciudadSinZona=element.ciudadSinZona;
        haciendas.nombreEstado=element.nombreEstado;
        haciendas.obsHda=element.obsHda;
        haciendas.contactoHda=element.contactoHda;
        haciendas.contactoEmailHda=element.contactoEmailHda;
        haciendas.contactoFaxlHda=element.contactoFaxlHda;
        haciendas.contactoCellHda=element.contactoCellHda;
        haciendas.tele1Hda=element.tele1Hda;
        haciendas.tele2Hda=element.tele2Hda;
        haciendas.nombreLocaH=element.nombreLocaH;
        haciendas.nombreLocaN=element.nombreLocaN;
        haciendas.hierroHda=element.hierroHda;


        haciendas.IdHda=element.idHda;

        
        this.datosHaaciendas.push(haciendas)

      });

      this.dataSource = new MatTableDataSource(this.datosHaaciendas);

      this.dataSource.paginator = this.paginator;
      
      let element=this.datosHaaciendas[0];

      this.haciendaService.disparador.emit(element);
      
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

  constructor(
    private haciendaService:HaciendaService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.router.navigate(['hacienda/animales'])
    this.router.navigate(['hacienda/datosBasicos'])
    this.traerYOrganizarDatos()
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onSubmit() {

    this.traerYOrganizarDatos();
  }

  detalles(element) {
    this.haciendaService.disparador.emit(element);
    
  }
}
