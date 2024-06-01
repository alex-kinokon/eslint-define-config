import type { RuleConfig } from '../../rule-config';

/**
 * Option.
 */
export type PreferGlobalUrlSearchParamsOption = 'always' | 'never';

/**
 * Options.
 */
export type PreferGlobalUrlSearchParamsOptions = [
  PreferGlobalUrlSearchParamsOption?,
];

/**
 * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
 *
 * @see [prefer-global/url-search-params](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url-search-params.md)
 */
export type PreferGlobalUrlSearchParamsRuleConfig =
  RuleConfig<PreferGlobalUrlSearchParamsOptions>;

/**
 * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
 *
 * @see [prefer-global/url-search-params](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url-search-params.md)
 */
export interface PreferGlobalUrlSearchParamsRule {
  /**
   * Enforce either `URLSearchParams` or `require("url").URLSearchParams`.
   *
   * @see [prefer-global/url-search-params](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-global/url-search-params.md)
   */
  'n/prefer-global/url-search-params': PreferGlobalUrlSearchParamsRuleConfig;
}
