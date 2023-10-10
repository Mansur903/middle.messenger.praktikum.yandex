import Handlebars from 'handlebars'

import { tmpl } from './main.tmpl'
import styles from './styles.module.scss'

export const Main = () => {
	return Handlebars.compile(tmpl)({
		main: styles.main
	})
}
