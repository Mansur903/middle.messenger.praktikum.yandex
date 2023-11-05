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
import AuthController from './controllers/AuthController';

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

window.addEventListener('DOMContentLoaded', async () => {
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

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.MainPage:
    case Routes.SignUpPage:
      isProtectedRoute = false;
      break;
    default:
  }

  try {
    await AuthController.fetchUser();

    router.start();

    if (!isProtectedRoute) {
      console.log(isProtectedRoute);
      router.go(Routes.ProfilePage);
    }
  } catch (e) {
    console.log(e, 'Here');
    router.start();

    if (isProtectedRoute) {
      router.go(Routes.LoginPage);
    }
  }
});
