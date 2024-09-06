class User2 {
  readonly name: string;
  readonly age: number;

  constructor(options: { name: string; age: number }) {
    this.name = options.name;
    this.age = options.age;
  }

  getInfo() {
    return `User name: ${this.name}, Age: ${this.age}`;
  }
}

class Book {
  private _readed: boolean = false;

  constructor(
    readonly name: string,
    readonly price: number,
    readonly size?: { width: number; height: number }
  ) {}

  get isReaded() {
    return this._readed;
  }

  read() {
    this._readed = true;
  }

  toString() {
    return `Book name: ${this.name}, price: ${this.price}, ${
      this.isReaded ? "readed" : "not readed"
    }`;
  }
}

function New<t>(newlable: new (...a: any[]) => t, params: any[]): t {
  return new newlable(...params);
}

// Реализуйте данное поведение функции New:

const user2 = New(User2, [{ name: "Artem", age: 24 }]); // const user = new User("Artem", 24)

console.log(user2.getInfo());

const book = New(Book, ["Coding In JS", 1000, { width: 10, height: 100 }]);

book.read();

console.log(book.toString());
//ВРОДЕ БЫ РЕШЕНО, ДОЛЬШЕ ВСЕХ СИДЕЛ НАД ЭТОЙ КРОКАЗЯБРОЙ

//User name: Artem, Age: 24
//Book name: Coding In JS, price: 1000, readed
