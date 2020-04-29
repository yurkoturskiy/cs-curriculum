class PriorityQueue {
  collection: [any, number][];
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }

  enqueue<T>(element: [T, number]) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      const passedByPriority = this.collection.reduce(
        (accCollection: [any, number][], item, index) => {
          const waiting = accCollection.length <= index;
          return element[1] < item[1] && waiting
            ? [...accCollection, element, item]
            : [...accCollection, item];
        },
        []
      );

      const restricted = passedByPriority.length === this.collection.length;

      this.collection = restricted
        ? [...this.collection, element]
        : passedByPriority;
    }
  }

  dequeue() {
    return this.collection.shift();
  }

  front() {
    return this.collection[0];
  }

  size() {
    return this.collection.length;
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

{
  let priorityQueueA = new PriorityQueue();
  priorityQueueA.enqueue(["a", 3]);
  priorityQueueA.enqueue(["b", 1]);
  priorityQueueA.enqueue(["c", 2]);
  priorityQueueA.enqueue(["d", 1]);
  priorityQueueA.enqueue(["e", 2]);
  priorityQueueA.enqueue(["f", 3]);
  priorityQueueA.print();
  priorityQueueA.dequeue();
  console.log("front", priorityQueueA.front());
  console.log("size", priorityQueueA.size());
}
