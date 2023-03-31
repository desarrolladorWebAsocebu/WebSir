import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { AgmCoreModule } from '@agm/core';
import { DataTablesModule } from 'angular-datatables';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ToastrModule } from 'ngx-toastr';
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

import { VerticalNavigationComponent } from './shared/vertical-header/vertical-navigation.component';
import { VerticalSidebarComponent } from './shared/vertical-sidebar/vertical-sidebar.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { HorizontalNavigationComponent } from './shared/horizontal-header/horizontal-navigation.component';
import { HorizontalSidebarComponent } from './shared/horizontal-sidebar/horizontal-sidebar.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { LoginComponent } from './_pages/login/login.component';
import { PrincipalComponent } from './_pages/principal/principal.component';
import { InfoAsociadoComponent } from './_pages/socios/asociado/info-asociado/info-asociado.component';
import { DireccionesComponent } from './_pages/socios/asociado/info-asociado/direcciones/direcciones.component';
import { PersonasAutorizadasComponent } from './_pages/socios/asociado/info-asociado/personas-autorizadas/personas-autorizadas.component';
import { FacturacionComponent } from './_pages/socios/asociado/facturacion/facturacion.component';
import { MaterialModule } from './material/material/material.module';
import { CambiarContraseniaComponent } from './_pages/socios/asociado/info-asociado/cambiar-contrasenia/cambiar-contrasenia.component';
import { DetallesFacturaComponent } from './_pages/socios/asociado/facturacion/detalles-factura/detalles-factura.component';
import { InformeActualizacionDeDatosComponent } from './_pages/socios/asociado/informe-actualizacion-de-datos/informe-actualizacion-de-datos.component';
import { InformeRadicacionComponent } from './_pages/socios/asociado/informe-radicacion/informe-radicacion.component';
import { ConsultaDeReferenciasComponent } from './_pages/socios/asociado/informe-radicacion/consulta-de-referencias/consulta-de-referencias.component';
import { HaciendaComponent } from './_pages/socios/hacienda/hacienda.component';
import { DatosBasicosComponent } from './_pages/socios/hacienda/datos-basicos/datos-basicos.component';
import { AnimalesComponent } from './_pages/socios/hacienda/animales/animales.component';
import { InformeActualizacionTiquetesWebComponent } from './_pages/socios/animales/informe-actualizacion-tiquetes-web/informe-actualizacion-tiquetes-web.component';
import { InformeDescargaInventarioComponent } from './_pages/socios/animales/informe-descarga-inventario/informe-descarga-inventario.component';
import { InformeInscripcionFeriaComponent } from './_pages/socios/animales/informe-inscripcion-feria/informe-inscripcion-feria.component';
import { InformeTrasferenciaEmbrionesComponent } from './_pages/socios/animales/informe-trasferencia-embriones/informe-trasferencia-embriones.component';
import { InformeTrasladoAnimalesComponent } from './_pages/socios/animales/informe-traslado-animales/informe-traslado-animales.component';
import { InformeTraspasoAnimalesComponent } from './_pages/socios/animales/informe-traspaso-animales/informe-traspaso-animales.component';
import { ListadoAnimalesComponent } from './_pages/socios/animales/listado-animales/listado-animales.component';
import { DetallesComponent } from './_pages/socios/animales/listado-animales/detalles/detalles.component';
import { GenealogiaComponent } from './_pages/socios/animales/listado-animales/detalles/genealogia/genealogia.component';
import { DatosBasicosAnimalComponent } from './_pages/socios/animales/listado-animales/detalles/datos-basicos-animal/datos-basicos-animal.component';
import { HijosComponent } from './_pages/socios/animales/listado-animales/detalles/hijos/hijos.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 1,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    VerticalNavigationComponent,
    BreadcrumbComponent,
    VerticalSidebarComponent,
    HorizontalNavigationComponent,
    HorizontalSidebarComponent,
    LoginComponent,
    PrincipalComponent,
    InfoAsociadoComponent,
    DireccionesComponent,
    PersonasAutorizadasComponent,
    FacturacionComponent,
    CambiarContraseniaComponent,
    DetallesFacturaComponent,
    InformeActualizacionDeDatosComponent,
    InformeRadicacionComponent,
    ConsultaDeReferenciasComponent,
    HaciendaComponent,
    DatosBasicosComponent,
    AnimalesComponent,
    InformeDescargaInventarioComponent,
    InformeInscripcionFeriaComponent,
    InformeTraspasoAnimalesComponent,
    InformeTrasferenciaEmbrionesComponent,
    InformeActualizacionTiquetesWebComponent,
    InformeTrasladoAnimalesComponent,
    ListadoAnimalesComponent,
    DetallesComponent,
    GenealogiaComponent,
    DatosBasicosAnimalComponent,
    HijosComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    HttpClientModule,
    NgbModule,
    ToastrModule.forRoot(),
    Ng2SearchPipeModule,
    RouterModule.forRoot(Approutes),
    PerfectScrollbarModule,
    NgMultiSelectDropDownModule.forRoot(),
    // AgmCoreModule.forRoot({ apiKey: 'AIzaSyDoliAneRffQDyA7Ul9cDk3tLe7vaU4yP8' }),
    HttpClientModule,
    FeatherModule.pick(allIcons),
    FeatherModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MaterialModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  entryComponents:[
    CambiarContraseniaComponent,
    DetallesFacturaComponent,
    DetallesComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
