import type { RuleConfig } from '../rule-config';

/**
 * Enforce using `toBeCalledWith()` or `toHaveBeenCalledWith()`.
 *
 * @see [prefer-called-with](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md)
 */
export type PreferCalledWithRuleConfig = RuleConfig<[]>;

/**
 * Enforce using `toBeCalledWith()` or `toHaveBeenCalledWith()`.
 *
 * @see [prefer-called-with](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md)
 */
export interface PreferCalledWithRule {
  /**
   * Enforce using `toBeCalledWith()` or `toHaveBeenCalledWith()`.
   *
   * @see [prefer-called-with](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md)
   */
  'vitest/prefer-called-with': PreferCalledWithRuleConfig;
}
