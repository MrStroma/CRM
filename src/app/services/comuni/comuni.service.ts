import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comune } from 'src/app/classes/user/user';
import { IComune } from 'src/app/interfaces/user/i-user';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {

  APIURL:string = 'http://epicode.online/epicodebeservice/';
  constructor(private http:HttpClient) { }

  getPagedUsers(page: number){
    return this.http.get(this.APIURL+`api/comuni?page=${page}&size=20&sort=id,ASC`)
  }

  getAll(){
    return this.http.get<IComune[]>(this.APIURL+'api/comuni')
  }

  getComuniById(id:number){
    return this.http.get<Comune>(this.APIURL+'api/comuni/'+id)

  }

  deleteComune(comune:Comune){
    return this.http.delete(this.APIURL+'api/comuni/'+comune.id)
  }
  
  addComune(comune:Comune){
    return this.http.post(this.APIURL+'api/comuni', comune)
  }

  updateComune(comune:Comune) {
    return this.http.put(this.APIURL+'api/comuni/'+comune.id, comune)
  }
}
