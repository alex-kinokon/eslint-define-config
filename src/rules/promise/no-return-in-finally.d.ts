import type { RuleConfig } from '../rule-config';

/**
 * Disallow return statements in `finally()`.
 *
 * @see [no-return-in-finally](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md)
 */
export type NoReturnInFinallyRuleConfig = RuleConfig<[]>;

/**
 * Disallow return statements in `finally()`.
 *
 * @see [no-return-in-finally](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md)
 */
export interface NoReturnInFinallyRule {
  /**
   * Disallow return statements in `finally()`.
   *
   * @see [no-return-in-finally](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-in-finally.md)
   */
  'promise/no-return-in-finally': NoReturnInFinallyRuleConfig;
}
