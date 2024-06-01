import type { RuleConfig } from '../rule-config';

/**
 * Require local Test Context for concurrent snapshot tests.
 *
 * @see [require-local-test-context-for-concurrent-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md)
 */
export type RequireLocalTestContextForConcurrentSnapshotsRuleConfig =
  RuleConfig<[]>;

/**
 * Require local Test Context for concurrent snapshot tests.
 *
 * @see [require-local-test-context-for-concurrent-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md)
 */
export interface RequireLocalTestContextForConcurrentSnapshotsRule {
  /**
   * Require local Test Context for concurrent snapshot tests.
   *
   * @see [require-local-test-context-for-concurrent-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md)
   */
  'vitest/require-local-test-context-for-concurrent-snapshots': RequireLocalTestContextForConcurrentSnapshotsRuleConfig;
}
