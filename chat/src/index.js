import { Main } from './pages/Main'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { SignUp } from './pages/SignUp'
import { EditProfile } from './pages/EditProfile'
import { Profile } from './pages/Profile'
import { ChangePassword } from './pages/ChangePassword'

import './styles/index.scss'

const ROUTES = {
	'/': Main(),
	'/main': Main(),
	'/404': NotFound(),
	'/login': Login(),
	'/signup': SignUp(),
	'/editProfile': EditProfile(),
	'/profile': Profile(),
	'/changePassword': ChangePassword(),
}

window.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('app')

	const component = ROUTES[window.location.pathname] || NotFound()
	root.innerHTML = component
})