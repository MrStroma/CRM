import { User } from './../classes/user/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  @Output() onEditUser = new EventEmitter();
  @Input() editingUser!:User;
  user:User=new User
  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.user = this.editingUser
  }

  editUser(user: User): void {
    this.UserService.updateUser(user).subscribe(data => {
      this.onEditUser.emit(user)
      Swal.fire("Aggiornato cliente")
    })
  }

}
