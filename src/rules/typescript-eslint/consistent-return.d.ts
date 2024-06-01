import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ConsistentReturnOption {
  treatUndefinedAsUnspecified?: boolean;
}

/**
 * Options.
 */
export type ConsistentReturnOptions = [ConsistentReturnOption?];

/**
 * Require `return` statements to either always or never specify values.
 *
 * @see [consistent-return](https://typescript-eslint.io/rules/consistent-return)
 */
export type ConsistentReturnRuleConfig = RuleConfig<ConsistentReturnOptions>;

/**
 * Require `return` statements to either always or never specify values.
 *
 * @see [consistent-return](https://typescript-eslint.io/rules/consistent-return)
 */
export interface ConsistentReturnRule {
  /**
   * Require `return` statements to either always or never specify values.
   *
   * @see [consistent-return](https://typescript-eslint.io/rules/consistent-return)
   */
  '@typescript-eslint/consistent-return': ConsistentReturnRuleConfig;
}
