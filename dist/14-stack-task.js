"use strict";
/*
    Напиши класс стека MaxStack и оптимизируйте его, первый пришёл - последний вышел, где есть методы:
    push - добавляет элемент в конец стека
    pop - выбирает элемент из конца стека и удаляет его
    top - возвращает верхний элемент
    max - возвращает максимальное значение элемента
    count - возвращает количество элементов
*/
class MaxStack {
    constructor(stack) {
        this._stack = [];
        this._maxStack = [];
        for (const value of stack) {
            this.push(value);
        }
    }
    get stack() {
        return this._stack;
    }
    get count() {
        return this._stack.length;
    }
    push(value) {
        this._stack.push(value);
        // Если новый элемент больше или равен текущему максимуму, добавляем его в стек максимумов
        if (this._maxStack.length === 0 || value >= this.max()) {
            this._maxStack.push(value);
        }
    }
    pop() {
        const value = this._stack.pop();
        // Если удаляемый элемент является текущим максимумом, удаляем его из стека максимумов
        if (value === this.max()) {
            this._maxStack.pop();
        }
        return value;
    }
    top() {
        return this._stack[this._stack.length - 1];
    }
    max() {
        return this._maxStack[this._maxStack.length - 1];
    }
}
const stack = new MaxStack([1, 3, 5]);
stack.push(4);
stack.push(2);
console.log(stack.stack);
const count = stack.count;
for (let i = 0; i < count; i++) {
    console.log(`Max: ${stack.max()}, Pop: ${stack.pop()}`);
}
/*
[ 1, 3, 5, 4, 2 ]
Max: 5, Pop: 2
Max: 5, Pop: 4
Max: 5, Pop: 5
Max: 3, Pop: 3
Max: 1, Pop: 1
*/
