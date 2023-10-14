import Block from '../../utils/Block'
import {tmpl} from './signup.tmpl'
import styles from './styles.module.scss'
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";

export class SignUp extends Block {
	constructor() {
		super('div', {})
	}

	init() {
		this.children.inputEmailCmp = new Input({
			name: 'email',
			className: styles.input,
			type: 'text',
			placeholder: 'Почта',
			required: true,
			events: {focus: () => console.log('qwerty')},
		})

		this.children.inputLoginCmp = new Input({
			name: 'login',
			className: styles.input,
			type: 'text',
			placeholder: 'Логин',
			required: true,
			events: {focus: () => console.log('qwerty')},
		})

		this.children.inputFirstNameCmp = new Input({
			name: 'first_name',
			className: styles.input,
			type: 'text',
			placeholder: 'Имя',
			required: true,
			events: {focus: () => console.log('qwerty')},
		})

		this.children.inputSecondNameCmp = new Input({
			name: 'second_name',
			className: styles.input,
			type: 'text',
			placeholder: 'Фамилия',
			required: true,
			events: {focus: () => console.log('qwerty')},
		})

		this.children.inputPhoneCmp = new Input({
			name: 'phone',
			className: styles.input,
			type: 'phone',
			placeholder: 'Телефон',
			required: true,
			events: {focus: () => console.log('qwerty')},
		})

		this.children.inputOldPassCmp = new Input({
			name: 'password',
			placeholder: 'Пароль',
			className: styles.input,
			required: true,
			type: 'password',
			events: {focus: () => console.log('login')},
		})

		this.children.inputNewPassCmp = new Input({
			name: 'password',
			placeholder: 'Пароль (еще раз)',
			className: styles.input,
			required: true,
			type: 'password',
			events: {focus: () => console.log('login')},
		})

		this.children.buttonSignUpCmp = new Button({
			label: 'Зарегистрироваться',
			className: styles.signupButton,
			type: 'submit',
			events: {click: () => console.log('Сохранить')},
		})
	}

	render() {
		return this.compile(tmpl, {
			signUpContainer: styles.signUpContainer,
			header: styles.header,
			signUpPageAddress: '/signup',
			blueLink: styles.blueLink,
			main: styles.main,
			input: styles.input,
			signupButton: styles.signupButton,
			inputEmailCmp: this.children.inputEmailCmp,
			inputLoginCmp: this.children.inputLoginCmp,
			inputFirstNameCmp: this.children.inputFirstNameCmp,
			inputSecondNameCmp: this.children.inputSecondNameCmp,
			inputPhoneCmp: this.children.inputPhoneCmp,
			inputOldPassCmp: this.children.inputOldPassCmp,
			inputNewPassCmp: this.children.inputNewPassCmp,
			buttonSignUpCmp: this.children.buttonSignUpCmp
		})
	}
}
