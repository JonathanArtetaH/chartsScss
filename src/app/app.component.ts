import { Component } from '@angular/core';
import { INode } from 'ngx-org-chart/lib/node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chartsScss';
  nodes: any = [
    {
      name: 'SECRETARIA GENERAL',
      cssClass: 'ngx-org-ceo',
      image: 'assets/node.svg',
      title: 'BÁEZ RICARDEZ GRACIELA  30/11/2018',
      childs: [
        {
          name: 'SECRETARÍA DE SERVICIOS PARLAMENTARIOS',
          cssClass: 'ngx-org-ceo text-center',
          image: 'assets/node.svg',
          title: 'ROSAS DE LEÓN HUGO CHIRISTION F.I. 16/10/2018', 
          childs:[
            {
              name: 'DIRECCIÓN GENERAL DE PROCESO LEGISLATIVO',
              cssClass: 'ngx-org-head',
              image: 'assets/node.svg',
              title: `VARGAS . JOSÉ DE JESÚS
                      F.I. 01/01/1996`, 
            },
            {
              name: 'CENTRO DE ESTUDIOS DE LAS FINANZAS PÚBLICAS',
              cssClass: 'ngx-org-head',
              image: 'assets/node.svg',
              title: `MORALES VELÁZQUEZ JOSE ILDEFONSO F.I.. 01/01/2013`, 
            },
             {
              name: 'Jeff Dean',
              cssClass: 'ngx-org-head',
              image: 'assets/node.svg',
              title: 'Head of Artificial Intelligence', 
            },
            {
              name: 'Jeff Dean',
              cssClass: 'ngx-org-head',
              image: 'assets/node.svg',
              title: 'Head of Artificial Intelligence', 
            },
          ]
        },
        {
          name: 'DIRECCIÓN GENERAL DE ASUNTOS JURÍDICOS',
          cssClass: 'ngx-org-head',
          image: 'assets/node.svg',
          title: `VASQUEZ RODRÍGUEZ LUIS GENARO F.I. 16/12/2018`,
          childs: [
            {
              name: ' DIRECCIÓN GENERAL DE RESGUARDO Y SEGURIDAD',
              cssClass: 'ngx-org-ceo',
              image: 'assets/node.svg',
              title: 'NORIEGA CANO CARLOS F.I. 01/09/2003 ',
              childs: [
                {
                  name: 'DIRECCIÓN DE RELACIONES INTERINSTITUCIONALES Y DEL PROTOCOLO',
                  cssClass: 'ngx-org-ceo',
                  image: 'assets/node.svg',
                  title: `RUELAS HERNÁNDEZ ALFONSO F.I. 16/01/1995`,
                  childs: [
                    {
                      name: 'UNIDAD DE CAPACITACIÓN Y FORMACIÓN PERMANENTE',
                      cssClass: 'ngx-org-ceo',
                      image: 'assets/node.svg',
                      title: `ACEVES DÍAZ DE LEÓN LEÓN F.I. 16/02/2019`,
                      childs: [
                        {
                          name: 'DIRECCIÓN GENERAL DE LAUNIDAD DE ASUNTOS INTERNACIONALES Y RELACIONES PARLAMENTARIAS',
                          cssClass: 'ngx-org-ceo',
                          image: 'assets/node.svg',
                          title: `HERNÁNDEZ VALLEJO JOSÉ MARÍA F.I. 16/12/2012`,
                          childs: [
                            {
                              name: 'DIRECCIÓN GENERAL DE LA UNIDAD PARA LA IGUALDAD DE GÉNERO DE LA CÁMARA DE  DIPUTADOS',
                              cssClass: 'ngx-org-ceo',
                              image: 'assets/node.svg',
                              title: 'CEO, Google Health',
                              childs: []
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
              ]
            }
          ]
        },
        {
          name: 'SECRETARÍA DE SERVICIOS ADMINISTRATIVOS Y FINANCIEROS',
          cssClass: 'ngx-org-ceo text-center',
          image: 'assets/node.svg',
          title: 'CUMMINGS GARCÍA JUAN CARLOS F.I. 16/10/2018',
          childs: [
            {
              name: 'DIRECCIÓN GENERAL DE FINANZAS',
              cssClass: 'ngx-org-head',
              image: 'assets/node.svg',
              title: 'LEMUS JIMÉNEZ PAULINA F.I. 01/11/2018',
              childs: []
            },
            {
              name: 'DIRECCIÓN GENERAL DE PROGRAMACIÓN, PRESUPUESTO Y CONTABILIDAD',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'MORENO HERNÁNDEZ PATRICIA F.I. 16/01/2019 ',
              childs: []
            },
            {
              name: 'Ariel Bardin',
              cssClass: 'ngx-org-vp',
              image: 'assets/node.svg',
              title: 'VP, Product Management',
              childs: []
            }
          ]
        },
       
      ]
    },     
  ];
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  test(event:INode){
    console.log(event);
  }
}