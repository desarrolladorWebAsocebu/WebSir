import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AnimalesService } from 'src/app/_service/animales.service';
import { DatosBasicosAnimalComponent } from './datos-basicos-animal/datos-basicos-animal.component';

export class detallesAnimal {
  IdAnimal: string              //se usa 1
  RegistroAnimal: string        //se usa 1.1
  NumeroAnimal:string           //se usa 1.1
  NombreAnimal: string          //se usa 1
  NacidoPor: string             //se usa 1
  NacidoPorCompleto: string     //se usa 1
  TipoConcep: string            //se usa 1
  TipoConcepConpleto: string    //se usa 1
  IdAnimalGemelo: string        //se usa 1 mas o menos
  GemeloRegistro:string         //se usa 1
  NombreRaza: string            //se usa 1
  NombreColor: string           //se usa 1
  FechaRegistro: string         //se usa 1
  FechaNace: string             //se usa 1
  NoTiquete: string             //se usa 1
  FechaRad: string              //se usa 1
  SexoAnimalCompleto: string    //se usa 1
  ExtempoAnimal:string          //se usa 1
  EstadoAnimal: string            //se usa 2 estado
  IdDivision: string              //se usa 2 propietario/criador
  NombreCriador: string           //se usa 2 propietario/criador
  CodigoDivision: string          //se usa 2 propietario/criador
  NombreDivision: string          //se usa 2 propietario/criador
  CodigoHdaIngreso: string        //se usa 2 propietario/criador
  CiudadHda: string               //se usa 2 propietario/criador
  idgenotipificacion: string      //se usa 2 genotipificacion
  FechaGeno: string               //se usa 2 genotipificacion
  IdPadre: string                 //se usa 2 padre
  PadreNoRegistro: string         //se usa 2 padre
  PadreNumero: string             //se usa 2 padre
  PadreNombre: string             //se usa 2 padre
  PadreRaza: string               //se usa 2 padre
  PadrePorcRaza: string           //se usa 2 padre
  IdMadre: string                 //se usa 2 madre
  MadreNoRegistro: string         //se usa 2 madre
  MadreNumero: string             //se usa 2 madre
  MadreNombre: string             //se usa 2 madre
  MadreRaza: string               //se usa 2 madre
  MadrePorcRaza: string           //se usa 2 madre
  NombreSocio: string             //se usa 2 propietario/criador
  CodigoHda: string               //se usa 2 propietario/criador
  CodigoSubEstado: string         //se usa 2 estado
  PuntosAnimal: string            //se usa 2 clasificadas
  IdGeneracion: string            //se usa 2 clasificadas
  CodigoGeneracion: string        //se usa 2 clasificadas
  NumeroReceptora: string         //se usa 2 embriones
  BloqueadoFerias: string         //se usa 2 estado
  NoDoc:string                    //se usa 2 embriones
}

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent implements OnInit {

  NroRegistro:string;

  redireccion:string;

  idAnimal:string;

  datos:detallesAnimal;

  constructor(public dialogRef: MatDialogRef<DetallesComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private animalesService:AnimalesService) { }


  datosIniciales = new FormGroup({
    NroRegistro: new FormControl(),
    Numero: new FormControl(),
    Nombre: new FormControl(),
  });
  InformacionDelRegistro = new FormGroup({
    FechaRegistro: new FormControl(),
    NoTiquete: new FormControl(),
    FechaRad: new FormControl(),
    ExtempoAnimal: new FormControl(),
    SexoAnimalCompleto: new FormControl(),
    NombreRaza: new FormControl(),
    NacidoPorCompleto: new FormControl(),
    FechaNace: new FormControl(),
    IdAnimalGemelo: new FormControl(),
    Hermano: new FormControl(),
    TipoConcepCompleto: new FormControl(),
    NombreColor: new FormControl(),
  });
  ngOnInit(): void {
    this.redireccion="DatosBasicos";
    this.NroRegistro=this.data.RegistroAnimal;
    this.iniciarValores();
    //console.log(this.data.RegistroAnimal);
  }
  iniciarValores(){
    this.animalesService.listarDetallesAnimales(this.NroRegistro).subscribe(data=>{

      this.idAnimal=data.result.idAnimal;

      //this.elemento.controls.NroRegistro.setValue(this.data.registroAnimal);
      this.datosIniciales.controls.Numero.setValue(data.result.numeroAnimal);
      this.datosIniciales.controls.Nombre.setValue(data.result.nombreAnimal);
      //
      this.InformacionDelRegistro.controls.FechaRegistro.setValue(data.result.fechaRegistro);
      this.InformacionDelRegistro.controls.NoTiquete.setValue(data.result.noTiquete);
      this.InformacionDelRegistro.controls.FechaRad.setValue(data.result.fechaRad);
      this.InformacionDelRegistro.controls.ExtempoAnimal.setValue(data.result.extempoAnimal);
      this.InformacionDelRegistro.controls.SexoAnimalCompleto.setValue(data.result.sexoAnimalCompleto);
      this.InformacionDelRegistro.controls.NombreRaza.setValue(data.result.nombreRaza);
      this.InformacionDelRegistro.controls.NacidoPorCompleto.setValue(data.result.nacidoPorCompleto);
      this.InformacionDelRegistro.controls.FechaNace.setValue(data.result.fechaNace);
      this.InformacionDelRegistro.controls.IdAnimalGemelo.setValue(data.result.idAnimalGemelo);
      this.InformacionDelRegistro.controls.Hermano.setValue(data.result.gemeloRegistro);
      this.InformacionDelRegistro.controls.TipoConcepCompleto.setValue(data.result.tipoConcepCompleto);
      this.InformacionDelRegistro.controls.NombreColor.setValue(data.result.nombreColor);


      this.animalesService.disparador.emit(data.result);




      this.datos=new detallesAnimal();
      this.datos.IdAnimal=data.result.idAnimal;
      this.datos.RegistroAnimal=data.result.registroAnimal;
      this.datos.NumeroAnimal=data.result.numeroAnimal;
      this.datos.NombreAnimal=data.result.nombreAnimal;
      this.datos.NacidoPor=data.result.nacidoPor;
      this.datos.NacidoPorCompleto=data.result.nacidoPorCompleto;
      this.datos.TipoConcep=data.result.tipoConcep;
      this.datos.TipoConcepConpleto=data.result.tipoConcepConpleto;
      this.datos.IdAnimalGemelo=data.result.idAnimalGemelo;
      this.datos.GemeloRegistro=data.result.gemeloRegistro;
      this.datos.NombreRaza=data.result.nombreRaza;
      this.datos.NombreColor=data.result.nombreColor;
      this.datos.FechaRegistro=data.result.fechaRegistro;
      this.datos.FechaNace=data.result.fechaNace;
      this.datos.NoTiquete=data.result.noTiquete;
      this.datos.FechaRad=data.result.fechaRad;
      this.datos.SexoAnimalCompleto=data.result.sexoAnimalCompleto;
      this.datos.ExtempoAnimal=data.result.extempoAnimal;
      this.datos.EstadoAnimal=data.result.estadoAnimal;
      this.datos.IdDivision=data.result.idDivision;
      this.datos.NombreCriador=data.result.nombreCriador;
      this.datos.CodigoDivision=data.result.codigoDivision;
      this.datos.NombreDivision=data.result.nombreDivision;
      this.datos.CodigoHdaIngreso=data.result.codigoHdaIngreso;
      this.datos.CiudadHda=data.result.ciudadHda;
      this.datos.idgenotipificacion=data.result.idgenotipificacion;
      this.datos.FechaGeno=data.result.fechaGeno;
      this.datos.IdPadre=data.result.idPadre;
      this.datos.PadreNoRegistro=data.result.padreNoRegistro;
      this.datos.PadreNumero=data.result.padreNumero;
      this.datos.PadreNombre=data.result.padreNombre;
      this.datos.PadreRaza=data.result.padreRaza;
      this.datos.PadrePorcRaza=data.result.padrePorcRaza;
      this.datos.IdMadre=data.result.idMadre;
      this.datos.MadreNoRegistro=data.result.madreNoRegistro;
      this.datos.MadreNumero=data.result.madreNumero;
      this.datos.MadreNombre=data.result.madreNombre;
      this.datos.MadreRaza=data.result.madreRaza;
      this.datos.MadrePorcRaza=data.result.madrePorcRaza;
      this.datos.NombreSocio=data.result.nombreSocio;
      this.datos.CodigoHda=data.result.codigoHda;
      this.datos.CodigoSubEstado=data.result.codigoSubEstado;
      this.datos.PuntosAnimal=data.result.puntosAnimal;
      this.datos.IdGeneracion=data.result.idGeneracion;
      this.datos.CodigoGeneracion=data.result.codigoGeneracion;
      this.datos.NumeroReceptora=data.result.numeroReceptora;
      this.datos.BloqueadoFerias=data.result.bloqueadoFerias;
      this.datos.NoDoc=data.result.noDoc;
    })
  }
  onSubmit(){
    this.iniciarValores();
  }
  ventana(valor:any){
    this.redireccion=valor;
  }

  objeto(){
    
  }

}
