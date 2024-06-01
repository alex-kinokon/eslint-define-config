import type { RuleConfig } from '../rule-config';

/**
 * Enforce using toBe().
 *
 * @see [prefer-to-be](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md)
 */
export type PreferToBeRuleConfig = RuleConfig<[]>;

/**
 * Enforce using toBe().
 *
 * @see [prefer-to-be](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md)
 */
export interface PreferToBeRule {
  /**
   * Enforce using toBe().
   *
   * @see [prefer-to-be](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md)
   */
  'vitest/prefer-to-be': PreferToBeRuleConfig;
}
