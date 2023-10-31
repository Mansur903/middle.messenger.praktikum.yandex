// import Block from './utils/Block';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { SignUp } from './pages/SignUp';
import { EditProfile } from './pages/EditProfile';
import { Profile } from './pages/Profile';
import { ChangePassword } from './pages/ChangePassword';
import { ServerError } from './pages/ServerError';
import { Chat } from './pages/Chat';
import './styles/index.scss';
import router from './utils/Router';

enum Routes {
  MainPage = '/main',
  LoginPage = '/login',
  NotFoundPage = '/404',
  SignUpPage = '/signup',
  EditProfilePage = '/editProfile',
  ProfilePage = '/profile',
  ChangePasswordPage = '/changePassword',
  ServerErrorPage = '/serverError',
  ChatPage = '/chat'
}

window.addEventListener('DOMContentLoaded', () => {
  router
    .use(Routes.MainPage, Main)
    .use(Routes.LoginPage, Login)
    .use(Routes.NotFoundPage, NotFound)
    .use(Routes.SignUpPage, SignUp)
    .use(Routes.EditProfilePage, EditProfile)
    .use(Routes.ProfilePage, Profile)
    .use(Routes.ChangePasswordPage, ChangePassword)
    .use(Routes.ServerErrorPage, ServerError)
    .use(Routes.ChatPage, Chat);

  try {
    router.start();
  } catch (e) {
    console.log(e, 'Here');
  }
});
