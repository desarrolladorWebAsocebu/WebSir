import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  private url:string=`${environment.HOST}Socios/`;

  constructor(private http:HttpClient) { }

  public login(codigoSocio: string, passWeb: string) {
    return this.http.post<any>(this.url + 'login', {
      // tslint:disable-next-line:object-literal-key-quotes
      'codigoSocio':codigoSocio,
      // tslint:disable-next-line:object-literal-key-quotes
      "passWeb": passWeb
    });
  }

  /**
   * 
   * esta seccion es para la informacion de los asociados en la carpeta:
   * app/_pages/socios/asociado/info-asociado
   * 
  */

  public infoAsociado(codigo:string){
    return this.http.get<any>(this.url+"Asociado/informacionDelAsociado?cSocio="+codigo+"&cConsultaPorId=N&nIdNombreSocio=0");
  }

  public direccionesAsociado(codigo:string){
    return this.http.get<any>(this.url+"Asociado/informacionDelAsociado/direccion?codigoSocio="+codigo)
  }
  public personasAutorizadas(codigo:string){
    return this.http.get<any>(this.url+"Asociado/informacionDelAsociado/personasAutorizadas?codigoSocio="+codigo)
  }

  /**
   * 
   * esta seccion es para la informacion de las facturas de los asociados en la carpeta:
   * app/_pages/socios/asociado/facturacion
   * 
  */
  public facturacion(codigo:string){
    return this.http.get<any>(this.url+"Asociado/facturacion?codigoSocio="+codigo)
  }
  public detalleFacturacion(codigo:string,fecha:string){
    return this.http.get<any>(this.url+"Asociado/facturacion/detalles?codigoSocio="+codigo+"&fecha="+fecha)
  }
  /**
   * 
   * esta seccion es para la informacion de la informacion de actualizacion de datos ubicado en la carpeta:
   * app/_pages/socios/asociado/infome-actualizacion-de-datos
   * 
  */
  public informeActualizacionDeDatos(codigo:string,fechaInicio:string,fechaFin:string){
    return this.http.get<any>(this.url+'Asociado/informeActualizacionDeDatos?codigoSocio='+codigo+'&fechaInicio='+fechaInicio+'&fechaFin='+fechaFin)
  }

  /**
   * 
   * esta seccion es para la informacion de la informacion de consulta de radicados ubicado en la carpeta:
   * app/_pages/socios/asociado/infome-consulta-de-radicados
   * 
  */
  public InformeConsultaRadicados(codigo:string,fechaInicio:string,fechaFin:string){
    return this.http.get<any>(this.url+'Asociado/ConsultaRadicados?codigoSocio='+codigo+'&fechaInicio='+fechaInicio+'&fechaFin='+fechaFin)
  }
  public detallesInformeRadicado(idRadica:number){
    return this.http.get<any>(this.url+'Asociado/ConsultaRadicados/detallesRadicacion?CodigoRadicado='+idRadica)
  }

}
