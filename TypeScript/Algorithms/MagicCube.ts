const fixMagicCube = (s: [number, number, number][]) => {
  let cachedSource = s;
  let flattened: number[] = s.reduce(
    (acc: number[], row: number[]): number[] => [...acc, ...row],
    []
  );
  let cost = 0;
  // check middle
  const tempMiddle = s[1][1];
  s[1][1] = 5;
  const middleCost = Math.abs(tempMiddle - 5);
  cost += middleCost;
  console.log(cost);

  const crossIndexes = [[1], [0, 2], [1]];
  const minCrossVal = Math.min(s[0][1], s[1][0], s[1][2], s[2][1]);

  let colsSum = [0, 0, 0];
  let rowsSum = [0, 0, 0];
  let used: number[] = [];
  let notUsed: number[] = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      colsSum[j] = s[i][j] + colsSum[j];
      rowsSum[i] = s[i][j] + rowsSum[i];
      used.push(s[i][j]);
    }
  }
  used = used.filter((num, index, array) => {});
  for (let i = 1; i < 9; i++) {
    if (!(i in used)) notUsed.push(i);
  }
  console.log(colsSum);
  console.log(rowsSum);
  console.log(used);
  console.log(notUsed);
};

const abc: [number, number, number][] = [
  [3, 3, 3],
  [4, 5, 6],
  [7, 8, 9],
];
fixMagicCube(abc);
