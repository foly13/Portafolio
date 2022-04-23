import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { LoginComponent } from './login/login.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path:'', redirectTo:'portafolio', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'portafolio', component:PortafolioComponent},
  {path:'usuario', component: UsuarioComponent},
  {path:'editar/:id',component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
