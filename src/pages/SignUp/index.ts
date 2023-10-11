import Handlebars from 'handlebars'

import Block from '../../utils/Block'
import {tmpl} from './signup.tmpl'
import styles from './styles.module.scss'

export class SignUp extends Block {
	constructor() {
		super('div', {})
	}

	render() {
		return this.compile(Handlebars.compile(tmpl)({
			signUpContainer: styles.signUpContainer,
			header: styles.header,
			signUpPageAddress: '/signup',
			blueLink: styles.blueLink,
			main: styles.main,
			input: styles.input,
			signupButton: styles.signupButton,
		}), this.props)
	}
}
