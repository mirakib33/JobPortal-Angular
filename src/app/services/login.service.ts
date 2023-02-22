import { Observable, throwError, catchError } from 'rxjs';
import { Signup } from './../models/signup.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  invalidUserAuth = new EventEmitter<boolean> (false);

  private url = "http://localhost:8080";

  constructor(private http: HttpClient, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  token(){
    const token = localStorage.getItem("token");
    return JSON.parse(token!).body;
  }


  login(signup:Signup){
    return this.http.post(this.url + '/login',signup,{observe:'response'})
    .subscribe((data) => {
      if(data) {
        localStorage.setItem('token', JSON.stringify(data));
        this.router.navigate(['/']);
        const tok = localStorage.getItem("token");
        this.invalidUserAuth.emit(false);
      } else{
        this.invalidUserAuth.emit(true);
      }
    })
  }

  logout(){
    localStorage.removeItem('token');
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
