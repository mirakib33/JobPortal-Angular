import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Signup } from 'src/app/models/signup/signup.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) { }
  private url = "http://localhost:8080";

  save(data : Signup){
    return this.http.post<Signup>(this.url, data);
  }
}
