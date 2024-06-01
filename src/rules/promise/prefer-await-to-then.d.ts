import type { RuleConfig } from '../rule-config';

/**
 * Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values.
 *
 * @see [prefer-await-to-then](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md)
 */
export type PreferAwaitToThenRuleConfig = RuleConfig<[]>;

/**
 * Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values.
 *
 * @see [prefer-await-to-then](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md)
 */
export interface PreferAwaitToThenRule {
  /**
   * Prefer `await` to `then()`/`catch()`/`finally()` for reading Promise values.
   *
   * @see [prefer-await-to-then](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md)
   */
  'promise/prefer-await-to-then': PreferAwaitToThenRuleConfig;
}
