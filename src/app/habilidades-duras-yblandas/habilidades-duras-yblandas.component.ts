import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { durasI } from '../modelos/durasI.interface';
import { blandasI } from '../modelos/blandasI.interface';
@Component({
  selector: 'app-habilidades-duras-yblandas',
  templateUrl: './habilidades-duras-yblandas.component.html',
  styleUrls: ['./habilidades-duras-yblandas.component.css']
})
export class HabilidadesDurasYBlandasComponent implements OnInit {
durasList:durasI[]=[];
blandasList: blandasI[]=[];
  constructor(private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.api.getDuras().subscribe(data =>{
      this.durasList = data;
    })
    this.api.getBlandas().subscribe(data =>{
      this.blandasList = data;
    })
}}