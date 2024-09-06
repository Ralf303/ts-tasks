var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var User2 = /** @class */ (function () {
    function User2(options) {
        this.name = options.name;
        this.age = options.age;
    }
    User2.prototype.getInfo = function () {
        return "User name: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return User2;
}());
var Book = /** @class */ (function () {
    function Book(name, price, size) {
        this.name = name;
        this.price = price;
        this.size = size;
        this._readed = false;
    }
    Object.defineProperty(Book.prototype, "isReaded", {
        get: function () {
            return this._readed;
        },
        enumerable: false,
        configurable: true
    });
    Book.prototype.read = function () {
        this._readed = true;
    };
    Book.prototype.toString = function () {
        return "Book name: ".concat(this.name, ", price: ").concat(this.price, ", ").concat(this.isReaded ? "readed" : "not readed");
    };
    return Book;
}());
function New(newlable, params) {
    return new (newlable.bind.apply(newlable, __spreadArray([void 0], params, false)))();
}
// Реализуйте данное поведение функции New:
var user2 = New(User2, [{ name: "Artem", age: 24 }]); // const user = new User("Artem", 24)
console.log(user2.getInfo());
var book = New(Book, ["Coding In JS", 1000, { width: 10, height: 100 }]);
book.read();
console.log(book.toString());
//ВРОДЕ БЫ РЕШЕНО, ДОЛЬШЕ ВСЕХ СИДЕЛ НАД ЭТОЙ КРОКАЗЯБРОЙ
//User name: Artem, Age: 24
//Book name: Coding In JS, price: 1000, readed
