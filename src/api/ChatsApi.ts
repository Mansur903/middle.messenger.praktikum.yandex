import { API } from './Api';

export interface IChats {
  avatar: string,
  title: string,
  last_message: string,
  unread_count?: number,
  events?: {
    click: (e:KeyboardEvent) => void;
  },
  id: number
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

  addUser(payload: {users:number[], chatId:number}) {
    return this.http.put('/users', payload);
  }

  removeUser(payload: {users:number[], chatId:number}) {
    return this.http.delete('/users', payload);
  }
}
