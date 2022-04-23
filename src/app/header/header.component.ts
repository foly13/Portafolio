import { Component, OnInit } from '@angular/core';
import { ApiService } from '../servicios/api.service';
import { Router } from '@angular/router';
import { headerI } from '../modelos/header.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
formValue !: FormGroup;
headerList: headerI= new headerI();
headerData !: any;
  constructor( private formbuilder: FormBuilder, private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      banner:[''],
      logoYoP: [''],
    textoYoP:  [''],
    enlaceG:  [''],
    logoG:  [''],
    enlaceL:  [''],
    logoL:  [''],
    enlaceI:  [''],
    logoI:  [''],
    enlaceW:  [''],
    logoW:  [''],
    id:  [''],
      })
    this.getAllHeader();
  }
  getAllHeader(){
    this.api.getHeader().subscribe(res=>{
      this.headerData = res;
    })
  }
  editHeader(header: any){
    this.headerList.id = header.id;
    this.formValue.controls['banner'].setValue(header.banner);
    
   }
   updateHeader(){
   
    this.headerList.banner = this.formValue.value.banner;
    this.api.updateHeader(this.headerList, this.headerList.id).subscribe(res=>{
      alert("Banner modificado");
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllHeader();
      })
     
  }

  hasRouteAdmin (Router: string) {
    return this.route.url === Router;
 }
 hasRouteUsuario(Router:string){
   return this.route.url === Router;
 }

}
