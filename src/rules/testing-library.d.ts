import type { RulesObject } from '../rule-config';

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

export interface NoRenderInLifecycleOption {
  allowTestingFrameworkSetupHook?: 'beforeEach' | 'beforeAll';
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
  }[];
}

/**
 * All TestingLibrary rules.
 */
export interface TestingLibraryRules {
  /**
   * Enforce promises from async event methods are handled.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [await-async-events](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-events.md)
   */
  'testing-library/await-async-events': [AwaitAsyncEventsOption?];

  /**
   * Enforce promises from async queries to be handled.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [await-async-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-queries.md)
   */
  'testing-library/await-async-queries': null;

  /**
   * Enforce promises from async utils to be awaited properly.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [await-async-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/await-async-utils.md)
   */
  'testing-library/await-async-utils': null;

  /**
   * Ensures consistent usage of `data-testid`.
   * @see [consistent-data-testid](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/consistent-data-testid.md)
   */
  'testing-library/consistent-data-testid': [ConsistentDataTestidOption?];

  /**
   * Disallow unnecessary `await` for sync events.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`
   * @see [no-await-sync-events](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-events.md)
   */
  'testing-library/no-await-sync-events': [NoAwaitSyncEventsOption?];

  /**
   * Disallow unnecessary `await` for sync queries.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [no-await-sync-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-queries.md)
   */
  'testing-library/no-await-sync-queries': null;

  /**
   * Disallow the use of `container` methods.
   * @preset `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [no-container](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-container.md)
   */
  'testing-library/no-container': null;

  /**
   * Disallow the use of debugging utilities like `debug`.
   * @preset `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [no-debugging-utils](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-debugging-utils.md)
   */
  'testing-library/no-debugging-utils': [NoDebuggingUtilsOption?];

  /**
   * Disallow importing from DOM Testing Library.
   * @preset `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [no-dom-import](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-dom-import.md)
   */
  'testing-library/no-dom-import': [NoDomImportOption?];

  /**
   * Disallow the use of the global RegExp flag (/g) in queries.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [no-global-regexp-flag-in-query](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-global-regexp-flag-in-query.md)
   */
  'testing-library/no-global-regexp-flag-in-query': null;

  /**
   * Disallow the use of `cleanup`.
   * @preset `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`
   * @see [no-manual-cleanup](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-manual-cleanup.md)
   */
  'testing-library/no-manual-cleanup': null;

  /**
   * Disallow direct Node access.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [no-node-access](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-node-access.md)
   */
  'testing-library/no-node-access': [
    {
      allowContainerFirstChild?: boolean;
    }?,
  ];

  /**
   * Disallow the use of promises passed to a `fireEvent` method.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [no-promise-in-fire-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-promise-in-fire-event.md)
   */
  'testing-library/no-promise-in-fire-event': null;

  /**
   * Disallow the use of `render` in testing frameworks setup functions.
   * @preset `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [no-render-in-lifecycle](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-render-in-lifecycle.md)
   */
  'testing-library/no-render-in-lifecycle': [NoRenderInLifecycleOption?];

  /**
   * Ensure no `data-testid` queries are used.
   * @see [no-test-id-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-test-id-queries.md)
   */
  'testing-library/no-test-id-queries': null;

  /**
   * Disallow wrapping Testing Library utils or empty callbacks in `act`.
   * @preset `testing-library/flat/react`, `testing-library/flat/marko`, `testing-library/react`, `testing-library/marko`
   * @see [no-unnecessary-act](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-unnecessary-act.md)
   */
  'testing-library/no-unnecessary-act': [
    {
      isStrict?: boolean;
    }?,
  ];

  /**
   * Disallow the use of multiple `expect` calls inside `waitFor`.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [no-wait-for-multiple-assertions](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-multiple-assertions.md)
   */
  'testing-library/no-wait-for-multiple-assertions': null;

  /**
   * Disallow the use of side effects in `waitFor`.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [no-wait-for-side-effects](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-side-effects.md)
   */
  'testing-library/no-wait-for-side-effects': null;

  /**
   * Ensures no snapshot is generated inside of a `waitFor` call.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [no-wait-for-snapshot](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-wait-for-snapshot.md)
   */
  'testing-library/no-wait-for-snapshot': null;

  /**
   * Suggest using explicit assertions rather than standalone queries.
   * @see [prefer-explicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-explicit-assert.md)
   */
  'testing-library/prefer-explicit-assert': [PreferExplicitAssertOption?];

  /**
   * Suggest using `find(All)By*` query instead of `waitFor` + `get(All)By*` to wait for elements.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [prefer-find-by](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-find-by.md)
   */
  'testing-library/prefer-find-by': null;

  /**
   * Suggest using implicit assertions for getBy* & findBy* queries.
   * @see [prefer-implicit-assert](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-implicit-assert.md)
   */
  'testing-library/prefer-implicit-assert': null;

  /**
   * Ensure appropriate `get*`/`query*` queries are used with their respective matchers.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [prefer-presence-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-presence-queries.md)
   */
  'testing-library/prefer-presence-queries': [
    {
      presence?: boolean;
      absence?: boolean;
    }?,
  ];

  /**
   * Suggest using `queryBy*` queries when waiting for disappearance.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [prefer-query-by-disappearance](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-by-disappearance.md)
   */
  'testing-library/prefer-query-by-disappearance': null;

  /**
   * Ensure the configured `get*`/`query*` query is used with the corresponding matchers.
   * @see [prefer-query-matchers](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-query-matchers.md)
   */
  'testing-library/prefer-query-matchers': [PreferQueryMatchersOption?];

  /**
   * Suggest using `screen` while querying.
   * @preset `testing-library/flat/dom`, `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/dom`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [prefer-screen-queries](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-screen-queries.md)
   */
  'testing-library/prefer-screen-queries': null;

  /**
   * Suggest using `userEvent` over `fireEvent` for simulating user interactions.
   * @see [prefer-user-event](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event.md)
   */
  'testing-library/prefer-user-event': [
    {
      allowedMethods?: any[];
    }?,
  ];

  /**
   * Suggest using userEvent with setup() instead of direct methods.
   * @see [prefer-user-event-setup](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/prefer-user-event-setup.md)
   */
  'testing-library/prefer-user-event-setup': null;

  /**
   * Enforce a valid naming for return value from `render`.
   * @preset `testing-library/flat/angular`, `testing-library/flat/react`, `testing-library/flat/vue`, `testing-library/flat/svelte`, `testing-library/flat/marko`, `testing-library/angular`, `testing-library/react`, `testing-library/vue`, `testing-library/svelte`, `testing-library/marko`
   * @see [render-result-naming-convention](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/render-result-naming-convention.md)
   */
  'testing-library/render-result-naming-convention': null;
}

export type TestingLibraryRulesObject = RulesObject<TestingLibraryRules>;
