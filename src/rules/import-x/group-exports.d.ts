import type { RuleConfig } from '../rule-config';

/**
 * Prefer named exports to be grouped together in a single export declaration.
 *
 * @see [group-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/group-exports.md)
 */
export type GroupExportsRuleConfig = RuleConfig<[]>;

/**
 * Prefer named exports to be grouped together in a single export declaration.
 *
 * @see [group-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/group-exports.md)
 */
export interface GroupExportsRule {
  /**
   * Prefer named exports to be grouped together in a single export declaration.
   *
   * @see [group-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/group-exports.md)
   */
  'import-x/group-exports': GroupExportsRuleConfig;
}
