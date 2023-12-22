import { API } from './Api';

export interface ISignUpData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface ISignInData {
  login: string;
  password: string;
}

export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
}

export class AuthAPI extends API {
  constructor() {
    super('/auth');
  }

  signin(data: ISignInData) {
    return this.http.post('/signin', data);
  }

  signup(data: ISignUpData) {
    return this.http.post('/signup', data);
  }

  logout() {
    return this.http.post('/logout');
  }

  getUser() {
    return this.http.get('/user');
  }
}
