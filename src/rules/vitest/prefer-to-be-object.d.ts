import type { RuleConfig } from '../rule-config';

/**
 * Enforce using toBeObject().
 *
 * @see [prefer-to-be-object](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md)
 */
export type PreferToBeObjectRuleConfig = RuleConfig<[]>;

/**
 * Enforce using toBeObject().
 *
 * @see [prefer-to-be-object](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md)
 */
export interface PreferToBeObjectRule {
  /**
   * Enforce using toBeObject().
   *
   * @see [prefer-to-be-object](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md)
   */
  'vitest/prefer-to-be-object': PreferToBeObjectRuleConfig;
}
