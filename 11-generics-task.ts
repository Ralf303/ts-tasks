// Протипизируете код ниже:
//РЕШЕНО самая быстрая и легкая задачка
class Sort<t> {
  constructor(private _elements: t[]) {}

  get elements(): t[] {
    return this._elements;
  }
}

class Method<t> {
  constructor(private _sort: Sort<t>) {}

  get sort(): Sort<t> {
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
