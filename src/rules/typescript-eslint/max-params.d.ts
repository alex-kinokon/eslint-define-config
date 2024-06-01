import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MaxParamsOption {
  maximum?: number;
  max?: number;
  countVoidThis?: boolean;
}

/**
 * Options.
 */
export type MaxParamsOptions = [MaxParamsOption?];

/**
 * Enforce a maximum number of parameters in function definitions.
 *
 * @see [max-params](https://typescript-eslint.io/rules/max-params)
 */
export type MaxParamsRuleConfig = RuleConfig<MaxParamsOptions>;

/**
 * Enforce a maximum number of parameters in function definitions.
 *
 * @see [max-params](https://typescript-eslint.io/rules/max-params)
 */
export interface MaxParamsRule {
  /**
   * Enforce a maximum number of parameters in function definitions.
   *
   * @see [max-params](https://typescript-eslint.io/rules/max-params)
   */
  '@typescript-eslint/max-params': MaxParamsRuleConfig;
}
