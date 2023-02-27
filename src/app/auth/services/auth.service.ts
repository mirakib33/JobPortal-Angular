import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signup } from 'src/app/models/signup.model';

const AUTH_API = 'http://localhost:8080/api/auth/';


const AUTH_API_REG = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(emailOrPhone: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        emailOrPhone,
        password,
      },
      httpOptions
    );
  }

  register(signup:Signup): Observable<any> {
    return this.http.post(
      AUTH_API_REG + 'signup', signup, httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }

}
