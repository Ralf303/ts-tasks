// 5

// Требуется подобрать соответствующие названия переменным, функциям, методам и тд...

//РЕШИЛ я так понял в класс можно добавлять разные функции, удалять их, а так же вызывать их с общим аргументом
//для запуска node 5-names-task.js
type Callback<T> = (eventData: T) => void;

class Events<T> {
  private eventStack = new Set<Callback<T>>();

  add(callback: Callback<T>) {
    this.eventStack.add(callback);
    return callback;
  }

  delete(callback: Callback<T>) {
    return this.eventStack.delete(callback);
  }

  call(eventData: T) {
    for (const callback of this.eventStack) {
      callback(eventData);
    }
  }
}

const numberEvents = new Events<number>();

const newEvents = numberEvents.add((data) => {
  console.log(data);
});

numberEvents.call(5);

numberEvents.delete(newEvents);

numberEvents.call(10);
