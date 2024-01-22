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
  isValid?: () => boolean,
  accept?: string,
  id?: string,
}

export class InputCheckbox extends Block {
  constructor(props: InputProps) {
    super('div', props);
  }

  getName() {
    return (this.element as HTMLInputElement).name;
  }

  getValue() {
    return (this.element as HTMLInputElement).value;
  }

  render() {
    return this.compile(`
    <div>
      <input type="checkbox" name=${this.props.name} id=${this.props.id} />
      <label for=${this.props.name}>${this.props.name}</label>
    </div>
    `, this.props);
  }
}
