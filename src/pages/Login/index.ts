import Block from '../../utils/Block'
import {tmpl} from './login.tmpl'
import styles from './styles.module.scss'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export class Login extends Block {
	constructor() {
		super('div', {})
	}

	init() {
		this.children.buttonSubmitCmp = new Button({
			label: 'Войти',
			className: styles.button,
			type: 'submit',
			events: {click: () => console.log('Вход')},
		})

		this.children.inputLoginCmp = new Input({
			placeholder: 'Логин',
			name: 'login',
			required: true,
			className: styles.input,
			type: 'text',
			events: {click: () => console.log('login')},
		})

		this.children.inputPasswordCmp = new Input({
			placeholder: 'Пароль',
			name: 'password',
			required: true,
			className: styles.input,
			type: 'password',
			events: {click: () => console.log('password')},
		})
	}

	render() {
		return this.compile(tmpl, {
			loginContainer: styles.loginContainer,
			header: styles.header,
			signUpPageAddress: '/signup',
			signUpPageText: 'Нет аккаунта?',
			main: styles.main,
			input: styles.input,
			buttonSubmitCmp: this.children.buttonSubmitCmp,
			inputLoginCmp: this.children.inputLoginCmp,
			inputPasswordCmp: this.children.inputPasswordCmp
		})
	}
}
