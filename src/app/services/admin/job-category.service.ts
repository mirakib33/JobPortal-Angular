import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { JobCategory } from 'src/app/models/admin/job-category.model';

@Injectable({
  providedIn: 'root'
})
export class JobCategoryService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/admin";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  save(jobCategory:JobCategory): Observable<any> {
  
    return this.httpClient.post(this.url + '/job-category/', JSON.stringify(jobCategory), this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<any> {
  
    return this.httpClient.get(this.url + '/job-category/',  this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id:number): Observable<any> {
  
    return this.httpClient.get(this.url + '/job-category/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id:number, jobCategory:JobCategory): Observable<any> {
  
    return this.httpClient.put(this.url + '/job-category/' + id, JSON.stringify(jobCategory), this.httpOptions)
 
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  delete(id:number){
    return this.httpClient.delete(this.url + '/job-category/' + id, this.httpOptions)
  
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getJobCategoryList(): Observable<any> {
  
    return this.httpClient.get(this.url + '/job-category-list/', this.httpOptions)
  
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
