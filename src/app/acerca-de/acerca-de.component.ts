import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { acercaDe } from '../modelos/acercaDe.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  formValue !: FormGroup;
  miPortafolio: acercaDe= new acercaDe();
  miPortafolioData !:any;
  constructor( private formbuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      nombre:[''],
      titulo:[''],
      sobreMi:[''],
      imagenPerfil:[''],
      id:['']
      })
      this.getAllDatos();
  };
  getAllDatos(){
    this.api.getDatos().subscribe(res=>{
      this.miPortafolioData = res;
    })
  }
  editDatos(datos: any){
    this.miPortafolio.id = datos.id;
    this.formValue.controls['nombre'].setValue(datos.nombre);
    this.formValue.controls['titulo'].setValue(datos.titulo);
    this.formValue.controls['sobreMi'].setValue(datos.sobreMi);
    this.formValue.controls['imagenPerfil'].setValue(datos.imagenPerfil);
   }
   updateDatos(){
    this.miPortafolio.nombre = this.formValue.value.nombre;
    this.miPortafolio.titulo = this.formValue.value.titulo;
    this.miPortafolio.sobreMi = this.formValue.value.sobreMi;
    this.miPortafolio.imagenPerfil = this.formValue.value.imagenPerfil;
    this.api.updateDatos(this.miPortafolio, this.miPortafolio.id).subscribe(res=>{
      alert("Datos modificados");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllDatos();
      })
     
  }

}
