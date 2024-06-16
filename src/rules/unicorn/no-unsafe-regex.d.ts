import type { RuleConfig } from '../rule-config';

/**
 *
 * @deprecated
 *
 * @see [no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#no-unsafe-regex)
 */
export type NoUnsafeRegexRuleConfig = RuleConfig<[]>;

/**
 *
 * @deprecated
 *
 * @see [no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#no-unsafe-regex)
 */
export interface NoUnsafeRegexRule {
  /**
   *
   * @deprecated
   *
   * @see [no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#no-unsafe-regex)
   */
  'unicorn/no-unsafe-regex': NoUnsafeRegexRuleConfig;
}
