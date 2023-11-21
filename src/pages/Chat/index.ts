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
import imgUrl from '../../images/default-avatar.jpeg';
import { RemoveUsersFromChat } from '../../components/Modals/RemoveUserFromChat';
import { AddChatModal } from '../../components/Modals/AddChatModal';
import { AddUsersToChat } from '../../components/Modals/AddUsersToChat';

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

    this.children.addChatModal = new AddChatModal({
      title: 'Создать чат',
      isActive: false,
      buttonText: 'Добавить',
    });

    this.children.modalRemoveUserFromChat = new RemoveUsersFromChat({
      title: 'Удалить пользователей из чата (если сразу несколько, то через запятую)',
      isActive: false,
      buttonText: 'Удалить',
    });

    this.children.modalAddUserToChat = new AddUsersToChat({
      title: 'Добавить пользователя в чат (если сразу несколько, то через запятую)',
      isActive: false,
      buttonText: 'Добавить',
    });

    this.children.createChatCmp = new Button({
      label: 'Создать чат >',
      className: styles.createChatButton,
      events: {
        click: () => {
          (this.children.addChatModal as Block).setProps({ isActive: true });
        },
      },
    });

    this.children.buttonRemoveUserFromChat = new Button({
      label: 'Удалить пользователя',
      className: styles.buttonRemoveUserFromChat,
      events: {
        click: () => {
          (this.children.modalRemoveUserFromChat as Block).setProps({ isActive: true });
        },
      },
    });

    this.children.buttonAddUserToChat = new Button({
      label: 'Добавить пользователя',
      className: styles.buttonAddUserToChat,
      events: {
        click: () => {
          (this.children.modalAddUserToChat as Block).setProps({ isActive: true });
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
