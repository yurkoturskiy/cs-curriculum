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
