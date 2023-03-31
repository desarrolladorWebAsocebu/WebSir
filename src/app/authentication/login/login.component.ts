import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SocioService } from './../../_service/socio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  elemento = new FormGroup({
    codigoSocio: new FormControl(),
    passWeb: new FormControl(),
    
  });
  
 
  
  constructor(private formBuilder: FormBuilder,
              private router:Router,
              private sociosService:SocioService) {}


  ngOnInit(): void {
    sessionStorage.clear()
  }
  loginform = true;
  recoverform = false;


  onSubmit() { 
    console.log("entro");
    // tslint:disable-next-line:prefer-const
    let codigoSocio=this.elemento.value.codigoSocio;
    // tslint:disable-next-line:prefer-const
    let passWeb= this.elemento.value.passWeb;
    //this.router.navigate(['/'])
    this.sociosService.login(codigoSocio, passWeb).subscribe((data:any)=>{

      /*
      sessionStorage.setItem(environment.TOKEN, data.token)
      sessionStorage.setItem("username", data.username.userName)
      location.reload()
      */
      console.log(data);
      
    }, err =>{
      //this.router.navigate(['/login'])
      this.elemento.controls.codigoSocio.setValue('');
      this.elemento.controls.passWeb.setValue('');
      Swal.fire(
        '',
        'Usuario o contraseña incorrecta',
        'warning'
      )
    });
  }
  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
}
