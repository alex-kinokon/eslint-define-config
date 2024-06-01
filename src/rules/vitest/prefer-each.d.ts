import type { RuleConfig } from '../rule-config';

/**
 * Enforce using `each` rather than manual loops.
 *
 * @see [prefer-each](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md)
 */
export type PreferEachRuleConfig = RuleConfig<[]>;

/**
 * Enforce using `each` rather than manual loops.
 *
 * @see [prefer-each](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md)
 */
export interface PreferEachRule {
  /**
   * Enforce using `each` rather than manual loops.
   *
   * @see [prefer-each](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md)
   */
  'vitest/prefer-each': PreferEachRuleConfig;
}
