import Block from '../../utils/Block';

export interface MessageProps {
  content: string,
  user_id?: number,
  className?: string,
}

export class Message extends Block {
  constructor(props: MessageProps) {
    super('li', props);
  }

  render() {
    return this.compile(`
      ${this.props.content}
    `, this.props);
  }
}
