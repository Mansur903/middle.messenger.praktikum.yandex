import { store } from '../utils/Store';
import { ChatsAPI } from '../api/ChatsApi';

class ChatsController {
  private chatsApi = new ChatsAPI();

  async getChats() {
    try {
      const chats = await this.chatsApi.getChats();
      store.set('chats', chats);
    } catch (error) {
      console.log(error);
    }
  }

  async createChat(title: string) {
    try {
      await this.chatsApi.createChat({ title });
      const chats = await this.chatsApi.getChats();
      store.set('chats', chats);
    } catch (error) {
      console.log(error);
    }
  }

  selectChat(data: { id:number, avatar:string, title:string }) {
    const { id, avatar, title } = data;
    store.set('selectedChat.id', id);
    store.set('selectedChat.title', title);
    store.set('selectedChat.avatar', avatar);
  }
}

export default new ChatsController();
