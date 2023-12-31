export type Zero = { _tag: "Zero" };

export type Nat = Zero | { _tag: "Succ"; prev: Nat };

export type Succ<N extends Nat> = { _tag: "Succ"; prev: N };

export type Pred<N extends Nat> = N extends {
  _tag: "Succ";
  prev: infer Prev;
}
  ? Prev
  : never;

export type Eq<N1 extends Nat, N2 extends Nat> = N1 extends N2 ? true : false;

export type Add<N1 extends Nat, N2 extends Nat> = Eq<N2, Zero> extends true
  ? N1
  : Add<Succ<N1>, Pred<N2>>;

export type Mul<N1 extends Nat, N2 extends Nat> = Eq<N2, Zero> extends true
  ? Zero
  : Eq<N1, Zero> extends true
  ? Zero
  : Add<Add<N1, N1>, Mul<N1, Pred<N2>>>;
