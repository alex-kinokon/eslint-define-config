import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface ConsistentTestItOption {
  fn?: 'test' | 'it';
  withinDescribe?: 'test' | 'it';
}

/**
 * Options.
 */
export type ConsistentTestItOptions = [ConsistentTestItOption?];

/**
 * Enforce using test or it but not both.
 *
 * @see [consistent-test-it](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md)
 */
export type ConsistentTestItRuleConfig = RuleConfig<ConsistentTestItOptions>;

/**
 * Enforce using test or it but not both.
 *
 * @see [consistent-test-it](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md)
 */
export interface ConsistentTestItRule {
  /**
   * Enforce using test or it but not both.
   *
   * @see [consistent-test-it](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md)
   */
  'vitest/consistent-test-it': ConsistentTestItRuleConfig;
}
