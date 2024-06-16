import type { RuleConfig } from '../rule-config';

/**
 * Disallow using `await` in `Promise` method parameters.
 *
 * @see [no-await-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-await-in-promise-methods.md)
 */
export type NoAwaitInPromiseMethodsRuleConfig = RuleConfig<[]>;

/**
 * Disallow using `await` in `Promise` method parameters.
 *
 * @see [no-await-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-await-in-promise-methods.md)
 */
export interface NoAwaitInPromiseMethodsRule {
  /**
   * Disallow using `await` in `Promise` method parameters.
   *
   * @see [no-await-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-await-in-promise-methods.md)
   */
  'unicorn/no-await-in-promise-methods': NoAwaitInPromiseMethodsRuleConfig;
}
