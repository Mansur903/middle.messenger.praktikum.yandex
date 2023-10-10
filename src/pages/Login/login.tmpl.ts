export const tmpl = `
	<head>
  <title>Страница входа</title>
</head>
<main class={{main}}>
	<div class={{loginContainer}}>
		<h2 class={{header}}>Войти</h2>
		<form>
			<input class={{input}} type="text" placeholder="Логин" name="login" required>
			<input class={{input}} type="password" placeholder="Пароль" name="password" required>
			<button class={{button}} type="submit">Войти</button>
			<a href={{signUpPageAddress}}>{{signUpPageText}}</a>
		</form>
	</div>
</main>
`
