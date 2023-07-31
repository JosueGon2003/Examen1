import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CallcentersComponent } from './components/callcenters/callcenters.component';
import { CallcenterComponent } from './components/callcenter/callcenter.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: '/home' },
  
  {path: 'home', component: HomeComponent,}, 
  {path: 'callcenters', component: CallcentersComponent}, 
  {
    path: 'formulario',
    component: FormularioComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {path: 'callcenter/:id', component: CallcenterComponent}, 
{path: 'login', component: LoginComponent}, 
{path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
