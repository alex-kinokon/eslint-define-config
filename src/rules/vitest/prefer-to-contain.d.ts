import type { RuleConfig } from '../rule-config';

/**
 * Enforce using toContain().
 *
 * @see [prefer-to-contain](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md)
 */
export type PreferToContainRuleConfig = RuleConfig<[]>;

/**
 * Enforce using toContain().
 *
 * @see [prefer-to-contain](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md)
 */
export interface PreferToContainRule {
  /**
   * Enforce using toContain().
   *
   * @see [prefer-to-contain](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md)
   */
  'vitest/prefer-to-contain': PreferToContainRuleConfig;
}
