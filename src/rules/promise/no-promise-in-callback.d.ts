import type { RuleConfig } from '../rule-config';

/**
 * Disallow using promises inside of callbacks.
 *
 * @see [no-promise-in-callback](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md)
 */
export type NoPromiseInCallbackRuleConfig = RuleConfig<[]>;

/**
 * Disallow using promises inside of callbacks.
 *
 * @see [no-promise-in-callback](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md)
 */
export interface NoPromiseInCallbackRule {
  /**
   * Disallow using promises inside of callbacks.
   *
   * @see [no-promise-in-callback](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-promise-in-callback.md)
   */
  'promise/no-promise-in-callback': NoPromiseInCallbackRuleConfig;
}
