// Протипизируете код ниже:
//РЕШЕНО самая быстрая и легкая задачка
class Sort<T> {
  constructor(private _elements: T[]) {}

  get elements(): T[] {
    return this._elements;
  }
}

class Method<T> {
  constructor(private _sort: Sort<T>) {}

  get sort(): Sort<T> {
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
