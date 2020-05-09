type heapType = null[] | number;

interface MinHeap {
  heap: heapType;
  add(num: number): void;
  remove(): void;
  sort(): number[];
}
