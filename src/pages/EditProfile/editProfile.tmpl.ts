export const tmpl = `
<head>
  <title>Страница редактирования профиля</title>
</head>
<main class={{main}}>
  <div class={{editProfileContainer}}>
    <div class={{avatarContainer}}>
      <img class={{avatar}} src={{path}} alt={{alt}}>
      <div class={{tooltip}}>Поменять аватар</div>
    </div>
    <form class={{form}}>
      <ul class={{formList}}>
        <li class={{formListItem}}>
          <span class={{sign}}>Почта</span>
          <div class={{inputWrapper}}>
            {{{inputEmailCmp}}}
            {{{inputEmailErrorCmp}}}
          </div>
        </li>
        <li class={{formListItem}}>
          <span class={{sign}}>Логин</span>
          <div class={{inputWrapper}}>
            {{{inputLoginCmp}}}
            {{{inputLoginErrorCmp}}}
          </div>
        </li>
        <li class={{formListItem}}>
          <span class={{sign}}>Имя</span>
          <div class={{inputWrapper}}>
            {{{inputFirstNameCmp}}}
            {{{inputFirstNameErrorCmp}}}
          </div>
        </li>
        <li class={{formListItem}}>
          <span class={{sign}}>Фамилия</span>
          <div class={{inputWrapper}}>
            {{{inputSecondNameCmp}}}
            {{{inputSecondNameErrorCmp}}}
          </div>
        </li>
        <li class={{formListItem}}>
          <span class={{sign}}>Имя в чате</span>
          <div class={{inputWrapper}}>
            {{{inputDisplayNameCmp}}}
            {{{inputDisplayNameErrorCmp}}}
          </div>
        </li>
        <li class={{formListItem}}>
          <span class={{sign}}>Телефон</span>
          <div class={{inputWrapper}}>
            {{{inputPhoneCmp}}}
            {{{inputPhoneErrorCmp}}}
          </div>
        </li>
      </ul>
      {{{buttonSaveCmp}}}
    </form>
  </div>
</main>
`;
