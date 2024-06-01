import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoVTextVHtmlOnComponentOption {
  allow?: string[];
}

/**
 * Options.
 */
export type NoVTextVHtmlOnComponentOptions = [NoVTextVHtmlOnComponentOption?];

/**
 * Disallow v-text / v-html on component.
 *
 * @see [no-v-text-v-html-on-component](https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html)
 */
export type NoVTextVHtmlOnComponentRuleConfig =
  RuleConfig<NoVTextVHtmlOnComponentOptions>;

/**
 * Disallow v-text / v-html on component.
 *
 * @see [no-v-text-v-html-on-component](https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html)
 */
export interface NoVTextVHtmlOnComponentRule {
  /**
   * Disallow v-text / v-html on component.
   *
   * @see [no-v-text-v-html-on-component](https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html)
   */
  'vue/no-v-text-v-html-on-component': NoVTextVHtmlOnComponentRuleConfig;
}
