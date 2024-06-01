import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoReturnWrapOption {
  allowReject?: boolean;
}

/**
 * Options.
 */
export type NoReturnWrapOptions = [NoReturnWrapOption?];

/**
 * Disallow wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
 *
 * @see [no-return-wrap](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md)
 */
export type NoReturnWrapRuleConfig = RuleConfig<NoReturnWrapOptions>;

/**
 * Disallow wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
 *
 * @see [no-return-wrap](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md)
 */
export interface NoReturnWrapRule {
  /**
   * Disallow wrapping values in `Promise.resolve` or `Promise.reject` when not needed.
   *
   * @see [no-return-wrap](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-return-wrap.md)
   */
  'promise/no-return-wrap': NoReturnWrapRuleConfig;
}
