import type { RuleConfig } from '../rule-config';

/**
 * Forbid AMD `require` and `define` calls.
 *
 * @see [no-amd](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-amd.md)
 */
export type NoAmdRuleConfig = RuleConfig<[]>;

/**
 * Forbid AMD `require` and `define` calls.
 *
 * @see [no-amd](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-amd.md)
 */
export interface NoAmdRule {
  /**
   * Forbid AMD `require` and `define` calls.
   *
   * @see [no-amd](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-amd.md)
   */
  'import-x/no-amd': NoAmdRuleConfig;
}
