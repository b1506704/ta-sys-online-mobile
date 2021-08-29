import { Component } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  userData: any = {
    username: '',
    password: '',
  };
  constructor(private authService: AuthService) {}
  onUsernameValueChanged(e: any) {
    this.userData.username = e.detail.value;
  }
  onPasswordValueChanged(e: any) {
    this.userData.password = e.detail.value;
  }

  onSubmit() {
    console.log(this.userData);
    this.authService.sendLoginRequest(this.userData);
  }
}
