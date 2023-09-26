export const tmpl = `
	<head>
  <title>Регистрация</title>
</head>
<body>
  <div class={{signUpContainer}}>
    <h2 class={{header}}>Регистрация</h2>
    <form>
      <input type="text" placeholder="Почта" name="email" required>
      <input type="text" placeholder="Логин" name="login" required>
      <input type="text" placeholder="Имя" name="first_name" required>
      <input type="text" placeholder="Фамилия" name="second_name" required>
      <input type="phone" placeholder="Телефон" name="phone" required>
      <input type="password" placeholder="Пароль" name="password" required>
      <input type="password" placeholder="Пароль (eще раз)" name="password" required>
      <button class={{signup}} type="submit">Зарегистрироваться</button>
      <button class={{signin}}>Войти</button>
      <a href={{signUpPageAddress}}>{{signUpPageText}}</a>
    </form>
  </div>
</body>
`