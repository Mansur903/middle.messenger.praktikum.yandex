import Block from '../../utils/Block';
import styles from './styles.module.scss';

interface ChannelProps {
  path: string,
  alt: string,
  channelName: string,
  lastMessage: string,
  lastMessageTime: string,
  events?: {
    click: (e:KeyboardEvent) => void;
  },
  className?: string;
}

export class Channel extends Block {
  constructor(props: ChannelProps) {
    super('li', props);
  }

  init() {}

  render() {
    return this.compile(`
      <img class={{avatar}} src={{path}} alt={{alt}}>
      <div class={{channelContent}}>
        <span class={{name}}>{{channelName}}</span>
        <span class={{message}}>{{lastMessage}}</span>
      </div>
      <span class={{time}}>{{lastMessageTime}}</span>
`, {
      ...this.props,
      avatar: styles.avatar,
      channelContent: styles.channelContent,
      name: styles.name,
      message: styles.message,
      time: styles.time,
    });
  }
}
