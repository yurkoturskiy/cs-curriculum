/**
 * MyMap is act mostly like standart JS object.
 * The difference between Map and Ojects is that
 * with Map you can assign any type as a key.
 * You key could be a function, string, number,
 * boolean, and even NaN.
 */

interface MyMapCollection {
  [key: string]: string;
  value?: any;
}

interface MyMap {
  collection: MyMapCollection;
  count: number;
  size(): number;
  set(key: string, value: any): void;
  has(key: string): boolean;
  get(key: string): any;
  delete(key: string): void;
  values(): string[];
  keys(): string[];
  clear(): void;
}

class MyMap implements MyMap {
  constructor() {
    this.collection = {};
    this.count = 0;
  }

  size() {
    return this.count;
  }

  set(key: string, value: any) {
    if (!this.has(key)) {
      this.collection = { ...this.collection, [key]: value };
      this.count++;
    }
  }

  has(key: string): boolean {
    return key in this.collection;
  }

  get(key: string): any {
    return this.collection[key];
  }

  delete(key: string) {
    if (this.has(key)) {
      delete this.collection[key];
      this.count--;
    }
  }

  values() {
    return Object.values(this.collection);
  }

  keys() {
    return Object.keys(this.collection);
  }

  clear() {
    this.collection = {};
    this.count = 0;
  }
}

const a = new MyMap();
console.log(a.set("some", "value"));
console.log(a.set("some", "value"));
console.log(a.set("awesome", "devalue"));
console.log(a.size());
console.log(a.values());
console.log(a.keys());
a.delete("awesome");
a.delete("waefawef");
console.log(a.has("some"));
console.log(a.has("awesome"));
console.log(a.size());
