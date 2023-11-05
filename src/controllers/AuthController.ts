import { ISignInData, ISignUpData, AuthAPI } from '../api/AuthApi';
import { store } from '../utils/Store';
import router from '../utils/Router';

class AuthController {
  private api = new AuthAPI();

  async fetchUser() {
    try {
      const user = await this.api.getUser();
      store.set('user', user);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async signin(data: ISignInData) {
    try {
      await this.api.signin(data);
      await this.fetchUser();
      router.go('/profile');
    } catch (err) {
      console.log(err, 'signin err');
      throw err;
    }
  }

  async signup(data: ISignUpData) {
    try {
      console.log(data);
      await this.api.signup(data);

      await this.fetchUser();

      router.go('/profile');
    } catch (err) {
      console.log(err, 'signup err');
    }
  }

  async logout() {
    try {
      await this.api.logout();

      store.set('user', undefined);

      router.go('/login');
    } catch (err) {
      console.log(err, 'logout err');
    }
  }
}

export default new AuthController();
