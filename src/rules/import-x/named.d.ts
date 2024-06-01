import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NamedOption {
  commonjs?: boolean;
}

/**
 * Options.
 */
export type NamedOptions = [NamedOption?];

/**
 * Ensure named imports correspond to a named export in the remote file.
 *
 * @see [named](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/named.md)
 */
export type NamedRuleConfig = RuleConfig<NamedOptions>;

/**
 * Ensure named imports correspond to a named export in the remote file.
 *
 * @see [named](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/named.md)
 */
export interface NamedRule {
  /**
   * Ensure named imports correspond to a named export in the remote file.
   *
   * @see [named](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/named.md)
   */
  'import-x/named': NamedRuleConfig;
}
