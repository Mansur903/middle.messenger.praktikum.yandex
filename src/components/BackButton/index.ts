import Block from '../../utils/Block';
import router from '../../utils/Router';
import styles from './styles.module.scss';
import imgUrl from '../../images/blueArrowLeft.png';

interface BackButtonProps {
  to: string
}

export class BackButton extends Block {
  constructor(props: BackButtonProps) {
    super('div', props);
  }

  init() {
    this.setProps({
      events: {
        click: () => {
          router.go(this.props.to);
        },
      },
    });
  }

  render() {
    return this.compile(`
			<div class={{backButtonBlock}}>
				<img class={{backArrow}} src={{imgUrl}} alt={{alt}}>
			</div>
`, {
      ...this.props,
      backButtonBlock: styles.backButtonBlock,
      backArrow: styles.backArrow,
      imgUrl,
    });
  }
}
