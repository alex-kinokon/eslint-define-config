import type { RuleConfig } from '../rule-config';

/**
 * Disallow using the `delete` operator on array values.
 *
 * @see [no-array-delete](https://typescript-eslint.io/rules/no-array-delete)
 */
export type NoArrayDeleteRuleConfig = RuleConfig<[]>;

/**
 * Disallow using the `delete` operator on array values.
 *
 * @see [no-array-delete](https://typescript-eslint.io/rules/no-array-delete)
 */
export interface NoArrayDeleteRule {
  /**
   * Disallow using the `delete` operator on array values.
   *
   * @see [no-array-delete](https://typescript-eslint.io/rules/no-array-delete)
   */
  '@typescript-eslint/no-array-delete': NoArrayDeleteRuleConfig;
}
