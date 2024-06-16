import type { RuleConfig } from '../rule-config';

/**
 * Disallow using deprecated `tc` or `$tc` (Deprecated in Vue I18n 10.0.0, removed fully in Vue I18n 11.0.0).
 *
 * @see [no-deprecated-tc](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-tc.html)
 */
export type NoDeprecatedTcRuleConfig = RuleConfig<[]>;

/**
 * Disallow using deprecated `tc` or `$tc` (Deprecated in Vue I18n 10.0.0, removed fully in Vue I18n 11.0.0).
 *
 * @see [no-deprecated-tc](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-tc.html)
 */
export interface NoDeprecatedTcRule {
  /**
   * Disallow using deprecated `tc` or `$tc` (Deprecated in Vue I18n 10.0.0, removed fully in Vue I18n 11.0.0).
   *
   * @see [no-deprecated-tc](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-tc.html)
   */
  '@intlify/vue-i18n/no-deprecated-tc': NoDeprecatedTcRuleConfig;
}
