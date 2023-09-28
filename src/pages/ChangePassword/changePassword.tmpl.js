export const tmpl = `
<head>
	<title>Страница изменения пароля</title>
</head>
<body>
	<main class={{changePasswordContainer}}>
		<img class={{avatar}} src={{path}} alt={{alt}}>
		<form class={{form}}>
			<ul class={{formList}}>
				<li class={{formListItem}}>
					<span class={{sign}}>Старый пароль</span>
					<input type="password" value='123456' name="oldPassword" required>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Новый пароль</span>
					<input type="password" value='12345678' name="newPassword" required>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Повторите новый пароль</span>
					<input type="password" value='12345678' name="newPassword" required>
				</li>
			</ul>
			<button type="submit">Сохранить</button>
		</form>
	</main>
</body>
`