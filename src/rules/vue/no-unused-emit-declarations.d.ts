import type { RuleConfig } from '../rule-config';

/**
 * Disallow unused emit declarations.
 *
 * @see [no-unused-emit-declarations](https://eslint.vuejs.org/rules/no-unused-emit-declarations.html)
 */
export type NoUnusedEmitDeclarationsRuleConfig = RuleConfig<[]>;

/**
 * Disallow unused emit declarations.
 *
 * @see [no-unused-emit-declarations](https://eslint.vuejs.org/rules/no-unused-emit-declarations.html)
 */
export interface NoUnusedEmitDeclarationsRule {
  /**
   * Disallow unused emit declarations.
   *
   * @see [no-unused-emit-declarations](https://eslint.vuejs.org/rules/no-unused-emit-declarations.html)
   */
  'vue/no-unused-emit-declarations': NoUnusedEmitDeclarationsRuleConfig;
}
