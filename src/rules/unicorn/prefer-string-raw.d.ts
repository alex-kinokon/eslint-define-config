import type { RuleConfig } from '../rule-config';

/**
 * Prefer using the `String.raw` tag to avoid escaping `\`.
 *
 * @see [prefer-string-raw](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-string-raw.md)
 */
export type PreferStringRawRuleConfig = RuleConfig<[]>;

/**
 * Prefer using the `String.raw` tag to avoid escaping `\`.
 *
 * @see [prefer-string-raw](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-string-raw.md)
 */
export interface PreferStringRawRule {
  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   *
   * @see [prefer-string-raw](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-string-raw.md)
   */
  'unicorn/prefer-string-raw': PreferStringRawRuleConfig;
}
