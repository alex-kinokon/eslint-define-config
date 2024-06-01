import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface AlwaysReturnOption {
  ignoreLastCallback?: boolean;
}

/**
 * Options.
 */
export type AlwaysReturnOptions = [AlwaysReturnOption?];

/**
 * Require returning inside each `then()` to create readable and reusable Promise chains.
 *
 * @see [always-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md)
 */
export type AlwaysReturnRuleConfig = RuleConfig<AlwaysReturnOptions>;

/**
 * Require returning inside each `then()` to create readable and reusable Promise chains.
 *
 * @see [always-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md)
 */
export interface AlwaysReturnRule {
  /**
   * Require returning inside each `then()` to create readable and reusable Promise chains.
   *
   * @see [always-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md)
   */
  'promise/always-return': AlwaysReturnRuleConfig;
}
