import { IUser } from './../interfaces/user/i-user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/user/user';
import { UserService } from '../services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  selectedUser!:User;
  openEdit:boolean = false;
  users: User[] = [];
  editUsers:User = new User()
  totalElements!: number;
  size!: number;
  numberOfPages!: number;
  pageNumbers: number[] = [];
  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {//ottengo il parametro page dalla rotta
    this.userService.getPagedUsers(params["page"]).subscribe((users:any) => {//passo il parametro page alla chiamata che mi restituirà gli utenti in versione paginata
    this.users = users.content
    /**inizio paginazione */
        this.totalElements = users.totalElements
        this.size = users.size
        this.numberOfPages = Math.round(users.totalElements / users.size)
        for(let i = 1; i <= this.numberOfPages; i++){
          console.log(i);
          this.pageNumbers.push(i);
        }
        /**fine paginazione */
      });

    })
  }


  removeUser(user:User){
    this.userService.deleteUser(user).subscribe(data=>Swal.fire("cancellazione eseguita"))
    let index = this.users.indexOf(user)
    this.users.splice(index,1)
  }

  editUser(user:User){
      this.selectedUser = user;
      this.openEdit = true;
  }

  closePopup(){
    this.openEdit = false;
  }

  detailPeople(item:User){
    this.router.navigate(['user', item.id, 'detail'])


  }

  
}
