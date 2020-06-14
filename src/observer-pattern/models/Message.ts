class Message {
  private datetime: Date;
  private author: string;
  private message: string;

  constructor(datetime: Date, author: string, message: string) {
    this.datetime = datetime;
    this.author = author;
    this.message = message;
  }

  display(): string {
    return `${this.datetime} - ${this.author} writes: ${this.message}`;
  }
}

export { Message };
