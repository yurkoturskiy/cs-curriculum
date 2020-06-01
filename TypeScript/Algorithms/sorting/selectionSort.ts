const selectionSort = (list: number[]): number[] => {
  const length = list.length;
  for (let i = 0; i < length; i++) {
    let min = i;
    for (let j = i + 1; j < length; j++) {
      if (list[min] > list[j]) min = j;
    }
    if (min !== i) {
      // Swaping values
      [list[i], list[min]] = [list[min], list[i]];
    }
  }
  return list;
};

console.log(selectionSort([10, -1, 20, 4, -100, 3, 4, 10]));
