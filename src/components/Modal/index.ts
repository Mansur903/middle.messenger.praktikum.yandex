import Block from '../../utils/Block';

interface ModalProps {
    title: string;
    content: string;
    error: boolean;
    buttonText: string;
}

export class Modal extends Block {
  constructor(props: ModalProps) {
    super('div', props);
  }

  render() {
    return this.compile(`
        <div class="modal" data-modal="1">
           <svg class="modal__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/>
           </svg>
           <p class="modal__title">Заголовок окна 1</p>
        </div>
        
        <div class="overlay" id="overlay-modal"></div>
    `, this.props);
  }
}
