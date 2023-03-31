import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SocioService } from 'src/app/_service/socio.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  elemento = new FormGroup({
    codigoSocio: new FormControl(),
    passWeb: new FormControl(),

  });
  loginform = true;
  recoverform = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private sociosService: SocioService) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }
  onSubmit() {
    // tslint:disable-next-line:prefer-const
    let codigoSocio = this.elemento.value.codigoSocio;
    // tslint:disable-next-line:prefer-const
    let passWeb = this.elemento.value.passWeb;

//    console.log(codigoSocio+'    '+ passWeb)
    this.sociosService.login(codigoSocio, passWeb).subscribe((data: any) => {


      sessionStorage.setItem(environment.TOKEN, data.result.token)

      sessionStorage.setItem('Codigo', data.result.socio.codigoSocio)
      sessionStorage.setItem('Nombre', data.result.socio.nombre)
      sessionStorage.setItem('Rol', data.result.socio.estado)


      //sessionStorage.setItem("username", data.username.userName)
      //location.reload()
      this.router.navigate(['/principal'])
      //console.log(data.statusCode);

    }, err => {
      this.router.navigate(['/login'])
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


/**
 * spsociosBuscarDirecciones
 * spgetlistapersonasAutorizadas
 */


//SpBuscaAnimalFormWeb
