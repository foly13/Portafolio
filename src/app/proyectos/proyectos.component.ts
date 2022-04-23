import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { proyectosI } from '../modelos/proyectos.interface';
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
proyectosList:proyectosI[]=[];
  constructor(private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.api.getProyectos().subscribe(data =>{
      this.proyectosList = data;
    })
  };

}
