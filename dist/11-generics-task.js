"use strict";
// Протипизируете код ниже:
//РЕШЕНО самая быстрая и легкая задачка
class Sort {
    constructor(_elements) {
        this._elements = _elements;
    }
    get elements() {
        return this._elements;
    }
}
class Method {
    constructor(_sort) {
        this._sort = _sort;
    }
    get sort() {
        return this._sort;
    }
}
// Пример использования
{
    const sort = new Sort([1, 2, 3]);
    const method = new Method(sort);
    const elements = method.sort.elements; // elements должен возвращать тип number[]
    console.log(elements);
}
{
    const sort = new Sort(["1", "2", 3]);
    const method = new Method(sort);
    const elements = method.sort.elements; // elements должен возвращать тип (number | string)[]
    console.log(elements);
}
