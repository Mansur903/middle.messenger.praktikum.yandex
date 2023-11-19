import Block from '../../utils/Block';
import { tmpl } from './chat.tmpl';
import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
 fieldsRegExps, getInputValues, validateField, validateForm,
} from '../../utils/Ancillary';
import { Link } from '../../components/Link';
import { Channel } from '../../components/Channel';
import { State, store, withStore } from '../../utils/Store';
import { AddChatModal } from '../../components/Modals/AddChatModal';
import imgUrl from '../../images/default-avatar.jpeg';

export class BaseChat extends Block {
  constructor() {
    super('div', {
      isAddChatModalActive: false,
      isChatSelected: false,
    });
  }

  init() {
    this.children.profileLinkCmp = new Link('', {
      to: '/profile',
      label: 'Профиль >',
      className: styles.profileLink,
    });

    this.children.addChatModal = new AddChatModal({
      title: 'Создать чат',
      error: 'error',
      buttonText: 'кнопка',
      isActive: false,
    });

    this.children.createChatCmp = new Button({
      label: 'Создать чат >',
      className: styles.createChatButton,
      events: {
        click: (e) => {
          e.preventDefault();
          (this.children.addChatModal as Block).setProps({ isActive: true });
        },
      },
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

  getChatAvatarPath() {
    const { selectedChat } = store.getState();
    if (!selectedChat) return null;
    const avatarPath = selectedChat?.avatar;
    return avatarPath ? `https://ya-praktikum.tech/api/v2/resources${avatarPath}`
     : imgUrl;
  }

  render() {
    const { chats, selectedChat } = store.getState();

    if (chats) {
      this.children.channelsCmp = chats.map((channel) => new Channel({
        ...channel,
        className: styles.channelCmp,
      }));
    }

    return this.compile(tmpl, {
      title: selectedChat?.title,
      path: this.getChatAvatarPath(),
    });
  }
}

const mapStateToProps = (state: State) => ({
  chats: { ...state.chats },
  selectedChat: state.selectedChat,
});

export const Chat = withStore(mapStateToProps)(BaseChat);
