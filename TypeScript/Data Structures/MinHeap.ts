type heapType = any[];

interface MinHeap {
  heap: heapType;
  add(num: number): void;
  remove(): void;
  sort(): number[];
}

class MinHeap implements MinHeap {
  constructor() {
    this.heap = [null];
  }

  calcParentIndex(index: number): number {
    return Math.floor(index / 2);
  }

  add(num: number) {
    this.heap.push(num);
    if (this.heap.length > 2) {
      let index = this.heap.length - 1;
      let parentIndex = this.calcParentIndex(index);
      while (this.heap[index] < this.heap[parentIndex]) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
        parentIndex = this.calcParentIndex(index);
      }
    }
  }
}

let numbers = new MinHeap();
numbers.add(2);
numbers.add(5);
numbers.add(3);
numbers.add(4);
numbers.add(8);
numbers.add(9);
numbers.add(10);
numbers.add(1);
console.log(numbers);
