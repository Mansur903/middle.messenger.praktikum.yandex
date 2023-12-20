import ChatsController from './ChatsController.ts';
import { ISignInData, ISignUpData, AuthAPI } from '../api/AuthApi';
import { store } from '../utils/Store';
import router from '../utils/Router';

class AuthController {
  private api = new AuthAPI();

  public errorMessage = '';

  async fetchUser() {
    try {
      const user = await this.api.getUser();
      store.set('user', user);
    } catch (error) {
      console.log(error);
    }
  }

  async signin(data: ISignInData) {
    try {
      await this.api.signin(data);
      await this.fetchUser();
      await ChatsController.getChats();
      router.go('/chat');
    } catch (err) {
      // @ts-ignore
      this.errorMessage = err.reason;
      console.log(err, 'signin err');
    }
  }

  async signup(data: ISignUpData) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
      await ChatsController.getChats();
      router.go('/chat');
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
