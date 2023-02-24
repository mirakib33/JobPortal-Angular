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
              'Authorization': "Bearer "+this.tokenStorageService.getToken()
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
