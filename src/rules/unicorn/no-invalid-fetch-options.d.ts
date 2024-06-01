import type { RuleConfig } from '../rule-config';

/**
 * Disallow invalid options in `fetch()` and `new Request()`.
 *
 * @see [no-invalid-fetch-options](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-invalid-fetch-options.md)
 */
export type NoInvalidFetchOptionsRuleConfig = RuleConfig<[]>;

/**
 * Disallow invalid options in `fetch()` and `new Request()`.
 *
 * @see [no-invalid-fetch-options](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-invalid-fetch-options.md)
 */
export interface NoInvalidFetchOptionsRule {
  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   *
   * @see [no-invalid-fetch-options](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-invalid-fetch-options.md)
   */
  'unicorn/no-invalid-fetch-options': NoInvalidFetchOptionsRuleConfig;
}
