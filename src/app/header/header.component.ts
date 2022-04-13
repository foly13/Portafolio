import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
header:any;
  constructor(private datosPortafolio: PortafolioService, private route: Router) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.header=data;
    });

  }

  hasRouteAdmin (Router: string) {
     return this.route.url === Router;
  }
  hasRouteUsuario(Router:string){
    return this.route.url === Router;
  }

}
