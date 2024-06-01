import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoImportModuleExportsOption {
  exceptions?: any[];
}

/**
 * Options.
 */
export type NoImportModuleExportsOptions = [NoImportModuleExportsOption?];

/**
 * Forbid import statements with CommonJS module.exports.
 *
 * @see [no-import-module-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-import-module-exports.md)
 */
export type NoImportModuleExportsRuleConfig =
  RuleConfig<NoImportModuleExportsOptions>;

/**
 * Forbid import statements with CommonJS module.exports.
 *
 * @see [no-import-module-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-import-module-exports.md)
 */
export interface NoImportModuleExportsRule {
  /**
   * Forbid import statements with CommonJS module.exports.
   *
   * @see [no-import-module-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-import-module-exports.md)
   */
  'import-x/no-import-module-exports': NoImportModuleExportsRuleConfig;
}
