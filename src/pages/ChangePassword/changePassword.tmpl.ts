import styles from './styles.module.scss';

export const tmpl = `
<head>
<title>Страница изменения пароля</title>
</head>
<main class=${styles.main}>
  <div class=${styles.changePasswordContainer}>
  
    <img class=${styles.avatar} src={{path}} alt={{alt}}>
    
    <form class=${styles.form}>
    
      <ul class=${styles.formList}>
      
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Старый пароль</span>
          {{{inputOldPassCmp}}}
        </li>
        
        <li class=${styles.formListItem}>
          <span class=${styles.sign}>Новый пароль</span>
          {{{inputNewPassCmp}}}
        </li>
        
        <li class=${styles.formListItem}>
        <span class=${styles.sign}>Повторите новый пароль</span>
          {{{inputNewPassConfirmCmp}}}
        </li>
        
        <li>
            {{{passwordErrorCmp}}}
        </li>
        
      </ul>
      {{{buttonSaveCmp}}}
    </form>
    
  </div>
</main>
`;
