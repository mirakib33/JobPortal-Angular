import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AdminSignup } from '../models/admin-signup.model';

@Injectable({
  providedIn: 'root'
})
export class AdminSignupService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  save(adminSignup:AdminSignup): Observable<any> {
  
    return this.httpClient.post(this.url + '/admin-signup', JSON.stringify(adminSignup), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
