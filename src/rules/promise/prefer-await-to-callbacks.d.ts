import type { RuleConfig } from '../rule-config';

/**
 * Prefer async/await to the callback pattern.
 *
 * @see [prefer-await-to-callbacks](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md)
 */
export type PreferAwaitToCallbacksRuleConfig = RuleConfig<[]>;

/**
 * Prefer async/await to the callback pattern.
 *
 * @see [prefer-await-to-callbacks](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md)
 */
export interface PreferAwaitToCallbacksRule {
  /**
   * Prefer async/await to the callback pattern.
   *
   * @see [prefer-await-to-callbacks](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-callbacks.md)
   */
  'promise/prefer-await-to-callbacks': PreferAwaitToCallbacksRuleConfig;
}
