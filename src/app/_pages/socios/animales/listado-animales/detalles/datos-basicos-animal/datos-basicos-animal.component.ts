import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { AnimalesService } from 'src/app/_service/animales.service';
import { isUndefined } from 'util';

@Component({
  selector: 'app-datos-basicos-animal',
  templateUrl: './datos-basicos-animal.component.html',
  styleUrls: ['./datos-basicos-animal.component.scss']
})
export class DatosBasicosAnimalComponent implements OnInit {

  datosBasicos = new FormGroup({

    PuntosAnimal: new FormControl(),
    IdGeneracion: new FormControl(),
    CodigoGeneracion: new FormControl(),

    EstadoAnimal: new FormControl(),
    CodigoSubEstado: new FormControl(),
    BloqueadoFerias: new FormControl(),

    NombreSocio: new FormControl(),
    CodigoHda: new FormControl(),
    NombreHdaProp: new FormControl(),
    CiudadHda: new FormControl(),
    IdDivision: new FormControl(),
    CodigoDivision: new FormControl(),
    NombreDivision: new FormControl(),
    NombreCriador: new FormControl(),
    CodigoHdaIngreso: new FormControl(),
    NombreHdaIngreso: new FormControl(),

    IdPadre: new FormControl(),
    PadreNoRegistro: new FormControl(),
    PadreNumero: new FormControl(),
    PadreNombre: new FormControl(),
    PadreRaza: new FormControl(),
    PadrePorcRaza: new FormControl(),

    IdMadre: new FormControl(),
    MadreNoRegistro: new FormControl(),
    MadreNumero: new FormControl(),
    MadreNombre: new FormControl(),
    MadreRaza: new FormControl(),
    MadrePorcRaza: new FormControl(),

    NoDoc: new FormControl(),
    NumeroReceptora: new FormControl(),

    idgenotipificacion: new FormControl(),
    FechaGeno: new FormControl(),
  });

  @Input() datos: any;

  constructor(private formBuilder: FormBuilder,
    private animalesService: AnimalesService) {
    this.iniciarValores();
  }

  ngOnInit(): void {
    this.iniciarValores();
  }
  iniciarValores() {
    if (this.datos==undefined){
      this.animalesService.disparador.subscribe((data: any) => {
        this.datosBasicos.controls.PuntosAnimal.setValue(data.puntosAnimal);
        this.datosBasicos.controls.IdGeneracion.setValue(data.idGeneracion);
        this.datosBasicos.controls.CodigoGeneracion.setValue(data.codigoGeneracion);
        this.datosBasicos.controls.EstadoAnimal.setValue(data.estadoAnimal);
        this.datosBasicos.controls.CodigoSubEstado.setValue(data.codigoSubEstado);
        this.datosBasicos.controls.BloqueadoFerias.setValue(data.bloqueadoFerias);
        this.datosBasicos.controls.NombreSocio.setValue(data.nombreSocio);
        this.datosBasicos.controls.CodigoHda.setValue(data.codigoHda);
        this.datosBasicos.controls.NombreHdaProp.setValue(data.nombreHdaProp);
        this.datosBasicos.controls.CiudadHda.setValue(data.ciudadHda);
        this.datosBasicos.controls.IdDivision.setValue(data.idDivision);
        this.datosBasicos.controls.CodigoDivision.setValue(data.codigoDivision);
        this.datosBasicos.controls.NombreDivision.setValue(data.nombreDivision);
        this.datosBasicos.controls.NombreCriador.setValue(data.nombreCriador);
        this.datosBasicos.controls.CodigoHdaIngreso.setValue(data.codigoHdaIngreso);
        this.datosBasicos.controls.NombreHdaIngreso.setValue(data.nombreHdaIngreso);
        this.datosBasicos.controls.IdPadre.setValue(data.idPadre);
        this.datosBasicos.controls.PadreNoRegistro.setValue(data.padreNoRegistro);
        this.datosBasicos.controls.PadreNumero.setValue(data.padreNumero);
        this.datosBasicos.controls.PadreNombre.setValue(data.padreNombre);
        this.datosBasicos.controls.PadreRaza.setValue(data.padreRaza);
        this.datosBasicos.controls.PadrePorcRaza.setValue(data.padrePorcRaza);
        this.datosBasicos.controls.IdMadre.setValue(data.idMadre);
        this.datosBasicos.controls.MadreNoRegistro.setValue(data.madreNoRegistro);
        this.datosBasicos.controls.MadreNumero.setValue(data.madreNumero);
        this.datosBasicos.controls.MadreNombre.setValue(data.madreNombre);
        this.datosBasicos.controls.MadreRaza.setValue(data.madreRaza);
        this.datosBasicos.controls.MadrePorcRaza.setValue(data.madrePorcRaza);
        this.datosBasicos.controls.NoDoc.setValue(data.noDoc);
        this.datosBasicos.controls.NumeroReceptora.setValue(data.numeroReceptora);
        this.datosBasicos.controls.idgenotipificacion.setValue(data.idgenotipificacion);
        this.datosBasicos.controls.FechaGeno.setValue(data.fechaGeno);
      })
    }else{
      
      this.datosBasicos.controls.PuntosAnimal.setValue(this.datos.PuntosAnimal);
      this.datosBasicos.controls.IdGeneracion.setValue(this.datos.IdGeneracion);
      this.datosBasicos.controls.CodigoGeneracion.setValue(this.datos.CodigoGeneracion);
      this.datosBasicos.controls.EstadoAnimal.setValue(this.datos.EstadoAnimal);
      this.datosBasicos.controls.CodigoSubEstado.setValue(this.datos.CodigoSubEstado);
      this.datosBasicos.controls.BloqueadoFerias.setValue(this.datos.BloqueadoFerias);
      this.datosBasicos.controls.NombreSocio.setValue(this.datos.NombreSocio);
      this.datosBasicos.controls.CodigoHda.setValue(this.datos.CodigoHda);
      this.datosBasicos.controls.NombreHdaProp.setValue(this.datos.NombreHdaProp);
      this.datosBasicos.controls.CiudadHda.setValue(this.datos.CiudadHda);
      this.datosBasicos.controls.IdDivision.setValue(this.datos.IdDivision);
      this.datosBasicos.controls.CodigoDivision.setValue(this.datos.CodigoDivision);
      this.datosBasicos.controls.NombreDivision.setValue(this.datos.NombreDivision);
      this.datosBasicos.controls.NombreCriador.setValue(this.datos.NombreCriador);
      this.datosBasicos.controls.CodigoHdaIngreso.setValue(this.datos.CodigoHdaIngreso);
      this.datosBasicos.controls.NombreHdaIngreso.setValue(this.datos.NombreHdaIngreso);
      this.datosBasicos.controls.IdPadre.setValue(this.datos.IdPadre);
      this.datosBasicos.controls.PadreNoRegistro.setValue(this.datos.PadreNoRegistro);
      this.datosBasicos.controls.PadreNumero.setValue(this.datos.PadreNumero);
      this.datosBasicos.controls.PadreNombre.setValue(this.datos.PadreNombre);
      this.datosBasicos.controls.PadreRaza.setValue(this.datos.PadreRaza);
      this.datosBasicos.controls.PadrePorcRaza.setValue(this.datos.PadrePorcRaza);
      this.datosBasicos.controls.IdMadre.setValue(this.datos.IdMadre);
      this.datosBasicos.controls.MadreNoRegistro.setValue(this.datos.MadreNoRegistro);
      this.datosBasicos.controls.MadreNumero.setValue(this.datos.MadreNumero);
      this.datosBasicos.controls.MadreNombre.setValue(this.datos.MadreNombre);
      this.datosBasicos.controls.MadreRaza.setValue(this.datos.MadreRaza);
      this.datosBasicos.controls.MadrePorcRaza.setValue(this.datos.madrePorcRaza);
      this.datosBasicos.controls.NoDoc.setValue(this.datos.NoDoc);
      this.datosBasicos.controls.NumeroReceptora.setValue(this.datos.NumeroReceptora);
      this.datosBasicos.controls.idgenotipificacion.setValue(this.datos.Idgenotipificacion);
      this.datosBasicos.controls.FechaGeno.setValue(this.datos.FechaGeno);
    }
 
  }

}
