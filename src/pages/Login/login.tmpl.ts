export const tmpl = `
<head>
  <title>{{titleText}}</title>
</head>
<main class={{main}}>
  <div class={{loginContainer}}>
    <h2 class={{header}}>{{headerText}}</h2>
    <form>
      {{{inputLoginCmp}}}
      {{{inputLoginErrorCmp}}}
      {{{inputPasswordCmp}}}
      {{{inputPasswordErrorCmp}}}
      {{{buttonSubmitCmp}}}
      <a href={{signUpPageAddress}}>{{signUpPageText}}</a>
    </form>
  </div>
</main>
`;
