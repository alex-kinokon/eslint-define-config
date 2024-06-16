import type { RuleConfig } from '../rule-config';

/**
 * Disallow negated expression in equality check.
 *
 * @see [no-negation-in-equality-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-negation-in-equality-check.md)
 */
export type NoNegationInEqualityCheckRuleConfig = RuleConfig<[]>;

/**
 * Disallow negated expression in equality check.
 *
 * @see [no-negation-in-equality-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-negation-in-equality-check.md)
 */
export interface NoNegationInEqualityCheckRule {
  /**
   * Disallow negated expression in equality check.
   *
   * @see [no-negation-in-equality-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-negation-in-equality-check.md)
   */
  'unicorn/no-negation-in-equality-check': NoNegationInEqualityCheckRuleConfig;
}
