export const tmpl = `
	<head>
  <title>Страница входа</title>
</head>
<main class={{main}}>
	<div class={{loginContainer}}>
		<h2 class={{header}}>Войти</h2>
		<form>
		  {{{inputLoginCmp}}}
			{{{inputPasswordCmp}}}
			{{{buttonSubmitCmp}}}
			<a href={{signUpPageAddress}}>{{signUpPageText}}</a>
		</form>
	</div>
</main>
`
