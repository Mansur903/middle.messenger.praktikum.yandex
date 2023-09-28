export const tmpl = `
<head>
	<title>Страница профиля</title>
</head>
<body>
	<main class={{profileContainer}}>
		<img class={{avatar}} src={{path}} alt={{alt}}>
		<h2 class={{header}}>{{name}}</h2>
		<form class={{form}}>
			<ul class={{formList}}>
				<li class={{formListItem}}>
					<span class={{sign}}>Почта</span>
					<input type="text" value="mansur98@yandex.ru" name="email" disabled>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Логин</span>
					<input type="text" value="Mansur903" name="login" disabled>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Имя</span>
					<input type="text" value="Мансур" name="first_name" disabled>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Фамилия</span>
					<input type="text" value="Хуснутдинов" name="second_name" disabled>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Имя в чате</span>
					<input type="text" value="Mansur" name="display_name" disabled>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Телефон</span>
					<input type="phone" value="+71234569999" name="phone" disabled>
				</li>
			</ul>
		</form>
		
		<ul class={{options}}>
			<li class={{optionsItem}}><a class={{blueLink}} href='/editProfile'>Изменить данные</a></li>
			<li class={{optionsItem}}><a class={{blueLink}} href='/changePassword'>Изменить пароль</a></li>
			<li class={{optionsItem}}><a class={{redLink}} href='/main'>Выйти</a></li>
		</ul>
	</main>
</body>
`