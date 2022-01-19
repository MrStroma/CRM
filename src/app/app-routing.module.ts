import { DetailUserComponent } from './detail-user/detail-user.component';
import { EditcomuneComponent } from './editcomune/editcomune.component';
import { NewprovinceComponent } from './newprovince/newprovince.component';
import { NewcomuniComponent } from './newcomuni/newcomuni.component';
import { ComuniComponent } from './comuni/comuni.component';
import { ProvinceComponent } from './province/province.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth.guard';
import { ElencofattureComponent } from './elencofatture/elencofatture.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UsersComponent } from './users/users.component';
import { NewfattureComponent } from './newfatture/newfatture.component';

const routes: Routes = [
  {
    path:"",
    component: LoginComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"users",
    component: UsersComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"users/page/:page",
    component: UsersComponent,
    canActivate: [AuthGuardGuard]
  },

  {
    path:"registrazione",
    component:RegistrazioneComponent
  },
  {
    path:"dashboard",
    component:UserdashboardComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"fatture",
    component:ElencofattureComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"fatture/page/:page",
    component: ElencofattureComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"province",
    component: ProvinceComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"comuni",
    component: ComuniComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"newfatture",
    component: NewfattureComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"newcomuni",
    component: NewcomuniComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"newprovince",
    component: NewprovinceComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"comune/:id/edit",
    component: EditcomuneComponent,
    canActivate: [AuthGuardGuard]
  },
  {
    path:"user/:id/detail",
    component: DetailUserComponent,
    canActivate: [AuthGuardGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
