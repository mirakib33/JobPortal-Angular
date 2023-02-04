import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PerJobCv } from 'src/app/models/employer/per-job-cv.model';

@Injectable({
  providedIn: 'root'
})
export class PerJobCvService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  save(perJobCv:PerJobCv): Observable<any> {
  
    return this.httpClient.post(this.url + '/per-job-cv/', JSON.stringify(perJobCv), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<any> {
  
    return this.httpClient.get(this.url + '/per-job-cv/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.url + '/per-job-cv/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, perJobCv:PerJobCv): Observable<any> {
  
    return this.httpClient.put(this.url + '/per-job-cv/' + id, JSON.stringify(perJobCv), this.httpOptions)
 
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
