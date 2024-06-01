import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRelativePackagesOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
}

/**
 * Options.
 */
export type NoRelativePackagesOptions = [NoRelativePackagesOption?];

/**
 * Forbid importing packages through relative paths.
 *
 * @see [no-relative-packages](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-relative-packages.md)
 */
export type NoRelativePackagesRuleConfig =
  RuleConfig<NoRelativePackagesOptions>;

/**
 * Forbid importing packages through relative paths.
 *
 * @see [no-relative-packages](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-relative-packages.md)
 */
export interface NoRelativePackagesRule {
  /**
   * Forbid importing packages through relative paths.
   *
   * @see [no-relative-packages](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-relative-packages.md)
   */
  'import-x/no-relative-packages': NoRelativePackagesRuleConfig;
}
