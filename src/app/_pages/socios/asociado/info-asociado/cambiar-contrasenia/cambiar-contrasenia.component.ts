import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cambiar-contrasenia',
  templateUrl: './cambiar-contrasenia.component.html',
  styleUrls: ['./cambiar-contrasenia.component.scss']
})
export class CambiarContraseniaComponent implements OnInit {

  elemento = new FormGroup({
    codigo: new FormControl(),
    nuevaContraseña:new FormControl(),
    conformarContraseña:new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    

    
  }
}
