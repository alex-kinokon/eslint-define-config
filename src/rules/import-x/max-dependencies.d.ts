import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface MaxDependenciesOption {
  max?: number;
  ignoreTypeImports?: boolean;
}

/**
 * Options.
 */
export type MaxDependenciesOptions = [MaxDependenciesOption?];

/**
 * Enforce the maximum number of dependencies a module can have.
 *
 * @see [max-dependencies](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/max-dependencies.md)
 */
export type MaxDependenciesRuleConfig = RuleConfig<MaxDependenciesOptions>;

/**
 * Enforce the maximum number of dependencies a module can have.
 *
 * @see [max-dependencies](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/max-dependencies.md)
 */
export interface MaxDependenciesRule {
  /**
   * Enforce the maximum number of dependencies a module can have.
   *
   * @see [max-dependencies](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/max-dependencies.md)
   */
  'import-x/max-dependencies': MaxDependenciesRuleConfig;
}
