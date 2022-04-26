import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { educacion } from '../modelos/educacion.interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  formValue !: FormGroup;
educacionList:educacion= new educacion();
educacionData !:any;
  constructor(private formbuilder: FormBuilder,private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      titulo:[''],
      descripcion:[''],
      imagen:[''],
      id:['']
      })
      this.getAllEducacion();
  };
  getAllEducacion(){
    this.api.getEducacion().subscribe(res=>{
      this.educacionData = res;
    })
  }
  
  deleteEducacion(educacion: any){
    this.api.deleteEducacion(educacion.id).subscribe(res=>{
      alert("Educacion eliminada");
      this.getAllEducacion();
    })
  }
  editEducacion(educacion: any){
    this.educacionList.id = educacion.id;
    this.formValue.controls['titulo'].setValue(educacion.titulo);
    this.formValue.controls['descripcion'].setValue(educacion.descripcion);
    this.formValue.controls['imagen'].setValue(educacion.imagen);
   }
   updateEducacion(){
   
    this.educacionList.titulo = this.formValue.value.titulo;
    this.educacionList.descripcion = this.formValue.value.descripcion;
    this.educacionList.imagen = this.formValue.value.imagen;
    this.api.updateEducacion(this.educacionList, this.educacionList.id).subscribe(res=>{
      alert("Educacion modificada");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEducacion();
      })
     
  }

  hasRouteAdmin (Router: string) {
    return this.router.url === Router;
 }

}
