import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferStringStartsEndsWithOption {
  /**
   * Whether to allow equality checks against the first or last element of a string.
   */
  allowSingleElementEquality?: 'always' | 'never';
}

/**
 * Options.
 */
export type PreferStringStartsEndsWithOptions = [
  PreferStringStartsEndsWithOption?,
];

/**
 * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings.
 *
 * @see [prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)
 */
export type PreferStringStartsEndsWithRuleConfig =
  RuleConfig<PreferStringStartsEndsWithOptions>;

/**
 * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings.
 *
 * @see [prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)
 */
export interface PreferStringStartsEndsWithRule {
  /**
   * Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods of checking substrings.
   *
   * @see [prefer-string-starts-ends-with](https://typescript-eslint.io/rules/prefer-string-starts-ends-with)
   */
  '@typescript-eslint/prefer-string-starts-ends-with': PreferStringStartsEndsWithRuleConfig;
}
