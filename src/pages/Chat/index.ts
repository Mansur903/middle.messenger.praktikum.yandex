import Block from '../../utils/Block';
import { tmpl } from './chat.tmpl';
import styles from './styles.module.scss';
import imgUrl from '../../images/default-avatar.jpeg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  fieldsRegExps, getInputValues, validateField, validateForm,
} from '../../utils/Ancillary';
import { Link } from '../../components/Link';
import { Channel } from '../../components/Channel';

export class Chat extends Block {
  constructor() {
    super('div', {});
  }

  getTestData() {
    return [
      {
        id: 123,
        title: 'my-chat',
        avatar: '/123/avatar1.jpg',
        unread_count: 15,
        created_by: 12345,
        last_message: {
          user: {
            first_name: 'Petya',
            second_name: 'Pupkin',
            avatar: '/path/to/avatar.jpg',
            email: 'my@email.com',
            login: 'userLogin',
            phone: '8(911)-222-33-22',
          },
          time: '10:15',
          content: 'this is message content',
        },
      },
      {
        id: 123,
        title: 'my-chat',
        avatar: '/123/avatar1.jpg',
        unread_count: 15,
        created_by: 12345,
        last_message: {
          user: {
            first_name: 'Petya',
            second_name: 'Pupkin',
            avatar: '/path/to/avatar.jpg',
            email: 'my@email.com',
            login: 'userLogin',
            phone: '8(911)-222-33-22',
          },
          time: '10:15',
          content: 'this is message content',
        },
      },
      {
        id: 123,
        title: 'my-chat',
        avatar: '/123/avatar1.jpg',
        unread_count: 15,
        created_by: 12345,
        last_message: {
          user: {
            first_name: 'Petya',
            second_name: 'Pupkin',
            avatar: '/path/to/avatar.jpg',
            email: 'my@email.com',
            login: 'userLogin',
            phone: '8(911)-222-33-22',
          },
          time: '10:15',
          content: 'this is message content',
        },
      },
      {
        id: 123,
        title: 'my-chat',
        avatar: '/123/avatar1.jpg',
        unread_count: 15,
        created_by: 12345,
        last_message: {
          user: {
            first_name: 'Petya',
            second_name: 'Pupkin',
            avatar: '/path/to/avatar.jpg',
            email: 'my@email.com',
            login: 'userLogin',
            phone: '8(911)-222-33-22',
          },
          time: '10:15',
          content: 'this is message content',
        },
      },
    ];
  }

  init() {
    const data = this.getTestData();
    const preparedData = data.map((item) => ({
      path: item.avatar,
      alt: 'Аватарка',
      channelName: item.title,
      lastMessage: item.last_message.content,
      lastMessageTime: item.last_message.time,
      className: styles.channel,
    }));
    // console.log({ preparedData });

    // this.children.channelCmp = new Channel({
    //   path: data[0].avatar,
    //   alt: 'Аватарка',
    //   channelName: data[0].title,
    //   lastMessage: data[0].last_message.content,
    //   lastMessageTime: data[0].last_message.time,
    //   events: {
    //     click: () => console.log(1),
    //   },
    //   className: styles.channel,
    // });
    // console.log(preparedData.map((channel) => new Channel(channel)))
    this.children.channels = preparedData.map((channel) => new Channel(channel));

    this.children.channelCmp = new Channel({
      path: data[0].avatar,
      alt: 'Аватарка',
      channelName: data[0].title,
      lastMessage: data[0].last_message.content,
      lastMessageTime: data[0].last_message.time,
      events: {
        click: () => console.log(1),
      },
      className: styles.channel,
    });

    this.children.profileLinkCmp = new Link('', {
      to: '/profile',
      label: 'Профиль >',
      className: styles.profileLink,
    });

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
      profileLinkCmp: this.children.profileLinkCmp,
      channelCmp: this.children.channelCmp,
    });
  }
}
