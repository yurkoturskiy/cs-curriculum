/* Hash Table */

import { stringifyJSON } from "fp-ts/lib/Either";

const hash = (string: string, max: number) => {
  // Basic/Simple Hash Function
  const hash: number = string
    .split("")
    .reduce((acc: number, curr: string): number => acc + curr.charCodeAt(0), 0);
  return hash % max;
};

console.log(hash("somestring", 4));

interface HashTable {
  storage: [string, any][][];
  storageLimit: number;
  add(key: string, value: any): void;
  remove(key: string): void;
  lookup(key: string): [string, any];
}

class HashTable implements HashTable {
  constructor() {
    this.storage = [];
    this.storageLimit = 4;
  }

  add(key: string, value: any) {
    const bucketIndex = hash(key, this.storageLimit);
    if (this.storage[bucketIndex] === undefined) {
      // Bucket is free, so init it and place key/value pair there
      this.storage[bucketIndex] = [[key, value]];
    } else {
      // Bucket has data inside
      let inserted: boolean = false;
      this.storage[bucketIndex] = this.storage[bucketIndex].reduce(
        (acc: [string, any][], curr: [string, any], i): [string, any][] => {
          acc[i] = curr[0] === key ? [key, value] : curr;
          inserted = curr !== acc[i];
          return acc;
        },
        []
      );
      inserted === false && this.storage[bucketIndex].push([key, value]);
    }
  }

  remove(key: string) {
    const bucketIndex = hash(key, this.storageLimit);
    if (this.storage[bucketIndex]) {
      this.storage[bucketIndex] = this.storage[bucketIndex].filter(
        (item) => item[0] !== key
      );
      if (this.storage[bucketIndex].length === 0)
        delete this.storage[bucketIndex];
    }
  }

  lookup(key: string) {
    const bucketIndex = hash(key, this.storageLimit);
    return (
      this.storage[bucketIndex] &&
      this.storage[bucketIndex].find((pair) => pair[0] === key)
    );
  }
}

const hashTableStorage = new HashTable();
hashTableStorage.add("some", "value");
hashTableStorage.add("some", "diffvalue"); // Override
hashTableStorage.add("another", "somuchdifferentvalue");
console.log(hashTableStorage.storage);
hashTableStorage.remove("another");
hashTableStorage.remove("another");
console.log(hashTableStorage.storage);
console.log(hashTableStorage.lookup("some"));
console.log(hashTableStorage.lookup("another"));
