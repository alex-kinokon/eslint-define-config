import type { RuleConfig } from '../rule-config';

/**
 * Require slots to be explicitly defined.
 *
 * @see [require-explicit-slots](https://eslint.vuejs.org/rules/require-explicit-slots.html)
 */
export type RequireExplicitSlotsRuleConfig = RuleConfig<[]>;

/**
 * Require slots to be explicitly defined.
 *
 * @see [require-explicit-slots](https://eslint.vuejs.org/rules/require-explicit-slots.html)
 */
export interface RequireExplicitSlotsRule {
  /**
   * Require slots to be explicitly defined.
   *
   * @see [require-explicit-slots](https://eslint.vuejs.org/rules/require-explicit-slots.html)
   */
  'vue/require-explicit-slots': RequireExplicitSlotsRuleConfig;
}
