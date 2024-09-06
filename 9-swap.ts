//РЕШЕНО ПОЛУЧАЕТСЯ для теста node 9-swap.js
class SortNumbers {
  constructor(private array: number[]) {}

  get sorted() {
    let This = this;

    for (let i = 0; i < this.array.length; i++) {
      for (let j = i + 1; j < this.array.length; j++) {
        if (this.array[i] > this.array[j]) {
          This = This.swap(i, j);
        }
      }
    }

    return [...this.array];
  }

  // Реализовать функцию: Меняет местами элементы с индексами index1 и index2
  //ТАК ОНО ВРОДЕ И ТАК РЕАЛИЗОВАНО
  swap(index1: number, index2: number) {
    const temp = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = temp;

    return this;
  }
}

const sortNumbers = new SortNumbers([3, 1, 2]);

sortNumbers.swap(0, 1).swap(2, 1).swap(1, 1);

console.log(sortNumbers.sorted); // [ 1, 2, 3 ]
