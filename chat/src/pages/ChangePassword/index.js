import Handlebars from 'handlebars'

import { tmpl } from './changePassword.tmpl.js'
import styles from './styles.module.scss'
import imgUrl from '../../images/default-avatar.jpeg'

export const ChangePassword = () => {

	return Handlebars.compile(tmpl)({
		changePasswordContainer: styles.changePasswordContainer,
		avatar: styles.avatar,
		path: imgUrl,
		alt: 'Аватар',
		formList: styles.formList,
		formListItem: styles.formListItem,
		sign: styles.sign,
	})
}