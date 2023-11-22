import Block from '../../utils/Block';
import styles from './styles.module.scss';
import imgUrl from '../../images/default-avatar.jpeg';
import ChatsController from '../../controllers/ChatsController';

interface ChannelProps {
  avatar: string,
  title: string,
  last_message: string,
  unread_count?: number,
  events?: {
    click: (e:KeyboardEvent) => void;
  },
  className?: string;
  onSelect: () => void
}

export class Channel extends Block {
  constructor(props: ChannelProps) {
    super('li', props);
  }

  init() {
    this.props.events = {
      click: () => {
        this.props.onSelect();
        ChatsController.selectChat(this.props);
      },
    };
  }

  getAvatarPath() {
    return this.props.avatar || imgUrl;
  }

  render() {
    return this.compile(`
      <img class=${styles.avatar} src=${this.getAvatarPath()} alt='Аватар'>
      <div class=${styles.channelContent}>
        <span class=${styles.name}>{{title}}</span>
        <span class=${styles.message}>{{last_message}}</span>
      </div>
      <span class=${styles.time}>{{lastMessageTime}}</span>
`, {
      ...this.props,
    });
  }
}
