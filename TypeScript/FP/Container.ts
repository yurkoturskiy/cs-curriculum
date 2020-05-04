class Container<T> {
  $value: T;

  constructor(x: T) {
    this.$value = x;
  }

  static of<T>(x: T) {
    return new Container(x);
  }

  // (a -> b) -> Container a -> Container b
  map(f: Function) {
    return Container.of(f(this.$value));
  }
}

console.log(Container.of(Container.of({ name: "Yoda" })));
console.log(Container.of("ololo").map((val: string) => val.toUpperCase()));
