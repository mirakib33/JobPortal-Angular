import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isRefreshing = false;

  constructor(private tokenStorageService: TokenStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    if (this.tokenStorageService.isLoggedIn()) {
      const request = req.clone({
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
              'Authorization': "Bearer "+this.tokenStorageService.getToken()
              // 'Authorization': "Bearer "+ "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBnbWFpbC5jb20iLCJleHAiOjE2NzgwNTI1MTQsImlhdCI6MTY3ODAzNDUxNH0.EMhefdZ5jFeHz6EN-J3J0AF0A5aAh4mJrFIEXBPazGiTbfPnu6mrPC8DUtgjlhxLAev11N7NZXPkl9ywvdGoIA"
          })
      });
      return next.handle(request).pipe(
  catchError(err => {
    if(err instanceof HttpErrorResponse && err.status === 401) {
      this.tokenStorageService.clean();
      window.location.reload();
    }
    return throwError(err);
  })
);
}
    
    return next.handle(req);
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
];
