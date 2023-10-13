import Block from '../../utils/Block'
import { tmpl } from './editProfile.tmpl.ts'
import styles from './styles.module.scss'
import imgUrl from '../../images/default-avatar.jpeg'
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";

export class EditProfile extends Block {
	constructor() {
		super('div', {})
	}

	init() {
		this.children.inputEmailCmp = new Input({
			name: 'email',
			className: styles.input,
			type: 'text',
			value: 'mansur98@yandex.ru',
			events: {click: () => console.log('qwerty')},
		})

		this.children.inputLoginCmp = new Input({
			name: 'login',
			className: styles.input,
			type: 'text',
			value: 'Mansur903',
			events: {click: () => console.log('qwerty')},
		})

		this.children.inputFirstNameCmp = new Input({
			name: 'first_name',
			className: styles.input,
			type: 'text',
			value: 'Мансур',
			events: {click: () => console.log('qwerty')},
		})

		this.children.inputSecondNameCmp = new Input({
			name: 'second_name',
			className: styles.input,
			type: 'text',
			value: 'Хуснутдинов',
			events: {click: () => console.log('qwerty')},
		})

		this.children.inputDisplayNameCmp = new Input({
			name: 'display_name',
			className: styles.input,
			type: 'text',
			value: 'Mansur',
			events: {click: () => console.log('qwerty')},
		})

		this.children.inputPhoneCmp = new Input({
			name: 'phone',
			className: styles.input,
			type: 'phone',
			value: '+71234569999',
			events: {click: () => console.log('qwerty')},
		})

		this.children.buttonSaveCmp = new Button({
			label: 'Сохранить',
			className: styles.button,
			type: 'submit',
			events: {click: () => console.log('Сохранить')},
		})
	}

	render() {
		return this.compile(tmpl, {
			editProfileContainer: styles.editProfileContainer,
			avatar: styles.avatar,
			path: imgUrl,
			alt: 'Аватар',
			form: styles.form,
			formList: styles.formList,
			formListItem: styles.formListItem,
			sign: styles.sign,
			main: styles.main,
			input: styles.input,
			button: styles.button,
			inputEmailCmp: this.children.inputEmailCmp,
			inputLoginCmp: this.children.inputLoginCmp,
			inputFirstNameCmp: this.children.inputFirstNameCmp,
			inputSecondNameCmp: this.children.inputSecondNameCmp,
			inputDisplayNameCmp: this.children.inputDisplayNameCmp,
			inputPhoneCmp: this.children.inputPhoneCmp,
			buttonSaveCmp: this.children.buttonSaveCmp
		})
	}
}
