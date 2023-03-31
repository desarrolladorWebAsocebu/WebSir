import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {
  private url:string=`${environment.HOST}Animales/`;

  constructor(private http:HttpClient,) { }

  public listarAnimales(codSocio:string){
    return this.http.get<any>(this.url+'listaAnimales?codSocio='+codSocio)
  }
  public listarDetallesAnimales(registro:string){
    return this.http.get<any>(this.url+'listaAnimales/detalles?registro='+registro)
  }
  @Output() disparador: EventEmitter<any>=new EventEmitter();
  public genealogia(idAnimal:string){
    return this.http.get<any>(this.url+'listaAnimales/detalles/genealogia?idAnimal='+idAnimal)
  }
  public hijos(idAnimal:string, genero:string){
    return this.http.get<any>(this.url+'listaAnimales/detalles/Hijos?idAnimal='+idAnimal+'&sexoAnimal='+genero)
  }
}
