interface Array<T> {
  filter(
    predicate: BooleanConstructor,
  ): Array<Exclude<T, null | undefined | false | '' | 0>>;
}
