import type { RuleConfig } from '../rule-config';

/**
 * Forbid empty named import blocks.
 *
 * @see [no-empty-named-blocks](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-empty-named-blocks.md)
 */
export type NoEmptyNamedBlocksRuleConfig = RuleConfig<[]>;

/**
 * Forbid empty named import blocks.
 *
 * @see [no-empty-named-blocks](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-empty-named-blocks.md)
 */
export interface NoEmptyNamedBlocksRule {
  /**
   * Forbid empty named import blocks.
   *
   * @see [no-empty-named-blocks](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-empty-named-blocks.md)
   */
  'import-x/no-empty-named-blocks': NoEmptyNamedBlocksRuleConfig;
}
