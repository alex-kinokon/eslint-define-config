import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CatchOrReturnOption {
  allowFinally?: boolean;
  allowThen?: boolean;
  terminationMethod?: string | string[];
}

/**
 * Options.
 */
export type CatchOrReturnOptions = [CatchOrReturnOption?];

/**
 * Enforce the use of `catch()` on un-returned promises.
 *
 * @see [catch-or-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md)
 */
export type CatchOrReturnRuleConfig = RuleConfig<CatchOrReturnOptions>;

/**
 * Enforce the use of `catch()` on un-returned promises.
 *
 * @see [catch-or-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md)
 */
export interface CatchOrReturnRule {
  /**
   * Enforce the use of `catch()` on un-returned promises.
   *
   * @see [catch-or-return](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md)
   */
  'promise/catch-or-return': CatchOrReturnRuleConfig;
}
