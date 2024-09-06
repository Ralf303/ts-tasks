
/* 
    Напиши класс стека MaxStack и оптимизируйте его, первый пришёл - последний вышел, где есть методы:
    push - добавляет элемент в конец стека
    pop - выбирает элемент из конца стека и удаляет его
    top - возвращает верхний элемент
    max - возвращает максимальное значение элемента
*/

class MaxStack {}

const stack = new MaxStack([1, 3, 5]);

stack.push(4);
stack.push(2);

console.log(stack.stack);

const count = stack.count;
for(let i = 0; i < count; i++) {
    console.log(`Max: ${stack.max}, Pop: ${stack.pop()}`);
}

/*
[ 1, 3, 5, 4, 2 ]
Max: 5, Pop: 2
Max: 5, Pop: 4
Max: 5, Pop: 5
Max: 3, Pop: 3
Max: 1, Pop: 1
*/
