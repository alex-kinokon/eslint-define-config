import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferStructuredCloneOption {
  functions?: any[];
}

/**
 * Options.
 */
export type PreferStructuredCloneOptions = [PreferStructuredCloneOption?];

/**
 * Prefer using `structuredClone` to create a deep clone.
 *
 * @see [prefer-structured-clone](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-structured-clone.md)
 */
export type PreferStructuredCloneRuleConfig =
  RuleConfig<PreferStructuredCloneOptions>;

/**
 * Prefer using `structuredClone` to create a deep clone.
 *
 * @see [prefer-structured-clone](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-structured-clone.md)
 */
export interface PreferStructuredCloneRule {
  /**
   * Prefer using `structuredClone` to create a deep clone.
   *
   * @see [prefer-structured-clone](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-structured-clone.md)
   */
  'unicorn/prefer-structured-clone': PreferStructuredCloneRuleConfig;
}
