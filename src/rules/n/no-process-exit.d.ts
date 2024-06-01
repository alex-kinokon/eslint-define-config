import type { RuleConfig } from '../rule-config';

/**
 * Disallow the use of `process.exit()`.
 *
 * @see [no-process-exit](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md)
 */
export type NoProcessExitRuleConfig = RuleConfig<[]>;

/**
 * Disallow the use of `process.exit()`.
 *
 * @see [no-process-exit](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md)
 */
export interface NoProcessExitRule {
  /**
   * Disallow the use of `process.exit()`.
   *
   * @see [no-process-exit](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/no-process-exit.md)
   */
  'n/no-process-exit': NoProcessExitRuleConfig;
}
