import Handlebars from 'handlebars'

import {tmpl} from './serverError.tmpl'
import styles from './styles.module.scss'

export const ServerError = () => {

	return Handlebars.compile(tmpl)({
		wrapper: styles.wrapper,
		title: styles.title,
		subTitle: styles.subTitle,
		blueLink: styles.blueLink,
		value: '500',
		text: 'Мы уже фиксим',
		linkText: 'Назад к чатам',
		link: styles.link
	})
}
