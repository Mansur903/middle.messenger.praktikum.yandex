import Block from '../../utils/Block';
import { tmpl } from './changePassword.tmpl';
import styles from './styles.module.scss';
import imgUrl from '../../images/default-avatar.jpeg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export class ChangePassword extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.inputOldPassCmp = new Input({
      name: 'oldPassword',
      value: 123456,
      className: styles.input,
      required: true,
      type: 'password',
      events: { blur: () => console.log('login') },
    });

    this.children.inputNewPassCmp = new Input({
      name: 'newPassword',
      value: 12345678,
      className: styles.input,
      required: true,
      type: 'password',
      events: { blur: () => console.log('login') },
    });

    this.children.inputNewPassConfirmCmp = new Input({
      name: 'newPassword',
      value: 12345678,
      className: styles.input,
      required: true,
      type: 'password',
      events: { blur: () => console.log('login') },
    });

    this.children.buttonSaveCmp = new Button({
      label: 'Сохранить',
      className: styles.button,
      type: 'submit',
      events: { click: () => console.log('Сохранить') },
    });
  }

  render() {
    return this.compile(tmpl, {
      editProfileContainer: styles.editProfileContainer,
      avatar: styles.avatar,
      path: imgUrl,
      alt: 'Аватар',
      form: styles.form,
      formList: styles.formList,
      formListItem: styles.formListItem,
      sign: styles.sign,
      main: styles.main,
      input: styles.input,
      button: styles.button,
      changePasswordContainer: styles.changePasswordContainer,
      inputOldPassCmp: this.children.inputOldPassCmp,
      inputNewPassCmp: this.children.inputNewPassCmp,
      inputNewPassConfirmCmp: this.children.inputNewPassConfirmCmp,
      buttonSubmitCmp: this.children.buttonSaveCmp,
    });
  }
}
