import type { RulesObject } from '../rule-config';

/**
 * All ReactHooksExtra rules.
 */
export interface ReactHooksExtraRules {
  /**
   * Disallow direct calls to the `set` function of `useState` in `useEffect`.
   * @preset `react-hooks-extra/recommended`
   * @see [no-direct-set-state-in-use-effect](https://eslint-react.xyz/docs/rules/hooks-extra-no-direct-set-state-in-use-effect)
   */
  'react-hooks-extra/no-direct-set-state-in-use-effect': null;
}

export type ReactHooksExtraRulesObject = RulesObject<ReactHooksExtraRules>;
