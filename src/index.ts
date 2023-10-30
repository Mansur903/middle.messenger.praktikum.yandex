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
  NotFoundPage = '/notFound',
  SignUpPage = '/signup',
  EditProfilePage = '/editProfile',
  ProfilePage = '/profile',
  ChangePasswordPage = '/changePassword',
  ServerErrorPage = '/serverError',
  ChatPage = '/chat'
}

// const ROUTES: Record<string, Block> = {
//   '/': new Main(),
//   '/main': new Main(),
//   '/404': new NotFound(),
//   '/login': new Login(),
//   '/signup': new SignUp(),
//   '/editProfile': new EditProfile(),
//   '/profile': new Profile(),
//   '/changePassword': new ChangePassword(),
//   '/serverError': new ServerError(),
//   '/chat': new Chat(),
// };

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

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.LoginPage:
    case Routes.SignUpPage:
      isProtectedRoute = false;
      break;
  }

  try {
    router.start();

    // if (!isProtectedRoute) {
    //   router.go(Routes.ProfilePage);
    // }
  } catch (e) {
    // console.log(e, 'Here');
    router.start();

    if (isProtectedRoute) {
      router.go(Routes.LoginPage);
    }
  }
  // const root = document.getElementById('app')!;
  //
  // const component = ROUTES[window.location.pathname] || new NotFound();
  //
  // root.append(component.element!);
  // component.dispatchComponentDidMount();
});
