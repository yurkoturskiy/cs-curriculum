/* Hash Table */

const hash = (string: string, max: number) => {
  // Basic/Simple Hash Function
  const hash: number = string
    .split("")
    .reduce((acc: number, curr: string): number => acc + curr.charCodeAt(0), 0);
  return hash % max;
};

console.log(hash("somestring", 4));

interface HashTable {
  storage: [any, any][][];
  storageLimit: number;
  add(key: any, value: any): void;
}

class HashTable implements HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 4;
  }

  add(key: any, value: any) {
    const bucketIndex = hash(key, this.storageLimit);
    if (this.storage[bucketIndex] === undefined) {
      // Bucket is free, so init it and place key/value pair there
      this.storage[bucketIndex] = [[key, value]];
    } else {
      // Bucket has data inside
      let inserted: boolean = false;
      this.storage[bucketIndex] = this.storage[bucketIndex].reduce(
        (acc: [any, any][], curr: [any, any], i): [any, any][] => {
          acc[i] = curr[0] === key ? [key, value] : curr;
          inserted = curr !== acc[i];
          return acc;
        },
        []
      );
      inserted === false && this.storage[bucketIndex].push([key, value]);
    }
  }
}

const hashTableStorage = new HashTable();
hashTableStorage.add("some", "value");
hashTableStorage.add("some", "diffvalue"); // Override
hashTableStorage.add("another", "somuchdifferentvalue");
console.log(hashTableStorage.storage);
