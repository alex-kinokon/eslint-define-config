import type { RuleConfig } from '../rule-config';

/**
 * Enforce using toBeFalsy().
 *
 * @see [prefer-to-be-falsy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md)
 */
export type PreferToBeFalsyRuleConfig = RuleConfig<[]>;

/**
 * Enforce using toBeFalsy().
 *
 * @see [prefer-to-be-falsy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md)
 */
export interface PreferToBeFalsyRule {
  /**
   * Enforce using toBeFalsy().
   *
   * @see [prefer-to-be-falsy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md)
   */
  'vitest/prefer-to-be-falsy': PreferToBeFalsyRuleConfig;
}
