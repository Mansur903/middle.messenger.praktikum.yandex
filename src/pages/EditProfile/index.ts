import Handlebars from 'handlebars'

import Block from '../../utils/Block'
import { tmpl } from './editProfile.tmpl.ts'
import styles from './styles.module.scss'
import imgUrl from '../../images/default-avatar.jpeg'

export class EditProfile extends Block {
	constructor() {
		super('div', {})
	}

	render() {
		return this.compile(Handlebars.compile(tmpl)({
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
			button: styles.button
		}), this.props)
	}
}
