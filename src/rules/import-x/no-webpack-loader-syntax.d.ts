import type { RuleConfig } from '../rule-config';

/**
 * Forbid webpack loader syntax in imports.
 *
 * @see [no-webpack-loader-syntax](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-webpack-loader-syntax.md)
 */
export type NoWebpackLoaderSyntaxRuleConfig = RuleConfig<[]>;

/**
 * Forbid webpack loader syntax in imports.
 *
 * @see [no-webpack-loader-syntax](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-webpack-loader-syntax.md)
 */
export interface NoWebpackLoaderSyntaxRule {
  /**
   * Forbid webpack loader syntax in imports.
   *
   * @see [no-webpack-loader-syntax](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-webpack-loader-syntax.md)
   */
  'import-x/no-webpack-loader-syntax': NoWebpackLoaderSyntaxRuleConfig;
}
