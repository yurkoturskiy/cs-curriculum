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

## Static array usage example

## Dynamic Array implementation details

Dynamic array can grow and shrink in size. It is usualy created with a static array and here is how that works:

1. Create a static array with initial capacity;
2. Add elements to the array and keep tracking the number of the elements;
3. If adding new element will exceed the capacity, then create a new static array with the twice bigger capacity and copy the original elements into in.

```js
[undefined, undefined] => [3, undefined] => [3,5] => [3,5, 2, undefined] => [3,5,2,9] => [3,5,2,9, 5, undefined, undefined, undefined]
```

## Code implementation

```

```
