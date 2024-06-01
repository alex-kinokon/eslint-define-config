import type { RuleConfig } from '../rule-config';

/**
 * Enforce typing arguments in `.catch()` callbacks as `unknown`.
 *
 * @see [use-unknown-in-catch-callback-variable](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable)
 */
export type UseUnknownInCatchCallbackVariableRuleConfig = RuleConfig<[]>;

/**
 * Enforce typing arguments in `.catch()` callbacks as `unknown`.
 *
 * @see [use-unknown-in-catch-callback-variable](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable)
 */
export interface UseUnknownInCatchCallbackVariableRule {
  /**
   * Enforce typing arguments in `.catch()` callbacks as `unknown`.
   *
   * @see [use-unknown-in-catch-callback-variable](https://typescript-eslint.io/rules/use-unknown-in-catch-callback-variable)
   */
  '@typescript-eslint/use-unknown-in-catch-callback-variable': UseUnknownInCatchCallbackVariableRuleConfig;
}
