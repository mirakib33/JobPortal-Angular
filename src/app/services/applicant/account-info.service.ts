import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AccountInfo } from 'src/app/models/applicant/account-info.model';

@Injectable({
  providedIn: 'root'
})
export class AccountInfoService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  save(accountInfo: AccountInfo): Observable<any> {
  
    return this.httpClient.post(this.url + '/signup', JSON.stringify(accountInfo), this.httpOptions)
  
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
