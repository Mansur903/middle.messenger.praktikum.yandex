import Block from '../../utils/Block';
import { tmpl } from './chat.tmpl';
import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
 fieldsRegExps, validateField, validateForm,
} from '../../utils/Ancillary';
import { Link } from '../../components/Link';
import { Channel } from '../../components/Channel';
import { State, store, withStore } from '../../utils/Store';
import imgUrl from '../../images/default-avatar.jpeg';
import { AddChatModal } from '../../components/Modals/AddChatModal';
import { Messages } from '../../components/Messages';
import { ChatTooltip } from '../../components/ChatTooltip';
import { ChatHeaderChannelInfo } from '../../components/ChatHeaderChannelInfo';
import ChatsController from '../../controllers/ChatsController.ts';

export class BaseChat extends Block {
  constructor() {
    super('div', {
      isChatSelected: false,
    });
  }

  init() {
    this.children.messagesCmp = new Messages({
      className: styles.messages,
      messages: [],
    });

    this.children.profileLinkCmp = new Link('a', {
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

    this.children.buttonSendCmp = new Button({
      label: 'Отправить',
      className: styles.button,
      type: 'submit',
      events: {
        click: (event) => {
          event.preventDefault();
          if (!validateForm(this)) return;
          const input = this.element?.querySelector('input[name=messages]') as HTMLInputElement;

          this.props.socket.send(JSON.stringify({
            content: input?.value,
            type: 'message',
          }));

          if (input.value) {
            input.value = '';
          }
        },
      },
    });

    this.children.addChatModal = new AddChatModal({
      title: 'Создать чат',
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

    this.children.chatTooltipCmp = new ChatTooltip({
      isActive: false,
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

    this.children.chatHeaderChannelInfo = new ChatHeaderChannelInfo({
      className: styles.chatHeaderChannelInfo,
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
    const me = this;
    const { chats, selectedChat } = store.getState();

    if (chats) {
      this.children.channelsCmp = chats.map((channel) => new Channel({
        ...channel,
        className: channel.id === selectedChat?.id ? styles.channelCmpSelected : styles.channelCmp,
        onSelect: () => {
          const { selectedChat, user } = store.getState();

          const chatId = selectedChat?.id;
          const userId = user?.id;
          const token = selectedChat?.token;

          if (chatId) ChatsController.getChatUsers(chatId);

          const socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);
          this.props.socket = socket;

          socket.addEventListener('open', () => {
            console.log('Соединение установлено');

            socket.send(JSON.stringify({
              content: '0',
              type: 'get old',
            }));
          });

          socket.addEventListener('close', (event) => {
            if (event.wasClean) {
              console.log('Соединение закрыто чисто');
            } else {
              console.log('Обрыв соединения');
            }

            console.log(`Код: ${event.code} | Причина: ${event}`);
          });

          socket.addEventListener('error', () => {
            console.log('Ошибка');
          });

          socket.addEventListener('message', (event) => {
            let messages = {};

            try {
              messages = JSON.parse(event.data);
            } catch (error) {
              console.log(error);
            }

            (me.children.messagesCmp as Block).setProps({ messages });
          });
        },
      }));
    }

    return this.compile(tmpl, {
      title: selectedChat?.title,
      path: this.getChatAvatarPath(),
      isChatSelected: !!selectedChat,
    });
  }
}

const mapStateToProps = (state: State) => ({
  chats: { ...state.chats },
  selectedChat: state.selectedChat,
});

export const Chat = withStore(mapStateToProps)(BaseChat);
