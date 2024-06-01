import type { RuleConfig } from '../rule-config';

/**
 * Forbid the use of mutable exports with `var` or `let`.
 *
 * @see [no-mutable-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-mutable-exports.md)
 */
export type NoMutableExportsRuleConfig = RuleConfig<[]>;

/**
 * Forbid the use of mutable exports with `var` or `let`.
 *
 * @see [no-mutable-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-mutable-exports.md)
 */
export interface NoMutableExportsRule {
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   *
   * @see [no-mutable-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-mutable-exports.md)
   */
  'import-x/no-mutable-exports': NoMutableExportsRuleConfig;
}
