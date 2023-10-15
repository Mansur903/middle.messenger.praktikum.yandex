export const tmpl = `
<head>
  <title>Страница редактирования профиля</title>
</head>
<main class={{main}}>
  <div class={{editProfileContainer}}>
    <img class={{avatar}} src={{path}} alt={{alt}}>
    <form class={{form}}>
      <ul class={{formList}}>
        <li class={{formListItem}}>
          <span class={{sign}}>Почта</span>
          {{{inputEmailCmp}}}
        </li>
        <li class={{formListItem}}>
          <span class={{sign}}>Логин</span>
          {{{inputLoginCmp}}}
        </li>
        <li class={{formListItem}}>
          <span class={{sign}}>Имя</span>
          {{{inputFirstNameCmp}}}
        </li>
        <li class={{formListItem}}>
          <span class={{sign}}>Фамилия</span>
          {{{inputSecondNameCmp}}}
        </li>
        <li class={{formListItem}}>
          <span class={{sign}}>Имя в чате</span>
          {{{inputDisplayNameCmp}}}
        </li>
        <li class={{formListItem}}>
          <span class={{sign}}>Телефон</span>
          {{{inputPhoneCmp}}}
        </li>
      </ul>
      {{{buttonSaveCmp}}}
    </form>
  </div>
</main>
`;
