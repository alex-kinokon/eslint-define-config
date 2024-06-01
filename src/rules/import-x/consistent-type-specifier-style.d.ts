import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ConsistentTypeSpecifierStyleOption =
  | 'prefer-inline'
  | 'prefer-top-level';

/**
 * Options.
 */
export type ConsistentTypeSpecifierStyleOptions = [
  ConsistentTypeSpecifierStyleOption?,
];

/**
 * Enforce or ban the use of inline type-only markers for named imports.
 *
 * @see [consistent-type-specifier-style](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/consistent-type-specifier-style.md)
 */
export type ConsistentTypeSpecifierStyleRuleConfig =
  RuleConfig<ConsistentTypeSpecifierStyleOptions>;

/**
 * Enforce or ban the use of inline type-only markers for named imports.
 *
 * @see [consistent-type-specifier-style](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/consistent-type-specifier-style.md)
 */
export interface ConsistentTypeSpecifierStyleRule {
  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   *
   * @see [consistent-type-specifier-style](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/consistent-type-specifier-style.md)
   */
  'import-x/consistent-type-specifier-style': ConsistentTypeSpecifierStyleRuleConfig;
}
