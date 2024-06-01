import type { RuleConfig } from '../rule-config';

/**
 * Forbid any invalid exports, i.e. re-export of the same name.
 *
 * @see [export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/export.md)
 */
export type ExportRuleConfig = RuleConfig<[]>;

/**
 * Forbid any invalid exports, i.e. re-export of the same name.
 *
 * @see [export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/export.md)
 */
export interface ExportRule {
  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   *
   * @see [export](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/export.md)
   */
  'import-x/export': ExportRuleConfig;
}
