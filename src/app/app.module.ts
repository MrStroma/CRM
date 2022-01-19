import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { ElencofattureComponent } from './elencofatture/elencofatture.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EdituserComponent } from './edituser/edituser.component';
import { ComuniComponent } from './comuni/comuni.component';
import { ProvinceComponent } from './province/province.component';
import { NewfattureComponent } from './newfatture/newfatture.component';
import { EditfattureComponent } from './editfatture/editfatture.component';
import { NewcomuniComponent } from './newcomuni/newcomuni.component';
import {MaterialExampleModule} from '../../material.module';
import {MatNativeDateModule} from '@angular/material/core';
import { NewprovinceComponent } from './newprovince/newprovince.component';
import { EditcomuneComponent } from './editcomune/editcomune.component';
import { EditprovinceComponent } from './editprovince/editprovince.component';
import { DetailUserComponent } from './detail-user/detail-user.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    RegistrazioneComponent,
    ElencofattureComponent,
    UserdashboardComponent,
    EdituserComponent,
    ComuniComponent,
    ProvinceComponent,
    NewfattureComponent,
    EditfattureComponent,
    NewcomuniComponent,
    NewprovinceComponent,
    EditcomuneComponent,
    EditprovinceComponent,
    DetailUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppRoutingModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
