import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { CardDetails } from 'src/app/models/payment-method/card-details.model';

@Injectable({
  providedIn: 'root'
})
export class CardDetailsService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/payment-method";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  save(cardDetails:CardDetails): Observable<any> {
  
    return this.httpClient.post(this.url + '/card-details/', JSON.stringify(cardDetails), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<any> {
  
    return this.httpClient.get(this.url + '/card-details/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.url + '/card-details/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, cardDetails:CardDetails): Observable<any> {
  
    return this.httpClient.put(this.url + '/card-details/' + id, JSON.stringify(cardDetails), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.url + '/card-details/' + id, this.httpOptions)
  
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
