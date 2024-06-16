import type { EmptyRuleConfig, RuleConfig } from '../rule-config';

export type ExhaustiveDepsRuleConfig = [
  {
    additionalHooks?: string;
    enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean;
  }?,
];

/**
 * All ReactHooks rules.
 */
export interface ReactHooksRules {
  /**
   * Enforces the Rules of Hooks.
   * @see [rules-of-hooks](https://reactjs.org/docs/hooks-rules.html)
   */
  'react-hooks/rules-of-hooks': EmptyRuleConfig;

  /**
   * Verifies the list of dependencies for Hooks like useEffect and similar.
   * @see [exhaustive-deps](https://github.com/facebook/react/issues/14920)
   */
  'react-hooks/exhaustive-deps': RuleConfig<ExhaustiveDepsRuleConfig>;
}
