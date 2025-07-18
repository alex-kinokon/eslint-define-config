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

  /**
   * Disallow putting the result of query hooks directly in a React hook dependency array.
   * @see [no-unstable-deps](https://tanstack.com/query/latest/docs/eslint/no-unstable-deps)
   */
  '@tanstack/query/no-unstable-deps': null;

  /**
   * Ensure correct order of inference sensitive properties for infinite queries.
   * @see [infinite-query-property-order](https://tanstack.com/query/latest/docs/eslint/infinite-query-property-order)
   */
  '@tanstack/query/infinite-query-property-order': null;

  /**
   * Ensures queryFn returns a non-undefined value.
   * @see [no-void-query-fn](https://tanstack.com/query/latest/docs/eslint/no-void-query-fn)
   */
  '@tanstack/query/no-void-query-fn': null;

  /**
   * Ensure correct order of inference-sensitive properties in useMutation().
   * @see [mutation-property-order](https://tanstack.com/query/latest/docs/eslint/mutation-property-order)
   */
  '@tanstack/query/mutation-property-order': null;
}

export type ReactQueryRulesObject = RulesObject<ReactQueryRules>;
