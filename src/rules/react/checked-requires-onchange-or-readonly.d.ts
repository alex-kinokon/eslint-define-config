import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface CheckedRequiresOnchangeOrReadonlyOption {
  ignoreMissingProperties?: boolean;
  ignoreExclusiveCheckedAttribute?: boolean;
}

/**
 * Options.
 */
export type CheckedRequiresOnchangeOrReadonlyOptions = [
  CheckedRequiresOnchangeOrReadonlyOption?,
];

/**
 * Enforce using `onChange` or `readonly` attribute when `checked` is used.
 *
 * @see [checked-requires-onchange-or-readonly](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/checked-requires-onchange-or-readonly.md)
 */
export type CheckedRequiresOnchangeOrReadonlyRuleConfig =
  RuleConfig<CheckedRequiresOnchangeOrReadonlyOptions>;

/**
 * Enforce using `onChange` or `readonly` attribute when `checked` is used.
 *
 * @see [checked-requires-onchange-or-readonly](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/checked-requires-onchange-or-readonly.md)
 */
export interface CheckedRequiresOnchangeOrReadonlyRule {
  /**
   * Enforce using `onChange` or `readonly` attribute when `checked` is used.
   *
   * @see [checked-requires-onchange-or-readonly](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/checked-requires-onchange-or-readonly.md)
   */
  'react/checked-requires-onchange-or-readonly': CheckedRequiresOnchangeOrReadonlyRuleConfig;
}
