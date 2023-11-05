import Block from '../../utils/Block';
import { tmpl } from './changePassword.tmpl';
import styles from './styles.module.scss';
import imgUrl from '../../images/default-avatar.jpeg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { State, withStore } from '../../utils/Store';
import {fieldsRegExps, validateForm} from "../../utils/Ancillary.ts";
import UsersController from "../../controllers/UsersController.ts";

export class BaseChangePassword extends Block {
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
      'data-regexp': fieldsRegExps.password,
    });

    this.children.inputNewPassCmp = new Input({
      name: 'newPassword',
      value: 12345678,
      className: styles.input,
      required: true,
      type: 'password',
    });

    this.children.inputNewPassConfirmCmp = new Input({
      name: 'newPassword',
      value: 12345678,
      className: styles.input,
      required: true,
      type: 'password',
    });

    this.children.buttonSaveCmp = new Button({
      label: 'Сохранить',
      className: styles.button,
      type: 'submit',
      events: {
        click: (e) => {
          e.preventDefault();
          if (!validateForm(this)) return;
          const values = Object
            .values(this.children)
            .filter((child) => child instanceof Input)
            .map((child) => ([(child as Input).getName(), (child as Input).getValue()]));

          const data = Object.fromEntries(values);

          // UsersController.changePassword(data)
        },
      },
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

const mapStateToProps = (state: State) => ({ ...state.user });

export const ChangePassword = withStore(mapStateToProps)(BaseChangePassword);
