export const tmpl = `
	<head>
  <title>Страница входа</title>
</head>
<body>
  <main class={{loginContainer}}>
    <h2 class={{header}}>Войти</h2>
    <form>
      <input type="text" placeholder="Логин" name="login" required>
      <input type="password" placeholder="Пароль" name="password" required>
      <button type="submit">Войти</button>
      <a href={{signUpPageAddress}}>{{signUpPageText}}</a>
    </form>
  </main>
</body>
`