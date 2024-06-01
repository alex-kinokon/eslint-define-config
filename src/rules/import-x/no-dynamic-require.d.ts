import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoDynamicRequireOption {
  esmodule?: boolean;
}

/**
 * Options.
 */
export type NoDynamicRequireOptions = [NoDynamicRequireOption?];

/**
 * Forbid `require()` calls with expressions.
 *
 * @see [no-dynamic-require](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-dynamic-require.md)
 */
export type NoDynamicRequireRuleConfig = RuleConfig<NoDynamicRequireOptions>;

/**
 * Forbid `require()` calls with expressions.
 *
 * @see [no-dynamic-require](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-dynamic-require.md)
 */
export interface NoDynamicRequireRule {
  /**
   * Forbid `require()` calls with expressions.
   *
   * @see [no-dynamic-require](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-dynamic-require.md)
   */
  'import-x/no-dynamic-require': NoDynamicRequireRuleConfig;
}
