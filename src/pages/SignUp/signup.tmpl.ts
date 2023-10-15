export const tmpl = `
<head>
  <title>Регистрация</title>
</head>
<main class={{main}}>
  <div class={{signUpContainer}}>
    <h2 class={{header}}>Регистрация</h2>
    <form>
      {{{inputEmailCmp}}}
      {{{inputLoginCmp}}}
      {{{inputFirstNameCmp}}}
      {{{inputSecondNameCmp}}}
      {{{inputPhoneCmp}}}
      {{{inputOldPassCmp}}}
      {{{inputNewPassCmp}}}
      {{{inputNewPassCmp}}}
      {{{buttonSignUpCmp}}}
      <a class={{blueLink}} href="/login">Войти</a>
    </form>
  </div>
</main>
`;
