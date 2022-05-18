import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }
  login(){
   this.http.get<any>("https://portafolio-florencia-casanova.herokuapp.com/ver/login").subscribe(res=>{
     /*this.http.get<any>("http://localhost:8080/ver/login").subscribe(res=>{*/
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("login exitoso");
        this.loginForm.reset();
        this.router.navigate(['usuario'])
      }
      else{
        alert("Usuario incorrecto")
      }
    })

  }

}
