type heapType = any[];

interface MinHeap {
  heap: heapType;
  add(num: number): void;
  remove(): number | null;
  sort(): number[];
}

class MinHeap implements MinHeap {
  constructor() {
    this.heap = [null];
  }

  calcParentIndex(index: number): number {
    return Math.floor(index / 2);
  }

  calcLeftChildIndex(index: number): number {
    return Math.floor(index * 2);
  }

  calcRightChildIndex(index: number): number {
    return Math.floor(index * 2 + 1);
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

  remove(): number | null {
    if (this.heap.length < 2) return null;
    let smallest = this.heap[1];
    this.heap[1] = this.heap[this.heap.length - 1]; // Del root val and place last instead
    this.heap.pop(); // Remove last
    // Validate root number and move down if needed
    let index = 1;
    let leftChildIndex = this.calcLeftChildIndex(index);
    let rightChildIndex = this.calcRightChildIndex(index);
    let leftChildValue = this.heap[leftChildIndex];
    let rightChildValue = this.heap[rightChildIndex];
    while (
      this.heap[index] > leftChildValue ||
      this.heap[index] > rightChildValue
    ) {
      const minValue =
        Math.min(leftChildValue, rightChildValue) ||
        leftChildValue ||
        rightChildValue;
      const minValueIndex =
        minValue === leftChildValue ? leftChildIndex : rightChildIndex;
      // Replace higher/bigger value with smaller value below
      [this.heap[index], this.heap[minValueIndex]] = [
        this.heap[minValueIndex],
        this.heap[index],
      ];
      index = minValueIndex;
      leftChildIndex = this.calcLeftChildIndex(index);
      leftChildValue = this.heap[leftChildIndex];
      rightChildIndex = this.calcRightChildIndex(index);
      rightChildValue = this.heap[rightChildIndex];
    }
    return smallest;
  }

  sort(): number[] {
    let result = new Array();
    const heapReplica = this.heap.concat();
    while (this.heap.length > 1) {
      result.push(this.remove());
    }
    this.heap = heapReplica;
    return result;
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
numbers.remove();
console.log(numbers);
numbers.remove();
console.log(numbers);
console.log(numbers.sort());
console.log(numbers);
