"use strict";
// Сделать рабочим - поправить ошибки ниже:
//РЕШЕНО для проверки => node 8-static.js
class Country {
    constructor(name) {
        this.name = name;
    }
    get code() {
        return 643;
    }
}
class User8 {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    //сделал статику(используется до обьявления экземпляра)
    //сделал возвращение экземпляра а не имени + типизировал
    static parseCountry(country) {
        return new Country(this.name);
    }
    //это не конструктор, а метод, поэтому убрал назначения и возвращаю экземпляр (перед этим конечно создаю экземпляр county)
    static fromObject(obj) {
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
