import Block from '../../utils/Block.ts';

interface ButtonProps {
  label?: string;
  className?: string;
  type?: string;
  events?: {
    click: (e:KeyboardEvent) => void;
  }
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('button', props);
  }

  render() {
    return this.compile('{{label}}', this.props);
  }
}
