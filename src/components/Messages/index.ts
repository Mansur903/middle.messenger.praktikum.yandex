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
    const { user } = store.getState()
    console.log(user)
    console.log('render messages');
    console.log(this.props);

    if (this.props.messages) {
      console.log(this.props.messages);
      this.children.messagesCmp = this.props.messages.map((message: MessageProps) => {
        return new Message({
          content: message.content,
          className: message.user_id === user?.id ? styles.messageOutcoming : styles.messageIncoming,
        });
      });
    }

    return this.compile(`
      {{#each messagesCmp}}
        {{{this}}}
      {{/each}}
    `, this.props);
  }
}
