import type { RuleConfig } from '../rule-config';

/**
 * Prefer consistent types when spreading a ternary in an array literal.
 *
 * @see [consistent-empty-array-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/consistent-empty-array-spread.md)
 */
export type ConsistentEmptyArraySpreadRuleConfig = RuleConfig<[]>;

/**
 * Prefer consistent types when spreading a ternary in an array literal.
 *
 * @see [consistent-empty-array-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/consistent-empty-array-spread.md)
 */
export interface ConsistentEmptyArraySpreadRule {
  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   *
   * @see [consistent-empty-array-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/consistent-empty-array-spread.md)
   */
  'unicorn/consistent-empty-array-spread': ConsistentEmptyArraySpreadRuleConfig;
}
