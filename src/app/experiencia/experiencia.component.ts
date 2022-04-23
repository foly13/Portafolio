import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { experienciaI } from '../modelos/experiencia.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  formValue !: FormGroup;
  experienciaList:experienciaI= new experienciaI();
  experienciaData !: any;
  constructor(private formbuilder: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
    titulo:[''],
    descripcion:[''],
    imagen:[''],
    id:['']
    })
  this.getAllExperiencia();
  };

  getAllExperiencia(){
    this.api.getExperiencia().subscribe(res=>{
      this.experienciaData = res;
    })
  }

   deleteExperiencia(experiencia: any){
     this.api.deleteExperiencia(experiencia.id).subscribe(res=>{
       alert("Experiencia eliminada");
       this.getAllExperiencia();
     })

   }
  editExperiencia(experiencia: any){
   this.experienciaList.id = experiencia.id;
   this.formValue.controls['titulo'].setValue(experiencia.titulo);
   this.formValue.controls['descripcion'].setValue(experiencia.descripcion);
   this.formValue.controls['imagen'].setValue(experiencia.imagen);
  }
  updateExperiencia(){
   
    this.experienciaList.titulo = this.formValue.value.titulo;
    this.experienciaList.descripcion = this.formValue.value.descripcion;
    this.experienciaList.imagen = this.formValue.value.imagen;
    this.api.updateExperiencia(this.experienciaList, this.experienciaList.id).subscribe(res=>{
      alert("Experiencia modificada");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllExperiencia();
      })
     
  }

}
