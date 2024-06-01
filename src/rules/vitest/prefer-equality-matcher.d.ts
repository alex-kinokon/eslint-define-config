import type { RuleConfig } from '../rule-config';

/**
 * Enforce using the built-in quality matchers.
 *
 * @see [prefer-equality-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md)
 */
export type PreferEqualityMatcherRuleConfig = RuleConfig<[]>;

/**
 * Enforce using the built-in quality matchers.
 *
 * @see [prefer-equality-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md)
 */
export interface PreferEqualityMatcherRule {
  /**
   * Enforce using the built-in quality matchers.
   *
   * @see [prefer-equality-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md)
   */
  'vitest/prefer-equality-matcher': PreferEqualityMatcherRuleConfig;
}
