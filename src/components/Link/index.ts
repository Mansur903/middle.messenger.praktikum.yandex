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
  constructor(tagName:string, props: LinkProps) {
    super(tagName, {
      events: {
        click: (event:MouseEvent) => {
          event.preventDefault();
          this.navigate();
        },
      },
      ...props,
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
