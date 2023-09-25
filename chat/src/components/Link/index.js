import Handlebars from 'handlebars'

import { tmpl } from './link.tmpl'

export const Link = (props) => {
	return Handlebars.compile(tmpl)(props)
}