import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/auth/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private tokenStorageService: TokenStorageService
  ) {}

  logout(): void {

    this.tokenStorageService.clean();

    window.location.reload();
  }

}
