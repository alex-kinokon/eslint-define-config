import type { RuleConfig } from '../rule-config';

/**
 * Enforce modulo interpolation to be named interpolation.
 *
 * @see [no-deprecated-modulo-syntax](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-modulo-syntax.html)
 */
export type NoDeprecatedModuloSyntaxRuleConfig = RuleConfig<[]>;

/**
 * Enforce modulo interpolation to be named interpolation.
 *
 * @see [no-deprecated-modulo-syntax](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-modulo-syntax.html)
 */
export interface NoDeprecatedModuloSyntaxRule {
  /**
   * Enforce modulo interpolation to be named interpolation.
   *
   * @see [no-deprecated-modulo-syntax](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-modulo-syntax.html)
   */
  '@intlify/vue-i18n/no-deprecated-modulo-syntax': NoDeprecatedModuloSyntaxRuleConfig;
}
