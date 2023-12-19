import Block from '../../utils/Block';
import { Message, MessageProps } from '../Message';
import styles from './styles.module.scss';
import { store } from '../../utils/Store.ts';

interface MessagesProps {
  messages?: object,
  className?: string,
}

export class Messages extends Block {
  constructor(props: MessagesProps) {
    super('ul', props);
  }

  init() {
    this.children.messages = this.props.messages;
  }

  render() {
    const { user } = store.getState();

    if (this.props.messages) {
      if (Array.isArray(this.props.messages)) {
        this.children.messagesCmp = this.props.messages.map((message: MessageProps) => {
          return new Message({
            content: message.content,
            className: message.user_id === user?.id ? styles.messageOutcoming : styles.messageIncoming,
          });
        });
      } else {
        const { content, user_id } = this.props.messages;
        this.children.messagesCmp = [new Message({
          content,
          className: user_id === user?.id ? styles.messageOutcoming : styles.messageIncoming,
        }), ...this.children.messagesCmp as Block<any>[]];
      }
    }

    return this.compile(`
      {{#each messagesCmp}}
        {{{this}}}
      {{/each}}
    `, this.props);
  }
}
