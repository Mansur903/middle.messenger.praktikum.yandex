import Block from '../../utils/Block';
import { tmpl } from './profile.tmpl';
import styles from './styles.module.scss';
import imgUrl from '../../images/default-avatar.jpeg';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';
import AuthController from '../../controllers/AuthController';
import { State, withStore, store } from '../../utils/Store';

export class BaseProfile extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    const { user } = store.getState();
    const avatarPath = user?.avatar;
    const fullPath = avatarPath ? `https://ya-praktikum.tech/api/v2/resources${avatarPath}`
      : imgUrl;

    this.children.editProfileLinkCmp = new Link('', {
      to: '/editProfile',
      label: 'Изменить данные',
      className: styles.link,
    });

    this.children.editPasswordLinkCmp = new Link('', {
      to: '/changePassword',
      label: 'Изменить пароль',
      className: styles.link,
    });

    this.children.closeLinkCmp = new Link('', {
      to: '/main',
      label: 'Выйти',
      className: styles.redLink,
      events: {
        click: () => { AuthController.logout(); },
      },
    });

    this.children.inputEmailCmp = new Input({
      name: 'email',
      className: styles.input,
      type: 'text',
      value: user?.email,
      disabled: true,
    });

    this.children.inputLoginCmp = new Input({
      name: 'login',
      className: styles.input,
      type: 'text',
      value: user?.login,
      disabled: true,
    });

    this.children.inputFirstNameCmp = new Input({
      name: 'first_name',
      className: styles.input,
      type: 'text',
      value: user?.first_name,
      disabled: true,
    });

    this.children.inputSecondNameCmp = new Input({
      name: 'second_name',
      className: styles.input,
      type: 'text',
      value: user?.second_name,
      disabled: true,
    });

    this.children.inputDisplayNameCmp = new Input({
      name: 'display_name',
      className: styles.input,
      type: 'text',
      value: user?.display_name,
      disabled: true,
    });

    this.children.inputPhoneCmp = new Input({
      name: 'phone',
      className: styles.input,
      type: 'phone',
      value: user?.phone,
      disabled: true,
    });
  }

  render() {
    return this.compile(tmpl, {
      profileContainer: styles.profileContainer,
      avatar: styles.avatar,
      path: imgUrl,
      alt: 'Аватар',
      form: styles.form,
      formList: styles.formList,
      formListItem: styles.formListItem,
      sign: styles.sign,
      name: 'Мансур',
      options: styles.options,
      optionsItem: styles.optionsItem,
      blueLink: styles.blueLink,
      redLink: styles.redLink,
      main: styles.main,
      link: styles.link,
      header: styles.header,
      input: styles.input,
      inputEmailCmp: this.children.inputEmailCmp,
      inputLoginCmp: this.children.inputLoginCmp,
      inputFirstNameCmp: this.children.inputFirstNameCmp,
      inputSecondNameCmp: this.children.inputSecondNameCmp,
      inputDisplayNameCmp: this.children.inputDisplayNameCmp,
      inputPhoneCmp: this.children.inputPhoneCmp,
      editProfileLinkCmp: this.children.editProfileLinkCmp,
      editPasswordLinkCmp: this.children.editPasswordLinkCmp,
      closeLinkCmp: this.children.closeLinkCmp,
    });
  }
}

const mapStateToProps = (state: State) => ({ ...state.user });

export const Profile = withStore(mapStateToProps)(BaseProfile);
