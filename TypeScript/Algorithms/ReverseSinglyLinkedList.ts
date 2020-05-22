import { LinkedList } from "../Data Structures/LinkedList";

const reverseSinglyLinkedList = (list: LinkedList): LinkedList => {
  // Reverse singly linked list
  let cursor = list.head;
  let prev = null;
  while (cursor != null) {
    let next = cursor.next;
    cursor.next = prev;
    prev = cursor;
    cursor = next;
  }
  list.head = prev;
  return list;
};

// Create list
const list = new LinkedList();
list.add("one");
list.add("two");
list.add("three");
list.add("four");
list.add("five");
console.log(list);
const reversedList = reverseSinglyLinkedList(list);
console.log("reversed", reversedList.head);
