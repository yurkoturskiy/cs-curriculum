interface mySet {
  collection: any[];
  has<T>(element: T): boolean;
  values(): any[];
  add<T>(element: T): boolean;
  remove<T>(element: T): boolean;
  // Methods that are not included in standart JS Set
  union(otherSet: this): this;
  intersection(otherSet: this): this;
  difference(otherSet: this): this;
  subset(otherSet: this): boolean;
}

const mySet = function (this: mySet) {
  this.collection = [];

  this.has = (element): boolean => this.collection.indexOf(element) !== -1;

  this.values = () => this.collection;

  this.add = (element): boolean => {
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
  this.union = (otherSet) => {
    // Return the union of two sets
    const unionSet = new (mySet as any)();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  };

  this.intersection = (otherSet) => {
    // Return new set that contains values that both current and input sets have
    const intersectionSet = new (mySet as any)();
    this.values().forEach((value) => {
      otherSet.has(value) && intersectionSet.add(value);
    });
    return intersectionSet;
  };

  this.difference = (otherSet) => {
    // Return new set that is unique for current and input sets
    const differenceSet = new (mySet as any)();
    this.values().forEach((value) => {
      !otherSet.has(value) && differenceSet.add(value);
    });
    return differenceSet;
  };

  this.subset = (otherSet) =>
    // Test if input set contains all values of current set
    this.values().every((value: any) => otherSet.has(value));
};

{
  let setA = new (mySet as any)();
  let setB = new (mySet as any)();
  setA.add("a");
  setA.add("d");
  setA.add("z");
  setB.add("a");
  setB.add("b");
  setB.add("c");
  setB.add("d");
  console.log("setA subset of setB:", setA.subset(setB));
  console.log("setA & setB difference", setA.difference(setB));
  console.log("setA & setB union", setA.union(setB));
}

class MySet {
  collection: any[];

  constructor() {
    this.collection = [];
  }

  has<T>(element: T): boolean {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  add<T>(element: T): boolean {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  }

  remove<T>(element: T): boolean {
    if (this.has(element)) {
      const index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  }

  // Methods that are not included in standart JS Set
  union(otherSet: mySet): mySet {
    // Return the union of two sets
    const unionSet = new (mySet as any)();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }

  intersection(otherSet: mySet): mySet {
    // Return new set that contains values that both current and input sets have
    const intersectionSet = new (mySet as any)();
    this.values().forEach((value) => {
      otherSet.has(value) && intersectionSet.add(value);
    });
    return intersectionSet;
  }

  difference(otherSet: mySet): mySet {
    // Return new set that is unique for current and input sets
    const differenceSet = new (mySet as any)();
    this.values().forEach((value) => {
      !otherSet.has(value) && differenceSet.add(value);
    });
    return differenceSet;
  }

  subset(otherSet: mySet): boolean {
    // Test if input set contains all values of current set
    return this.values().every((value: any) => otherSet.has(value));
  }
}

{
  let setA = new MySet();
  let setB = new MySet();
  setA.add("a");
  setA.add("d");
  setA.add("z");
  setB.add("a");
  setB.add("b");
  setB.add("c");
  setB.add("d");
  console.log("setA subset of setB:", setA.subset(setB));
  console.log("setA & setB difference", setA.difference(setB));
  console.log("setA & setB union", setA.union(setB));
}
