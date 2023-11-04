import { IUser } from '../api/AuthApi';
import { EventBus } from './EventBus.ts';
import { set } from './Ancillary.ts';
import Block from './Block';

export interface State {
  user?: IUser
}

enum StorageEvent {
  UpdateState = 'update',
}

class Store extends EventBus {
  private state: State = {};

  getState() {
    return this.state;
  }

  set(path: string, value: unknown) {
    set(this.state, path, value);

    console.log(this.state);

    this.emit(StorageEvent.UpdateState, this.state);
  }
}

export const withStore = (mapStateToProps: (data: State) => any) => {
  return (Component: typeof Block) => {
    return class extends Component {
      constructor(props: any) {
        super('', { ...props, ...mapStateToProps(store.getState()) });

        store.on(StorageEvent.UpdateState, () => {
          const newProps = mapStateToProps(store.getState());
          this.setProps(newProps);
        });
      }
    };
  };
};
export const store = new Store();
