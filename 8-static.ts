// Сделать рабочим - поправить ошибки ниже:
//РЕШЕНО для проверки => node 8-static.js

//добавлен интерфейс для типизации обьекта аргумента
interface userObj {
  name: string;
  age: number;
  country: { name: string; code: number };
}

class Country {
  constructor(readonly name: string) {}

  get code() {
    return 643;
  }
}

class User8 {
  constructor(
    readonly name: string,
    readonly age: number,
    readonly country: Country
  ) {}

  //сделал статику(используется до обьявления экземпляра)
  //сделал возвращение экземпляра а не имени + типизировал
  static parseCountry(country: { name: string }): Country {
    return new Country(this.name);
  }

  //это не конструктор, а метод, поэтому убрал назначения и возвращаю экземпляр (перед этим конечно создаю экземпляр county)
  static fromObject(obj: userObj): User8 {
    const country = this.parseCountry(obj.country);

    return new User8(obj.name, obj.age, country);
  }
}

// Не нужно менять:
const user8 = User8.fromObject({
  name: "Artem",
  age: 24,
  country: {
    name: "Russia",
    code: 643,
  },
});

console.log(user8.age); //24
console.log(user8.country.code); //643
