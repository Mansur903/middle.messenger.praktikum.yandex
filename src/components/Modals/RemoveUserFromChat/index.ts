import Handlebars from 'handlebars';
import Block from '../../../utils/Block';
import styles from './styles.module.scss';
import { Button } from '../../Button';
import { Input } from '../../Input';
import ChatsController from '../../../controllers/ChatsController';
import { store } from '../../../utils/Store';

interface ModalProps {
  title: string;
  error?: string;
  buttonText: string;
  isActive: boolean;
  onClose?: () => void;
}

Handlebars.registerHelper('modalShowRemoveUserFromChat', () => {
  return `${styles.modal} ${styles.active}`;
});

Handlebars.registerHelper('overlayShowRemoveUserFromChat', () => {
  return `${styles.modalOverlay} ${styles.active}`;
});

export class RemoveUsersFromChat extends Block {
  constructor(props: ModalProps) {
    super('div', props);
  }

  init() {
    this.children.closeButton = new Button({
      className: styles.modalCross,
      events: {
        click: () => {
          this.close();
        },
      },
    });

    this.children.chatNameInput = new Input({
      required: true,
      type: 'text',
      className: styles.modalChatNameInput,
      placeholder: 'Введите id',
      id: 'usersDelete',
    });

    this.children.confirmButton = new Button({
      label: 'Удалить',
      type: 'submit',
      className: styles.modalConfirmButton,
      events: {
        click: (e) => {
          e.preventDefault();
          const usersId = document.getElementById('usersDelete') as HTMLInputElement;
          const usersArray = usersId.value.split(',').map((id) => Number(id));
          const { selectedChat } = store.getState();
          if (usersArray && selectedChat) {
            ChatsController.removeUser({ users: usersArray, chatId: selectedChat?.id });
          }
          this.close();
        },
      },
    });
  }

  close() {
    this.setProps({
      isActive: false,
    });
  }

  render() {
    return this.compile(`
        <div
        {{#if isActive}}
          class='{{modalShowRemoveUserFromChat}}'
        {{else}}
          class='{{modalHideRemoveUserFromChat}}'
        {{/if}}
        data-modal="1">
           {{{closeButton}}}
           <form id="avatarForm" class=${styles.modalContent}>
             <p class=${styles.modalTitle}>{{title}}</p>
             {{{chatNameInput}}}
             {{{confirmButton}}}
           </form>
        </div>
        
        <div
         {{#if isActive}}
          class='{{overlayShowRemoveUserFromChat}}'
          {{else}}
          class='{{overlayHideRemoveUserFromChat}}'
         {{/if}}
         id="overlay-modal"></div>
`, {
      ...this.props,
      modalHideRemoveUserFromChat: styles.modal,
      overlayHideRemoveUserFromChat: styles.modalOverlay,
      modalCross: styles.modalCross,
    });
  }
}
