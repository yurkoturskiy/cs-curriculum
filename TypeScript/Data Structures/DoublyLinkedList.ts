export interface DoublyLinkedListNode {
  element: any;
  next: DoublyLinkedListNode | null;
  prev: DoublyLinkedListNode | null;
}

export class DoublyLinkedListNode implements DoublyLinkedListNode {
  constructor(
    element: any,
    prev: DoublyLinkedListNode | null = null,
    next: DoublyLinkedListNode | null = null
  ) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}

export interface DoublyLinkedList {
  head: DoublyLinkedListNode | null;
  tail: DoublyLinkedListNode | null;
  length: number;
  clear(): void;
  size(): number;
  isEmpty(): boolean;
  add<T>(element: T): void; // to the tail O(1)
  addFirst<T>(element: T): void; // to the beginnig O(1)
  addLast<T>(element: T): void;
  peekFirst(): any;
  peekLast(): any;
  removeFirst(): any;
  removeLast(): any;
  remove(node: DoublyLinkedListNode): void;
  removeAt(index: number): void;
  removeElement<T>(element: T): boolean;
  indexOf<T>(element: T): number;
  contains<T>(element: T): boolean;
}

export class DoublyLinkedList implements DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add<T>(element: T) {
    const newNode = new DoublyLinkedListNode(element, this.tail);
    if (!this.head && !this.tail) {
      this.head = this.tail = new DoublyLinkedListNode(element);
    } else if (this.tail) {
      newNode.prev = this.tail;
      newNode.prev.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
}

// const linkedList = new DoublyLinkedList();
// linkedList.add("something");
// console.log(linkedList);
// linkedList.add("wow");
// linkedList.add("wowII");
// console.log(linkedList);
// console.log(linkedList.tail && linkedList.tail.prev);
