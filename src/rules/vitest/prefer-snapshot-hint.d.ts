import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type PreferSnapshotHintOption = 'always' | 'multi';

/**
 * Options.
 */
export type PreferSnapshotHintOptions = [PreferSnapshotHintOption?];

/**
 * Enforce including a hint with external snapshots.
 *
 * @see [prefer-snapshot-hint](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md)
 */
export type PreferSnapshotHintRuleConfig =
  RuleConfig<PreferSnapshotHintOptions>;

/**
 * Enforce including a hint with external snapshots.
 *
 * @see [prefer-snapshot-hint](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md)
 */
export interface PreferSnapshotHintRule {
  /**
   * Enforce including a hint with external snapshots.
   *
   * @see [prefer-snapshot-hint](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md)
   */
  'vitest/prefer-snapshot-hint': PreferSnapshotHintRuleConfig;
}
