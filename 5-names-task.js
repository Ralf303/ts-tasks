// 5
var Events = /** @class */ (function () {
    function Events() {
        this.eventStack = new Set();
    }
    Events.prototype.add = function (callback) {
        this.eventStack.add(callback);
        return callback;
    };
    Events.prototype.delete = function (callback) {
        return this.eventStack.delete(callback);
    };
    Events.prototype.call = function (eventData) {
        for (var _i = 0, _a = this.eventStack; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback(eventData);
        }
    };
    return Events;
}());
var numberEvents = new Events();
var newEvents = numberEvents.add(function (data) {
    console.log(data);
});
numberEvents.call(5);
numberEvents.delete(newEvents);
numberEvents.call(10);
