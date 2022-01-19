import { Province } from './../../interfaces/province/province';
import { IFatture } from './../../interfaces/fatture/ifatture';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provincia } from 'src/app/classes/user/user';
import { IProvincia, IUser } from 'src/app/interfaces/user/i-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {


 // APIURL:string = 'http://epicode.online/epicodebeservice/';
  provincelist:IProvincia[]=[]

  constructor(private http:HttpClient) { } 

  getPagedUsers(page: number){
    return this.http.get(environment.APIURL+`api/province?page=${page}&size=20&sort=id,ASC`)
  }

  getAllProvince(){
    return this.http.get(environment.APIURL+'api/province')
  }

  getAll(){
    return this.http.get<Province[]>(environment.APIURL+'api/fatture')
  }

  createProvincia(provincia:Provincia){
    return this.http.post(environment.APIURL+'api/province/', provincia)
  }

  deleteProvincia(provincia:Provincia){
    return this.http.delete(environment.APIURL+'api/province/'+provincia.id)
  }

  editProvincia(provincia:Provincia){
    return this.http.put(environment.APIURL+'api/province/'+provincia.id, provincia)
  }
}
