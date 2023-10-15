import Block from '../../utils/Block';
import { tmpl } from './signup.tmpl';
import styles from './styles.module.scss';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  fieldsRegExps, getInputValues, validateField, validateForm,
} from '../../utils/Ancillary';

export class SignUp extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.inputEmailCmp = new Input({
      name: 'email',
      className: styles.input,
      type: 'text',
      placeholder: 'Почта',
      required: true,
      'data-regexp': fieldsRegExps.email,
      events: { blur: () => validateField(this, 'email') },
    });

    this.children.inputLoginCmp = new Input({
      name: 'login',
      className: styles.input,
      type: 'text',
      placeholder: 'Логин',
      required: true,
      'data-regexp': fieldsRegExps.login,
      events: { blur: () => validateField(this, 'login') },
    });

    this.children.inputFirstNameCmp = new Input({
      name: 'first_name',
      className: styles.input,
      type: 'text',
      placeholder: 'Имя',
      required: true,
      'data-regexp': fieldsRegExps.firstSecondName,
      events: { blur: () => validateField(this, 'first_name') },
    });

    this.children.inputSecondNameCmp = new Input({
      name: 'second_name',
      className: styles.input,
      type: 'text',
      placeholder: 'Фамилия',
      required: true,
      'data-regexp': fieldsRegExps.firstSecondName,
      events: { blur: () => validateField(this, 'second_name') },
    });

    this.children.inputPhoneCmp = new Input({
      name: 'phone',
      className: styles.input,
      type: 'phone',
      placeholder: 'Телефон',
      required: true,
      'data-regexp': fieldsRegExps.phone,
      events: { blur: () => validateField(this, 'phone') },
    });

    this.children.inputOldPassCmp = new Input({
      name: 'password',
      placeholder: 'Пароль',
      className: styles.input,
      required: true,
      type: 'password',
      'data-regexp': fieldsRegExps.password,
      'data-additional': 'setPassword',
      events: { blur: () => validateField(this, 'password') },
    });

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
          const input = this.element?.querySelector('[data-additional="setPassword"]') as HTMLInputElement;
          const inputConfirm = this.element?.querySelector('[data-additional="confirmPassword"]') as HTMLInputElement;
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
    });
  }
}
