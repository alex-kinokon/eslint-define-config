import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferDefaultExportOption {
  target?: 'single' | 'any';
}

/**
 * Options.
 */
export type PreferDefaultExportOptions = [PreferDefaultExportOption?];

/**
 * Prefer a default export if module exports a single name or multiple names.
 *
 * @see [prefer-default-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/prefer-default-export.md)
 */
export type PreferDefaultExportRuleConfig =
  RuleConfig<PreferDefaultExportOptions>;

/**
 * Prefer a default export if module exports a single name or multiple names.
 *
 * @see [prefer-default-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/prefer-default-export.md)
 */
export interface PreferDefaultExportRule {
  /**
   * Prefer a default export if module exports a single name or multiple names.
   *
   * @see [prefer-default-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/prefer-default-export.md)
   */
  'import-x/prefer-default-export': PreferDefaultExportRuleConfig;
}
