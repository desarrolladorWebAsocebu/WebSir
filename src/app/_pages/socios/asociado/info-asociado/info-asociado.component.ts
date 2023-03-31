import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SocioService } from 'src/app/_service/socio.service';
import { CambiarContraseniaComponent } from './cambiar-contrasenia/cambiar-contrasenia.component';

@Component({
  selector: 'app-info-asociado',
  templateUrl: './info-asociado.component.html',
  styleUrls: ['./info-asociado.component.scss']
})
export class InfoAsociadoComponent implements OnInit {

  constructor(private router: Router,
              private sociosService: SocioService,
              public dialog:MatDialog) { }



  elemento = new FormGroup({
    codigo: new FormControl(),
    nombre: new FormControl(),
    estado: new FormControl(),
    tipoSociedad: new FormControl(),
    tipoIdentificación: new FormControl(),
    numID: new FormControl(),
    representanteLegal: new FormControl(),
    fechaIngreso: new FormControl(),
    fechaRetiro: new FormControl(),
    alertasDenuncios: new FormControl(),
    alertasTraspasos: new FormControl(),
    alertasEmbriones: new FormControl(),
  });

  ngOnInit(): void {
    this.iniciarValores();
  }

  iniciarValores() {

    this.sociosService.infoAsociado(sessionStorage.getItem('Codigo')).subscribe((data: any) => {
      this.elemento.controls.codigo.setValue(sessionStorage.getItem('Codigo'));
      this.elemento.controls.nombre.setValue(sessionStorage.getItem('Nombre'));
      this.elemento.controls.estado.setValue(sessionStorage.getItem('Rol'));


      data.result.forEach(element => {
        this.elemento.controls.tipoSociedad.setValue(element.nombreTipoSoc);
        this.elemento.controls.tipoIdentificación.setValue(element.tipoIdenSocio);
        this.elemento.controls.numID.setValue(element.identiSocio);
        this.elemento.controls.representanteLegal.setValue(element.represSocio);
        this.elemento.controls.fechaIngreso.setValue(element.fecSolSocio);
        this.elemento.controls.fechaRetiro.setValue(element.fechaRetiro);
        this.elemento.controls.alertasDenuncios.setValue(element.alertaDenuncios);
        this.elemento.controls.alertasEmbriones.setValue(element.alertaEmbriones);
        this.elemento.controls.alertasTraspasos.setValue(element.alertaTraspasos);
      });


    });


  }

  cambiarContrasenia(){
    const dialogRef = this.dialog.open(CambiarContraseniaComponent, {
      width: '80%',
      data: {},
    });
  }
}
