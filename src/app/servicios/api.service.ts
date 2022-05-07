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
  url:string="https://portafolio-florencia-casanova.herokuapp.com/";

  constructor(private http:HttpClient) { }

  //metodos componente educacion

  getEducacion(){
    return this.http.get<any>("https://portafolio-florencia-casanova.herokuapp.com/ver/educacion/").pipe(map((res:any)=>{
      return res;
    }))
  }
  updateEducacion(data:educacion, id:number){
    return this.http.put<educacion[]>("https://portafolio-florencia-casanova.herokuapp.com/ver/educacion/" + id, data).pipe(map((res: any)=>{
    return res;
  }))
  }
  deleteEducacion(id:number){
    return this.http.delete<any>("https://portafolio-florencia-casanova.herokuapp.com/ver/educacion/" + id).pipe(map((res: any)=>{
    return res;
  }))
  }

  //metodos componente experiencia
  getExperiencia(){
    return this.http.get<any>("https://portafolio-florencia-casanova.herokuapp.com/ver/experiencia/").pipe(map((res:any)=>{
      return res;
    }))
  }
updateExperiencia(data:experienciaI, id: number){
  return this.http.put<experienciaI[]>("https://portafolio-florencia-casanova.herokuapp.com/ver/experiencia/" + id, data).pipe(map((res: any)=>{
    return res;
  }))
}
deleteExperiencia(id: number){
  return this.http.delete<any>("https://portafolio-florencia-casanova.herokuapp.com/ver/experiencia/" + id).pipe(map((res: any)=>{
    return res;
  }))
}

//metodos componente acerca de 
  getDatos(){
    return this.http.get<any>('https://portafolio-florencia-casanova.herokuapp.com/ver/datos').pipe(map((res:any)=>{
      return res;
    }))
  }
  updateDatos(data:acercaDe, id: number){
    return this.http.put<acercaDe[]>('https://portafolio-florencia-casanova.herokuapp.com/ver/datos/' + id, data).pipe(map((res: any)=>{
      return res;
    }))
  }

//metodos componente header
  getHeader(){
    return this.http.get<any>("https://portafolio-florencia-casanova.herokuapp.com/ver/header/").pipe(map((res:any)=>{
      return res;
    }))
  }
  updateHeader(data:headerI, id: number){
    return this.http.put<headerI[]>("https://portafolio-florencia-casanova.herokuapp.com/ver/header/" + id, data).pipe(map((res: any)=>{
      return res;
    }))
  }

  //metodos componete habilidades duras y blandas
  getDuras():Observable<durasI[]>{
    let direccion = this.url + "ver/Hduras";
    return this.http.get<durasI[]>(direccion);
  }
  getBlandas():Observable<blandasI[]>{
    let direccion = this.url + "ver/Hblandas";
    return this.http.get<blandasI[]>(direccion);
  }
  //metodos componente proyecto
  getProyectos():Observable<proyectosI[]>{
    let direccion = this.url + "ver/proyectos";
    return this.http.get<proyectosI[]>(direccion);
  }

}
