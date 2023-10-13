import Block from "../../utils/Block";

interface InputProps {
  placeholder?: string;
  name?: string;
  required?: boolean;
  className?: string;
  type?: string;
  value?: string | number;
  disabled?: boolean,
  events?: {
    click: () => void;
  }
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props)
  }

  render() {
    return this.compile('', this.props)
  }
}
