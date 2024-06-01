import type { RuleConfig } from '../rule-config';

/**
 * Require unary negation to take a number.
 *
 * @see [no-unsafe-unary-minus](https://typescript-eslint.io/rules/no-unsafe-unary-minus)
 */
export type NoUnsafeUnaryMinusRuleConfig = RuleConfig<[]>;

/**
 * Require unary negation to take a number.
 *
 * @see [no-unsafe-unary-minus](https://typescript-eslint.io/rules/no-unsafe-unary-minus)
 */
export interface NoUnsafeUnaryMinusRule {
  /**
   * Require unary negation to take a number.
   *
   * @see [no-unsafe-unary-minus](https://typescript-eslint.io/rules/no-unsafe-unary-minus)
   */
  '@typescript-eslint/no-unsafe-unary-minus': NoUnsafeUnaryMinusRuleConfig;
}
