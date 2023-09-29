import Handlebars from 'handlebars'

import {tmpl} from './signup.tmpl'
import styles from './styles.module.scss'

export const SignUp = () => {

	return Handlebars.compile(tmpl)({
		signUpContainer: styles.signUpContainer,
		header: styles.header,
		signUpPageAddress: '/signup',
		blueLink: styles.blueLink,
		main: styles.main,
		input: styles.input,
		signupButton: styles.signupButton,

	})
}
