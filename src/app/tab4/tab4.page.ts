import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { AuthService } from '../shared/services/auth.service';
import { UserStore } from '../shared/services/user/user-store.service';
@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  userData: User = {
    username: '',
    password: '',
    roleId: '',
  };
  roleList: Array<any> = [];
  constructor(private authService: AuthService, private userStore: UserStore) {}
  onUsernameValueChanged(e: any) {
    this.userData.username = e.detail.value;
  }
  onPasswordValueChanged(e: any) {
    this.userData.password = e.detail.value;
  }
  onRoleValueChanged(e: any) {
    this.userData.roleId = e.detail.value;
  }
  onSubmit() {
    console.log(this.userData);
    this.authService.sendRegisterRequest(this.userData);
  }

  roleDataListener() {
    this.userStore.$roleList.subscribe((data: any) => {
      this.roleList = data;
    });
  }

  ngOnInit(): void {
    this.userStore.getRole().then(() => {
      this.roleDataListener();
    });
    this.userData = {
      username: '',
      password: '',
      roleId: this.roleList[0],
    };
  }
}
