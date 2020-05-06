/* Hash Table */

const hash = (string: string, max: number) => {
  // Basic/Simple Hash Function
  const hash: number = string
    .split("")
    .reduce((acc: number, curr: string): number => acc + curr.charCodeAt(0), 0);
  return hash % max;
};

console.log(hash("somestring", 4));
