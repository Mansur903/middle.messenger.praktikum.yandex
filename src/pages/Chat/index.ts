import Block from '../../utils/Block';
import { tmpl } from './chat.tmpl.ts';
import styles from './styles.module.scss';
import imgUrl from '../../images/default-avatar.jpeg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  fieldsRegExps, getInputValues, validateField, validateForm,
} from '../../utils/Ancillary';

export class Chat extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.inputCmp = new Input({
      name: 'messages',
      className: styles.input,
      required: true,
      type: 'text',
      placeholder: 'Сообщение',
      'data-regexp': fieldsRegExps.notEmpty,
      events: { blur: () => validateField(this, 'messages') },
    });

    this.children.inputSearchCmp = new Input({
      name: 'search',
      className: styles.input,
      type: 'text',
      placeholder: 'Поиск',
      events: { blur: () => console.log('search') },
    });

    this.children.buttonSendCmp = new Button({
      label: 'Отправить',
      className: styles.button,
      type: 'submit',
      events: {
        click: () => {
          if (!validateForm(this)) return;
          getInputValues(this);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, {
      main: styles.main,
      avatar: styles.avatar,
      channels: styles.channels,
      chat: styles.chat,
      chatHeader: styles.chatHeader,
      messages: styles.messages,
      path: imgUrl,
      alt: 'Аватар',
      channel: styles.channel,
      channelContent: styles.channelContent,
      name: styles.name,
      channelsHeader: styles.channelsHeader,
      searchInput: styles.searchInput,
      channelsList: styles.channelsList,
      time: styles.time,
      profileLink: styles.profileLink,
      message: styles.message,
      inputWrapper: styles.inputWrapper,
      input: styles.input,
      button: styles.button,
      inputCmp: this.children.inputCmp,
      buttonSendCmp: this.children.buttonSendCmp,
    });
  }
}
