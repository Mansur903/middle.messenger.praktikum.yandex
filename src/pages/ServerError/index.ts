import Block from '../../utils/Block';
import { tmpl } from './serverError.tmpl';
import styles from './styles.module.scss';
import { Link } from '../../components/Link';

export class ServerError extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.backLinkCmp = new Link('', {
      to: '/chat',
      label: 'Назад к чатам',
      className: styles.link,
    });
  }

  render() {
    return this.compile(tmpl, {
      value: '500',
      text: 'Мы уже фиксим',
    });
  }
}
