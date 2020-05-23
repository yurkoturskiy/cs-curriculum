# Arrays

The most used data structure and fundamental building block for other data structures. With the help of arrays it's possible to construct any data structure.

## What is an array

Array is a fixed length container. It contains N elements and each of them has own index to be referenced with it [0, ..., n-1]

## When and where is an Array used?

It used everywhere. Here is a few examples:

- Storing and accesing sequential data `['one', 'two']`;
- Temporarily storing objects `[{a:'a'}, {a:'aa'}]`;
- Used by IO routines as buffers;
- Lookup tables and inverse lookup tables;
- Can be used to return multiple values from a function `return [x, y]`;
- Used in dynamic programming to cache answers to subproblems.

## Complexity

|           | Static Array | Dynamic Array |
| --------- | ------------ | ------------- |
| Access    | O(1)         | O(1)          |
| Search    | O(n)         | O(n)          |
| Insertion | N/A          | O(n)          |
| Appending | N/A          | O(1)          |
| Deletion  | N/A          | O(n)          |

## Dynamic Array implementation details

Dynamic array can grow and shrink in size. It is usualy created with a static array and here is how that works:

1. Create a static array with initial capacity;
2. Add elements to the array and keep tracking the number of the elements;
3. If adding new element will exceed the capacity, then create a new static array with the twice bigger capacity and copy the original elements into in.

```js
[undefined, undefined] => [3, undefined] => [3,5] => [3,5, 2, undefined] => [3,5,2,9] => [3,5,2,9, 5, undefined, undefined, undefined]
```

# Linked lists

A linked list is a sequential list of nodes that hold data which point to other nodes and containing data.

### Where are linked lists used?

- Used in many List, Queue & Stack implementations;
- Great for creating circular lists;
- Can easily model real world objects such as trains;
- Used in separate chaining, which is present certain Hashtable implementations to deal with hashing collisions;
- Often used in the implementation of adjacency lists for graphs.

### Terminology

**Head** is the first node in a linked list.

**Tail** is the last node in a linked list.

**Pointer** is the reference to another node.

**Node** is an object that containing data and pointer(s).

## Singly vs doubly linked lists

Singly linked list only holds one pointer to the next node, while doubly liked list also has pointer to a previous node.

|                   | Pros                      | Cons                                   |
| ----------------- | ------------------------- | -------------------------------------- |
| **Singly Linked** | Uses less memory          | Cannot easily access previous elements |
|                   | Simpler implementation    |                                        |
| **Doubly Linked** | Can be traversed backward | Takes 2x memory                        |

## Complexity:

|                  | Singly Linked | Doubly Linked |
| ---------------- | :-----------: | :-----------: |
| Search           |     O(n)      |     O(n)      |
| Insert at head   |     O(1)      |     O(1)      |
| Insert at tail   |     O(1)      |     O(1)      |
| Remove at head   |     O(1)      |     O(1)      |
| Remove at tail   |     O(n)      |     O(1)      |
| Remove in middle |     O(n)      |     O(n)      |

# Stack

Stack is a one-ended linear data structure which models a real world stack by having two primary operations, namely `push` and `pop`.

## When and where is a Stack used?

- Used by undo mechanism in text editor;
- Used in compiler syntax checking for matching brackets and braces;
- Can be used to model a pile of books or plates;
- Used behind the scenes to support recursion by keeping track of previous function calls;
- Can be used to do a Depth First Search (DFS) on a graph.

## Complexity:

|           |      |
| --------- | ---- |
| Pushing   | O(1) |
| Popping   | O(1) |
| Peeking   | O(1) |
| Searching | O(n) |
| Size      | O(1) |

# Queues

Queue is a linear data structure which is model real world queues, by having two primary operators, namely enqueue and dequeue.

## Where and when is a Queue used?

- Any waiting line models a queue, for example a lineup at a movie theatre;
- Can be used to efficiently keep track of the x most recently added elements;
- Web server request management where you want first come first serve;
- Breadth First Search (BFS) graph traversal.

## Complexity

|          |      |
| -------- | ---- |
| Enqueue  | O(1) |
| Dequeue  | O(1) |
| Peeking  | O(1) |
| Contains | O(n) |
| Removal  | O(n) |
| isEmpty  | O(1) |

# Priority Queue

Priority Queue is an Abstract Data Type (ADT) that operates similar to a normal queue except each element has a certain priority. The priority of the elements determines the order in which elements are removed from PQ.

To determine which element has the highest priority it used Heap data structure.

## What is heap?

A heap is a tree based data structure that satisfies the heap property (heap invariant). There are two types of heaps: min heap and max heap. Min heap is where all child nodes are greater than or equal to they parent. Meanwhile max heap is opposite, means all child nodes are less than or equal to they parrent.

## When and where is Priority Order used?

- Used in certain implementations of Dijkstra's Shortest Path algorithm;
- Anytime you need the dynamically fetch the `next best` or `next worst` element;
- Used in Huffman coding (which is often used for lossless data compression);
- Best First Search algorithms such as A\* use PQs to continuously grab the next most promising node;
- Used by Minimum Spanning Tree (MST) algorithms.

## Complexity of PQ with binary heap

|                          |           |
| ------------------------ | --------- |
| Binary Heap Construction | O(n)      |
| Polling                  | O(log(n)) |
| Peeking                  | O(1)      |
| Adding                   | O(log(n)) |
