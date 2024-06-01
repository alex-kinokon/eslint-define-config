import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NewlineAfterImportOption {
  count?: number;
  exactCount?: boolean;
  considerComments?: boolean;
}

/**
 * Options.
 */
export type NewlineAfterImportOptions = [NewlineAfterImportOption?];

/**
 * Enforce a newline after import statements.
 *
 * @see [newline-after-import](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/newline-after-import.md)
 */
export type NewlineAfterImportRuleConfig =
  RuleConfig<NewlineAfterImportOptions>;

/**
 * Enforce a newline after import statements.
 *
 * @see [newline-after-import](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/newline-after-import.md)
 */
export interface NewlineAfterImportRule {
  /**
   * Enforce a newline after import statements.
   *
   * @see [newline-after-import](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/newline-after-import.md)
   */
  'import-x/newline-after-import': NewlineAfterImportRuleConfig;
}
