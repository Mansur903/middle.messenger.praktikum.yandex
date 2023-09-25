import Handlebars from 'handlebars'

import {tmpl} from './notFound.tmpl'

export const NotFound = () => {
	return Handlebars.compile(tmpl)({})
}