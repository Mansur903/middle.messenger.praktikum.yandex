import Block from '../../utils/Block'
import { tmpl } from './changePassword.tmpl'
import styles from './styles.module.scss'
import imgUrl from '../../images/default-avatar.jpeg'
import {Input} from "../../components/Input";

export class ChangePassword extends Block {
	constructor() {
		super('div', {})
	}

	init() {
		this.children.inputOldPassCmp = new Input({
			placeholder: 'Логин',
			name: 'oldPassword',
			required: true,
			className: styles.input,
			type: 'password',
			events: {click: () => console.log('login')},
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
			changePasswordContainer: styles.changePasswordContainer,
		})
	}
}
