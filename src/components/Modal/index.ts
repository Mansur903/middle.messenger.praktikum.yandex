import Handlebars from 'handlebars';
import Block from '../../utils/Block';
import styles from './styles.module.scss';
import { Button } from '../Button';
import { Input } from '../Input';
import UsersController from '../../controllers/UsersController';

interface ModalProps {
    title: string;
    content: string;
    error: string;
    buttonText: string;
    isActive: boolean;
}

Handlebars.registerHelper('modalShow', () => {
  return `${styles.modal} ${styles.active}`;
});

Handlebars.registerHelper('overlayShow', () => {
  return `${styles.modalOverlay} ${styles.active}`;
});

export class Modal extends Block {
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

    this.children.chooseFileInput = new Input({
      required: true,
      type: 'file',
      className: styles.modalFileInput,
      accept: 'image/*',
      id: 'avatar',
    });

    this.children.confirmButton = new Button({
      label: 'Поменять',
      type: 'submit',
      className: styles.modalConfirmButton,
      events: {
        click: (e) => {
          e.preventDefault();
          const avatar = document.getElementById('avatar') as HTMLInputElement;
          if (!avatar.files) return;

          const form = new FormData();
          form.append('avatar', avatar.files[0]);

          UsersController.changeAvatar(form);
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
        class='{{modalShow}}'
        {{else}}
        class='{{modalHide}}'
        {{/if}}
        data-modal="1">
           {{{closeButton}}}
           <form id="avatarForm" class={{modalContent}}>
             <p class={{modalTitle}}>{{title}}</p>
             {{{chooseFileInput}}}
             {{{confirmButton}}}
           </form>
        </div>
        
        <div
         {{#if isActive}}
          class='{{overlayShow}}'
          {{else}}
          class='{{overlayHide}}'
          {{/if}}
         id="overlay-modal"></div>
`, {
      ...this.props,
      modalHide: styles.modal,
      overlayHide: styles.modalOverlay,
      modalCross: styles.modalCross,
      modalTitle: styles.modalTitle,
      closeButton: this.children.closeButton,
      modalContent: styles.modalContent,
      confirmButton: this.children.confirmButton,
    });
  }
}
