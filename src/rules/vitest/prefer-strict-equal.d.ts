import type { RuleConfig } from '../rule-config';

/**
 * Enforce strict equal over equal.
 *
 * @see [prefer-strict-equal](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md)
 */
export type PreferStrictEqualRuleConfig = RuleConfig<[]>;

/**
 * Enforce strict equal over equal.
 *
 * @see [prefer-strict-equal](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md)
 */
export interface PreferStrictEqualRule {
  /**
   * Enforce strict equal over equal.
   *
   * @see [prefer-strict-equal](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md)
   */
  'vitest/prefer-strict-equal': PreferStrictEqualRuleConfig;
}
