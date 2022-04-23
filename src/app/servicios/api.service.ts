import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { educacion } from '../modelos/educacion.interface';
import { experienciaI } from '../modelos/experiencia.interface';
import { acercaDe } from '../modelos/acercaDe.interface';
import { headerI } from '../modelos/header.interface';
import { durasI } from '../modelos/durasI.interface';
import { blandasI } from '../modelos/blandasI.interface';
import { proyectosI } from '../modelos/proyectos.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string="http://localhost:3000/";

  constructor(private http:HttpClient) { }

  //metodos componente educacion

  getEducacion(){
    return this.http.get<any>("http://localhost:3000/educacion/").pipe(map((res:any)=>{
      return res;
    }))
  }
  updateEducacion(data:educacion, id:number){
    return this.http.put<educacion[]>("http://localhost:3000/educacion/" + id, data).pipe(map((res: any)=>{
    return res;
  }))
  }
  deleteEducacion(id:number){
    return this.http.delete<any>("http://localhost:3000/educacion/" + id).pipe(map((res: any)=>{
    return res;
  }))
  }

  //metodos componente experiencia
  getExperiencia(){
    return this.http.get<any>("http://localhost:3000/experiencia").pipe(map((res:any)=>{
      return res;
    }))
  }
updateExperiencia(data:experienciaI, id: number){
  return this.http.put<experienciaI[]>("http://localhost:3000/experiencia/" + id, data).pipe(map((res: any)=>{
    return res;
  }))
}
deleteExperiencia(id: number){
  return this.http.delete<any>("http://localhost:3000/experiencia/" + id).pipe(map((res: any)=>{
    return res;
  }))
}

//metodos componente acerca de 
  getDatos(){
    return this.http.get<any>("http://localhost:3000/datos/").pipe(map((res:any)=>{
      return res;
    }))
  }
  updateDatos(data:acercaDe, id: number){
    return this.http.put<acercaDe[]>("http://localhost:3000/datos/" + id, data).pipe(map((res: any)=>{
      return res;
    }))
  }

//metodos componente header
  getHeader(){
    return this.http.get<any>("http://localhost:3000/header/").pipe(map((res:any)=>{
      return res;
    }))
  }
  updateHeader(data:headerI, id: number){
    return this.http.put<headerI[]>("http://localhost:3000/header/" + id, data).pipe(map((res: any)=>{
      return res;
    }))
  }

  //metodos componete habilidades duras y blandas
  getDuras():Observable<durasI[]>{
    let direccion = this.url + "habilidadesDuras";
    return this.http.get<durasI[]>(direccion);
  }
  getBlandas():Observable<blandasI[]>{
    let direccion = this.url + "habilidadesBlandas";
    return this.http.get<blandasI[]>(direccion);
  }
  //metodos componente proyecto
  getProyectos():Observable<proyectosI[]>{
    let direccion = this.url + "proyectos";
    return this.http.get<proyectosI[]>(direccion);
  }

}
