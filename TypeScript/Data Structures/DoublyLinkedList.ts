interface DoublyLinkedListNode<T> {
  element: T | null;
  next: DoublyLinkedListNode<T> | null;
  prev: DoublyLinkedListNode<T> | null;
}

class DoublyLinkedListNode<T> implements DoublyLinkedListNode<T> {
  constructor(
    element: T,
    prev: DoublyLinkedListNode<T> | null = null,
    next: DoublyLinkedListNode<T> | null = null
  ) {
    this.element = element;
    this.prev = prev;
    this.next = next;
  }
}

interface DoublyLinkedList<T> {
  head: DoublyLinkedListNode<T> | null;
  tail: DoublyLinkedListNode<T> | null;
  length: number;
  clear(): void;
  size(): number;
  isEmpty(): boolean;
  add<T>(element: T): void; // to the tail O(1)
  addFirst<T>(element: T): void; // to the beginnig O(1)
  addLast<T>(element: T): void;
  peekFirst(): T;
  peekLast(): T;
  removeFirst(): T;
  removeLast(): T;
  remove<T>(node: DoublyLinkedListNode<T>): void;
  removeAt(index: number): void;
  removeElement<T>(element: T): boolean;
  indexOf<T>(element: T): number;
  contains<T>(element: T): boolean;
}

class DoublyLinkedList<T> implements DoublyLinkedList<T> {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
