interface LinkedListNode {
  element: any;
  next: LinkedListNode | null;
}

class LinkedListNode implements LinkedListNode {
  constructor(element: any) {
    this.element = element;
    this.next = null;
  }
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

class LinkedList implements LinkedList {
  constructor(element: any = null) {
    this.head = element && new LinkedListNode(element);
    this.length = 0;
  }

  size() {
    return this.length;
  }

  add<T>(element: T) {
    const node = new LinkedListNode(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        // Walk to the last node
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.length++;
    }
  }
}

const LLInstance = new LinkedList();
console.log(LLInstance.size());
console.log(LLInstance.head);
LLInstance.add("new one");
LLInstance.add("second one");
LLInstance.add("third one");
console.log(LLInstance.size());
console.log(LLInstance);
