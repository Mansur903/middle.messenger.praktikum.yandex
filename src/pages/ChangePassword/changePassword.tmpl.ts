export const tmpl = `
<head>
	<title>Страница изменения пароля</title>
</head>
<main class={{main}}>
	<div class={{changePasswordContainer}}>
		<img class={{avatar}} src={{path}} alt={{alt}}>
		<form class={{form}}>
			<ul class={{formList}}>
				<li class={{formListItem}}>
					<span class={{sign}}>Старый пароль</span>
					<input class={{input}} type="password" value='123456' name="oldPassword" required>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Новый пароль</span>
					<input class={{input}} type="password" value='12345678' name="newPassword" required>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Повторите новый пароль</span>
					<input class={{input}} type="password" value='12345678' name="newPassword" required>
				</li>
			</ul>
			<button class={{button}} type="submit">Сохранить</button>
		</form>
	</div>
</main>
`
