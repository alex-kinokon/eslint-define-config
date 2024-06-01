import type { RuleConfig } from '../rule-config';

/**
 * Disallow nested `then()` or `catch()` statements.
 *
 * @see [no-nesting](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md)
 */
export type NoNestingRuleConfig = RuleConfig<[]>;

/**
 * Disallow nested `then()` or `catch()` statements.
 *
 * @see [no-nesting](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md)
 */
export interface NoNestingRule {
  /**
   * Disallow nested `then()` or `catch()` statements.
   *
   * @see [no-nesting](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md)
   */
  'promise/no-nesting': NoNestingRuleConfig;
}
