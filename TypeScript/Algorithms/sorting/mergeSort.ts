const merge = (left: number[], right: number[]): number[] => {
  let list = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      list.push(left.shift());
    } else {
      list.push(right.shift());
    }
  }
  return [...list, ...left, ...right] as number[];
};

const mergeSort = (list: number[]): number[] => {
  if (list.length < 2) return list;
  let half = list.length / 2;
  const left = list.splice(0, half);
  return merge(mergeSort(left), mergeSort(list));
};

console.log(mergeSort([-10, 4, -12, 44, 20, 43, 12, 3, 5]));
