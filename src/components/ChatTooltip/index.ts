import Handlebars from 'handlebars';
import Block from '../../utils/Block';
import styles from './styles.module.scss';
import { Button } from '../Button';
import { RemoveUsersFromChat } from '../Modals/RemoveUserFromChat';
import { AddUsersToChat } from '../Modals/AddUsersToChat';

interface ChatTooltipProps {
  className?: string,
  isActive: boolean,
}

Handlebars.registerHelper('tooltipHidden', () => {
  return `${styles.tooltip} ${styles.hidden}`;
});

export class ChatTooltip extends Block {
  constructor(props: ChatTooltipProps) {
    super('div', props);
  }

  init() {
    this.children.buttonCmp = new Button({
      className: styles.tooltipButton,
      events: {
        click: () => {
          this.setProps({
            isActive: !this.props.isActive,
          });
        },
      },
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

  close() {
    this.setProps({
      isActive: false,
    });
  }

  open() {
    this.setProps({
      isActive: true,
    });
  }

  render() {
    return this.compile(`
      {{{buttonCmp}}}
      <div
      {{#if isActive}}
       class=${styles.tooltip}
       {{else}}
       class='{{tooltipHidden}}'
      {{/if}}
       >
       {{{buttonAddUserToChat}}}
       {{{buttonRemoveUserFromChat}}}
       </div>
       {{{modalRemoveUserFromChat}}}
       {{{modalAddUserToChat}}}
`, {
      ...this.props,
    });
  }
}
