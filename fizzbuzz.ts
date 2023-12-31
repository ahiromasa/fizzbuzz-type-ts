import { FizzBuzz } from "./fizzbuzz.d.ts";
import { Succ, Zero } from "./nat.d.ts";

const expect = <T>(_: T) => void 0;

type _0 = Zero;
type _1 = Succ<_0>;
type _2 = Succ<_1>;
type _3 = Succ<_2>;
type _4 = Succ<_3>;
type _5 = Succ<_4>;
type _6 = Succ<_5>;
type _7 = Succ<_6>;
type _8 = Succ<_7>;
type _9 = Succ<_8>;
type _10 = Succ<_9>;
type _11 = Succ<_10>;
type _12 = Succ<_11>;
type _13 = Succ<_12>;
type _14 = Succ<_13>;
type _15 = Succ<_14>;

expect<FizzBuzz<_1>>("1");
expect<FizzBuzz<_2>>("2");
expect<FizzBuzz<_3>>("Fizz");
expect<FizzBuzz<_4>>("4");
expect<FizzBuzz<_5>>("Buzz");
expect<FizzBuzz<_6>>("Fizz");
expect<FizzBuzz<_7>>("7");
expect<FizzBuzz<_8>>("8");
expect<FizzBuzz<_9>>("Fizz");
expect<FizzBuzz<_10>>("Buzz");
expect<FizzBuzz<_11>>("11");
expect<FizzBuzz<_12>>("Fizz");
expect<FizzBuzz<_13>>("13");
expect<FizzBuzz<_14>>("14");
expect<FizzBuzz<_15>>("FizzBuzz");
