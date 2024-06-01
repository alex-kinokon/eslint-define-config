import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface DynamicImportChunknameOption {
  importFunctions?: string[];
  allowEmpty?: boolean;
  webpackChunknameFormat?: string;
  [k: string]: any;
}

/**
 * Options.
 */
export type DynamicImportChunknameOptions = [DynamicImportChunknameOption?];

/**
 * Enforce a leading comment with the webpackChunkName for dynamic imports.
 *
 * @see [dynamic-import-chunkname](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/dynamic-import-chunkname.md)
 */
export type DynamicImportChunknameRuleConfig =
  RuleConfig<DynamicImportChunknameOptions>;

/**
 * Enforce a leading comment with the webpackChunkName for dynamic imports.
 *
 * @see [dynamic-import-chunkname](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/dynamic-import-chunkname.md)
 */
export interface DynamicImportChunknameRule {
  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   *
   * @see [dynamic-import-chunkname](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/dynamic-import-chunkname.md)
   */
  'import-x/dynamic-import-chunkname': DynamicImportChunknameRuleConfig;
}
