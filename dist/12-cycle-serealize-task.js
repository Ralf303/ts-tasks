"use strict";
class User {
    constructor(name) {
        this.name = name;
        this._orders = [];
    }
    addOrder(order) {
        this._orders.push(order);
        order.owner = this;
    }
}
class Order {
    constructor() {
        this._products = [];
        this._owner = null;
    }
    set owner(owner) {
        this._owner = owner;
        for (const product of this._products) {
            product.owner = owner;
        }
    }
    addProduct(product) {
        this._products.push(product);
        product.owner = this._owner;
    }
}
class Product {
    set owner(owner) {
        this._owner = owner;
    }
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this._owner = null;
    }
}
// Реализовать функцию, которая выводит все циклические зависимости в объекте
const user = new User("Alex");
const order1 = new Order();
const product1 = new Product("Product1", 10);
const product2 = new Product("Product2", 20);
order1.addProduct(product1);
order1.addProduct(product2);
user.addOrder(order1);
/*
<ref *1> User {
  name: 'Alex',
  _orders: [
    Order {
      _products: [
        Product {
          name: 'Product1',
          price: 10,
          _owner: [Circular *1],
          [owner]: [Setter]
        },
        Product {
          name: 'Product2',
          price: 20,
          _owner: [Circular *1],
          [owner]: [Setter]
        },
        [length]: 2
      ],
      _owner: [Circular *1],
      [owner]: [Setter]
    },
    [length]: 1
  ]
}
*/
// Доработать функцию так, чтобы обход не был рекурсивным...
function traverseObject(obj, callback) {
    if (obj === null || typeof obj !== 'object') {
        return;
    }
    const stack = [obj];
    while (stack.length > 0) {
        const currentObj = stack.pop();
        for (const key in currentObj) {
            if (currentObj.hasOwnProperty(key)) {
                const value = currentObj[key];
                callback(key, value);
                if (typeof value === 'object' && value !== null) {
                    stack.push(value);
                }
            }
        }
    }
}
traverseObject(user, (key, value) => {
    console.log(`${key} - ${value.constructor.name}`);
});
