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
    }
    this.length++;
  }

  remove<T>(element: T) {
    if (this.head === null) return false;
    let prevNode = null;
    let currentNode = this.head;
    while (currentNode.next && currentNode.element !== element) {
      // Itterate through and pick the right node or stop on the last one
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    const isExist = currentNode.element === element;
    if (isExist === false) return false;
    // If we found node
    if (currentNode.next) {
      // If the node is somewhere in the middle
      // Replace it with the next one
      currentNode.element = currentNode.next.element;
      currentNode.next = currentNode.next.next;
    } else if (this.head === currentNode) {
      // if the node is head and the only node in the chain
      this.head = null;
    } else if (prevNode) {
      // if the node is the last in the chain but previous exists
      prevNode.next = null;
    }
    this.length--;
    return true;
  }

  isEmpty() {
    return this.length === 0;
  }

  indexOf(element: any) {
    let currentNode = this.head;
    let index = -1;
    if (currentNode === null) return index;
    while (currentNode) {
      index++;
      if (currentNode.element === element) return index;
      currentNode = currentNode.next;
    }
    return -1;
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
console.log(LLInstance.remove("third one"));
console.log(LLInstance.remove("new one"));
console.log(LLInstance);
console.log(LLInstance.head);
console.log(LLInstance.indexOf("second one"));
