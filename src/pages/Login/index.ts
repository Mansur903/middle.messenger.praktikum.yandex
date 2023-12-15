import Block from '../../utils/Block';
import { tmpl } from './login.tmpl';
import styles from './styles.module.scss';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';
import { Error } from '../../components/Error';
import AuthController from '../../controllers/AuthController';
import {
  fieldsErrors,
  fieldsRegExps, validateField, validateForm,
} from '../../utils/Ancillary';

export class Login extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.linkCmp = new Link('', {
      to: '/signup',
      label: 'Нет аккаунта?',
      className: styles.link,
    });

    this.children.buttonSubmitCmp = new Button({
      label: 'Войти',
      className: styles.button,
      type: 'submit',
      events: {
        click: (e) => {
          e.preventDefault();
          // if (!validateForm(this)) return;
          const values = Object
            .values(this.children)
            .filter((child) => child instanceof Input)
            .map((child) => ([(child as Input).getName(), (child as Input).getValue()]));

          const data = Object.fromEntries(values);

          AuthController.signin(data);
        },
      },
    });

    this.children.inputLoginCmp = new Input({
      placeholder: 'Логин',
      name: 'login',
      required: true,
      className: styles.input,
      type: 'text',
      'data-regexp': fieldsRegExps.login,
      // events: {
      //   blur: () => {
      //     validateField(this, 'login')
      //       ? (this.children.inputLoginErrorCmp as Block).setProps({ text: '' })
      //       : (this.children.inputLoginErrorCmp as Block).setProps({ text: fieldsErrors.login });
      //   },
      // },
    });

    this.children.inputPasswordCmp = new Input({
      placeholder: 'Пароль',
      name: 'password',
      required: true,
      className: styles.input,
      type: 'password',
      'data-regexp': fieldsRegExps.password,
      // events: {
      //   blur: () => {
      //     validateField(this, 'password')
      //       ? (this.children.inputPasswordErrorCmp as Block).setProps({ text: '' })
      //       : (this.children.inputPasswordErrorCmp as Block).setProps({ text: fieldsErrors.password });
      //   },
      // },
    });

    this.children.inputLoginErrorCmp = new Error({ text: '', className: styles.error });
    this.children.inputPasswordErrorCmp = new Error({ text: '', className: styles.error });
  }

  render() {
    return this.compile(tmpl, {
      titleText: 'Страница входа',
      headerText: 'Войти',
    });
  }
}
