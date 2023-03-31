import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SocioService } from 'src/app/_service/socio.service';

export class FacturacionDetalles {
  numDoc:string;
  fechaSolicitud:string;
  registro:string;
  descripcion:string;
}

@Component({
  selector: 'app-detalles-factura',
  templateUrl: './detalles-factura.component.html',
  styleUrls: ['./detalles-factura.component.scss']
})
export class DetallesFacturaComponent implements OnInit {

  datosFacturaDetalle: FacturacionDetalles[] = [];

  displayedColumns: string[] = ['Numero', 'FechaSolicitud', 'Registro', 'Descripcion'];
  dataSource = new MatTableDataSource(this.datosFacturaDetalle);

  /**
   * traer los datos y organizarlos en una lista
   * 
  */
  traerYOrganizarDatos() {
    let facturaDetalle;

    this.sociosService.detalleFacturacion(sessionStorage.getItem('Codigo'),this.data.fecha).subscribe(data => {
      console.log(data);
      
      data.result.forEach(element => {
        facturaDetalle = new FacturacionDetalles();

        facturaDetalle.numDoc=element.numDoc;
        facturaDetalle.fechaSolicitud=element.fechaSolicitud;
        facturaDetalle.registro=element.registro;
        facturaDetalle.descripcion=element.descripcion;

        this.datosFacturaDetalle.push(facturaDetalle)

      });
      
      this.dataSource = new MatTableDataSource(this.datosFacturaDetalle);
    });
  }
  /**
   * 
   *Fin de traer los datos
  */

  constructor(private sociosService: SocioService,
    private router: Router,
    public dialogRef: MatDialogRef<DetallesFacturaComponent>,
    @Inject (MAT_DIALOG_DATA) public data) 
  { }


  
  ngOnInit(): void {
    this.traerYOrganizarDatos()
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
