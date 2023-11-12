import Block from '../../utils/Block';
import { tmpl } from './notFound.tmpl';
import styles from './styles.module.scss';
import { Link } from '../../components/Link';

export class NotFound extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.backLinkCmp = new Link('', {
      to: '/',
      label: 'Назад к чатам',
      className: styles.link,
    });
  }

  render() {
    return this.compile(tmpl, {
      wrapper: styles.wrapper,
      title: styles.title,
      subTitle: styles.subTitle,
      blueLink: styles.blueLink,
      backLinkCmp: this.children.backLinkCmp,
    });
  }
}
