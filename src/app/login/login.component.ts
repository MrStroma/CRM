

import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminLogin } from '../classes/auth/admin-login';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router, ) { }
  payload:AdminLogin = new AdminLogin();
 
  ngOnInit(): void {
      document.body.classList.add('bg-img');
  }

  login(){
      this.authService.login(this.payload).subscribe(data => {
        localStorage.setItem('accessToken',data.accessToken);
        localStorage.setItem('currentUser',JSON.stringify(data.id));
        this.authService.currentUser = data;
        this.router.navigate(['users'])
        Swal.fire("Benvenuto!")
      }) 
  }

}
