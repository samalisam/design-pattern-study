import { IObservable } from '../interfaces/IObservable';
import { IObserver } from '../interfaces/IObserver';
import { Message } from './Message';

class Room implements IObservable<Message> {
  private observers: IObserver<Message>[] = [];
  private messages: Message[] = [];

  add(observer: IObserver<Message>): void {
    this.observers.push(observer);
  }
  remove(observer: IObserver<Message>): void {
    this.observers = this.observers.filter((o) => o != observer);
  }
  notify(payload: Message): void {
    this.observers.forEach((observer) => {
      observer.update(payload);
    });
  }

  addMessage(message: Message) {
    this.messages.push(message);
    this.notify(message);
  }
}

export { Room };
