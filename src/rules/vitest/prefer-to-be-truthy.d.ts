import type { RuleConfig } from '../rule-config';

/**
 * Enforce using `toBeTruthy`.
 *
 * @see [prefer-to-be-truthy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md)
 */
export type PreferToBeTruthyRuleConfig = RuleConfig<[]>;

/**
 * Enforce using `toBeTruthy`.
 *
 * @see [prefer-to-be-truthy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md)
 */
export interface PreferToBeTruthyRule {
  /**
   * Enforce using `toBeTruthy`.
   *
   * @see [prefer-to-be-truthy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md)
   */
  'vitest/prefer-to-be-truthy': PreferToBeTruthyRuleConfig;
}
