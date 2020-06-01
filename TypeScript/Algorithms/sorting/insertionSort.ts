const insertionSort = (list: number[]): number[] => {
  let length = list.length;
  for (let i = 1; i < length; i++) {
    let key = list[i];
    let j = i - 1;
    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      j--;
    }
    list[j + 1] = key;
  }
  return list;
};

console.log(insertionSort([1, -2, 30, 4, 5, 1, 20]));
