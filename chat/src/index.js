import { Main } from './pages/Main'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound'
import './styles/index.scss'

const ROUTES = {
	'/404': NotFound(),
	'/login': Login(),
	'/': Main(),
}
window.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('app')

	const component = ROUTES[window.location.pathname] || NotFound()
	root.innerHTML = component
})