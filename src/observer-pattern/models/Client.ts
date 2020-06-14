import { Message } from './Message';
import { IObserver } from '../interfaces/IObserver';

class Client implements IObserver<Message> {
  private messages: Message[] = [];

  update(payload: Message): void {
    this.messages.push(payload);

    console.log('client received message. state:');
    console.log(this.messages);
  }
}

export { Client };
