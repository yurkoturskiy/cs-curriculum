interface LinkedListNode {
  element: any;
  next: LinkedListNode;
}

interface LinkedList {
  head: LinkedListNode | null;
  length: number;
  size(): number;
  add<T>(element: T): void;
  remove<T>(element: T): void;
  isEmpty(): boolean;
  indexOf<T>(element: T): number;
  elementAt(index: number): any;
  addAt<T>(index: number, element: T): void;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}
