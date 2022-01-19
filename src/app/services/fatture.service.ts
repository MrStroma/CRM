import { Fatture } from './../classes/fatture/fatture';
import { IFatture } from './../interfaces/fatture/ifatture';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FattureService {

  listaFatture:IFatture[]=[]
  APIURL:string = 'http://epicode.online/epicodebeservice/';

  constructor(private http:HttpClient) { }

 
  getAll(){
    return this.http.get<IFatture[]>(this.APIURL+'api/fatture')
  }

  getPagedUsers(page: number){
    return this.http.get(this.APIURL+`api/fatture?page=${page}&size=20&sort=id,ASC`)

  }

  deleteFattura(fattura:Fatture){
    return this.http.delete(this.APIURL+'api/fatture/'+fattura.id)
  }

  createFattura(fattura:Fatture){
    return this.http.post(this.APIURL+'api/fatture/', fattura)
  }

  updateFattura(fattura:Fatture) {
    return this.http.put(this.APIURL+'api/fatture/'+fattura.id, fattura)
  }
 
 //getByCliente(id:number){
  // return this.http.get<Fatture>(this.APIURL+`/api/fatture/cliente/${id}?page=0&size=1&sort=id,ASC`)
 //}

  getByCliente(id:number){
   return this.http.get<Fatture[]>(this.APIURL+'api/fatture/cliente/'+id)
  }


}
