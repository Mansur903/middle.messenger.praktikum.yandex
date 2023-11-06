import Block from '../../utils/Block';
import { tmpl } from './changePassword.tmpl';
import styles from './styles.module.scss';
import imgUrl from '../../images/default-avatar.jpeg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { State, withStore } from '../../utils/Store';
import { fieldsRegExps, validateChangePasswordForm } from '../../utils/Ancillary';
import UsersController from '../../controllers/UsersController';
import { Error } from '../../components/Error';

export class BaseChangePassword extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.inputOldPassCmp = new Input({
      name: 'oldPassword',
      className: styles.input,
      required: true,
      type: 'password',
    });

    this.children.inputNewPassCmp = new Input({
      name: 'newPassword',
      className: styles.input,
      required: true,
      type: 'password',
      'data-regexp': fieldsRegExps.password,
    });

    this.children.inputNewPassConfirmCmp = new Input({
      name: 'newPassword',
      className: styles.input,
      required: true,
      type: 'password',
      'data-regexp': fieldsRegExps.password,
    });

    this.children.buttonSaveCmp = new Button({
      label: 'Сохранить',
      className: styles.button,
      type: 'submit',
      events: {
        click: (e) => {
          e.preventDefault();
          if (!validateChangePasswordForm(this)) return;
          const values = Object
            .values(this.children)
            .filter((child) => child instanceof Input)
            .map((child) => ([(child as Input).getName(), (child as Input).getValue()]));

          const data = Object.fromEntries(values);
          UsersController.changePassword(data);
        },
      },
    });

    this.children.passwordErrorCmp = new Error({ text: '', className: styles.error });
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
      passwordErrorCmp: this.children.passwordErrorCmp,
    });
  }
}

const mapStateToProps = (state: State) => ({ ...state.user });

export const ChangePassword = withStore(mapStateToProps)(BaseChangePassword);
