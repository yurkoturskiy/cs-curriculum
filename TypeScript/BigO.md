# Big O notation

Big O is the notation that describes time and space complexity of the algorigthm and therefore it's ability to scale.

## Some examples

```js
// O(1)
// Complexity is constant and linear
i = 0;
while (i < 11) {
  i++;
}
```

```js
// O(n)
// Complexity depends on `n`
// Linear growth
for (let i = 0; i < n; i++) {
  // Do something here
}
```

Binary search:

```js
/**
 * Time O(log(n)); Space O(1)
 */
let start = 0;
let end = array.length - 1;

while (start <= end) {
  let middleIndex = Math.floor((end + start) / 2);
  if (array[middleIndex] === num) return middleIndex;
  else if (array[middleIndex] > num) end = middleIndex - 1;
  else start = middleIndex + 1;
}
return undefined;
```

```js
/**
 * f(n) = n * (3n + 2n) = 5n²
 * O(f(n)) = O(n²)
 */
let i = 0;
while (i < n) {
  j = 0;
  while (j < 3 * n) {
    j++;
  }
  j = 0;
  while (j < 2 * n) {
    j++;
  }
}
```

```js
/**
 * f(n) = 3n * (40 + n³/2) = 3n/40 + 3n⁴/2
 * O(f(n)) = O(n⁴)
 */
let i = 0;
while (i < 3 * n) {
  let j = 0;
  while (j <= 50) {
    j++;
  }
  while (j < n * n * n) {
    j += 2;
  }
  i++;
}
```

Finding all subsets of a set – O(2^n)

Finding all permutations of a string – O(n!)

Sorting using mergesort – O(nlog(n))

Iterating over all the cells in a matrix of size n by m – O(nm)
