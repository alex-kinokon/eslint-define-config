import type { RuleConfig } from '../rule-config';

/**
 * Require that `process.exit()` expressions use the same code path as `throw`.
 *
 * @see [process-exit-as-throw](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md)
 */
export type ProcessExitAsThrowRuleConfig = RuleConfig<[]>;

/**
 * Require that `process.exit()` expressions use the same code path as `throw`.
 *
 * @see [process-exit-as-throw](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md)
 */
export interface ProcessExitAsThrowRule {
  /**
   * Require that `process.exit()` expressions use the same code path as `throw`.
   *
   * @see [process-exit-as-throw](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/process-exit-as-throw.md)
   */
  'n/process-exit-as-throw': ProcessExitAsThrowRuleConfig;
}
