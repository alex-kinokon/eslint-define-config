import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface EnforceStyleAttributeOption {
  /**
   * @minItems 1
   */
  allow?: ['plain' | 'scoped' | 'module', ...('plain' | 'scoped' | 'module')[]];
}

/**
 * Options.
 */
export type EnforceStyleAttributeOptions = [EnforceStyleAttributeOption?];

/**
 * Enforce or forbid the use of the `scoped` and `module` attributes in SFC top level style tags.
 *
 * @see [enforce-style-attribute](https://eslint.vuejs.org/rules/enforce-style-attribute.html)
 */
export type EnforceStyleAttributeRuleConfig =
  RuleConfig<EnforceStyleAttributeOptions>;

/**
 * Enforce or forbid the use of the `scoped` and `module` attributes in SFC top level style tags.
 *
 * @see [enforce-style-attribute](https://eslint.vuejs.org/rules/enforce-style-attribute.html)
 */
export interface EnforceStyleAttributeRule {
  /**
   * Enforce or forbid the use of the `scoped` and `module` attributes in SFC top level style tags.
   *
   * @see [enforce-style-attribute](https://eslint.vuejs.org/rules/enforce-style-attribute.html)
   */
  'vue/enforce-style-attribute': EnforceStyleAttributeRuleConfig;
}
