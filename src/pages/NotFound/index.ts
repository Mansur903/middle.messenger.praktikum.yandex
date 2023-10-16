import Block from '../../utils/Block';
import { tmpl } from './notFound.tmpl';
import styles from './styles.module.scss';

export class NotFound extends Block {
  constructor() {
    super('div', {});
  }

  render() {
    return this.compile(tmpl, {
      wrapper: styles.wrapper,
      title: styles.title,
      subTitle: styles.subTitle,
      blueLink: styles.blueLink,
      link: styles.link,
    });
  }
}
