import Handlebars from 'handlebars'

import Block from '../../utils/Block'
import { tmpl } from './main.tmpl'
import styles from './styles.module.scss'


export class Main extends Block {
  constructor() {
    super('div', { title: 'Home Page'})
  }

  render() {
     return this.compile(Handlebars.compile(tmpl)({
       main: styles.main
     }), this.props)
  }
}
