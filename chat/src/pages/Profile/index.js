import Handlebars from 'handlebars'

import { tmpl } from './profile.tmpl'
import styles from './styles.module.scss'

export const Profile = () => {

	return Handlebars.compile(tmpl)({
		profileContainer: styles.profileContainer,
		avatar: styles.avatar,
		path: 'src/images/default-avatar.jpeg',
		alt: 'Аватар',
		formList: styles.formList,
		formListItem: styles.formListItem,
		sign: styles.sign,
		name: 'Мансур',
		options: styles.options,
		optionsItem: styles.optionsItem,
		blueLink: styles.blueLink,
		redLink: styles.redLink
	})
}