import type { RuleConfig } from '../rule-config';

/**
 * Suggest using implicit assertions for getBy* & findBy* queries.
 *
 * @see [prefer-implicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-implicit-assert.md)
 */
export type PreferImplicitAssertRuleConfig = RuleConfig<[]>;

/**
 * Suggest using implicit assertions for getBy* & findBy* queries.
 *
 * @see [prefer-implicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-implicit-assert.md)
 */
export interface PreferImplicitAssertRule {
  /**
   * Suggest using implicit assertions for getBy* & findBy* queries.
   *
   * @see [prefer-implicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-implicit-assert.md)
   */
  'testing-library/prefer-implicit-assert': PreferImplicitAssertRuleConfig;
}
