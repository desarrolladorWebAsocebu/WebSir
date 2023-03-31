import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HaciendaService {
  private url:string=`${environment.HOST}Socios/hacienda/`;

  constructor(private http:HttpClient,) { }

  public traerHaciendas(codigoSocio:string){
    return this.http.get<any>(this.url+'listahaciendas?codigoSocio='+codigoSocio)
  }

  @Output() disparador: EventEmitter<any>=new EventEmitter();

  public traerAnimales(idHacienda:string){

    return this.http.get<any>(this.url+'animalesHacienda?codigoHacienda='+idHacienda)
  }

}
