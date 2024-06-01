import type { RuleConfig } from '../rule-config';

/**
 * Forbid named exports.
 *
 * @see [no-named-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-export.md)
 */
export type NoNamedExportRuleConfig = RuleConfig<[]>;

/**
 * Forbid named exports.
 *
 * @see [no-named-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-export.md)
 */
export interface NoNamedExportRule {
  /**
   * Forbid named exports.
   *
   * @see [no-named-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-export.md)
   */
  'import-x/no-named-export': NoNamedExportRuleConfig;
}
