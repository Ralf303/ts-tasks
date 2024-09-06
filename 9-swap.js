var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var SortNumbers = /** @class */ (function () {
    function SortNumbers(array) {
        this.array = array;
    }
    Object.defineProperty(SortNumbers.prototype, "sorted", {
        get: function () {
            var This = this;
            for (var i = 0; i < this.array.length; i++) {
                for (var j = i + 1; j < this.array.length; j++) {
                    if (this.array[i] > this.array[j]) {
                        This = This.swap(i, j);
                    }
                }
            }
            return __spreadArray([], this.array, true);
        },
        enumerable: false,
        configurable: true
    });
    // Реализовать функцию: Меняет местами элементы с индексами index1 и index2
    SortNumbers.prototype.swap = function (index1, index2) {
        var temp = this.array[index1];
        this.array[index1] = this.array[index2];
        this.array[index2] = temp;
        return this;
    };
    return SortNumbers;
}());
var sortNumbers = new SortNumbers([3, 1, 2]);
sortNumbers
    .swap(0, 1)
    .swap(2, 1)
    .swap(1, 1);
console.log(sortNumbers.sorted); // [ 1, 2, 3 ]
