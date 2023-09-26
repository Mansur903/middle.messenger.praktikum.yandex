import Handlebars from 'handlebars'

import { tmpl } from './changePassword.tmpl.js'
import styles from './styles.module.scss'

export const ChangePassword = () => {

	return Handlebars.compile(tmpl)({
		changePasswordContainer: styles.changePasswordContainer,
		avatar: styles.avatar,
		path: 'src/images/default-avatar.jpeg',
		alt: 'Аватар',
		formList: styles.formList,
		formListItem: styles.formListItem,
		sign: styles.sign,
	})
}