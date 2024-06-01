import type { RuleConfig } from '../rule-config';

/**
 * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result.
 *
 * @see [prefer-find](https://typescript-eslint.io/rules/prefer-find)
 */
export type PreferFindRuleConfig = RuleConfig<[]>;

/**
 * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result.
 *
 * @see [prefer-find](https://typescript-eslint.io/rules/prefer-find)
 */
export interface PreferFindRule {
  /**
   * Enforce the use of Array.prototype.find() over Array.prototype.filter() followed by [0] when looking for a single result.
   *
   * @see [prefer-find](https://typescript-eslint.io/rules/prefer-find)
   */
  '@typescript-eslint/prefer-find': PreferFindRuleConfig;
}
