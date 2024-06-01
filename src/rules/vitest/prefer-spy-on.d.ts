import type { RuleConfig } from '../rule-config';

/**
 * Enforce using `vi.spyOn`.
 *
 * @see [prefer-spy-on](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md)
 */
export type PreferSpyOnRuleConfig = RuleConfig<[]>;

/**
 * Enforce using `vi.spyOn`.
 *
 * @see [prefer-spy-on](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md)
 */
export interface PreferSpyOnRule {
  /**
   * Enforce using `vi.spyOn`.
   *
   * @see [prefer-spy-on](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md)
   */
  'vitest/prefer-spy-on': PreferSpyOnRuleConfig;
}
