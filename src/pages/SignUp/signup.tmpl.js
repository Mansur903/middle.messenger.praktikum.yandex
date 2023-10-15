export const tmpl = `
	<head>
  <title>Регистрация</title>
</head>
<main class={{main}}>
	<div class={{signUpContainer}}>
		<h2 class={{header}}>Регистрация</h2>
		<form>
			<input class={{input}} type="text" placeholder="Почта" name="email" required>
			<input class={{input}} type="text" placeholder="Логин" name="login" required>
			<input class={{input}} type="text" placeholder="Имя" name="first_name" required>
			<input class={{input}} type="text" placeholder="Фамилия" name="second_name" required>
			<input class={{input}} type="phone" placeholder="Телефон" name="phone" required>
			<input class={{input}} type="password" placeholder="Пароль" name="password" required>
			<input class={{input}} type="password" placeholder="Пароль (eще раз)" name="password" required>
			<button class={{signupButton}} type="submit">Зарегистрироваться</button>
			<a class={{blueLink}} href="/login">Войти</a>
		</form>
	</div>
</main>
`
