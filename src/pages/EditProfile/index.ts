import Block from '../../utils/Block';
import { tmpl } from './editProfile.tmpl';
import styles from './styles.module.scss';
import imgUrl from '../../images/default-avatar.jpeg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Error } from '../../components/Error';
import {
  fieldsErrors,
  fieldsRegExps, getInputValues, validateField, validateForm,
} from '../../utils/Ancillary';

export class EditProfile extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.inputEmailCmp = new Input({
      name: 'email',
      className: styles.input,
      type: 'text',
      value: 'mansur98@yandex.ru',
      'data-regexp': fieldsRegExps.email,
      events: {
        blur: () => {
          validateField(this, 'email')
            ? this.children.inputEmailErrorCmp.setProps({ text: '' })
            : this.children.inputEmailErrorCmp.setProps({ text: fieldsErrors.email });
        },
      },
    });
    this.children.inputEmailErrorCmp = new Error({ text: '', className: styles.error });

    this.children.inputLoginCmp = new Input({
      name: 'login',
      className: styles.input,
      type: 'text',
      value: 'Mansur903',
      'data-regexp': fieldsRegExps.login,
      events: {
        blur: () => {
          validateField(this, 'login')
            ? this.children.inputLoginErrorCmp.setProps({ text: '' })
            : this.children.inputLoginErrorCmp.setProps({ text: fieldsErrors.login });
        },
      },
    });
    this.children.inputLoginErrorCmp = new Error({ text: '', className: styles.error });

    this.children.inputFirstNameCmp = new Input({
      name: 'first_name',
      className: styles.input,
      type: 'text',
      value: 'Мансур',
      'data-regexp': fieldsRegExps.firstSecondName,
      events: {
        blur: () => {
          validateField(this, 'first_name')
            ? this.children.inputFirstNameErrorCmp.setProps({ text: '' })
            : this.children.inputFirstNameErrorCmp.setProps({ text: fieldsErrors.firstSecondName });
        },
      },
    });
    this.children.inputFirstNameErrorCmp = new Error({ text: '', className: styles.error });

    this.children.inputSecondNameCmp = new Input({
      name: 'second_name',
      className: styles.input,
      type: 'text',
      value: 'Хуснутдинов',
      'data-regexp': fieldsRegExps.firstSecondName,
      events: {
        blur: () => {
          validateField(this, 'second_name')
            ? this.children.inputSecondNameErrorCmp.setProps({ text: '' })
            : this.children.inputSecondNameErrorCmp
              .setProps({ text: fieldsErrors.firstSecondName });
        },
      },
    });
    this.children.inputSecondNameErrorCmp = new Error({ text: '', className: styles.error });

    this.children.inputDisplayNameCmp = new Input({
      name: 'display_name',
      className: styles.input,
      type: 'text',
      value: 'Mansur',
      'data-regexp': fieldsRegExps.firstSecondName,
      events: {
        blur: () => {
          validateField(this, 'display_name')
            ? this.children.inputDisplayNameErrorCmp.setProps({ text: '' })
            : this.children.inputDisplayNameErrorCmp
              .setProps({ text: fieldsErrors.firstSecondName });
        },
      },
    });
    this.children.inputDisplayNameErrorCmp = new Error({ text: '', className: styles.error });

    this.children.inputPhoneCmp = new Input({
      name: 'phone',
      className: styles.input,
      type: 'phone',
      value: '+71234569999',
      'data-regexp': fieldsRegExps.phone,
      events: {
        blur: () => {
          validateField(this, 'phone')
            ? this.children.inputPhoneErrorCmp.setProps({ text: '' })
            : this.children.inputPhoneErrorCmp.setProps({ text: fieldsErrors.phone });
        },
      },
    });
    this.children.inputPhoneErrorCmp = new Error({ text: '', className: styles.error });

    this.children.buttonSaveCmp = new Button({
      label: 'Сохранить',
      className: styles.button,
      type: 'submit',
      events: {
        click: (e) => {
          e.preventDefault();
          if (!validateForm(this)) return;
          getInputValues(this);
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
      inputEmailCmp: this.children.inputEmailCmp,
      inputLoginCmp: this.children.inputLoginCmp,
      inputFirstNameCmp: this.children.inputFirstNameCmp,
      inputSecondNameCmp: this.children.inputSecondNameCmp,
      inputDisplayNameCmp: this.children.inputDisplayNameCmp,
      inputPhoneCmp: this.children.inputPhoneCmp,
      buttonSaveCmp: this.children.buttonSaveCmp,
      inputEmailErrorCmp: this.children.inputEmailErrorCmp,
      inputLoginErrorCmp: this.children.inputLoginErrorCmp,
      inputFirstNameErrorCmp: this.children.inputFirstNameErrorCmp,
      inputSecondNameErrorCmp: this.children.inputSecondNameErrorCmp,
      inputDisplayNameErrorCmp: this.children.inputDisplayNameErrorCmp,
      inputPhoneErrorCmp: this.children.inputPhoneErrorCmp,
      inputWrapper: styles.inputWrapper,
    });
  }
}
