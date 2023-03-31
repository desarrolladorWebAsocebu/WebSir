import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AnimalesService } from 'src/app/_service/animales.service';
import Swal from 'sweetalert2';
import { DetallesComponent } from './detalles/detalles.component';

export class animales {
  Id: string
  Registro: string
  Numero: string
  NombreEjemplar: string
  Raza: string
  Sx: string
  CodHda: string
  FhNace: string
  Estado: string
  SubEstado: string
  NombreHacienda: string
  Extemporaneidad: string
  Genotipificado: string
  Color: string
}

@Component({
  selector: 'app-listado-animales',
  templateUrl: './listado-animales.component.html',
  styleUrls: ['./listado-animales.component.scss']
})
export class ListadoAnimalesComponent implements OnInit{


  datosAnimales: animales[] = [];

  displayedColumns: string[] = [
    'Mostrar',
    'Registro',
    'Numero',
    'NombreEjemplar',
    'Raza',
    'Sx',
    'CodHda',
    'FhNace',
    'Estado',
    'SubEstado',
    'NombreHacienda',
    'Extemporaneidad',
    'Genotipificado',
    'Color',
  ];


  dataSource = new MatTableDataSource<animales>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  traerYOrganizarDatos() {
    let animal;



    animal = null;
    this.dataSource = null;

    this.animalesService.listarAnimales(sessionStorage.getItem('Codigo')).subscribe(data => {

      
      data.result.forEach(element => {

        animal = new animales();

        //animal.Id=element.
        animal.Registro=element.registroAnimal;
        animal.Numero=element.numeroAnimal;
        animal.NombreEjemplar=element.nombreAnimal;
        animal.Raza=element.codigoRaza;
        animal.Sx=element.sexoAnimal;
        animal.CodHda=element.codigoHda;
        animal.FhNace=element.fechaNace;
        animal.Estado=element.estadoAnimal;
        animal.SubEstado=element.nombreSubEstado;
        animal.NombreHacienda=element.nombreHda;
        animal.Extemporaneidad=element.extempoAnimal;
        animal.Genotipificado=element.genotipo;
        animal.Color=element.nombreColor;
        
        this.datosAnimales.push(animal)
//spBuscaAnimalRecweb
//spanimalpedigriporidgenero
      });

      this.dataSource = new MatTableDataSource(this.datosAnimales);

      this.dataSource.paginator = this.paginator;
      
    }, err => {

      Swal.fire(
        '',
        'No se han encontrado datos',
        'warning'
      )
    });


  }

  constructor(private animalesService: AnimalesService,public dialog:MatDialog) { }
 

  ngOnInit(): void {

    this.traerYOrganizarDatos()
    
  }
  

  detalles(RegistroAnimal:string){
    const dialogRef = this.dialog.open(DetallesComponent, {
      width: '70%',
      height:'90%',
      data: {RegistroAnimal},
    });
  }

}

					  
