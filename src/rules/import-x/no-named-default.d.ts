import type { RuleConfig } from '../rule-config';

/**
 * Forbid named default exports.
 *
 * @see [no-named-default](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-default.md)
 */
export type NoNamedDefaultRuleConfig = RuleConfig<[]>;

/**
 * Forbid named default exports.
 *
 * @see [no-named-default](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-default.md)
 */
export interface NoNamedDefaultRule {
  /**
   * Forbid named default exports.
   *
   * @see [no-named-default](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-default.md)
   */
  'import-x/no-named-default': NoNamedDefaultRuleConfig;
}
