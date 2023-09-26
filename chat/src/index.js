import { Main } from './pages/Main'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import { SignUp } from "./pages/SignUp/index.js";
import './styles/index.scss'

const ROUTES = {
	'/': Main(),
	'/404': NotFound(),
	'/login': Login(),
	'/signup': SignUp()
}
window.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('app')

	const component = ROUTES[window.location.pathname] || NotFound()
	root.innerHTML = component
})