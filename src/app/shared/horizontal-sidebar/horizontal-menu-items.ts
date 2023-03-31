import { RouteInfo } from "./horizontal-sidebar.metadata";

export const ROUTES: RouteInfo[] = [
  //home
  {
    path: "/principal",
    title: "Inicio",
    icon: "mdi mdi-home",
    class: "",
    ddclass: "",
    extralink: false,
    submenu: [],
  },
  //Asociado
  {
    path: "Asociado",
    title: "Asociado",
    icon: "mdi mdi-account",
    class: "has-arrow",
    ddclass: "",
    extralink: false,
    submenu: [
      {
        path: "/Asociado/infoAsociado",
        title: "Informacion del Asociado",
        icon: "sl-icon-user-following",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "/Asociado/facturacion",
        title: "Facturacion",
        icon: "sl-icon-doc",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "/Asociado/informeActualizacionDeDatos",
        title: "Informe Actualizacion de Datos",
        icon: "mdi mdi-clipboard-text",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "/Asociado/informeRadicacion",
        title: "Consulta de Radicacion",
        icon: "sl-icon-magnifier",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },

    ],
  },
  //Haciendas
  {
    path: "/hacienda",
    title: "Haciendas",
    icon: "mdi mdi-map",
    class: "",
    ddclass: "",
    extralink: false,
    submenu: []
  },
  //Animales
  {
    path: "/Animales",
    title: "Animales",
    icon: "mdi mdi-loupe",
    class: "has-arrow",
    ddclass: "",
    extralink: false,
    submenu: [
      {
        path: "/Animales/Animales",
        title: "Animales",
        icon: "mdi mdi-priority-low",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "/Animales/InformeDescargaInventario",
        title: "Informe Descarga imventario",
        icon: "mdi mdi-rounded-corner",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "/Animales/InformeInscriipcionFeria",
        title: "Informe inscripcion feria",
        icon: "mdi mdi-select-all",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "/Animales/InformeTraspaso",
        title: "Informe traspaso de animales",
        icon: "mdi mdi-shape-plus",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "/Animales/InformeTraslado",
        title: "Informe translado animales",
        icon: "mdi mdi-select-inverse",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "/Animales/InformeTrasferenciaEmbriones",
        title: "Informe transferencia embriones",
        icon: "mdi mdi-vector-difference-ba",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "/Animales/InformeActualizacionTiquetesWeb",
        title: "Infomre actualizacion tiquetes web",
        icon: "mdi mdi-file-document-box",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },

    ],
  },
  //Teamites
  {
    path: "",
    title: "Tramites",
    icon: "icon-Split-Vertical",
    class: "has-arrow",
    ddclass: "",
    extralink: false,
    submenu: [
      {
        path: "",
        title: "Denuncio",
        icon: "mdi mdi-border-none",
        class: "has-arrow",
        ddclass: "",
        extralink: false,
        submenu: [
          {
            path: "",
            title: "Con Requisitos",
            icon: "mdi mdi-border-all",
            class: "",
            ddclass: "",
            extralink: false,
            submenu: 
            [
              {
                path: "",
                title: "Denuncio Puro",
                icon: "mdi mdi-border-all",
                class: "",
                ddclass: "",
                extralink: false,
                submenu: [],
              },
              {
                path: "",
                title: "Denuncio F1",
                icon: "mdi mdi-border-all",
                class: "",
                ddclass: "",
                extralink: false,
                submenu: [],
              },
              {
                path: "",
                title: "Denuncio Clasificado",
                icon: "mdi mdi-border-all",
                class: "",
                ddclass: "",
                extralink: false,
                submenu: [],
              }
            ],
          },
          {
            path: "",
            title: "Sin Requisitos",
            icon: "mdi mdi-border-all",
            class: "",
            ddclass: "",
            extralink: false,
            submenu: 
            [
              {
                path: "",
                title: "Denuncio Puro",
                icon: "mdi mdi-border-all",
                class: "",
                ddclass: "",
                extralink: false,
                submenu: [],
              },
              {
                path: "",
                title: "Denuncio F1",
                icon: "mdi mdi-border-all",
                class: "",
                ddclass: "",
                extralink: false,
                submenu: [],
              },
              {
                path: "",
                title: "Denuncio Clasificado",
                icon: "mdi mdi-border-all",
                class: "",
                ddclass: "",
                extralink: false,
                submenu: [],
              }
            ],
          }
        ],
      },
      {
        path: "",
        title: "Embriones",
        icon: "mdi mdi-border-vertical",
        class: "has-arrow",
        ddclass: "",
        extralink: false,
        submenu: [
          {
            path: "",
            title: "Con Requisito",
            icon: "mdi mdi-table-row-height",
            class: "",
            ddclass: "",
            extralink: false,
            submenu: [
              {
                path: "",
                title: "Ingreso transferencia de embriones",
                icon: "mdi mdi-table-row-height",
                class: "",
                ddclass: "",
                extralink: false,
                submenu: [],
              },
              {
                path: "",
                title: "Ingreso traspaso de embriones",
                icon: "mdi mdi-table-row-height",
                class: "",
                ddclass: "",
                extralink: false,
                submenu: [],
              },
            ],
          },
          {
            path: "",
            title: "Sin Rquisitos",
            icon: "mdi mdi-table-row-height",
            class: "",
            ddclass: "",
            extralink: false,
            submenu: [],
          },
        ],
      },
      {
        path: "",
        title: "Descarga de inventarios",
        icon: "mdi mdi-table-row-height",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "",
        title: "Inscripcion de animales a ferias",
        icon: "mdi mdi-table-row-height",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "",
        title: "Traspasos de animales",
        icon: "mdi mdi-table-row-height",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "",
        title: "Traslados de animales",
        icon: "mdi mdi-table-row-height",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "",
        title: "Actualizacion datos del asociado",
        icon: "mdi mdi-table-row-height",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "",
        title: "Actualizacion de tiquetes web",
        icon: "mdi mdi-table-row-height",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
    ],
  },
  //Formatos
  {
    path: "",
    title: "Formatos",
    icon: "icon-Pie-Chart",
    class: "has-arrow",
    ddclass: "",
    extralink: false,
    submenu: [
      {
        path: "",
        title: "Tiquetes",
        icon: "mdi mdi-svg",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "",
        title: "Embriones",
        icon: "mdi mdi-blur",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [
          {
            path: "",
            title: "Transferencia de embriones",
            icon: "mdi mdi-blur",
            class: "",
            ddclass: "",
            extralink: false,
            submenu: [],
          },
          {
            path: "",
            title: "Traspaso de embriones",
            icon: "mdi mdi-blur",
            class: "",
            ddclass: "",
            extralink: false,
            submenu: [],
          },
        ],
      },
      
    ],
  },
  //Ferias
  {
    path: "",
    title: "Ferias",
    icon: "icon-Files",
    class: "",
    ddclass: "mega-dropdown",
    extralink: false,
    submenu: [],
  },
  //visitas
  {
    path: "",
    title: "Visitas",
    icon: "icon-El-Castillo",
    class: "has-arrow",
    ddclass: "",
    extralink: false,
    submenu: [
      {
        path: "",
        title: "Visitas",
        icon: "mdi mdi-octagram",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
      {
        path: "",
        title: "Informe de visita detallado",
        icon: "mdi mdi-octagram",
        class: "",
        ddclass: "",
        extralink: false,
        submenu: [],
      },
    ],
  },
  
];