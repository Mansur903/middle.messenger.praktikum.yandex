import { API } from './Api';

export class ChatsAPI extends API {
  constructor() {
    super('/chats');
  }

  getChats() {
    return this.http.get();
  }
}
