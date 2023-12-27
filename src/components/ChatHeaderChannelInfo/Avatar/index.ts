import Block from '../../../utils/Block';
import styles from './styles.module.scss';

interface AvatarProps {
  size?: number;
  path: string,
  alt: string,
  tooltipText?: string,
  events?: {
    click: (e:KeyboardEvent) => void;
  },
  className?: string;
}

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super('div', props);
  }

  render() {
    return this.compile(`
			<div class={{avatarContainer}}>
				<img class={{avatar}} src={{path}} alt={{alt}}>
				<div class={{tooltip}}>{{tooltipText}}</div>
			</div>
`, {
      ...this.props,
      avatarContainer: styles.avatarContainer,
      avatar: styles.avatar,
      tooltip: styles.tooltip,
    });
  }
}
