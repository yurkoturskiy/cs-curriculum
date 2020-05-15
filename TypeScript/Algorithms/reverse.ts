const reverse = (array: number[]) => {
  // Time O(N)
  for (let i = 0; i < array.length / 2; i++) {
    const mirror = array.length - i - 1;
    const tempVal = array[i];
    array[i] = array[mirror];
    array[mirror] = tempVal;
  }
  return array;
};

const some = [0, 1, 2, 5, 7, 9];
console.log(reverse(some));
