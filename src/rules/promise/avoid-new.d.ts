import type { RuleConfig } from '../rule-config';

/**
 * Disallow creating `new` promises outside of utility libs (use [pify][] instead).
 *
 * @see [avoid-new](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md)
 */
export type AvoidNewRuleConfig = RuleConfig<[]>;

/**
 * Disallow creating `new` promises outside of utility libs (use [pify][] instead).
 *
 * @see [avoid-new](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md)
 */
export interface AvoidNewRule {
  /**
   * Disallow creating `new` promises outside of utility libs (use [pify][] instead).
   *
   * @see [avoid-new](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/avoid-new.md)
   */
  'promise/avoid-new': AvoidNewRuleConfig;
}
