import type { RuleConfig } from '../rule-config';

/**
 * Disallow unnecessary template expressions.
 *
 * @deprecated
 *
 * @see [no-useless-template-literals](https://typescript-eslint.io/rules/no-useless-template-literals)
 */
export type NoUselessTemplateLiteralsRuleConfig = RuleConfig<[]>;

/**
 * Disallow unnecessary template expressions.
 *
 * @deprecated
 *
 * @see [no-useless-template-literals](https://typescript-eslint.io/rules/no-useless-template-literals)
 */
export interface NoUselessTemplateLiteralsRule {
  /**
   * Disallow unnecessary template expressions.
   *
   * @deprecated
   *
   * @see [no-useless-template-literals](https://typescript-eslint.io/rules/no-useless-template-literals)
   */
  '@typescript-eslint/no-useless-template-literals': NoUselessTemplateLiteralsRuleConfig;
}
