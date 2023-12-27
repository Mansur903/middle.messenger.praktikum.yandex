import Block from '../../utils/Block';

interface ErrorProps {
  text: string,
  className?: string
}

export class Error extends Block {
  constructor(props: ErrorProps) {
    super('label', props);
  }

  render() {
    return this.compile('{{text}}', this.props);
  }
}
