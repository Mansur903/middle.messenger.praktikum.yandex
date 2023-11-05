import { API } from './Api.ts';

export interface IEditUserData {
    email?: string;
    login?: string;
    first_name?: string;
    second_name?: string;
    display_name?: string;
    phone?: string;
}

export interface IChangePasswordData {
    oldPassword: string,
    newPassword: string
}

export class UsersAPI extends API {
  constructor() {
    super('/user');
  }

  editProfile(data: IEditUserData) {
    return this.http.put('/profile', data);
  }

  changePassword(data: IChangePasswordData) {
    return this.http.put('/password', data);
  }
}
