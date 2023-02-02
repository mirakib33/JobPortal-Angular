import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { MobileBanking } from 'src/app/models/payment-method/mobile-banking.model';

@Injectable({
  providedIn: 'root'
})
export class MobileBankingService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/payment-method";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  save(mobileBanking:MobileBanking): Observable<any> {
  
    return this.httpClient.post(this.url + '/mobile-banking/', JSON.stringify(mobileBanking), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<any> {
  
    return this.httpClient.get(this.url + '/mobile-banking/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.url + '/mobile-banking/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, mobileBanking:MobileBanking): Observable<any> {
  
    return this.httpClient.put(this.url + '/mobile-banking/' + id, JSON.stringify(mobileBanking), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.url + '/mobile-banking/' + id, this.httpOptions)
  
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
