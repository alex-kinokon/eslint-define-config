import type { RulesObject } from '../rule-config';

/**
 * All ReactQuery rules.
 */
export interface ReactQueryRules {
  /**
   * Exhaustive deps rule for useQuery.
   * @see [exhaustive-deps](https://tanstack.com/query/latest/docs/eslint/exhaustive-deps)
   */
  '@tanstack/query/exhaustive-deps': null;

  /**
   * Makes sure that QueryClient is stable.
   * @see [stable-query-client](https://tanstack.com/query/latest/docs/eslint/stable-query-client)
   */
  '@tanstack/query/stable-query-client': null;

  /**
   * Disallows rest destructuring in queries.
   * @see [no-rest-destructuring](https://tanstack.com/query/latest/docs/eslint/no-rest-destructuring)
   */
  '@tanstack/query/no-rest-destructuring': null;
}

export type ReactQueryRulesObject = RulesObject<ReactQueryRules>;
