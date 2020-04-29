class Queue {
  collection: any[];
  constructor(...values: any[]) {
    this.collection = [...values];
  }

  print() {
    console.log(this.collection);
  }

  enqueue<T>(element: T) {
    this.collection.push(element);
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
  let queueA = new Queue("a", "b");
  queueA.enqueue("cccc");
  queueA.print();
  console.log(queueA.front());
  queueA.dequeue();
  console.log(queueA.front());
}
