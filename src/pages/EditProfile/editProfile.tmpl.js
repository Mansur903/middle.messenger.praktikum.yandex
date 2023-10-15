export const tmpl = `
<head>
	<title>Страница редактирования профиля</title>
</head>
<main class={{main}}>
	<div class={{editProfileContainer}}>
		<img class={{avatar}} src={{path}} alt={{alt}}>
		<form class={{form}}>
			<ul class={{formList}}>
				<li class={{formListItem}}>
					<span class={{sign}}>Почта</span>
					<input class={{input}} type="text" value="mansur98@yandex.ru" name="email">
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Логин</span>
					<input class={{input}} type="text" value="Mansur903" name="login">
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Имя</span>
					<input class={{input}} type="text" value="Мансур" name="first_name">
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Фамилия</span>
					<input class={{input}} type="text" value="Хуснутдинов" name="second_name">
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Имя в чате</span>
					<input class={{input}} type="text" value="Mansur" name="display_name">
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Телефон</span>
					<input class={{input}} type="phone" value="+71234569999" name="phone">
				</li>
			</ul>
			<button class={{button}} type="submit">Сохранить</button>
		</form>
	</div>
</main>
`
