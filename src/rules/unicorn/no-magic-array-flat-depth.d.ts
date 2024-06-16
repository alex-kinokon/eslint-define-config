import type { RuleConfig } from '../rule-config';

/**
 * Disallow a magic number as the `depth` argument in `Array#flat(…).`.
 *
 * @see [no-magic-array-flat-depth](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-magic-array-flat-depth.md)
 */
export type NoMagicArrayFlatDepthRuleConfig = RuleConfig<[]>;

/**
 * Disallow a magic number as the `depth` argument in `Array#flat(…).`.
 *
 * @see [no-magic-array-flat-depth](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-magic-array-flat-depth.md)
 */
export interface NoMagicArrayFlatDepthRule {
  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`.
   *
   * @see [no-magic-array-flat-depth](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-magic-array-flat-depth.md)
   */
  'unicorn/no-magic-array-flat-depth': NoMagicArrayFlatDepthRuleConfig;
}
