import { Map } from "immutable";

const map1 = Map({ one: 1, two: 2, three: 3 });
const map2 = map1.set("one", 20);
console.log(map1, map2);
