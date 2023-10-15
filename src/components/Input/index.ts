import Block from '../../utils/Block';

interface InputProps {
  placeholder?: string;
  name?: string;
  required?: boolean;
  className?: string;
  type?: string;
  value?: string | number;
  disabled?: boolean,
  events?: {
    blur: (e:KeyboardEvent) => void;
  },
  'data-regexp'?: string,
  'data-additional'?: string,
  isValid?: () => boolean
}

export class Input extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  get regexp() {
    return this.props.validationRegExp;
  }

  render() {
    return this.compile('', this.props);
  }
}
