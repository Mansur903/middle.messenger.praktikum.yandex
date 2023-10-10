import Handlebars from 'handlebars'

import { tmpl } from './chat.tmpl.ts'
import styles from './styles.module.scss'
import imgUrl from '../../images/default-avatar.jpeg'

export const Chat = () => {

	return Handlebars.compile(tmpl)({
		main: styles.main,
		avatar: styles.avatar,
		channels: styles.channels,
		chat: styles.chat,
		chatHeader: styles.chatHeader,
		messages: styles.messages,
		path: imgUrl,
		alt: 'Аватар',
		channel: styles.channel,
		channelContent: styles.channelContent,
		name: styles.name,
		channelsHeader: styles.channelsHeader,
		searchInput: styles.searchInput
	})
}
