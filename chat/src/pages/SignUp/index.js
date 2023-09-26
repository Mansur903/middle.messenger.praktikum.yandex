import Handlebars from 'handlebars'

import {tmpl} from './signup.tmpl'
import styles from './styles.module.scss'

export const SignUp = () => {
	return Handlebars.compile(tmpl)({
		loginContainer: styles.loginContainer,
		header: styles.header,
		signUpPageAddress: '/signup',
		signUpPageText: 'Нет аккаунта?'
	})
}