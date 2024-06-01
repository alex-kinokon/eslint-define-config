import type { RuleConfig } from '../rule-config';

/**
 * Enforce mock resolved/rejected shorthands for promises.
 *
 * @see [prefer-mock-promise-shorthand](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md)
 */
export type PreferMockPromiseShorthandRuleConfig = RuleConfig<[]>;

/**
 * Enforce mock resolved/rejected shorthands for promises.
 *
 * @see [prefer-mock-promise-shorthand](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md)
 */
export interface PreferMockPromiseShorthandRule {
  /**
   * Enforce mock resolved/rejected shorthands for promises.
   *
   * @see [prefer-mock-promise-shorthand](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md)
   */
  'vitest/prefer-mock-promise-shorthand': PreferMockPromiseShorthandRuleConfig;
}
