/*
    Напиши класс стека MaxStack и оптимизируйте его, первый пришёл - последний вышел, где есть методы:
    push - добавляет элемент в конец стека
    pop - выбирает элемент из конца стека и удаляет его
    top - возвращает верхний элемент
    max - возвращает максимальное значение элемента
    count - возвращает количество элементов
*/
var MaxStack = /** @class */ (function () {
    function MaxStack(_stack) {
        if (_stack === void 0) { _stack = []; }
        this._stack = _stack;
    }
    Object.defineProperty(MaxStack.prototype, "stack", {
        get: function () {
            return this._stack;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaxStack.prototype, "count", {
        get: function () {
            return this.stack.length;
        },
        enumerable: false,
        configurable: true
    });
    MaxStack.prototype.push = function (value) {
        this._stack.push(value);
    };
    MaxStack.prototype.pop = function () {
        return this._stack.pop();
    };
    MaxStack.prototype.top = function () {
        return this._stack[this._stack.length - 1];
    };
    MaxStack.prototype.max = function () {
        return Math.max.apply(Math, this._stack);
    };
    return MaxStack;
}());
var stack = new MaxStack([1, 3, 5]);
stack.push(4);
stack.push(2);
console.log(stack.stack);
var count = stack.count;
for (var i = 0; i < count; i++) {
    console.log("Max: ".concat(stack.max(), ", Pop: ").concat(stack.pop()));
}
/*
[ 1, 3, 5, 4, 2 ]
Max: 5, Pop: 2
Max: 5, Pop: 4
Max: 5, Pop: 5
Max: 3, Pop: 3
Max: 1, Pop: 1
*/
