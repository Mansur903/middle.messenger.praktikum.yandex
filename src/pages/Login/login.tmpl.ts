import styles from './styles.module.scss';

export const tmpl = `
<head>
  <title>{{titleText}}</title>
</head>
<main class=${styles.main}>

  <div class=${styles.loginContainer}>
  
    <h2 class=${styles.header}>{{headerText}}</h2>
    
    <form>
      {{{inputLoginCmp}}}
      {{{inputLoginErrorCmp}}}
      {{{inputPasswordCmp}}}
      {{{inputPasswordErrorCmp}}}
      {{{buttonSubmitCmp}}}
      {{{linkCmp}}}
    </form>
    
  </div>
</main>
`;
