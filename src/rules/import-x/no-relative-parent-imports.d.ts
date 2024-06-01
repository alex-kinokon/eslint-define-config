import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRelativeParentImportsOption {
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
export type NoRelativeParentImportsOptions = [NoRelativeParentImportsOption?];

/**
 * Forbid importing modules from parent directories.
 *
 * @see [no-relative-parent-imports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-relative-parent-imports.md)
 */
export type NoRelativeParentImportsRuleConfig =
  RuleConfig<NoRelativeParentImportsOptions>;

/**
 * Forbid importing modules from parent directories.
 *
 * @see [no-relative-parent-imports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-relative-parent-imports.md)
 */
export interface NoRelativeParentImportsRule {
  /**
   * Forbid importing modules from parent directories.
   *
   * @see [no-relative-parent-imports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-relative-parent-imports.md)
   */
  'import-x/no-relative-parent-imports': NoRelativeParentImportsRuleConfig;
}
