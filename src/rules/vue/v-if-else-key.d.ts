import type { RuleConfig } from '../rule-config';

/**
 * Require key attribute for conditionally rendered repeated components.
 *
 * @see [v-if-else-key](https://eslint.vuejs.org/rules/v-if-else-key.html)
 */
export type VIfElseKeyRuleConfig = RuleConfig<[]>;

/**
 * Require key attribute for conditionally rendered repeated components.
 *
 * @see [v-if-else-key](https://eslint.vuejs.org/rules/v-if-else-key.html)
 */
export interface VIfElseKeyRule {
  /**
   * Require key attribute for conditionally rendered repeated components.
   *
   * @see [v-if-else-key](https://eslint.vuejs.org/rules/v-if-else-key.html)
   */
  'vue/v-if-else-key': VIfElseKeyRuleConfig;
}
