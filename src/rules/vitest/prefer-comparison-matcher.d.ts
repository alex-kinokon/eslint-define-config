import type { RuleConfig } from '../rule-config';

/**
 * Enforce using the built-in comparison matchers.
 *
 * @see [prefer-comparison-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md)
 */
export type PreferComparisonMatcherRuleConfig = RuleConfig<[]>;

/**
 * Enforce using the built-in comparison matchers.
 *
 * @see [prefer-comparison-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md)
 */
export interface PreferComparisonMatcherRule {
  /**
   * Enforce using the built-in comparison matchers.
   *
   * @see [prefer-comparison-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md)
   */
  'vitest/prefer-comparison-matcher': PreferComparisonMatcherRuleConfig;
}
