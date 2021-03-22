import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../account/services/authentication.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authenticationService: AuthenticationService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.authenticationService.getLoggedInAccount() === null) {
      return next.handle(request);
    }

    const account = this.authenticationService.getLoggedInAccount();

    const tokenizedReq = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${account.jwtToken}`),
    });

    return next.handle(tokenizedReq);
  }
}
