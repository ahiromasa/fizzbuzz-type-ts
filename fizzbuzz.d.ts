import { Eq, Nat, Pred, Succ, Zero } from "./nat.d.ts";

type IsFizz<N extends Nat> = N extends Succ<Succ<Succ<infer In>>>
  ? In extends Zero
    ? true
    : IsFizz<In>
  : false;

type IsBuzz<N extends Nat> = N extends Succ<Succ<Succ<Succ<Succ<infer In>>>>>
  ? In extends Zero
    ? true
    : IsBuzz<In>
  : false;

type IsFizzBuzz<N extends Nat> = IsFizz<N> extends true
  ? IsBuzz<N> extends true
    ? true
    : false
  : false;

type ToInt<N extends Nat, R extends boolean[] = []> = Eq<N, Zero> extends true
  ? R["length"]
  : ToInt<Pred<N>, [true, ...R]>;

export type FizzBuzz<N extends Nat> = IsFizzBuzz<N> extends true
  ? "FizzBuzz"
  : IsFizz<N> extends true
  ? "Fizz"
  : IsBuzz<N> extends true
  ? "Buzz"
  : `${ToInt<N>}`;
