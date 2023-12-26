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

  async selectChat(data: { id:number, avatar:string, title:string }) {
    const { id, avatar, title } = data;
    store.set('selectedChat.id', id);
    store.set('selectedChat.title', title);
    store.set('selectedChat.avatar', avatar);
    try {
      const response = await this.chatsApi.getToken(id);
      const { token } = response;
      store.set('selectedChat.token', token);
    } catch (error) {
      console.log(error);
    }
  }

  async addUser(data: {users:number[], chatId:number}) {
    try {
      await this.chatsApi.addUser(data);
      const chats = await this.chatsApi.getChats();
      store.set('chats', chats);
    } catch (error) {
      console.log(error);
    }
  }

  async removeUser(data: {users:number[], chatId:number}) {
    try {
      await this.chatsApi.removeUser(data);
      const chats = await this.chatsApi.getChats();
      store.set('chats', chats);
    } catch (error) {
      console.log(error);
    }
  }

  async changeAvatar(data: FormData) {
    try {
      await this.chatsApi.changeAvatar(data);
      const chats = await this.chatsApi.getChats();
      store.set('chats', chats);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteChat(id: number) {
    try {
      await this.chatsApi.deleteChat(id);
      const chats = await this.chatsApi.getChats();
      store.set('chats', chats);
      store.set('selectedChat', null);
    } catch (error) {
      console.log(error);
    }
  }

  async getChatUsers(chatId: number) {
    try {
      const users = await this.chatsApi.getChatUsers(chatId);
      store.set('selectedChatUsers', users);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ChatsController();
