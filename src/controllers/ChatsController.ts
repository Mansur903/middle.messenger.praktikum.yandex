import { store } from '../utils/Store';
import { ChatsAPI } from '../api/ChatsApi';

class ChatsController {
  private chatsApi = new ChatsAPI();

  async getUser() {
    try {
      const chats = await this.chatsApi.getChats();
      store.set('chats', chats);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ChatsController;
