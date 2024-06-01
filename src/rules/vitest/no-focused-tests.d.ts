import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoFocusedTestsOption {
  fixable?: boolean;
}

/**
 * Options.
 */
export type NoFocusedTestsOptions = [NoFocusedTestsOption?];

/**
 * Disallow focused tests.
 *
 * @see [no-focused-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md)
 */
export type NoFocusedTestsRuleConfig = RuleConfig<NoFocusedTestsOptions>;

/**
 * Disallow focused tests.
 *
 * @see [no-focused-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md)
 */
export interface NoFocusedTestsRule {
  /**
   * Disallow focused tests.
   *
   * @see [no-focused-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md)
   */
  'vitest/no-focused-tests': NoFocusedTestsRuleConfig;
}
