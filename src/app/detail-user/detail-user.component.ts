import { Fatture } from './../classes/fatture/fatture';
import { FattureService } from './../services/fatture.service';
import { IUser } from './../interfaces/user/i-user';
import { User } from './../classes/user/user';
import { UserService } from './../services/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  detailUser!:User
  detailFattura:Fatture[]=[]
  constructor(private route:ActivatedRoute, private router:Router, private userservice:UserService,
              private fattureservice:FattureService) { }

  ngOnInit(): void {
    this.route.params.subscribe(response =>{
     
      this.userservice.getAllUsersById(response['id']).subscribe(response => this.detailUser = response)
      this.fattureservice.getByCliente(response['id']).subscribe((response:any) => this.detailFattura= response.content)
      
    })
  }

}


