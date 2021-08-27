import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  userData: any = {
    userName: '',
    passWord: '',
    role:''
  };
  constructor() {}
  onUsernameValueChanged(e: any) {
    this.userData.userName = e.detail.value;
  }
  onPasswordValueChanged(e: any) {
    this.userData.passWord = e.detail.value;
  }
  onRoleValueChanged(e: any) {
    this.userData.role = e.detail.value;
  }
  onSubmit() {
    console.log(this.userData);
  }
}
