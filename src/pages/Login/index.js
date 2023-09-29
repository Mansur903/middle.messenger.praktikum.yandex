import Handlebars from 'handlebars'

import {tmpl} from './login.tmpl'
import styles from './styles.module.scss'

export const Login = () => {
	return Handlebars.compile(tmpl)({
		loginContainer: styles.loginContainer,
		header: styles.header,
		signUpPageAddress: '/signup',
		signUpPageText: 'Нет аккаунта?',
		main: styles.main,
		input: styles.input,
		button: styles.button,
	})
}
