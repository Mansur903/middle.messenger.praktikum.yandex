import { API } from './Api';

export interface IChats {
  avatar: string,
  title: string,
  last_message: string,
  unread_count?: number,
  events?: {
    click: (e:KeyboardEvent) => void;
  },
  className?: string;
}

export class ChatsAPI extends API {
  constructor() {
    super('/chats');
  }

  getChats() {
    return this.http.get();
  }

  createChat(payload: object) {
    return this.http.post('', payload);
  }
}
