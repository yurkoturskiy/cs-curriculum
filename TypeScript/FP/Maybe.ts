/**
 * example from of Maybe functor from:
 * https://mostly-adequate.gitbooks.io/mostly-adequate-guide/ch08.html#schr%C3%B6dingers-maybe
 */

import { map, match, curry, empty, prop, pipe, compose } from "ramda";

interface Maybe<T> {
  $value: T;
}

class Maybe<T> implements Maybe<T> {
  constructor(x: T) {
    this.$value = x;
  }

  static of<T>(x: T) {
    return new Maybe(x);
  }

  get isNothing() {
    return this.$value === null || this.$value === undefined;
  }

  inspect(): string {
    return this.isNothing ? "Nothing" : `Just(${this.$value})`;
  }

  map(fn: Function): Maybe<T> {
    return this.isNothing ? this : Maybe.of(fn(this.$value));
  }
}

console.log(Maybe.of("Ivan Franko").map(match(/a/gi)).inspect()); // Just(true)
console.log(Maybe.of(null).map(match(/a/gi)).inspect()); // Nothing
const some = Maybe.of("qweqwe");
console.log(some);
const result = map((val: string) => val.toUpperCase(), some);

console.log(prop("$value", Maybe.of("something")));
console.log(result);
console.log(result instanceof Maybe);
console.log(map((val: string) => val.toUpperCase(), some));

// Use case from the book

// safeHead :: [a] -> Maybe(a)
const safeHead = (xs: any[]): any => Maybe.of(xs[0]);

// streetName :: Object -> Maybe String
const streetName = compose(map(prop("street")), safeHead, prop("addresses"));

console.log(streetName({ addresses: [] }));
// Nothing

console.log(streetName({ addresses: [{ street: "Shady Ln.", number: 4201 }] }));
// Just('Shady Ln.')

/* Balance example from the book */

interface Balance {
  balance: number;
}

// withdraw :: Number -> Account -> Maybe(Account)
const withdraw = curry(
  (amount: number, { balance }: Balance): Maybe<object | null> =>
    Maybe.of(balance >= amount ? { balance: balance - amount } : null)
);

// This function is hypothetical, not implemented here... nor anywhere else.
// updateLedger :: Account -> Account
const updateLedger = (account: Balance): Balance => account;

// remainingBalance :: Account -> String
const remainingBalance = ({ balance }: Balance): string =>
  `Your balance is $${balance}`;

// finishTransaction :: Account -> String
const finishTransaction = compose(remainingBalance, updateLedger);

// getTwenty :: Account -> Maybe(String)
const getTwentyBucks = compose(map(finishTransaction), withdraw(20));

console.log(getTwentyBucks({ balance: 200.0 }));
// Just('Your balance is $180')

console.log(getTwentyBucks({ balance: 10.0 }));
// Nothing

// maybe :: b -> (a -> b) -> Maybe a -> b
const maybe = curry((v, f, m) => {
  if (m.isNothing) {
    return v;
  }

  return f(m.$value);
});

// getTwenty :: Account -> String
const getTwenty = compose(
  maybe("You're broke!", finishTransaction),
  withdraw(20)
);

console.log(getTwenty({ balance: 200.0 }));
// 'Your balance is $180.00'

console.log(getTwenty({ balance: 10.0 }));
// 'You\'re broke!'
