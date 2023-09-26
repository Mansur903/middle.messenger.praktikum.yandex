import Handlebars from 'handlebars'

import {tmpl} from './notFound.tmpl'
import styles from './styles.module.scss'

export const NotFound = () => {
	return Handlebars.compile(tmpl)({
		wrapper: styles.wrapper,
		title: styles.title,
		subTitle: styles.subTitle,
		blueLink: styles.blueLink,
	})
}