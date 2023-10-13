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
					{{{inputOldPassCmp}}}
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Новый пароль</span>
					{{{inputNewPassCmp}}}
				</li>
				<li class={{formListItem}}>
					<span class={{sign}}>Повторите новый пароль</span>
					{{{inputNewPassConfirmCmp}}}
				</li>
			</ul>
			{{{buttonSaveCmp}}}
		</form>
	</div>
</main>
`
