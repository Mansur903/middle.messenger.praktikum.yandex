import Block from '../../utils/Block';
import { tmpl } from './signup.tmpl';
import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  fieldsErrors,
  fieldsRegExps, getInputValues, validateField, validateForm,
} from '../../utils/Ancillary';
import { Error } from '../../components/Error';
import { Link } from '../../components/Link';

export class SignUp extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.linkCmp = new Link('', {
      to: '/login',
      label: 'Войти',
      className: styles.link,
    });

    this.children.inputEmailCmp = new Input({
      name: 'email',
      className: styles.input,
      type: 'text',
      placeholder: 'Почта',
      required: true,
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
      placeholder: 'Логин',
      required: true,
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
      placeholder: 'Имя',
      required: true,
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
      placeholder: 'Фамилия',
      required: true,
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

    this.children.inputPhoneCmp = new Input({
      name: 'phone',
      className: styles.input,
      type: 'phone',
      placeholder: 'Телефон',
      required: true,
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

    this.children.inputOldPassCmp = new Input({
      name: 'password',
      placeholder: 'Пароль',
      className: styles.input,
      required: true,
      type: 'password',
      'data-regexp': fieldsRegExps.password,
      'data-additional': 'setPassword',
      events: {
        blur: () => {
          validateField(this, 'phone')
            ? this.children.inputPasswordErrorCmp.setProps({ text: '' })
            : this.children.inputPasswordErrorCmp.setProps({ text: fieldsErrors.password });
        },
      },
    });
    this.children.inputPasswordErrorCmp = new Error({ text: '', className: styles.error });

    this.children.inputNewPassCmp = new Input({
      name: 'password',
      placeholder: 'Пароль (еще раз)',
      className: styles.input,
      required: true,
      type: 'password',
      'data-regexp': fieldsRegExps.password,
      'data-additional': 'confirmPassword',
      events: {
        blur: () => {
          const input = this
            .element?.querySelector('[data-additional="setPassword"]') as HTMLInputElement;
          const inputConfirm = this
            .element?.querySelector('[data-additional="confirmPassword"]') as HTMLInputElement;
          const regExpString = inputConfirm.getAttribute('data-regexp');
          const regexp = regExpString ? new RegExp(regExpString) : null;

          if (regexp?.test(inputConfirm?.value) && input.value === inputConfirm.value) {
            inputConfirm.style.borderColor = 'green';
          } else {
            inputConfirm.style.borderColor = 'red';
          }
        },
      },
    });
    this.children.inputConfirmPasswordErrorCmp = new Error({ text: '', className: styles.error });

    this.children.buttonSignUpCmp = new Button({
      label: 'Зарегистрироваться',
      className: styles.signupButton,
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
      signUpContainer: styles.signUpContainer,
      header: styles.header,
      signUpPageAddress: '/signup',
      blueLink: styles.blueLink,
      main: styles.main,
      input: styles.input,
      signupButton: styles.signupButton,
      inputEmailCmp: this.children.inputEmailCmp,
      inputLoginCmp: this.children.inputLoginCmp,
      inputFirstNameCmp: this.children.inputFirstNameCmp,
      inputSecondNameCmp: this.children.inputSecondNameCmp,
      inputPhoneCmp: this.children.inputPhoneCmp,
      inputOldPassCmp: this.children.inputOldPassCmp,
      inputNewPassCmp: this.children.inputNewPassCmp,
      buttonSignUpCmp: this.children.buttonSignUpCmp,
      inputEmailErrorCmp: this.children.inputEmailErrorCmp,
      inputLoginErrorCmp: this.children.inputLoginErrorCmp,
      inputFirstNameErrorCmp: this.children.inputFirstNameErrorCmp,
      inputSecondNameErrorCmp: this.children.inputSecondNameErrorCmp,
      inputPhoneErrorCmp: this.children.inputPhoneErrorCmp,
      inputPasswordErrorCmp: this.children.inputPasswordErrorCmp,
      inputConfirmPasswordErrorCmp: this.children.inputConfirmPasswordErrorCmp,
      linkCmp: this.children.linkCmp,
    });
  }
}
