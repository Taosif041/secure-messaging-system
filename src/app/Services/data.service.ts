// data.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  messages: { message: string, key: string }[] = [];

  constructor() {}

  addMessage(message: string, key: string) {
    this.messages.push({ message, key });
  }

  getLastMessage() {
    const lastMessage = this.messages[this.messages.length - 1];
    if (lastMessage) {
      return { message: lastMessage.message, key: lastMessage.key };
    }
    return { message: '', key: '' };
  }
  getMessages() {
    return this.messages;
  }

}
