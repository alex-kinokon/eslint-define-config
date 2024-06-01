import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface OnlyThrowErrorOption {
  allowThrowingAny?: boolean;
  allowThrowingUnknown?: boolean;
}

/**
 * Options.
 */
export type OnlyThrowErrorOptions = [OnlyThrowErrorOption?];

/**
 * Disallow throwing non-`Error` values as exceptions.
 *
 * @see [only-throw-error](https://typescript-eslint.io/rules/only-throw-error)
 */
export type OnlyThrowErrorRuleConfig = RuleConfig<OnlyThrowErrorOptions>;

/**
 * Disallow throwing non-`Error` values as exceptions.
 *
 * @see [only-throw-error](https://typescript-eslint.io/rules/only-throw-error)
 */
export interface OnlyThrowErrorRule {
  /**
   * Disallow throwing non-`Error` values as exceptions.
   *
   * @see [only-throw-error](https://typescript-eslint.io/rules/only-throw-error)
   */
  '@typescript-eslint/only-throw-error': OnlyThrowErrorRuleConfig;
}
