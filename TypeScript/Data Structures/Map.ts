interface MyMap {
  collection: object;
  count: number;
  size(): number;
  set<T, N>(key: T, value: N): void;
  has<T>(key: T): boolean;
  get<T>(key: T): any;
  delete<T>(key: T): void;
  values(): any[];
  keys(): any[];
  clear(): void;
}
