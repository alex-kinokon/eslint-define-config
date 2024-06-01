import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoVarRequiresOption {
  /**
   * Patterns of import paths to allow requiring from.
   */
  allow?: string[];
}

/**
 * Options.
 */
export type NoVarRequiresOptions = [NoVarRequiresOption?];

/**
 * Disallow `require` statements except in import statements.
 *
 * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
 */
export type NoVarRequiresRuleConfig = RuleConfig<NoVarRequiresOptions>;

/**
 * Disallow `require` statements except in import statements.
 *
 * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
 */
export interface NoVarRequiresRule {
  /**
   * Disallow `require` statements except in import statements.
   *
   * @see [no-var-requires](https://typescript-eslint.io/rules/no-var-requires)
   */
  '@typescript-eslint/no-var-requires': NoVarRequiresRuleConfig;
}
