import { environment } from './../../../environments/environment';
import { User } from './../../classes/user/user';


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/i-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

 // APIURL:string = 'http://epicode.online/epicodebeservice/';

  userlist:IUser[]=[]
  constructor(private http: HttpClient) { }

 // getUserById(id: number) {
    //this.http.get<IUser>(environment.usersAPI+id).subscribe(response => console.log(response));
 //   this.http.get<IUser[]>(this.APIURL+'api/clienti').subscribe(response => this.userlist = response);
//    let obj = this.userlist.find(user => user.id == id);
 //   return obj;
 // }

  getAll(page:number){
    return this.http.get(environment.APIURL+`api/clienti?page=${page}&size=2000&sort=id,ASC`)
    
  }
  getPagedUsers(page: number){
    return this.http.get(environment.APIURL+`api/clienti?page=${page}&size=20&sort=id,ASC`)
  }

  getAllUsersById(id:number){

    return this.http.get<User>(environment.APIURL+'api/clienti/'+id)
  }

  createUser(user:IUser){
    return this.http.post(environment.APIURL+'api/clienti', user)
  }

  deleteUser(user:IUser){
    return this.http.delete(environment.APIURL+'api/clienti/'+user.id)
  }

  updateUser(user:User){
      return this.http.put(environment.APIURL+'api/clienti/'+user.id, user)
  }
  
  
}
