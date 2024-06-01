import type { RuleConfig } from '../rule-config';

/**
 * Require `require()` calls to be placed at top-level module scope.
 *
 * @see [global-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md)
 */
export type GlobalRequireRuleConfig = RuleConfig<[]>;

/**
 * Require `require()` calls to be placed at top-level module scope.
 *
 * @see [global-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md)
 */
export interface GlobalRequireRule {
  /**
   * Require `require()` calls to be placed at top-level module scope.
   *
   * @see [global-require](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/global-require.md)
   */
  'n/global-require': GlobalRequireRuleConfig;
}
