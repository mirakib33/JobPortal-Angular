import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { AcademicSummary } from 'src/app/models/applicant/academic-summary.model';

@Injectable({
  providedIn: 'root'
})
export class AcademicSummaryService {

  constructor(private httpClient: HttpClient) { }

  private url = "http://localhost:8080/applicant";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  save(academicSummary:AcademicSummary): Observable<any> {
  
    return this.httpClient.post(this.url + '/academic-summary', JSON.stringify(academicSummary), this.httpOptions)
  
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
