import Handlebars from 'handlebars';
import Block from '../../../utils/Block';
import styles from './styles.module.scss';
import { Button } from '../../Button';
// import { Input } from '../../Input';
import ChatsController from '../../../controllers/ChatsController';
import { store } from '../../../utils/Store';

interface ModalProps {
  title: string;
  error?: string;
  buttonText: string;
  isActive: boolean;
  onClose?: () => void;
}

Handlebars.registerHelper('modalShowDeleteChat', () => {
  return `${styles.modal} ${styles.active}`;
});

Handlebars.registerHelper('overlayShowDeleteChat', () => {
  return `${styles.modalOverlay} ${styles.active}`;
});

export class DeleteChat extends Block {
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
          // const usersId = document.getElementById('usersDelete') as HTMLInputElement;
          // const usersArray = usersId.value.split(',').map((id) => Number(id));
          const { selectedChat } = store.getState();
          if (selectedChat) {
            ChatsController.deleteChat(selectedChat?.id);
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
          class='{{modalShowDeleteChat}}'
        {{else}}
          class='{{modalHideDeleteChat}}'
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
          class='{{overlayShowDeleteChat}}'
          {{else}}
          class='{{overlayHideDeleteChat}}'
         {{/if}}
         id="overlay-modal"></div>
`, {
      ...this.props,
      modalHideDeleteChat: styles.modal,
      overlayHideDeleteChat: styles.modalOverlay,
      modalCross: styles.modalCross,
    });
  }
}
