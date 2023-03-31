import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AnimalesService } from 'src/app/_service/animales.service';

export class Hijos {
  idAnimal: string;
  registroAnimal: string;
  numeroAnimal: string;
  codigoRaza: string;
  noTiquete: string;
  nombreAnimal: string;
  sexoAnimal: string;
  estadoAnimal: string;
  idMadre: string;
  idPadre: string;
  fecNace: string;
  edad: string;
  numeroRegistroPadre: string;
  numeroPadre: string;
  numeroRegistroMadre: string;
  fechaNaceMadre: string;
  numPartosMadre: string;
  numeroMadre: string;
  nombreCriador: string;
  idHdaRegistro: string;
  codigoHdaCriador: string;
  idNombreHdaRegistro: string;
  nombreHdaCriador: string;
  tipoConcep: string;
  estadoAnimalMadre: string;
  estadoAnimalPadre: string;
  codigoSocio: string;
  codigoHda: string;
  nombreSocio: string;
  nombreHda: string;
  numPartos: string;
  propietarioMadre: string;
  genotipi: string;
  subEstado: string;
}

@Component({
  selector: 'app-hijos',
  templateUrl: './hijos.component.html',
  styleUrls: ['./hijos.component.scss']
})
export class HijosComponent implements OnInit {

  displayedColumns: string[] = [
    'Registro',
    'Numero',
    'Raza',
    'Tiquete',
    'Nombre',
    'Sx',
    'Conc',
    'RegMadre',
    'Regpadre',
    'FechaNacimiento',
    'Criador',
    'HdaCriador',
    'NombreHdaCriador',
    'Estado',
    'SubEstado',
  ];

  dataSource = new MatTableDataSource;

  @Input() idAnimal: any;
  @Input() genero: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datosHijos: Hijos[] = [];

  constructor(private animalesService: AnimalesService) { }

  ngOnInit(): void {
    this.iniciarDatos();
  }
  iniciarDatos() {
    let hijo;
    hijo = null;
    this.dataSource = null;
    this.animalesService.hijos(this.idAnimal, this.genero).subscribe(data => {
      
      if (data.isSuccess) {
        /*
        data.result.forEach(element => {

          hijo = new Hijos();

          hijo.idAnimal=element.result.idAnimal
          hijo.registroAnimal=element.result.registroAnimal
          hijo.numeroAnimal=element.result.numeroAnimal
          hijo.codigoRaza=element.result.codigoRaza
          hijo.noTiquete=element.result.noTiquete
          hijo.nombreAnimal=element.result.nombreAnimal
          hijo.sexoAnimal=element.result.sexoAnimal
          hijo.estadoAnimal=element.result.estadoAnimal
          hijo.idMadre=element.result.idMadre
          hijo.idPadre=element.result.idPadre
          hijo.fecNace=element.result.fecNace
          hijo.edad=element.result.edad
          hijo.numeroRegistroPadre=element.result.numeroRegistroPadre
          hijo.numeroPadre=element.result.numeroPadre
          hijo.numeroRegistroMadre=element.result.numeroRegistroMadre
          hijo.fechaNaceMadre=element.result.fechaNaceMadre
          hijo.numPartosMadre=element.result.numPartosMadre
          hijo.numeroMadre=element.result.numeroMadre
          hijo.nombreCriador=element.result.nombreCriador
          hijo.idHdaRegistro=element.result.idHdaRegistro
          hijo.codigoHdaCriador=element.result.codigoHdaCriador
          hijo.idNombreHdaRegistro=element.result.idNombreHdaRegistro
          hijo.nombreHdaCriador=element.result.nombreHdaCriador
          hijo.tipoConcep=element.result.tipoConcep
          hijo.estadoAnimalMadre=element.result.estadoAnimalMadre
          hijo.estadoAnimalPadre=element.result.estadoAnimalPadre
          hijo.codigoSocio=element.result.codigoSocio
          hijo.codigoHda=element.result.codigoHda
          hijo.nombreSocio=element.result.nombreSocio
          hijo.nombreHda=element.result.nombreHda
          hijo.numPartos=element.result.numPartos
          hijo.propietarioMadre=element.result.propietarioMadre
          hijo.genotipi=element.result.genotipi
          hijo.subEstado=element.result.subEstado


          this.datosHijos.push(hijo)

        });
        */

        //this.dataSource = new MatTableDataSource(this.datosHijos);
        this.dataSource = new MatTableDataSource(data.result);

        this.dataSource.paginator = this.paginator;
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
