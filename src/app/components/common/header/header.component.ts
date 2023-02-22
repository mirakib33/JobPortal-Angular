import { LoginService } from './../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Emitter } from 'src/app/auth/emitter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false ;
  constructor(private loginService: LoginService) { }
  ngOnInit(): void {
    Emitter.authEmitter.subscribe(res=>{
      this.isLoggedIn = res
    })
  }

  logout() {
    this.loginService.logout();
  }

}
