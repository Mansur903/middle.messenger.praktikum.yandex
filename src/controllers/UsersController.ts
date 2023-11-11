import { store } from '../utils/Store';
import {
  IEditUserData, UsersAPI, IChangePasswordData,
} from '../api/UsersApi';
import { AuthAPI } from '../api/AuthApi';
import router from '../utils/Router';

class UsersController {
  private authApi = new AuthAPI();

  private usersApi = new UsersAPI();

  async editProfile(data: IEditUserData) {
    try {
      await this.usersApi.editProfile(data);
      const user = await this.authApi.getUser();
      store.set('user', user);
      router.go('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  async changePassword(data: IChangePasswordData) {
    try {
      await this.usersApi.changePassword(data);
      router.go('/profile');
    } catch (error) {
      console.log(error);
    }
  }

  async changeAvatar(data: FormData) {
    try {
      await this.usersApi.changeAvatar(data);
      const user = await this.authApi.getUser();
      store.set('user', user);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new UsersController();
