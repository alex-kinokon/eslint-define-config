import type { RuleConfig } from '../rule-config';

/**
 * Forbid default exports.
 *
 * @see [no-default-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-default-export.md)
 */
export type NoDefaultExportRuleConfig = RuleConfig<[]>;

/**
 * Forbid default exports.
 *
 * @see [no-default-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-default-export.md)
 */
export interface NoDefaultExportRule {
  /**
   * Forbid default exports.
   *
   * @see [no-default-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-default-export.md)
   */
  'import-x/no-default-export': NoDefaultExportRuleConfig;
}
