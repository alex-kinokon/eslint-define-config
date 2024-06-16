import type { EmptyRuleConfig, RuleConfig } from '../rule-config';

export interface AwaitAsyncEventsOption {
  eventModule?: ('fireEvent' | 'userEvent') | ('fireEvent' | 'userEvent')[];
}

export interface ConsistentDataTestidOption {
  testIdPattern: string;
  testIdAttribute?: string | string[];
  customMessage?: string;
}

export interface NoAwaitSyncEventsOption {
  /**
   * @minItems 1
   */
  eventModules?: [
    'fire-event' | 'user-event',
    ...('fire-event' | 'user-event')[],
  ];
}

export interface NoDebuggingUtilsOption {
  utilsToCheckFor?: {
    prettyFormat?: boolean;
    logDOM?: boolean;
    logRoles?: boolean;
    prettyDOM?: boolean;
    logTestingPlaygroundURL?: boolean;
    debug?: boolean;
  };
}

export type NoDomImportOption = string;

export interface NoNodeAccessOption {
  allowContainerFirstChild?: boolean;
  [k: string]: any;
}

export interface NoRenderInLifecycleOption {
  allowTestingFrameworkSetupHook?: 'beforeEach' | 'beforeAll';
  [k: string]: any;
}

export interface NoUnnecessaryActOption {
  isStrict?: boolean;
  [k: string]: any;
}

export interface PreferExplicitAssertOption {
  assertion?:
    | 'toBeOnTheScreen'
    | 'toBeInTheDocument'
    | 'toBeTruthy'
    | 'toBeDefined';
  includeFindQueries?: boolean;
}

export interface PreferQueryMatchersOption {
  validEntries?: {
    query?: 'get' | 'query';
    matcher?: string;
    [k: string]: any;
  }[];
}

export interface PreferUserEventOption {
  allowedMethods?: any[];
  [k: string]: any;
}

/**
 * All TestingLibrary rules.
 */
export interface TestingLibraryRules {
  /**
   * Enforce promises from async event methods are handled.
   * @see [await-async-events](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-events.md)
   */
  'testing-library/await-async-events': RuleConfig<[AwaitAsyncEventsOption?]>;

  /**
   * Enforce promises from async queries to be handled.
   * @see [await-async-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-queries.md)
   */
  'testing-library/await-async-queries': EmptyRuleConfig;

  /**
   * Enforce promises from async utils to be awaited properly.
   * @see [await-async-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-utils.md)
   */
  'testing-library/await-async-utils': EmptyRuleConfig;

  /**
   * Ensures consistent usage of `data-testid`.
   * @see [consistent-data-testid](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/consistent-data-testid.md)
   */
  'testing-library/consistent-data-testid': RuleConfig<
    [ConsistentDataTestidOption?]
  >;

  /**
   * Disallow unnecessary `await` for sync events.
   * @see [no-await-sync-events](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-events.md)
   */
  'testing-library/no-await-sync-events': RuleConfig<
    [NoAwaitSyncEventsOption?]
  >;

  /**
   * Disallow unnecessary `await` for sync queries.
   * @see [no-await-sync-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-queries.md)
   */
  'testing-library/no-await-sync-queries': EmptyRuleConfig;

  /**
   * Disallow the use of `container` methods.
   * @see [no-container](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-container.md)
   */
  'testing-library/no-container': EmptyRuleConfig;

  /**
   * Disallow the use of debugging utilities like `debug`.
   * @see [no-debugging-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-debugging-utils.md)
   */
  'testing-library/no-debugging-utils': RuleConfig<[NoDebuggingUtilsOption?]>;

  /**
   * Disallow importing from DOM Testing Library.
   * @see [no-dom-import](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-dom-import.md)
   */
  'testing-library/no-dom-import': RuleConfig<[NoDomImportOption?]>;

  /**
   * Disallow the use of the global RegExp flag (/g) in queries.
   * @see [no-global-regexp-flag-in-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-global-regexp-flag-in-query.md)
   */
  'testing-library/no-global-regexp-flag-in-query': EmptyRuleConfig;

  /**
   * Disallow the use of `cleanup`.
   * @see [no-manual-cleanup](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-manual-cleanup.md)
   */
  'testing-library/no-manual-cleanup': EmptyRuleConfig;

  /**
   * Disallow direct Node access.
   * @see [no-node-access](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-node-access.md)
   */
  'testing-library/no-node-access': RuleConfig<[NoNodeAccessOption?]>;

  /**
   * Disallow the use of promises passed to a `fireEvent` method.
   * @see [no-promise-in-fire-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-promise-in-fire-event.md)
   */
  'testing-library/no-promise-in-fire-event': EmptyRuleConfig;

  /**
   * Disallow the use of `render` in testing frameworks setup functions.
   * @see [no-render-in-lifecycle](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-lifecycle.md)
   */
  'testing-library/no-render-in-lifecycle': RuleConfig<
    [NoRenderInLifecycleOption?]
  >;

  /**
   * Disallow wrapping Testing Library utils or empty callbacks in `act`.
   * @see [no-unnecessary-act](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-unnecessary-act.md)
   */
  'testing-library/no-unnecessary-act': RuleConfig<[NoUnnecessaryActOption?]>;

  /**
   * Disallow the use of multiple `expect` calls inside `waitFor`.
   * @see [no-wait-for-multiple-assertions](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-multiple-assertions.md)
   */
  'testing-library/no-wait-for-multiple-assertions': EmptyRuleConfig;

  /**
   * Disallow the use of side effects in `waitFor`.
   * @see [no-wait-for-side-effects](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-side-effects.md)
   */
  'testing-library/no-wait-for-side-effects': EmptyRuleConfig;

  /**
   * Ensures no snapshot is generated inside of a `waitFor` call.
   * @see [no-wait-for-snapshot](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-snapshot.md)
   */
  'testing-library/no-wait-for-snapshot': EmptyRuleConfig;

  /**
   * Suggest using explicit assertions rather than standalone queries.
   * @see [prefer-explicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-explicit-assert.md)
   */
  'testing-library/prefer-explicit-assert': RuleConfig<
    [PreferExplicitAssertOption?]
  >;

  /**
   * Suggest using `find(All)By*` query instead of `waitFor` + `get(All)By*` to wait for elements.
   * @see [prefer-find-by](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-find-by.md)
   */
  'testing-library/prefer-find-by': EmptyRuleConfig;

  /**
   * Suggest using implicit assertions for getBy* & findBy* queries.
   * @see [prefer-implicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-implicit-assert.md)
   */
  'testing-library/prefer-implicit-assert': EmptyRuleConfig;

  /**
   * Ensure appropriate `get*`/`query*` queries are used with their respective matchers.
   * @see [prefer-presence-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-presence-queries.md)
   */
  'testing-library/prefer-presence-queries': RuleConfig<
    [
      {
        presence?: boolean;
        absence?: boolean;
      }?,
    ]
  >;

  /**
   * Suggest using `queryBy*` queries when waiting for disappearance.
   * @see [prefer-query-by-disappearance](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-by-disappearance.md)
   */
  'testing-library/prefer-query-by-disappearance': EmptyRuleConfig;

  /**
   * Ensure the configured `get*`/`query*` query is used with the corresponding matchers.
   * @see [prefer-query-matchers](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-matchers.md)
   */
  'testing-library/prefer-query-matchers': RuleConfig<
    [PreferQueryMatchersOption?]
  >;

  /**
   * Suggest using `screen` while querying.
   * @see [prefer-screen-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-screen-queries.md)
   */
  'testing-library/prefer-screen-queries': EmptyRuleConfig;

  /**
   * Suggest using `userEvent` over `fireEvent` for simulating user interactions.
   * @see [prefer-user-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event.md)
   */
  'testing-library/prefer-user-event': RuleConfig<[PreferUserEventOption?]>;

  /**
   * Enforce a valid naming for return value from `render`.
   * @see [render-result-naming-convention](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/render-result-naming-convention.md)
   */
  'testing-library/render-result-naming-convention': EmptyRuleConfig;
}
