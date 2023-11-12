export const tmpl = `
<head>
  <title>Страница профиля</title>
</head>
{{{backButtonCmp}}}
<main class={{main}}>
  <div class={{profileContainer}}>
    <img class={{avatar}} src={{path}} alt={{alt}}>
    <h2 class={{header}}>{{name}}</h2>
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
    </form>
    
    <ul class={{options}}>
      <li class={{optionsItem}}>
        {{{editProfileLinkCmp}}}
      </li>
      <li class={{optionsItem}}>
        {{{editPasswordLinkCmp}}}
      </li>
      <li class={{optionsItem}}>
        {{{closeLinkCmp}}}
      </li>
    </ul>
  </div>
</main>
`;
