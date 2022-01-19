import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminLogin } from '../classes/auth/admin-login';
import { LoginResponse } from '../classes/auth/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  APIURL:string = 'http://epicode.online/epicodebeservice/';

  currentUser!:LoginResponse;


  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }

  login(loginPayload:AdminLogin){
    return this.http.post<LoginResponse>(this.APIURL+'api/auth/login/', loginPayload)
  }

  logout(){
    localStorage.removeItem('accessToken')
    localStorage.removeItem('currentUser')
  }

  isLogged(){
    return localStorage.getItem('accessToken') != null;
  }
  utenteCorrente() {
    return localStorage.getItem('currentUser') || null;
  }
  userToken() {
    return localStorage.getItem('accessToken') || null;
  }

}
