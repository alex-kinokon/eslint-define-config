import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ParamNamesOption {
  resolvePattern?: string;
  rejectPattern?: string;
}

/**
 * Options.
 */
export type ParamNamesOptions = [ParamNamesOption?];

/**
 * Enforce consistent param names and ordering when creating new promises.
 *
 * @see [param-names](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md)
 */
export type ParamNamesRuleConfig = RuleConfig<ParamNamesOptions>;

/**
 * Enforce consistent param names and ordering when creating new promises.
 *
 * @see [param-names](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md)
 */
export interface ParamNamesRule {
  /**
   * Enforce consistent param names and ordering when creating new promises.
   *
   * @see [param-names](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/param-names.md)
   */
  'promise/param-names': ParamNamesRuleConfig;
}
