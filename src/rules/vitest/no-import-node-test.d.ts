import type { RuleConfig } from '../rule-config';

/**
 * Disallow importing `node:test`.
 *
 * @see [no-import-node-test](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md)
 */
export type NoImportNodeTestRuleConfig = RuleConfig<[]>;

/**
 * Disallow importing `node:test`.
 *
 * @see [no-import-node-test](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md)
 */
export interface NoImportNodeTestRule {
  /**
   * Disallow importing `node:test`.
   *
   * @see [no-import-node-test](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md)
   */
  'vitest/no-import-node-test': NoImportNodeTestRuleConfig;
}
