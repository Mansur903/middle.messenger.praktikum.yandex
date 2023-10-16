export const tmpl = `
<head>
  <title>Регистрация</title>
</head>
<main class={{main}}>
  <div class={{signUpContainer}}>
    <h2 class={{header}}>Регистрация</h2>
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
      <a class={{blueLink}} href="/login">Войти</a>
    </form>
  </div>
</main>
`;
