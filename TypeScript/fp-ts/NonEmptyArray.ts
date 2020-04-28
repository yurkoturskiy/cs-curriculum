import { NonEmptyArray } from "fp-ts/lib/NonEmptyArray";

const a: NonEmptyArray<number> = [1, 2, 3];
console.log(a);

// const b: NonEmptyArray<number> = []; // Error

// NonEmptyArray is not matching with number[] type :(
