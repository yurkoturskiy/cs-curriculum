import {
  DoublyLinkedList,
  DoublyLinkedListNode,
} from "../Data Structures/DoublyLinkedList";

const reverseDoublyLinkedList = (list: DoublyLinkedList): DoublyLinkedList => {
  if (list.head === null) return list;
  let prev = null;
  let current: DoublyLinkedListNode | null = list.head;
  while (current != null) {
    let next: DoublyLinkedListNode | null = current.next;
    current.next = prev;
    current.prev = next;
    prev = current;
    current = next;
    // console.log(current);
  }
  list.head = prev;
  return list;
};

const list = new DoublyLinkedList();
list.add("one");
list.add("two");
list.add("three");
list.add("four");
console.log("list", list.head);
const reversedList = reverseDoublyLinkedList(list);
console.log("reversed list", reversedList.head);
