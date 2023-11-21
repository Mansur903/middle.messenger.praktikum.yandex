import Handlebars from 'handlebars';
import Block from '../../../utils/Block';
import styles from './styles.module.scss';
import { Button } from '../../Button';
import { Input } from '../../Input';
import ChatsController from '../../../controllers/ChatsController';

interface ModalProps {
  title: string;
  error?: string;
  buttonText: string;
  isActive: boolean;
}

Handlebars.registerHelper('modalShowAddUserToChat', () => {
  return `${styles.modal} ${styles.active}`;
});

Handlebars.registerHelper('overlayShowAddUserToChat', () => {
  return `${styles.modalOverlay} ${styles.active}`;
});

export class AddUsersToChat extends Block {
  constructor(props: ModalProps) {
    super('div', props);
  }

  init() {
    this.children.closeButton = new Button({
      className: styles.modalCross,
      events: {
        click: (e) => {
          e.preventDefault();
          this.close();
        },
      },
    });

    this.children.chatNameInput = new Input({
      required: true,
      type: 'text',
      className: styles.modalInput,
      placeholder: 'Введите id',
      id: 'chatName',
    });

    this.children.confirmButton = new Button({
      label: 'Добавить',
      type: 'submit',
      className: styles.modalConfirmButton,
      events: {
        click: (e) => {
          e.preventDefault();
          const chatName = document.getElementById('chatName') as HTMLInputElement;
          ChatsController.createChat(chatName.value);
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
        class='{{modalShowAddUserToChat}}'
        {{else}}
        class='{{modalHideAddUserToChat}}'
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
          class='{{overlayShowAddUserToChat}}'
          {{else}}
          class='{{overlayHideAddUserToChat}}'
          {{/if}}
         id="overlay-modal"></div>
`, {
      ...this.props,
      modalHideAddUserToChat: styles.modal,
      overlayHideAddUserToChat: styles.modalOverlay,
      modalCross: styles.modalCross,
    });
  }
}
