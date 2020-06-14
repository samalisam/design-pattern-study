interface IObserver<T> {
  update(payload: T): void;
}

export { IObserver };
