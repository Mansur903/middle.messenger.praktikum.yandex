export const tmpl = `
<main class={{main}}>
	<section class={{channels}}>
		<div class={{channelsHeader}}>
		<a href='#'>Профиль</a>
			<input class={{searchInput}} type="text" name="search" placeholder="Поиск">
		</div>
		<ul class={{channelsList}}>
			<div class={{channel}}>
				<img class={{avatar}} src={{path}} alt={{alt}}>
				<div class={{channelContent}}>
					<span class={{name}}>Андрей</span>
					<span class={{message}}>Сообщение</span>
				</div>
			</div>
		</ul>
	</section>
	
	<section class={{chat}}>
		<div class={{chatHeader}}></div>
		<ul class={{messages}}>
		
		</ul>
		<input class={{input}} type="text" name="messages" required>
		<button class={{button}} type="submit">Отправить</button>
	</section>
</main>
`
