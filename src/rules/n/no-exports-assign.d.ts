import type { RuleConfig } from '../rule-config';

/**
 * Disallow the assignment to `exports`.
 *
 * @see [no-exports-assign](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md)
 */
export type NoExportsAssignRuleConfig = RuleConfig<[]>;

/**
 * Disallow the assignment to `exports`.
 *
 * @see [no-exports-assign](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md)
 */
export interface NoExportsAssignRule {
  /**
   * Disallow the assignment to `exports`.
   *
   * @see [no-exports-assign](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-exports-assign.md)
   */
  'n/no-exports-assign': NoExportsAssignRuleConfig;
}
