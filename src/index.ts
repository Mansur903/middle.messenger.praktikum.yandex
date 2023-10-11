import Block from './utils/Block';
import {Main} from './pages/Main'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { SignUp } from './pages/SignUp'
import { EditProfile } from './pages/EditProfile'
import { Profile } from './pages/Profile'
import { ChangePassword } from './pages/ChangePassword'
import { ServerError } from './pages/ServerError'
import { Chat } from './pages/Chat'
import './styles/index.scss'


const ROUTES: Record<string, Block> = {
	'/': new Main(),
	'/main': new Main(),
	'/404': new NotFound(),
	'/login': new Login(),
	'/signup': new SignUp(),
	'/editProfile': new EditProfile(),
	'/profile': new Profile(),
	'/changePassword': new ChangePassword(),
	'/serverError': new ServerError(),
	'/chat': new Chat(),
}

window.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('app')!

	const component = ROUTES[window.location.pathname];

	root.append(component.element!);
	component.dispatchComponentDidMount();
})
