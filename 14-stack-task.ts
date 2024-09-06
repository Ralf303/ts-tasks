/* 
    Напиши класс стека MaxStack и оптимизируйте его, первый пришёл - последний вышел, где есть методы:
    push - добавляет элемент в конец стека
    pop - выбирает элемент из конца стека и удаляет его
    top - возвращает верхний элемент
    max - возвращает максимальное значение элемента
    count - возвращает количество элементов
*/
//РЕШЕНО для проверки => node 14-stack-task.js

class MaxStack {
  constructor(readonly _stack: number[] = []) {}

  get stack(): number[] {
    return this._stack;
  }

  get count(): number {
    return this.stack.length;
  }

  push(value: number): void {
    this._stack.push(value);
  }

  pop(): number | undefined {
    return this._stack.pop();
  }

  top(): number | undefined {
    return this._stack[this._stack.length - 1];
  }

  max(): number {
    return Math.max(...this._stack);
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
