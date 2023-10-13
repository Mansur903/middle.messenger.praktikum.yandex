import Block from "../../utils/Block";

interface ButtonProps {
  label?: string;
  className?: string;
  type?: string;
  events?: {
    click: () => void;
  }
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props)
  }

  render() {
    return this.compile('{{label}}', this.props)
  }
}
