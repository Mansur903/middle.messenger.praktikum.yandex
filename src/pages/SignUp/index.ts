import Block from '../../utils/Block';
import { tmpl } from './signup.tmpl';
import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  fieldsErrors,
  fieldsRegExps, validateField, validateForm,
} from '../../utils/Ancillary';
import { Error } from '../../components/Error';
import { Link } from '../../components/Link';
import AuthController from '../../controllers/AuthController';

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
            ? (this.children.inputEmailErrorCmp as Block).setProps({ text: '' })
            : (this.children.inputEmailErrorCmp as Block).setProps({ text: fieldsErrors.email });
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
            ? (this.children.inputLoginErrorCmp as Block).setProps({ text: '' })
            : (this.children.inputLoginErrorCmp as Block).setProps({ text: fieldsErrors.login });
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
            ? (this.children.inputFirstNameErrorCmp as Block).setProps({ text: '' })
            : (this.children.inputFirstNameErrorCmp as Block).setProps({ text: fieldsErrors.firstSecondName });
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
            ? (this.children.inputSecondNameErrorCmp as Block)
              .setProps({ text: '' })
            : (this.children.inputSecondNameErrorCmp as Block)
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
            ? (this.children.inputPhoneErrorCmp as Block).setProps({ text: '' })
            : (this.children.inputPhoneErrorCmp as Block).setProps({ text: fieldsErrors.phone });
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
            ? (this.children.inputPasswordErrorCmp as Block).setProps({ text: '' })
            : (this.children.inputPasswordErrorCmp as Block).setProps({ text: fieldsErrors.password });
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
          // getInputValues(this);
          const values = Object
            .values(this.children)
            .filter((child) => child instanceof Input)
            .map((child) => ([(child as Input).getName(), (child as Input).getValue()]));

          const data = Object.fromEntries(values);

          AuthController.signup(data);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, {
      signUpPageAddress: '/signup',
    });
  }
}
