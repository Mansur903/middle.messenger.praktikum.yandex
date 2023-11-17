import styles from './styles.module.scss';

export const tmpl = `
<head>
  <title>Страница профиля</title>
</head>
{{{backButtonCmp}}}
<main class=${styles.main}>
  <div class=${styles.profileContainer}>
  
    <img class=${styles.avatar} src={{avatarPath}} alt={{avatarAlt}}>
    <h2 class=${styles.header}>{{headerName}}</h2>
    
    <form class=${styles.form}>
    
      <ul class=${styles.formList}>
      
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Почта</span>
          {{{inputEmailCmp}}}
        </li>
        
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Логин</span>
          {{{inputLoginCmp}}}
        </li>
        
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Имя</span>
          {{{inputFirstNameCmp}}}
        </li>
        
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Фамилия</span>
          {{{inputSecondNameCmp}}}
        </li>
        
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Имя в чате</span>
          {{{inputDisplayNameCmp}}}
        </li>
        
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Телефон</span>
          {{{inputPhoneCmp}}}
        </li>
        
      </ul>
    </form>
    
    <ul class=${styles.options}>
    
      <li class=${styles.optionsItem}>
        {{{editProfileLinkCmp}}}
      </li>
      
      <li class=${styles.optionsItem}>
        {{{editPasswordLinkCmp}}}
      </li>
      
      <li class=${styles.optionsItem}>
        {{{closeLinkCmp}}}
      </li>
      
    </ul>
  </div>
</main>
`;
