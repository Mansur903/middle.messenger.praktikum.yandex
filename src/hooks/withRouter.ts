import Block from '../utils/Block.ts';
import router from '../utils/Router.ts';

export function withRouter(Component: typeof Block<any>) {
  type Props = typeof Component extends typeof Block<infer P extends Record<string, any>> ? P : any;

  return class extends Component {
    constructor(tagName:string, props: Props & PropsWithRouter) {
      super(tagName, { ...props, router });
    }
  };
}

export interface PropsWithRouter {
  router: typeof router;
}
