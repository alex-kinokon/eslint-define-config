import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary semicolons.
 *
 * @deprecated
 *
 * @see [no-extra-semi](https://eslint.org/docs/latest/rules/no-extra-semi)
 */
export type NoExtraSemiRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary semicolons.
 *
 * @deprecated
 *
 * @see [no-extra-semi](https://eslint.org/docs/latest/rules/no-extra-semi)
 */
export interface NoExtraSemiRule {
  /**
   * Disallow unnecessary semicolons.
   *
   * @deprecated
   *
   * @see [no-extra-semi](https://eslint.org/docs/latest/rules/no-extra-semi)
   */
  'no-extra-semi': NoExtraSemiRuleConfig;
}
