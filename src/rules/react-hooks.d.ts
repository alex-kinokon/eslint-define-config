import type { RulesObject } from '../rule-config';

/**
 * All ReactHooks rules.
 */
export interface ReactHooksRules {
  /**
   * Enforces the Rules of Hooks.
   * @see [rules-of-hooks](https://reactjs.org/docs/hooks-rules.html)
   */
  'react-hooks/rules-of-hooks': null;

  /**
   * Verifies the list of dependencies for Hooks like useEffect and similar.
   * @see [exhaustive-deps](https://github.com/facebook/react/issues/14920)
   */
  'react-hooks/exhaustive-deps': [
    {
      additionalHooks?: string;
      enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean;
    }?,
  ];
}

export type ReactHooksRulesObject = RulesObject<ReactHooksRules>;
