import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoExtraneousDependenciesOption {
  devDependencies?: boolean | any[];
  optionalDependencies?: boolean | any[];
  peerDependencies?: boolean | any[];
  bundledDependencies?: boolean | any[];
  packageDir?: string | any[];
  includeInternal?: boolean;
  includeTypes?: boolean;
}

/**
 * Options.
 */
export type NoExtraneousDependenciesOptions = [NoExtraneousDependenciesOption?];

/**
 * Forbid the use of extraneous packages.
 *
 * @see [no-extraneous-dependencies](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-extraneous-dependencies.md)
 */
export type NoExtraneousDependenciesRuleConfig =
  RuleConfig<NoExtraneousDependenciesOptions>;

/**
 * Forbid the use of extraneous packages.
 *
 * @see [no-extraneous-dependencies](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-extraneous-dependencies.md)
 */
export interface NoExtraneousDependenciesRule {
  /**
   * Forbid the use of extraneous packages.
   *
   * @see [no-extraneous-dependencies](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-extraneous-dependencies.md)
   */
  'import-x/no-extraneous-dependencies': NoExtraneousDependenciesRuleConfig;
}
