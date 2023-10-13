export const tmpl = `
<main class={{main}}>
	<section class={{channels}}>
		<div class={{channelsHeader}}>
		<a class={{profileLink}} href='#'>Профиль ></a>
			<input class={{searchInput}} type="text" name="search" placeholder="Поиск">
		</div>
		<ul class={{channelsList}}>
			<li class={{channel}}>
				<img class={{avatar}} src={{path}} alt={{alt}}>
				<div class={{channelContent}}>
					<span class={{name}}>Андрей</span>
					<span class={{message}}>Изображение</span>
				</div>
				<span class={{time}}>10:49</span>
			</li>
			<li class={{channel}}>
				<img class={{avatar}} src={{path}} alt={{alt}}>
				<div class={{channelContent}}>
					<span class={{name}}>Киноклуб</span>
					<span class={{message}}>Вы: стикер</span>
				</div>
				<span class={{time}}>12:00</span>
			</li>
			<li class={{channel}}>
				<img class={{avatar}} src={{path}} alt={{alt}}>
				<div class={{channelContent}}>
					<span class={{name}}>Илья</span>
					<span class={{message}}>Сообщение</span>
				</div>
				<span class={{time}}>Пт</span>
			</li>
			<li class={{channel}}>
				<img class={{avatar}} src={{path}} alt={{alt}}>
				<div class={{channelContent}}>
					<span class={{name}}>Вадим</span>
					<span class={{message}}>Сообщение</span>
				</div>
				<span class={{time}}>Ср</span>
			</li>
		</ul>
	</section>
	
	<section class={{chat}}>
		<div class={{chatHeader}}></div>
		<ul class={{messages}}>
		
		</ul>
		<div class={{inputWrapper}}>
      {{{inputCmp}}}
      {{{buttonSendCmp}}}
    </div>
	</section>
</main>
`
