import type { RuleConfig } from '../rule-config';

/**
 * Disallow creating new promises with paths that resolve multiple times.
 *
 * @see [no-multiple-resolved](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md)
 */
export type NoMultipleResolvedRuleConfig = RuleConfig<[]>;

/**
 * Disallow creating new promises with paths that resolve multiple times.
 *
 * @see [no-multiple-resolved](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md)
 */
export interface NoMultipleResolvedRule {
  /**
   * Disallow creating new promises with paths that resolve multiple times.
   *
   * @see [no-multiple-resolved](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-multiple-resolved.md)
   */
  'promise/no-multiple-resolved': NoMultipleResolvedRuleConfig;
}
