"use strict";
// 5
class Events {
    constructor() {
        this.eventStack = new Set();
    }
    add(callback) {
        this.eventStack.add(callback);
        return callback;
    }
    delete(callback) {
        return this.eventStack.delete(callback);
    }
    call(eventData) {
        for (const callback of this.eventStack) {
            callback(eventData);
        }
    }
}
const numberEvents = new Events();
const newEvents = numberEvents.add((data) => {
    console.log(data);
});
numberEvents.call(5);
numberEvents.delete(newEvents);
numberEvents.call(10);
