import Handlebars from 'handlebars'

import { tmpl } from './profile.tmpl'
import styles from './styles.module.scss'
import imgUrl from '../../images/default-avatar.jpeg'

export const Profile = () => {

	return Handlebars.compile(tmpl)({
		profileContainer: styles.profileContainer,
		avatar: styles.avatar,
		path: imgUrl,
		alt: 'Аватар',
		form: styles.form,
		formList: styles.formList,
		formListItem: styles.formListItem,
		sign: styles.sign,
		name: 'Мансур',
		options: styles.options,
		optionsItem: styles.optionsItem,
		blueLink: styles.blueLink,
		redLink: styles.redLink,
		main: styles.main,
		link: styles.link,
		header: styles.header,
		input: styles.input,
	})
}
