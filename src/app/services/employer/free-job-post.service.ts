import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { FreeJobPost } from 'src/app/models/employer/free-job-post.model';

@Injectable({
  providedIn: 'root'
})
export class FreeJobPostService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/employer";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  save(freeJobPost:FreeJobPost): Observable<any> {
  
    return this.httpClient.post(this.url + '/freelance-job-post/', JSON.stringify(freeJobPost), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<any> {
  
    return this.httpClient.get(this.url + '/freelance-job-post/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.url + '/freelance-job-post/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, freeJobPost:FreeJobPost): Observable<any> {
  
    return this.httpClient.put(this.url + '/freelance-job-post/' + id, JSON.stringify(freeJobPost), this.httpOptions)
 
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
