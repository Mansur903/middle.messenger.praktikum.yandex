import Block from '../../utils/Block';
import { State, store, withStore } from '../../utils/Store.ts';
import styles from './styles.module.scss';
import imgUrl from '../../images/default-avatar.jpeg';
import { Avatar } from './Avatar';
import { ChangeChatAvatarModal } from '../Modals/ChangeChatAvatarModal';

export class BaseChatHeaderChannelInfo extends Block {
  constructor() {
    super('div', {
      className: styles.chatHeaderChannelInfo,
    });
  }

  getChatAvatarPath(path: string | null = null) {
    if (path) {
      return `https://ya-praktikum.tech/api/v2/resources${path}`;
    }
    const { selectedChat } = store.getState();
    const avatarPath = selectedChat?.avatar;
    return avatarPath ? `https://ya-praktikum.tech/api/v2/resources${avatarPath}`
      : imgUrl;
  }

  init() {
    this.children.changeChatAvatarModal = new ChangeChatAvatarModal({
      title: 'Загрузите картинку',
      error: 'error',
      buttonText: 'кнопка',
      isActive: false,
      selectedChat: 0,
    });

    this.children.avatar = new Avatar({
      path: this.getChatAvatarPath(),
      alt: 'Аватар',
      events: {
        click: () => {
          (this.children.changeChatAvatarModal as Block).setProps({ isActive: true });
        },
      },
      className: styles.chatHeaderAvatar,
    });
  }

  render() {
    const { selectedChat, chats } = store.getState();

    if (selectedChat) {
      const chat = chats?.filter((chat) => chat.id === selectedChat.id)[0];
      (this.children.avatar as Block).setProps({
        path: this.getChatAvatarPath(chat?.avatar),
        events: {
          click: () => {
            (this.children.changeChatAvatarModal as Block).setProps({ isActive: true });
          },
        },
        className: styles.chatHeaderAvatar,
      });
      (this.children.changeChatAvatarModal as Block).setProps({ selectedChat: selectedChat?.id });

      return this.compile(`
        {{{avatar}}}
        <div class=${styles.chatTitle}>${selectedChat?.title}</div>
        {{{changeChatAvatarModal}}}
        `, {
        path: this.getChatAvatarPath(),
      });
    }
    return this.compile('', {});
  }
}

const mapStateToProps = (state: State) => ({
  selectedChat: state.selectedChat,
});

export const ChatHeaderChannelInfo = withStore(mapStateToProps)(BaseChatHeaderChannelInfo);
