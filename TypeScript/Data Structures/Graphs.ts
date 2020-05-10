/* Breadth-first search */

interface some {
  [key: string]: any;
}

function bfs(graph: number[][], root: number) {
  let nodesLen: some = {};
  for (let i: number = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;
  }
  nodesLen[root] = 0;
  let queue = [root];
  let current: number;

  while (queue.length != 0) {
    current = queue.shift() as number;

    let curConnected = graph[current];
    let neighborIndex = [];
    let index = curConnected.indexOf(1);
    while (index != -1) {
      neighborIndex.push(index);
      index = curConnected.indexOf(1, index + 1);
    }

    for (let j = 0; j < neighborIndex.length; j++) {
      if (nodesLen[neighborIndex[j]] == Infinity) {
        nodesLen[neighborIndex[j]] = nodesLen[current] + 1;
        queue.push(neighborIndex[j]);
      }
    }
  }
  return nodesLen;
}

const GraphMatrix = [
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0],
];

console.log(bfs(GraphMatrix, 1));
