import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary template expressions.
 *
 * @see [no-unnecessary-template-expression](https://typescript-eslint.io/rules/no-unnecessary-template-expression)
 */
export type NoUnnecessaryTemplateExpressionRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary template expressions.
 *
 * @see [no-unnecessary-template-expression](https://typescript-eslint.io/rules/no-unnecessary-template-expression)
 */
export interface NoUnnecessaryTemplateExpressionRule {
  /**
   * Disallow unnecessary template expressions.
   *
   * @see [no-unnecessary-template-expression](https://typescript-eslint.io/rules/no-unnecessary-template-expression)
   */
  '@typescript-eslint/no-unnecessary-template-expression': NoUnnecessaryTemplateExpressionRuleConfig;
}
