import type { RuleConfig } from '../rule-config';

/**
 * Disallow anonymous functions and classes as the default export.
 *
 * @see [no-anonymous-default-export](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-anonymous-default-export.md)
 */
export type NoAnonymousDefaultExportRuleConfig = RuleConfig<[]>;

/**
 * Disallow anonymous functions and classes as the default export.
 *
 * @see [no-anonymous-default-export](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-anonymous-default-export.md)
 */
export interface NoAnonymousDefaultExportRule {
  /**
   * Disallow anonymous functions and classes as the default export.
   *
   * @see [no-anonymous-default-export](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-anonymous-default-export.md)
   */
  'unicorn/no-anonymous-default-export': NoAnonymousDefaultExportRuleConfig;
}
