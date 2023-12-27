import Block from '../../utils/Block';
import { tmpl } from './profile.tmpl';
import styles from './styles.module.scss';
import imgUrl from '../../images/default-avatar.jpeg';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';
import AuthController from '../../controllers/AuthController';
import { State, withStore, store } from '../../utils/Store';
import { BackButton } from '../../components/BackButton';

export class BaseProfile extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    const { user } = store.getState();

    this.children.editProfileLinkCmp = new Link('a', {
      to: '/settings',
      label: 'Изменить данные',
      className: styles.link,
    });

    this.children.editPasswordLinkCmp = new Link('a', {
      to: '/changePassword',
      label: 'Изменить пароль',
      className: styles.link,
    });

    this.children.closeLinkCmp = new Link('a', {
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

    this.children.backButtonCmp = new BackButton({
      to: '/messenger',
    });
  }

  getAvatarPath() {
    const { user } = store.getState();
    const avatarPath = user?.avatar;
    return avatarPath ? `https://ya-praktikum.tech/api/v2/resources${avatarPath}`
      : imgUrl;
  }

  render() {
    const { user } = store.getState();

    return this.compile(tmpl, {
      avatarPath: this.getAvatarPath(),
      avatarAlt: 'Аватар',
      headerName: user?.first_name,
    });
  }
}

const mapStateToProps = (state: State) => ({ ...state.user });

export const Profile = withStore(mapStateToProps)(BaseProfile);
