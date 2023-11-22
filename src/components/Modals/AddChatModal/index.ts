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

Handlebars.registerHelper('modalShowAddChat', () => {
  return `${styles.modal} ${styles.active}`;
});

Handlebars.registerHelper('overlayShowAddChat', () => {
  return `${styles.modalOverlay} ${styles.active}`;
});

export class AddChatModal extends Block {
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
      className: styles.modalChatNameInput,
      placeholder: 'Напишите название чата',
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
        class='{{modalShowAddChat}}'
        {{else}}
        class='{{modalHideAddChat}}'
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
          class='{{overlayShowAddChat}}'
         {{else}}
          class='{{overlayHideAddChat}}'
         {{/if}}
         id="overlay-modal"></div>
`, {
      ...this.props,
      modalHideAddChat: styles.modal,
      overlayHideAddChat: styles.modalOverlay,
      modalCross: styles.modalCross,
    });
  }
}