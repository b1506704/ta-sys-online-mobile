/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/ban-types */
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { StateService } from './state.service';

interface StoreState {
  userList: Array<User>;
  selectedUser: Object;
  currentUser: Object;
  currentRole: String;
  isLoading: Boolean;
  notifType: string;
  responseMsg: string;
}
const initialState: StoreState = {
  userList: [],
  selectedUser: {},
  currentUser: {},
  currentRole: '',
  isLoading: false,
  responseMsg: '',
  notifType: '',
};
@Injectable({
  providedIn: 'root',
})
export class StoreService extends StateService<StoreState> {
  constructor(private toastController: ToastController) {
    super(initialState);
    this.loadDataAsync();
  }

  $isLoading: Observable<Boolean> = this.select((state) => state.isLoading);

  $responseMsg: Observable<String> = this.select((state) => state.responseMsg);

  $notifType: Observable<String> = this.select((state) => state.notifType);

  $currentUser: Observable<Object> = this.select((state) => state.currentUser);

  $currentRole: Observable<String> = this.select((state) => state.currentRole);

  loadDataAsync() {}

  setIsLoading(_isLoading: Boolean) {
    this.setState({ isLoading: _isLoading });
  }

  setResponseMsg(message: string) {
    this.setState({ responseMsg: message });
  }

  setNotifType(type: string) {
    this.setState({ notifType: type });
  }

  setCurrentUser(_user: Object) {
    this.setState({ currentUser: _user });
  }

  setCurrentUserRole(role: String) {
    this.setState({ currentRole: role });
  }

  async showNotif(message: string, type: string) {
    const toast = await this.toastController.create({
      message,
      color: type,
      duration: 2000,
      // cssClass: 'toastCss',
      position: 'bottom',
    });
    await toast.present();
    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
    this.setResponseMsg(message);
  }
}
