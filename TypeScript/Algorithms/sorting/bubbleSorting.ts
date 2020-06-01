const bubbleSorting = (list: number[]): number[] => {
  const length = list.length;
  for (let i = length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (list[j - 1] > list[j]) {
        [list[j - 1], list[j]] = [list[j], list[j - 1]];
      }
    }
  }
  return list;
};

console.log(bubbleSorting([55, 23, 666, 11, 0, 1, -10, 5, -11]));
