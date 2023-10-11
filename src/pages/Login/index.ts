import Handlebars from 'handlebars'

import Block from '../../utils/Block'
import {tmpl} from './login.tmpl'
import styles from './styles.module.scss'

export class Login extends Block {
	constructor() {
		super('div', {})
	}
	render() {
		return this.compile(Handlebars.compile(tmpl)({
			loginContainer: styles.loginContainer,
			header: styles.header,
			signUpPageAddress: '/signup',
			signUpPageText: 'Нет аккаунта?',
			main: styles.main,
			input: styles.input,
			button: styles.button,
		}), this.props)
	}
}
