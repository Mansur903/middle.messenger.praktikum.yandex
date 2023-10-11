import Block from "../../utils/Block";

export class Button extends Block {
  constructor() {
    super('button', { label: 'кнопка'})
  }

  render() {
    return this.compile('{{label}}', this.props)
  }
}
