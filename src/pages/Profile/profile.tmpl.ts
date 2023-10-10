export const tmpl = `
<head>
	<title>Страница профиля</title>
</head>
<main class={{main}}>
	<div class={{profileContainer}}>
		<img class={{avatar}} src={{path}} alt={{alt}}>
		<h2 class={{header}}>{{name}}</h2>
		<form class={{form}}>
			<ul class={{formList}}>
				<li class={{formListItem}}>
					<span class={{sign}}>Почта</span>
					<input class={{input}} type="text" value="mansur98@yandex.ru" name="email" disabled>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Логин</span>
					<input class={{input}} type="text" value="Mansur903" name="login" disabled>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Имя</span>
					<input class={{input}} type="text" value="Мансур" name="first_name" disabled>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Фамилия</span>
					<input class={{input}} type="text" value="Хуснутдинов" name="second_name" disabled>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Имя в чате</span>
					<input class={{input}} type="text" value="Mansur" name="display_name" disabled>
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Телефон</span>
					<input class={{input}} type="phone" value="+71234569999" name="phone" disabled>
				</li>
			</ul>
		</form>
		
		<ul class={{options}}>
			<li class={{optionsItem}}><a class="{{link}} {{blueLink}}" href='/editProfile'>Изменить данные</a></li>
			<li class={{optionsItem}}><a class="{{link}} {{blueLink}}" href='/changePassword'>Изменить пароль</a></li>
			<li class={{optionsItem}}><a class="{{link}} {{redLink}}" href='/main'>Выйти</a></li>
		</ul>
	</div>
</main>
`
