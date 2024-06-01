import type { RuleConfig } from '../rule-config';

/**
 * Forbid use of exported name as identifier of default export.
 *
 * @see [no-named-as-default](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-as-default.md)
 */
export type NoNamedAsDefaultRuleConfig = RuleConfig<[]>;

/**
 * Forbid use of exported name as identifier of default export.
 *
 * @see [no-named-as-default](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-as-default.md)
 */
export interface NoNamedAsDefaultRule {
  /**
   * Forbid use of exported name as identifier of default export.
   *
   * @see [no-named-as-default](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-as-default.md)
   */
  'import-x/no-named-as-default': NoNamedAsDefaultRuleConfig;
}
