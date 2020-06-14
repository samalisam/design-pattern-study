import { IObserver } from './IObserver';
import { Message } from '../models/Message';

interface IObservable<T> {
  add(observer: IObserver<T>): void;
  remove(observer: IObserver<T>): void;
  notify(payload: Message): void;
}

export { IObservable };
