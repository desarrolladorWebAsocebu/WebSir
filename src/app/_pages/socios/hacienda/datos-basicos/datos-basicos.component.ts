import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HaciendaService } from 'src/app/_service/hacienda.service';
import Swal from 'sweetalert2';

export class hacienda {
  codigoHda: string;
  nombreHda: string;
  prefijoHda: string;
  nombreZona: string;
  vereda: string;
  ciudadSinZona: string;
  nombreEstado: string;
  obsHda: string;
  contactoHda: string;
  contactoEmailHda: string;
  contactoFaxlHda: string;
  contactoCellHda: string;
  tele1Hda: string;
  tele2Hda: string;
  nombreLocaH: string;
  nombreLocaN: string;
  hierroHda: string;
}

@Component({
  selector: 'app-datos-basicos',
  templateUrl: './datos-basicos.component.html',
  styleUrls: ['./datos-basicos.component.scss']
})
export class DatosBasicosComponent implements OnInit, AfterViewInit {


  @Input() childMessage: any;

  hierroHda1: string;
  constructor(private router: Router,
    private haciendaService: HaciendaService,
    public dialog: MatDialog) { 

  }
  ngAfterViewInit(): void {
    this.iniciarValores();
  }



  elemento = new FormGroup({
    codigo: new FormControl(),
    nombre: new FormControl(),
    prefijo: new FormControl(),
    estado: new FormControl(),
    ciudad: new FormControl(),
    vereda: new FormControl(),
    Obs: new FormControl(),


    name: new FormControl(),
    Celular: new FormControl(),
    Fax: new FormControl(),
    Correo: new FormControl(),
    tel1: new FormControl(),
    tel2: new FormControl(),


    LocNumero: new FormControl(),
    LocHierro: new FormControl(),
    hierro: new FormControl(),



  });

  ngOnInit(): void {
    this.iniciarValores();
  }

  iniciarValores() {

    this.haciendaService.disparador.subscribe((data: any) => {


      this.elemento.controls.codigo.setValue(data.codigoHda);
      this.elemento.controls.nombre.setValue(data.nombreHda);
      this.elemento.controls.prefijo.setValue(data.prefijoHda);


      this.elemento.controls.estado.setValue(data.nombreEstado);
      this.elemento.controls.ciudad.setValue(data.ciudadSinZona);
      this.elemento.controls.vereda.setValue(data.vereda);
      this.elemento.controls.Obs.setValue(data.obsHda);


      this.elemento.controls.name.setValue(data.contactoHda);
      this.elemento.controls.Celular.setValue(data.contactoCellHda);
      this.elemento.controls.Fax.setValue(data.contactoFaxlHda);
      this.elemento.controls.Correo.setValue(data.contactoEmailHda);
      this.elemento.controls.tel1.setValue(data.tele1Hda);
      this.elemento.controls.tel2.setValue(data.tele2Hda);


      this.elemento.controls.LocNumero.setValue(data.nombreLocaN);
      this.elemento.controls.LocHierro.setValue(data.nombreLocaH);
      
      this.hierroHda1= data.hierroHda;


    }, err => {

      Swal.fire(
        '',
        'No se haha seleccionado ninguna hacienda para especificar los datos',
        'warning'
      )
    });

    


  }//spgetlistahaciendasocio

  //spbuscahaciendaid
  //spgetlistaanimaleshdaweb

}
