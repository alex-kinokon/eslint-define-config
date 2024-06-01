import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferExpectAssertionsOption {
  onlyFunctionsWithAsyncKeyword?: boolean;
  onlyFunctionsWithExpectInLoop?: boolean;
  onlyFunctionsWithExpectInCallback?: boolean;
}

/**
 * Options.
 */
export type PreferExpectAssertionsOptions = [PreferExpectAssertionsOption?];

/**
 * Enforce using expect assertions instead of callbacks.
 *
 * @see [prefer-expect-assertions](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md)
 */
export type PreferExpectAssertionsRuleConfig =
  RuleConfig<PreferExpectAssertionsOptions>;

/**
 * Enforce using expect assertions instead of callbacks.
 *
 * @see [prefer-expect-assertions](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md)
 */
export interface PreferExpectAssertionsRule {
  /**
   * Enforce using expect assertions instead of callbacks.
   *
   * @see [prefer-expect-assertions](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md)
   */
  'vitest/prefer-expect-assertions': PreferExpectAssertionsRuleConfig;
}
