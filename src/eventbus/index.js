// contract to event bus
class EventBusImpl {
  constructor() {
    // listeners
    this.listeners = new Map();
  }

  on(eventType, listener) {
    // create if not exists
    if (!Array.isArray(this.listeners.get(eventType))) {
      this.listeners.set(eventType, []);
    }
    // using listeners
    this.listeners.get(eventType)?.push(listener);
  }

  remove(eventType, listener) {
    // retrieve listeners list
    const list = this.listeners.get(eventType) || [];
    // filter listeners
    const newList = list.filter((l) => l !== listener);
    // renew listeners
    this.listeners.set(eventType, newList);
  }

  removeAll(eventType) {
    // remove
    this.listeners.delete(eventType);
  }

  fire(eventType, value) {
    // retrieve listeners list
    const list = this.listeners.get(eventType) || [];
    // fire to all listeners
    list.forEach((l) => l(value));
  }

  fireOnce(eventType, value) {
    // retrieve listeners list
    const list = this.listeners.get(eventType) || [];
    // fire to all listeners
    for (let index = 0; index < list.length; index += 1) {
      const l = list[index];
      l(value);
    }
    // remove all listeners
    this.removeAll(eventType);
  }
}

// create a static and global event bus
const globalEventBusImpl = new EventBusImpl();
export { globalEventBusImpl };
