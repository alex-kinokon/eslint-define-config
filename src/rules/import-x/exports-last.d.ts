import type { RuleConfig } from '../rule-config';

/**
 * Ensure all exports appear after other statements.
 *
 * @see [exports-last](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/exports-last.md)
 */
export type ExportsLastRuleConfig = RuleConfig<[]>;

/**
 * Ensure all exports appear after other statements.
 *
 * @see [exports-last](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/exports-last.md)
 */
export interface ExportsLastRule {
  /**
   * Ensure all exports appear after other statements.
   *
   * @see [exports-last](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/exports-last.md)
   */
  'import-x/exports-last': ExportsLastRuleConfig;
}
