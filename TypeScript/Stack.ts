interface StackThis {
  storage: any[];
  count: number;
  push(value: any): void;
  pop(): void;
  peek(): any;
  size(): number;
}

const stack = function (this: StackThis) {
  this.storage = [];
  this.count = 0;

  this.push = (value: any): void => {
    this.storage[this.count] = value;
    this.count++;
  };

  this.pop = () => {
    delete this.storage[this.count];
    this.count--;
  };

  this.peek = () => this.storage[this.count];
  this.size = () => this.count;
};

class Stack {
  storage: any[];
  count: number;
  constructor() {
    this.storage = [];
    this.count = 0;
  }
  push(value: any) {
    this.storage[this.count] = value;
    this.count++;
  }
  pop() {
    delete this.storage[this.count];
    this.count--;
  }
  peek() {
    return this.storage[this.count - 1];
  }
  size() {
    return this.count;
  }
}

// Function-based stack
const books = new (stack as any)();
console.log("Books:");
books.push("first");
books.push("second");
console.log(books);
books.pop();
console.log(books);
books.push("third");
console.log(books);
console.log(books.peek());
console.log("size", books.size());

// Class-based Stack
const plates = new Stack();
console.log("Plates:");
plates.push("first");
plates.push("second");
console.log(plates);
plates.pop();
console.log(plates);
plates.push("third");
console.log(plates.peek());
console.log("size", plates.size());
