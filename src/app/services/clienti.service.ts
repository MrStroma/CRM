import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  APIURL:string = 'http://epicode.online/epicodebeservice/';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.APIURL+'api/clienti')
  }
  
}
