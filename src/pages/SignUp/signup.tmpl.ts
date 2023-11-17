import styles from './styles.module.scss';

export const tmpl = `
<head>
  <title>Регистрация</title>
</head>
<main class=${styles.main}>

  <div class=${styles.signUpContainer}>
  
    <h2 class=${styles.header}>Регистрация</h2>
    
    <form>
      {{{inputEmailCmp}}}
      {{{inputEmailErrorCmp}}}
      {{{inputLoginCmp}}}
      {{{inputLoginErrorCmp}}}
      {{{inputFirstNameCmp}}}
      {{{inputFirstNameErrorCmp}}}
      {{{inputSecondNameCmp}}}
      {{{inputSecondNameErrorCmp}}}
      {{{inputPhoneCmp}}}
      {{{inputPhoneErrorCmp}}}
      {{{inputOldPassCmp}}}
      {{{inputPasswordErrorCmp}}}
      {{{inputNewPassCmp}}}
      {{{inputConfirmPasswordErrorCmp}}}
      {{{buttonSignUpCmp}}}
      {{{linkCmp}}}
    </form>
    
  </div>
</main>
`;
