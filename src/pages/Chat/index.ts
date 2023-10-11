import Handlebars from 'handlebars'

import Block from '../../utils/Block'
import { tmpl } from './chat.tmpl.ts'
import styles from './styles.module.scss'
import imgUrl from '../../images/default-avatar.jpeg'

export class Chat extends Block {
	constructor() {
		super('div', {})
	}

	render() {
		return this.compile(Handlebars.compile(tmpl)({
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
			searchInput: styles.searchInput,
			channelsList: styles.channelsList,
			time: styles.time,
			profileLink: styles.profileLink,
			message: styles.message,
			inputWrapper: styles.inputWrapper,
			input: styles.input,
			button: styles.button,
		}), this.props)
	}
}
