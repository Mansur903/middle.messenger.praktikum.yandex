import ChatsController from './ChatsController';
import { ISignInData, ISignUpData, AuthAPI } from '../api/AuthApi';
import { store } from '../utils/Store';
import router from '../utils/Router';
import { Routes } from '../index.ts';

class AuthController {
  private api = new AuthAPI();

  public errorMessage = '';

  async fetchUser() {
    const user = await this.api.getUser();
    store.set('user', user);
  }

  async signin(data: ISignInData) {
    try {
      await this.api.signin(data);
      await this.fetchUser();
      await ChatsController.getChats();
      router.go(Routes.ChatPage);
    } catch (err) {
      this.errorMessage = 'Неверный логин или пароль';
      console.log(err, 'signin err');
    }
  }

  async signup(data: ISignUpData) {
    try {
      await this.api.signup(data);
      await this.fetchUser();
      await ChatsController.getChats();
      router.go(Routes.ChatPage);
    } catch (err) {
      console.log(err, 'signup err');
    }
  }

  async logout() {
    try {
      await this.api.logout();
      store.set('user', undefined);
      router.go(Routes.LoginPage);
    } catch (err) {
      console.log(err, 'logout err');
    }
  }
}

export default new AuthController();
