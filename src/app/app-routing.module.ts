import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { BlankComponent } from "./layouts/blank/blank.component";
import { LoginComponent } from "./_pages/login/login.component";
import { PrincipalComponent } from "./_pages/principal/principal.component";
import { InfoAsociadoComponent } from "./_pages/socios/asociado/info-asociado/info-asociado.component";
import { PersonasAutorizadasComponent } from "./_pages/socios/asociado/info-asociado/personas-autorizadas/personas-autorizadas.component";
import { DireccionesComponent } from "./_pages/socios/asociado/info-asociado/direcciones/direcciones.component";
import { FacturacionComponent } from "./_pages/socios/asociado/facturacion/facturacion.component";
import { InformeActualizacionDeDatosComponent } from "./_pages/socios/asociado/informe-actualizacion-de-datos/informe-actualizacion-de-datos.component";
import { InformeRadicacionComponent } from "./_pages/socios/asociado/informe-radicacion/informe-radicacion.component";
import { HaciendaComponent } from "./_pages/socios/hacienda/hacienda.component";
import { DatosBasicosComponent } from "./_pages/socios/hacienda/datos-basicos/datos-basicos.component";
import { AnimalesComponent } from "./_pages/socios/hacienda/animales/animales.component";
import { InformeActualizacionTiquetesWebComponent } from "./_pages/socios/animales/informe-actualizacion-tiquetes-web/informe-actualizacion-tiquetes-web.component";
import { InformeDescargaInventarioComponent } from "./_pages/socios/animales/informe-descarga-inventario/informe-descarga-inventario.component";
import { InformeInscripcionFeriaComponent } from "./_pages/socios/animales/informe-inscripcion-feria/informe-inscripcion-feria.component";
import { InformeTrasferenciaEmbrionesComponent } from "./_pages/socios/animales/informe-trasferencia-embriones/informe-trasferencia-embriones.component";
import { InformeTrasladoAnimalesComponent } from "./_pages/socios/animales/informe-traslado-animales/informe-traslado-animales.component";
import { InformeTraspasoAnimalesComponent } from "./_pages/socios/animales/informe-traspaso-animales/informe-traspaso-animales.component";
import { ListadoAnimalesComponent } from "./_pages/socios/animales/listado-animales/listado-animales.component";


export const Approutes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {
    path: "",
    component: FullComponent,
    children: [
      //{ path: "", redirectTo: "/dashboard/dashboard1", pathMatch: "full" },
      {path:"principal",component:PrincipalComponent},
      {path:"Asociado",children:[
        {path:"infoAsociado",component:InfoAsociadoComponent,children:[
          {path:"direcciones",component:DireccionesComponent},
          {path:"personasAutorizadas",component:PersonasAutorizadasComponent},
        ]},
        {path:"facturacion",component:FacturacionComponent},
        {path:"informeActualizacionDeDatos",component:InformeActualizacionDeDatosComponent},
        {path:"informeRadicacion",component:InformeRadicacionComponent},
      ]},
      {path:"hacienda",component:HaciendaComponent,children:[
        {path:"datosBasicos",component:DatosBasicosComponent},
        {path:"animales",component:AnimalesComponent}
      ]},
      {path:"Animales",children:[
        {path:"Animales",component:ListadoAnimalesComponent,children:[]},
        {path:"InformeDescargaInventario",component:InformeDescargaInventarioComponent},
        {path:"InformeInscriipcionFeria",component:InformeInscripcionFeriaComponent},
        {path:"InformeTraspaso",component:InformeTraspasoAnimalesComponent},
        {path:"InformeTraslado",component:InformeTrasladoAnimalesComponent},
        {path:"InformeTrasferenciaEmbriones",component:InformeTrasferenciaEmbrionesComponent},
        {path:"InformeActualizacionTiquetesWeb",component:InformeActualizacionTiquetesWebComponent},
      ]},
      /*
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboards/dashboard.module").then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: "starter",
        loadChildren: () =>
          import("./starter/starter.module").then((m) => m.StarterModule),
      },
      {
        path: "component",
        loadChildren: () =>
          import("./component/component.module").then(
            (m) => m.ComponentsModule
          ),
      },
      {
        path: "cards",
        loadChildren: () =>
          import("./cards/cards.module").then((m) => m.CardsModule),
      },
      {
        path: "icons",
        loadChildren: () =>
          import("./icons/icons.module").then((m) => m.IconsModule),
      },
      {
        path: "forms",
        loadChildren: () =>
          import("./form/forms.module").then((m) => m.FormModule),
      },
      {
        path: "tables",
        loadChildren: () =>
          import("./table/tables.module").then((m) => m.TablesModule),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./charts/charts.module").then((m) => m.ChartModule),
      },
      {
        path: "widgets",
        loadChildren: () =>
          import("./widgets/widgets.module").then((m) => m.WidgetsModule),
      },
      {
        path: "ecom",
        loadChildren: () =>
          import("./ecommerce/ecom.module").then((m) => m.EcomModule),
      },
      {
        path: "timeline",
        loadChildren: () =>
          import("./timeline/timeline.module").then((m) => m.TimelineModule),
      },
      {
        path: "extra-component",
        loadChildren: () =>
          import("./extra-component/extra-component.module").then(
            (m) => m.ExtraComponentModule
          ),
      },
      {
        path: "apps",
        loadChildren: () =>
          import("./apps/apps.module").then((m) => m.AppsModule),
      },

      {
        path: "sample-pages",
        loadChildren: () =>
          import("./sample-pages/sample-pages.module").then(
            (m) => m.SamplePagesModule
          ),
      },
      
      */
    ],
  },
  {
    path: "blank",
    component: BlankComponent,
    children: [
      {
        path: "authentication",
        loadChildren: () =>
          import("./authentication/authentication.module").then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/authentication/404",
  },
];
