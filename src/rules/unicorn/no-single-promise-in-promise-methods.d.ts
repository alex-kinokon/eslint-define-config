import type { RuleConfig } from '../rule-config';

/**
 * Disallow passing single-element arrays to `Promise` methods.
 *
 * @see [no-single-promise-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-single-promise-in-promise-methods.md)
 */
export type NoSinglePromiseInPromiseMethodsRuleConfig = RuleConfig<[]>;

/**
 * Disallow passing single-element arrays to `Promise` methods.
 *
 * @see [no-single-promise-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-single-promise-in-promise-methods.md)
 */
export interface NoSinglePromiseInPromiseMethodsRule {
  /**
   * Disallow passing single-element arrays to `Promise` methods.
   *
   * @see [no-single-promise-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-single-promise-in-promise-methods.md)
   */
  'unicorn/no-single-promise-in-promise-methods': NoSinglePromiseInPromiseMethodsRuleConfig;
}
