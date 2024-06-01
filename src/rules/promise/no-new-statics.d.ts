import type { RuleConfig } from '../rule-config';

/**
 * Disallow calling `new` on a Promise static method.
 *
 * @see [no-new-statics](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md)
 */
export type NoNewStaticsRuleConfig = RuleConfig<[]>;

/**
 * Disallow calling `new` on a Promise static method.
 *
 * @see [no-new-statics](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md)
 */
export interface NoNewStaticsRule {
  /**
   * Disallow calling `new` on a Promise static method.
   *
   * @see [no-new-statics](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-new-statics.md)
   */
  'promise/no-new-statics': NoNewStaticsRuleConfig;
}
