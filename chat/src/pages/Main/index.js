import Handlebars from 'handlebars'

import { tmpl } from './main.tmpl'
import { Link } from "../../components/Link/index.js";

export const Main = () => {
	return Handlebars.compile(tmpl)({
		loginPageLink: Link({ to: '/login', text: 'Login' }),
		signUpPageLink: Link({ to: '/signup', text: 'SignUp' })
	})
}