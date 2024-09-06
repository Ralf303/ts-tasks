
// Протипизируете код ниже:

class Sort {
    constructor(private _elements: any[]) {}

    get elements() {
        return this._elements;
    }
}

class Method {
    constructor(private _sort: Sort) {}

    get sort() {
        return this._sort;
    }
}

// Пример использования

{
    const sort = new Sort([1,2,3]);

    const method = new Method(sort);

    const elements = method.sort.elements; // elements должен возвращать тип number[]

    console.log(elements);
}
{
    const sort = new Sort(["1","2",3]);

    const method = new Method(sort);

    const elements = method.sort.elements; // elements должен возвращать тип (number | string)[]

    console.log(elements);
}