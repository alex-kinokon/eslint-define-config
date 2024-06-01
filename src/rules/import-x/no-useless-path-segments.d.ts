import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoUselessPathSegmentsOption {
  commonjs?: boolean;
  noUselessIndex?: boolean;
}

/**
 * Options.
 */
export type NoUselessPathSegmentsOptions = [NoUselessPathSegmentsOption?];

/**
 * Forbid unnecessary path segments in import and require statements.
 *
 * @see [no-useless-path-segments](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-useless-path-segments.md)
 */
export type NoUselessPathSegmentsRuleConfig =
  RuleConfig<NoUselessPathSegmentsOptions>;

/**
 * Forbid unnecessary path segments in import and require statements.
 *
 * @see [no-useless-path-segments](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-useless-path-segments.md)
 */
export interface NoUselessPathSegmentsRule {
  /**
   * Forbid unnecessary path segments in import and require statements.
   *
   * @see [no-useless-path-segments](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-useless-path-segments.md)
   */
  'import-x/no-useless-path-segments': NoUselessPathSegmentsRuleConfig;
}
