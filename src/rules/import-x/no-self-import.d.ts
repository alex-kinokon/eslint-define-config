import type { RuleConfig } from '../rule-config';

/**
 * Forbid a module from importing itself.
 *
 * @see [no-self-import](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-self-import.md)
 */
export type NoSelfImportRuleConfig = RuleConfig<[]>;

/**
 * Forbid a module from importing itself.
 *
 * @see [no-self-import](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-self-import.md)
 */
export interface NoSelfImportRule {
  /**
   * Forbid a module from importing itself.
   *
   * @see [no-self-import](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-self-import.md)
   */
  'import-x/no-self-import': NoSelfImportRuleConfig;
}
