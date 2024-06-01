import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUnnecessaryPolyfillsOption {
  targets:
    | string
    | any[]
    | {
        [k: string]: any;
      };
}

/**
 * Options.
 */
export type NoUnnecessaryPolyfillsOptions = [NoUnnecessaryPolyfillsOption?];

/**
 * Enforce the use of built-in methods instead of unnecessary polyfills.
 *
 * @see [no-unnecessary-polyfills](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-unnecessary-polyfills.md)
 */
export type NoUnnecessaryPolyfillsRuleConfig =
  RuleConfig<NoUnnecessaryPolyfillsOptions>;

/**
 * Enforce the use of built-in methods instead of unnecessary polyfills.
 *
 * @see [no-unnecessary-polyfills](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-unnecessary-polyfills.md)
 */
export interface NoUnnecessaryPolyfillsRule {
  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   *
   * @see [no-unnecessary-polyfills](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v53.0.0/docs/rules/no-unnecessary-polyfills.md)
   */
  'unicorn/no-unnecessary-polyfills': NoUnnecessaryPolyfillsRuleConfig;
}
