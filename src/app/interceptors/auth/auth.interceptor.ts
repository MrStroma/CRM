import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    let authReq: HttpRequest<any>  = req;

    if (this.authService.isLogged()) {

        authReq = req.clone({ 
          headers: req.headers
          .set("Authorization", 'Bearer ' + this.authService.userToken())
          .set("X-TENANT-ID", 'fe_0521')
          .set('Content-Type', 'application/json')
         });

    }

    return next.handle(authReq);
  }
}
