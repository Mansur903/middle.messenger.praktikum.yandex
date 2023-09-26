import Handlebars from 'handlebars'

import { tmpl } from './editProfile.tmpl.js'
import styles from './styles.module.scss'

export const EditProfile = () => {

	return Handlebars.compile(tmpl)({
		editProfileContainer: styles.editProfileContainer,
		avatar: styles.avatar,
		path: 'src/images/default-avatar.jpeg',
		alt: 'Аватар',
		formList: styles.formList,
		formListItem: styles.formListItem,
		sign: styles.sign,
	})
}