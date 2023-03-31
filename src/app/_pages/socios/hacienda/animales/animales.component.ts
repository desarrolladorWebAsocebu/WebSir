import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { HaciendaService } from 'src/app/_service/hacienda.service';

export class Animal {
  Registro: string;
  Numeros: string;
  Raza: string;
  Tiquete: string;
  Nombre: string;
  Sx: string;
  FhNace: string;
  Estado: string;
  SubEstado: string;
  Criador: string;
}

@Component({
  selector: 'app-animales',
  templateUrl: './animales.component.html',
  styleUrls: ['./animales.component.scss']
})
export class AnimalesComponent implements OnInit {


  @Input() childMessage: any;
  

  datosAnimales: Animal[] = [];

  displayedColumns: string[] = [
    'Registro',
    'Numeros',
    'Raza',
    'Tiquete',
    'Nombre',
    'Sx',
    'FhNace',
    'Estado',
    'SubEstado',
    'Criador',
  ];

  

  dataSource = new MatTableDataSource<Animal>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private haciendaService: HaciendaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.traerYOrganizarDatos()
    this.dataSource.paginator = this.paginator;
  }

  traerYOrganizarDatos() {

    this.haciendaService.disparador.subscribe((data: any) => {

      this.haciendaService.traerAnimales(data.IdHda).subscribe(data => {

        let animal;

        animal = null;

        this.dataSource = null;

        data.result.forEach(element => {

          animal = new Animal();

          animal.Registro=element.registroAnimal;
          animal.Numeros=element.numeroAnimal;
          animal.Raza=element.codigoRaza;
          animal.Tiquete=element.noTiquete;
          animal.Nombre=element.nombreAnimal;
          animal.Sx=element.sexoAnimal;
          animal.FhNace=element.fecNaceAnimal;
          animal.Estado=element.estadoAnimal;
          animal.SubEstado=element.nombreSubEstado;
          animal.Criador=element.nombreCriador;


          this.datosAnimales.push(animal)

        });

        this.dataSource = new MatTableDataSource(this.datosAnimales);

        this.dataSource.paginator = this.paginator;

      });

    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
