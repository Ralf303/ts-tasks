// Сделать рабочим - поправить ошибки ниже:
//РЕШЕНО
var Country = /** @class */ (function () {
    function Country(name) {
        this.name = name;
    }
    Object.defineProperty(Country.prototype, "code", {
        get: function () {
            return 643;
        },
        enumerable: false,
        configurable: true
    });
    return Country;
}());
var User8 = /** @class */ (function () {
    function User8(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    //сделал статику(используется до обьявления экземпляра)
    //сделал возвращение экземпляра а не имени + типизировал
    User8.parseCountry = function (country) {
        return new Country(this.name);
    };
    //это не конструктор, а метод, поэтому убрал назначения и возвращаю экземпляр (перед этим конечно создаю экземпляр county)
    User8.fromObject = function (obj) {
        var country = this.parseCountry(obj.country);
        return new User8(obj.name, obj.age, country);
    };
    return User8;
}());
// Не нужно менять:
var user8 = User8.fromObject({
    name: "Artem",
    age: 24,
    country: {
        name: "Russia",
        code: 643,
    },
});
console.log(user8.age); //24
console.log(user8.country.code); //643
