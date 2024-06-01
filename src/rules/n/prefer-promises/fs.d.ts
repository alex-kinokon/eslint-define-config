import type { RuleConfig } from '../../rule-config';

/**
 * Enforce `require("fs").promises`.
 *
 * @see [prefer-promises/fs](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md)
 */
export type PreferPromisesFsRuleConfig = RuleConfig<[]>;

/**
 * Enforce `require("fs").promises`.
 *
 * @see [prefer-promises/fs](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md)
 */
export interface PreferPromisesFsRule {
  /**
   * Enforce `require("fs").promises`.
   *
   * @see [prefer-promises/fs](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-promises/fs.md)
   */
  'n/prefer-promises/fs': PreferPromisesFsRuleConfig;
}
