import Block from '../../utils/Block';
import { PropsWithRouter, withRouter } from '../../hooks/withRouter';

interface LinkProps extends PropsWithRouter {
  to: string;
  label: string;
  events?: {
    click: (event: MouseEvent) => void;
  };
}

class BaseLink extends Block {
  // @ts-ignore
  constructor(tagName, props: LinkProps) {
    super('a', {
      ...props,
      events: {
        click: (event:MouseEvent) => {
          event.preventDefault();
          this.navigate();
        },
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    return this.compile('{{label}}', this.props);
  }
}

export const Link = withRouter(BaseLink);
