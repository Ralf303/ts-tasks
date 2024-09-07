"use strict";
class User2 {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
    }
    getInfo() {
        return `User name: ${this.name}, Age: ${this.age}`;
    }
}
class Book {
    constructor(name, price, size) {
        this.name = name;
        this.price = price;
        this.size = size;
        this._readed = false;
    }
    get isReaded() {
        return this._readed;
    }
    read() {
        this._readed = true;
    }
    toString() {
        return `Book name: ${this.name}, price: ${this.price}, ${this.isReaded ? "readed" : "not readed"}`;
    }
}
function New(newlable, params) {
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
