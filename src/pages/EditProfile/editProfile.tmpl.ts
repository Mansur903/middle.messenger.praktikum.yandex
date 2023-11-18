import styles from './styles.module.scss';

export const tmpl = `
<head>
  <title>Страница редактирования профиля</title>
</head>
{{{backButtonCmp}}}
<main class=${styles.main}>

  <div class=${styles.editProfileContainer}>
  
    {{{avatar}}}
    
    <form class=${styles.form}>
    
      <ul class=${styles.formList}>
      
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Почта</span>
          <div class=${styles.inputWrapper}>
            {{{inputEmailCmp}}}
            {{{inputEmailErrorCmp}}}
          </div>
        </li>
        
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Логин</span>
          <div class=${styles.inputWrapper}>
            {{{inputLoginCmp}}}
            {{{inputLoginErrorCmp}}}
          </div>
        </li>
        
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Имя</span>
          <div class=${styles.inputWrapper}>
            {{{inputFirstNameCmp}}}
            {{{inputFirstNameErrorCmp}}}
          </div>
        </li>
        
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Фамилия</span>
          <div class=${styles.inputWrapper}>
            {{{inputSecondNameCmp}}}
            {{{inputSecondNameErrorCmp}}}
          </div>
        </li>
        
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Имя в чате</span>
          <div class=${styles.inputWrapper}>
            {{{inputDisplayNameCmp}}}
            {{{inputDisplayNameErrorCmp}}}
          </div>
        </li>
        
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Телефон</span>
          <div class=${styles.inputWrapper}>
            {{{inputPhoneCmp}}}
            {{{inputPhoneErrorCmp}}}
          </div>
        </li>
        
      </ul>
      
      {{{buttonSaveCmp}}}
      
    </form>
  </div>
  
  {{{modal}}}
  
</main>
`;
