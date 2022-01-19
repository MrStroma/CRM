import { FattureService } from './../services/fatture.service';
import { UserService } from './../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Sede, User } from '../classes/user/user';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ComuniService } from '../services/comuni/comuni.service';
import { IComune } from '../interfaces/user/i-user';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {



  user:User= new User
  sede:Sede= new Sede
  comuni:IComune[]=[]
  constructor(private userService:UserService, private router:Router, private comuniservice:ComuniService, private route:ActivatedRoute) { }


  
  ngOnInit(): void {
    this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
      
      
      this.comuniservice.getPagedUsers(params["page"]).subscribe((users:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
        
        this.comuni = users.content
        console.log(this.comuni)
      
      });

    })
  }




  addUser(user:User){

    if(user.nomeContatto == null){
      Swal.fire("Non inserire campi vuoti!")
    } else {
      this.userService.createUser(user).subscribe(data=>alert("Ti sei registrato con successo!"))
      this.router.navigate(['dashboard'])
    }
  

  }
}
