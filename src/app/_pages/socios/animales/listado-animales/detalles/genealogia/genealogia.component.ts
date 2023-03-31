import { Component, Input, OnInit } from '@angular/core';
import { AnimalesService } from 'src/app/_service/animales.service';

export class genealogia {
  registroGene: string;
  numeroAnimal: string;
  nombreAnimal: string;
  fecNaceAnimal: string;
  sexo: string;
  razaAnimal: string;
  tipoConcep: string;
  colorAnimal: string;
  anulado: string;
  nombreCriador: string;
  idPadre: string;
  regPadre: string;
  nroPadre: string;
  nomPadre: string;
  rzPadre: string;
  rzNomPadre: string;
  idMadre: string;
  regMadre: string;
  nroMadre: string;
  nomMadre: string;
  rzMadre: string;
  rzNomMadre: string;
  idAbueloP: string;
  nroAbueloP: string;
  nomAbueloP: string;
  regAbueloP: string;
  rzAbueloP: string;
  idBisAbP1: string;
  nroBisAbloP1: string;
  nomBisAbloP1: string;
  regBisAbloP1: string;
  rzBisAboP1: string;
  idBisAbP2: string;
  nroBisAblaP1: string;
  nomBisAblaP1: string;
  regBisAblaP1: string;
  rzBisAbaP1: string;
  idAbuelaP: string;
  nroAbuelaP: string;
  nomAbuelaP: string;
  regAbuelaP: string;
  rzAbuelaP: string;
  idBisAbloP2: string;
  nroBisAbloP2: string;
  nomBisAbloP2: string;
  regBisAbloP2: string;
  rzBisAbop2: string;
  idBisAblaP2: string;
  nroBisAblaP2: string;
  nomBisAblaP2: string;
  regBisAblaP2: string;
  rzBisAbap2: string;
  idAbueloM: string;
  nroAbueloM: string;
  nomAbueloM: string;
  regAbueloM: string;
  rzAbueloM: string;
  idBisAbloM1: string;
  nroBisAbloM1: string;
  nomBisAbloM1: string;
  regBisAbloM1: string;
  rzBisAboM1: string;
  idBisAblaM1: string;
  nroBisAblaM1: string;
  nomBisAblaM1: string;
  regBisAblaM1: string;
  rzBisAbaM1: string;
  idAbuelaM: string;
  nroAbuelaM: string;
  nomAbuelaM: string;
  regAbuelaM: string;
  rzAbuelaM: string;
  idBisAbloM2: string;
  nroBisAbloM2: string;
  nomBisAbloM2: string;
  regBisAbloM2: string;
  rzBisAboM2: string;
  idBisAblaM2: string;
  nroBisAblaM2: string;
  nomBisAblaM2: string;
  regBisAblaM2: string;
  rzBisAbaM2: string;
  idCriador: string;
  exterior: string;
  idPropietario: string;
  fechaSistema: string;
  genotipificacion: string;
  extempoAnimal: string;
}

@Component({
  selector: 'app-genealogia',
  templateUrl: './genealogia.component.html',
  styleUrls: ['./genealogia.component.scss']
})
export class GenealogiaComponent implements OnInit {

  genealigia:genealogia=new genealogia();
  tipo:string='Padre';
  @Input() idAnimal: any;

  constructor(private animalesService:AnimalesService) { }

  ngOnInit(): void {
    this.iniciarDatos();
  }
  iniciarDatos(){
    
    this.animalesService.genealogia(this.idAnimal).subscribe(data=>{
      this.genealigia.registroGene=data.result.registroGene;
      this.genealigia.numeroAnimal=data.result.numeroAnimal;
      this.genealigia.nombreAnimal=data.result.nombreAnimal;
      this.genealigia.fecNaceAnimal=data.result.fecNaceAnimal;
      this.genealigia.sexo=data.result.sexo;
      this.genealigia.razaAnimal=data.result.razaAnimal;
      this.genealigia.tipoConcep=data.result.tipoConcep;
      this.genealigia.colorAnimal=data.result.colorAnimal;
      this.genealigia.anulado=data.result.anulado;
      this.genealigia.nombreCriador=data.result.nombreCriador;


      this.genealigia.idPadre=data.result.idPadre;
      this.genealigia.regPadre=data.result.regPadre;
      this.genealigia.nroPadre=data.result.nroPadre;
      this.genealigia.nomPadre=data.result.nomPadre;
      this.genealigia.rzPadre=data.result.rzPadre;
      this.genealigia.rzNomPadre=data.result.rzNomPadre;
      
      this.genealigia.idAbueloP=data.result.idAbueloP;
      this.genealigia.nroAbueloP=data.result.nroAbueloP;
      this.genealigia.nomAbueloP=data.result.nomAbueloP;
      this.genealigia.regAbueloP=data.result.regAbueloP;
      this.genealigia.rzAbueloP=data.result.rzAbueloP;

      this.genealigia.idAbuelaP=data.result.idAbuelaP;
      this.genealigia.nroAbuelaP=data.result.nroAbuelaP;
      this.genealigia.nomAbuelaP=data.result.nomAbuelaP;
      this.genealigia.regAbuelaP=data.result.regAbuelaP;
      this.genealigia.rzAbuelaP=data.result.rzAbuelaP;

      this.genealigia.idBisAbP1=data.result.idBisAbP1;
      this.genealigia.nroBisAbloP1=data.result.nroBisAbloP1;
      this.genealigia.nomBisAbloP1=data.result.nomBisAbloP1;
      this.genealigia.regBisAbloP1=data.result.regBisAbloP1;
      this.genealigia.rzBisAboP1=data.result.rzBisAboP1;

      this.genealigia.idBisAbP2=data.result.idBisAbP2;
      this.genealigia.nroBisAblaP1=data.result.nroBisAblaP1;
      this.genealigia.nomBisAblaP1=data.result.nomBisAblaP1;
      this.genealigia.regBisAblaP1=data.result.regBisAblaP1;
      this.genealigia.rzBisAbaP1=data.result.rzBisAbaP1;

      this.genealigia.idBisAbloP2=data.result.idBisAbloP2;
      this.genealigia.nroBisAbloP2=data.result.nroBisAbloP2;
      this.genealigia.nomBisAbloP2=data.result.nomBisAbloP2;
      this.genealigia.regBisAbloP2=data.result.regBisAbloP2;
      this.genealigia.rzBisAbop2=data.result.rzBisAbop2;
      
      this.genealigia.idBisAblaP2=data.result.idBisAblaP2;
      this.genealigia.nroBisAblaP2=data.result.nroBisAblaP2;
      this.genealigia.nomBisAblaP2=data.result.nomBisAblaP2;
      this.genealigia.regBisAblaP2=data.result.regBisAblaP2;
      this.genealigia.rzBisAbap2=data.result.rzBisAbap2;



      this.genealigia.idMadre=data.result.idMadre;
      this.genealigia.regMadre=data.result.regMadre;
      this.genealigia.nroMadre=data.result.nroMadre;
      this.genealigia.nomMadre=data.result.nomMadre;
      this.genealigia.rzMadre=data.result.rzMadre;
      this.genealigia.rzNomMadre=data.result.rzNomMadre;
      
      this.genealigia.idAbueloM=data.result.idAbueloM;
      this.genealigia.nroAbueloM=data.result.nroAbueloM;
      this.genealigia.nomAbueloM=data.result.nomAbueloM;
      this.genealigia.regAbueloM=data.result.regAbueloM;
      this.genealigia.rzAbueloM=data.result.rzAbueloM;

      this.genealigia.idAbuelaM=data.result.idAbuelaM;
      this.genealigia.nroAbuelaM=data.result.nroAbuelaM;
      this.genealigia.nomAbuelaM=data.result.nomAbuelaM;
      this.genealigia.regAbuelaM=data.result.regAbuelaM;
      this.genealigia.rzAbuelaM=data.result.rzAbuelaM;

      this.genealigia.idBisAbloM1=data.result.idBisAbloM1;
      this.genealigia.nroBisAbloM1=data.result.nroBisAbloM1;
      this.genealigia.nomBisAbloM1=data.result.nomBisAbloM1;
      this.genealigia.regBisAbloM1=data.result.regBisAbloM1;
      this.genealigia.rzBisAboM1=data.result.rzBisAboM1;

      this.genealigia.idBisAblaM1=data.result.idBisAblaM1;
      this.genealigia.nroBisAblaM1=data.result.nroBisAblaM1;
      this.genealigia.nomBisAblaM1=data.result.nomBisAblaM1;
      this.genealigia.regBisAblaM1=data.result.regBisAblaM1;
      this.genealigia.rzBisAbaM1=data.result.rzBisAbaM1;

      this.genealigia.idBisAbloM2=data.result.idBisAbloM2;
      this.genealigia.nroBisAbloM2=data.result.nroBisAbloM2;
      this.genealigia.nomBisAbloM2=data.result.nomBisAbloM2;
      this.genealigia.regBisAbloM2=data.result.regBisAbloM2;
      this.genealigia.rzBisAboM2=data.result.rzBisAboM2;

      this.genealigia.idBisAblaM2=data.result.idBisAblaM2;
      this.genealigia.nroBisAblaM2=data.result.nroBisAblaM2;
      this.genealigia.nomBisAblaM2=data.result.nomBisAblaM2;
      this.genealigia.regBisAblaM2=data.result.regBisAblaM2;
      this.genealigia.rzBisAbaM2=data.result.rzBisAbaM2;



      
      this.genealigia.idCriador=data.result.idCriador;
      this.genealigia.exterior=data.result.exterior;
      this.genealigia.idPropietario=data.result.idPropietario;
      this.genealigia.fechaSistema=data.result.fechaSistema;
      this.genealigia.genotipificacion=data.result.genotipificacion;
      this.genealigia.extempoAnimal=data.result.extempoAnimal;
    });
    
  }
  ventana(tipo:string){
    this.tipo=tipo;
  }

}
