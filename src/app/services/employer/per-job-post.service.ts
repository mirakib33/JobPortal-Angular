import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { PerJobPost } from 'src/app/models/employer/per-job-post.model';

@Injectable({
  providedIn: 'root'
})
export class PerJobPostService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/employer";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  save(perJobPost:PerJobPost): Observable<any> {
  
    return this.httpClient.post(this.url + '/permanent-job-post/', JSON.stringify(perJobPost), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<any> {
  
    return this.httpClient.get(this.url + '/permanent-job-post/')
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.url + '/permanent-job-post/' + id)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, perJobPost:PerJobPost): Observable<any> {
  
    return this.httpClient.put(this.url + '/permanent-job-post/' + id, JSON.stringify(perJobPost), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  getJobByUserId(userId:number): Observable<any> {
  
    return this.httpClient.get(this.url + '/per-job-cv/' + userId)
  
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
