import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface SwitchExhaustivenessCheckOption {
  /**
   * If 'true', allow 'default' cases on switch statements with exhaustive cases.
   */
  allowDefaultCaseForExhaustiveSwitch?: boolean;
  /**
   * If 'true', require a 'default' clause for switches on non-union types.
   */
  requireDefaultForNonUnion?: boolean;
}

/**
 * Options.
 */
export type SwitchExhaustivenessCheckOptions = [
  SwitchExhaustivenessCheckOption?,
];

/**
 * Require switch-case statements to be exhaustive.
 *
 * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
 */
export type SwitchExhaustivenessCheckRuleConfig =
  RuleConfig<SwitchExhaustivenessCheckOptions>;

/**
 * Require switch-case statements to be exhaustive.
 *
 * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
 */
export interface SwitchExhaustivenessCheckRule {
  /**
   * Require switch-case statements to be exhaustive.
   *
   * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
   */
  '@typescript-eslint/switch-exhaustiveness-check': SwitchExhaustivenessCheckRuleConfig;
}
