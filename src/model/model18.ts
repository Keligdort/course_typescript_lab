/* 
	Создайте примесь с методом log, которая выводит в консоль сообщение в формате "[LOG]: <сообщение>"
*/



export function Timestamped<TBase extends new (...args: any[]) => any>(Base: TBase) {
  return class extends Base {
    timestamp: Date;

    constructor(...args: any[]) {
      super(...args);
      this.timestamp = new Date();
    }

    getTimestamp(): string {
      return this.timestamp.toISOString();
    }
  };
}

export class Document {
  content: string = "";
}
