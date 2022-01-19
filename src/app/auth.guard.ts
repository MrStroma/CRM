import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router){}

  canActivate() {

    if(localStorage.getItem('accessToken')){
      return true;//rendo visibile la rotta se la condizione si verifica
    }

    //todo:
    //controllo che l'utente corrisponda ad un utente ancora esistente

    this.router.navigate(['']);//faccio tornare l'utente in un'area sicura
    return false;
  }
  
}
