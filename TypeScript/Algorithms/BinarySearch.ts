const recursiveBinarySearch = (
  num: number,
  array: number[]
): number | undefined => {
  /**
   * time O(n)
   * space O(n)
   */

  const index = Math.floor(array.length / 2);
  if (array[index] === num) return index;
  else if (array[index] > num)
    return recursiveBinarySearch(num, array.slice(0, index));
  else if (array[index] < num)
    return recursiveBinarySearch(num, array.slice(index + 1, array.length));
  else return undefined;
};

const iterativeBinarySearch = (
  num: number,
  array: number[]
): number | undefined => {
  /**
   * time O(n)
   * space O(1)
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
};

console.log(recursiveBinarySearch(4, [0, 2, 4, 6, 8, 11, 15, 59]));
console.log(iterativeBinarySearch(59, [0, 2, 4, 6, 8, 11, 15, 59]));
console.log(recursiveBinarySearch(2, [0, 2, 4]));
console.log(iterativeBinarySearch(2, [0, 2, 4]));
