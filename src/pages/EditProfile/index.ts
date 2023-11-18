import Block from '../../utils/Block';
import { tmpl } from './editProfile.tmpl';
import styles from './styles.module.scss';
import imgUrl from '../../images/default-avatar.jpeg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Error } from '../../components/Error';
import {
  fieldsErrors,
  fieldsRegExps, validateField, validateForm,
} from '../../utils/Ancillary';
import { State, store, withStore } from '../../utils/Store';
import UsersController from '../../controllers/UsersController';
import { ChangeAvatarModal } from '../../components/Modals/ChangeAvatarModal';
import { Avatar } from '../../components/Avatar';
import { BackButton } from '../../components/BackButton';

export class BaseEditProfile extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    const { user } = store.getState();

    this.children.inputEmailCmp = new Input({
      name: 'email',
      className: styles.input,
      type: 'text',
      value: user?.email,
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
      value: user?.login,
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
      value: user?.first_name,
      'data-regexp': fieldsRegExps.firstSecondName,
      events: {
        blur: () => {
          validateField(this, 'first_name')
            ? (this.children.inputFirstNameErrorCmp as Block)
              .setProps({ text: '' })
            : (this.children.inputFirstNameErrorCmp as Block)
              .setProps({ text: fieldsErrors.firstSecondName });
        },
      },
    });
    this.children.inputFirstNameErrorCmp = new Error({ text: '', className: styles.error });

    this.children.inputSecondNameCmp = new Input({
      name: 'second_name',
      className: styles.input,
      type: 'text',
      value: user?.second_name,
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

    this.children.inputDisplayNameCmp = new Input({
      name: 'display_name',
      className: styles.input,
      type: 'text',
      value: user?.display_name,
      'data-regexp': fieldsRegExps.firstSecondName,
      events: {
        blur: () => {
          validateField(this, 'display_name')
            ? (this.children.inputDisplayNameErrorCmp as Block)
              .setProps({ text: '' })
            : (this.children.inputDisplayNameErrorCmp as Block)
              .setProps({ text: fieldsErrors.firstSecondName });
        },
      },
    });
    this.children.inputDisplayNameErrorCmp = new Error({ text: '', className: styles.error });

    this.children.inputPhoneCmp = new Input({
      name: 'phone',
      className: styles.input,
      type: 'phone',
      value: user?.phone,
      'data-regexp': fieldsRegExps.phone,
      events: {
        blur: () => {
          validateField(this, 'phone')
            ? (this.children.inputPhoneErrorCmp as Block)
              .setProps({ text: '' })
            : (this.children.inputPhoneErrorCmp as Block)
              .setProps({ text: fieldsErrors.phone });
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
          const values = Object
            .values(this.children)
            .filter((child) => child instanceof Input)
            .map((child) => ([(child as Input).getName(), (child as Input).getValue()]));

          const data = Object.fromEntries(values);

          UsersController.editProfile(data);
        },
      },
    });

    this.children.modalmodal = new ChangeAvatarModal({
      title: 'Загрузите картинку',
      error: 'error',
      buttonText: 'кнопка',
      isActive: false,
    });

    this.children.avatar = new Avatar({
      path: this.getAvatarPath(),
      alt: 'Аватар',
      tooltipText: 'Поменять аватар',
      events: {
        click: () => {
          (this.children.modal as Block).setProps({ isActive: true });
        },
      },
      className: styles.avatarWrapper,
    });

    this.children.backButtonCmp = new BackButton({
      to: '/profile',
    });
  }

  getAvatarPath() {
    const { user } = store.getState();
    const avatarPath = user?.avatar;
    return avatarPath ? `https://ya-praktikum.tech/api/v2/resources${avatarPath}`
      : imgUrl;
  }

  render() {
    (this.children.avatar as Block).setProps({ path: this.getAvatarPath() });

    return this.compile(tmpl, {});
  }
}

const mapStateToProps = (state: State) => ({ ...state.user });
export const EditProfile = withStore(mapStateToProps)(BaseEditProfile);
