import type { RuleConfig } from '../rule-config';

/**
 * Enforce having hooks before any test cases.
 *
 * @see [prefer-hooks-on-top](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md)
 */
export type PreferHooksOnTopRuleConfig = RuleConfig<[]>;

/**
 * Enforce having hooks before any test cases.
 *
 * @see [prefer-hooks-on-top](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md)
 */
export interface PreferHooksOnTopRule {
  /**
   * Enforce having hooks before any test cases.
   *
   * @see [prefer-hooks-on-top](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md)
   */
  'vitest/prefer-hooks-on-top': PreferHooksOnTopRuleConfig;
}
