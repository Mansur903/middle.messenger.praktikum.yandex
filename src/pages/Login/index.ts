import Block from '../../utils/Block'
import {tmpl} from './login.tmpl'
import styles from './styles.module.scss'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import {fieldsRegExps, getInputValues, validateField, validateForm} from '../../utils/Ancillary';

export class Login extends Block {
	constructor() {
		super('div', {})
	}

	init() {
		this.children.buttonSubmitCmp = new Button({
			label: 'Войти',
			className: styles.button,
			type: 'submit',
			events: {
				click: (e) => {
					e.preventDefault()
					if (!validateForm(this)) return
					getInputValues(this)
				}},
		})

		this.children.inputLoginCmp = new Input({
			placeholder: 'Логин',
			name: 'login',
			required: true,
			className: styles.input,
			type: 'text',
			'data-regexp': fieldsRegExps.login,
			events: {
				blur: () => validateField(this, 'login')
			},
		})

		this.children.inputPasswordCmp = new Input({
			placeholder: 'Пароль',
			name: 'password',
			required: true,
			className: styles.input,
			type: 'password',
			'data-regexp': fieldsRegExps.password,
			events: {
				blur: () => validateField(this, 'password')
			},
		})
	}

	render() {
		return this.compile(tmpl, {
			loginContainer: styles.loginContainer,
			header: styles.header,
			titleText: 'Страница входа',
			headerText: 'Войти',
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
