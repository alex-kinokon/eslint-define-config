import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoRequireImportsOption {
  /**
   * Patterns of import paths to allow requiring from.
   */
  allow?: string[];
}

/**
 * Options.
 */
export type NoRequireImportsOptions = [NoRequireImportsOption?];

/**
 * Disallow invocation of `require()`.
 *
 * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
 */
export type NoRequireImportsRuleConfig = RuleConfig<NoRequireImportsOptions>;

/**
 * Disallow invocation of `require()`.
 *
 * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
 */
export interface NoRequireImportsRule {
  /**
   * Disallow invocation of `require()`.
   *
   * @see [no-require-imports](https://typescript-eslint.io/rules/no-require-imports)
   */
  '@typescript-eslint/no-require-imports': NoRequireImportsRuleConfig;
}
