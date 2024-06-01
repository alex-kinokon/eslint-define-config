import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoMixedRequiresOption =
  | boolean
  | {
      grouping?: boolean;
      allowCall?: boolean;
    };

/**
 * Options.
 */
export type NoMixedRequiresOptions = [NoMixedRequiresOption?];

/**
 * Disallow `require` calls to be mixed with regular variable declarations.
 *
 * @see [no-mixed-requires](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md)
 */
export type NoMixedRequiresRuleConfig = RuleConfig<NoMixedRequiresOptions>;

/**
 * Disallow `require` calls to be mixed with regular variable declarations.
 *
 * @see [no-mixed-requires](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md)
 */
export interface NoMixedRequiresRule {
  /**
   * Disallow `require` calls to be mixed with regular variable declarations.
   *
   * @see [no-mixed-requires](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-mixed-requires.md)
   */
  'n/no-mixed-requires': NoMixedRequiresRuleConfig;
}
