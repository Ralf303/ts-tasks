interface IUser {
  name: string;
  age: number;
  country: { name: string; code: number };
}

class Country {
  constructor(readonly name: string, private readonly _code: number) {}

  get code() {
    return this._code;
  }

  static parse(countryData: { name: string; code: number }): Country {
    return new Country(countryData.name, countryData.code);
  }
}

class User {
  constructor(
    readonly name: string,
    readonly age: number,
    readonly country: Country
  ) {}

  static fromObject(userInfo: IUser): User {
    const country = Country.parse(userInfo.country);
    return new User(userInfo.name, userInfo.age, country);
  }
}

const user = User.fromObject({
  name: "Artem",
  age: 24,
  country: {
    name: "Russia",
    code: 812,
  },
});

console.log(user.age); // 24
console.log(user.country.code); // 812
