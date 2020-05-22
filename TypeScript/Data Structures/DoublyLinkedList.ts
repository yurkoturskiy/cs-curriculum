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
