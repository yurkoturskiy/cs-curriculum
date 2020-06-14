import { IO, io } from "fp-ts/lib/IO";
import * as O from "fp-ts/lib/Option";

const getElementById = (id: string): IO<O.Option<HTMLElement>> => () =>
  O.fromNullable(document.getElementById(id));

const log = (s: unknown): IO<void> => () => console.log(s);

const program: IO<any> = io.chain(getElementById("some"), log);
program();
