import { Component, OnInit } from '@angular/core';
import { PortafolioService } from '../servicios/portafolio.service';
@Component({
  selector: 'app-habilidades-duras-yblandas',
  templateUrl: './habilidades-duras-yblandas.component.html',
  styleUrls: ['./habilidades-duras-yblandas.component.css']
})
export class HabilidadesDurasYBlandasComponent implements OnInit {
durasList:any;
blandasList:any;
  constructor(private datosPortafolio: PortafolioService) { }

  ngOnInit(): void {
    this.datosPortafolio.obtenerDatos().subscribe(data =>{
      this.durasList=data.habilidadesDuras;
      
  })
 
  this.datosPortafolio.obtenerDatos().subscribe(data =>{
    this.blandasList=data.habilidadesBlandas;

  })
}}