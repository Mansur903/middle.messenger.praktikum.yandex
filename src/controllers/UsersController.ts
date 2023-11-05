import { store } from '../utils/Store';
import { IEditUserData, UsersAPI, IChangePasswordData } from '../api/UsersApi';
import { AuthAPI } from '../api/AuthApi.ts';
import router from '../utils/Router.ts';
// import AuthController from './AuthController';

class UsersController {
  private authApi = new AuthAPI();

  private usersApi = new UsersAPI();

  async editProfile(data: IEditUserData) {
    try {
      await this.usersApi.editProfile(data);
      const user = await this.authApi.getUser();
      store.set('user', user);
      router.go('/profile');
      console.log({ user });
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
}

export default new UsersController();
