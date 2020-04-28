import { traverseWithIndex } from "fp-ts/lib/ReadonlyRecord";

interface mySet {
  collection: any[];
  has(element: any): boolean;
  values(): any[];
  add(element: any): boolean;
  remove(element: any): boolean;
  // Methods that are not included in standart JS Set
  union(otherSet: this): this;
  intersection(otherSet: this): this;
  difference(otherSet: this): this;
  subset(otherSet: this): boolean;
}

const mySet = function (this: mySet) {
  this.collection = [];
  this.has = (element: any): boolean => this.collection.indexOf(element) !== -1;
  this.values = () => this.collection;
  this.add = (element: any): boolean => {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  };
  this.remove = (element) => {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // Methods that are not included in standart JS Set
  this.union = (otherSet: mySet) => {
    // Return the union of two sets
    const unionSet = new (mySet as any)();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  };
  this.intersection = (otherSet: mySet): mySet => {
    // Return new set that contains values that both current and input sets have
    const intersectionSet = new (mySet as any)();
    this.values().forEach((value) => {
      otherSet.has(value) && intersectionSet.add(value);
    });
    return intersectionSet;
  };
  this.difference = (otherSet: mySet): mySet => {
    // Return new set that is unique for current and input sets
    const differenceSet = new (mySet as any)();
    this.values().forEach((value) => {
      !otherSet.has(value) && differenceSet.add(value);
    });
    return differenceSet;
  };
  this.subset = (otherSet: mySet): boolean =>
    // Test if input set contains all values of current set
    this.values().every((value: any) => otherSet.has(value));
};

const books = new (mySet as any)();
books.add("Einstein");
console.log(books);
