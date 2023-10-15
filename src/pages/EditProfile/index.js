import Handlebars from 'handlebars'

import { tmpl } from './editProfile.tmpl.js'
import styles from './styles.module.scss'
import imgUrl from '../../images/default-avatar.jpeg'

export const EditProfile = () => {

	return Handlebars.compile(tmpl)({
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
	})
}
