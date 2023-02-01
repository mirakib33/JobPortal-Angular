import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { EmpAccountInfo } from 'src/app/models/employer/emp-account-info.model';

@Injectable({
  providedIn: 'root'
})
export class EmpAccountInfoService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/employer";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  save(empAccountInfo: EmpAccountInfo): Observable<any> {
  
    return this.httpClient.post(this.url + '/emp-account-info', JSON.stringify(empAccountInfo), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.url + '/emp-account-info/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, empAccountInfo:EmpAccountInfo): Observable<any> {
  
    return this.httpClient.put(this.url + '/emp-account-info/' + id, JSON.stringify(empAccountInfo), this.httpOptions)
 
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
