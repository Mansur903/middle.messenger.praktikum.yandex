import Handlebars from 'handlebars';
import Block from '../../../utils/Block';
import styles from './styles.module.scss';
import { Button } from '../../Button';
import ChatsController from '../../../controllers/ChatsController';
import { store } from '../../../utils/Store';
import { InputCheckbox } from '../../InputCheckbox';

interface ModalProps {
  title: string;
  error?: string;
  buttonText: string;
  isActive: boolean;
  onClose?: () => void;
  users?: object[];
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

    // this.children.chatNameInput = new Input({
    //   required: true,
    //   type: 'text',
    //   className: styles.modalChatNameInput,
    //   placeholder: 'Введите id',
    //   id: 'usersDelete',
    // });

    this.children.confirmButton = new Button({
      label: 'Удалить',
      type: 'submit',
      className: styles.modalConfirmButton,
      events: {
        click: (e) => {
          e.preventDefault();
          const usersArray = Array.from(document.querySelectorAll('input[type="checkbox"]'))
            .map((item) => Number(item.id));
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
    const { selectedChatUsers } = store.getState();

    if (selectedChatUsers) {
      console.log({ selectedChatUsers });
      this.children.usersCmp = selectedChatUsers.map((item: { first_name: string, id: string }) => new InputCheckbox({
        type: 'checkbox',
        name: item.first_name,
        id: item.id,
      }));
    }

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
             {{#each usersCmp}}
                {{{this}}}
             {{/each}}
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
