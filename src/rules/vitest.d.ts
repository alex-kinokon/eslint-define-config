import type { RulesObject } from '../rule-config';

export interface PreferLowercaseTitleOption {
  ignore?: ('describe' | 'test' | 'it')[];
  allowedPrefixes?: string[];
  ignoreTopLevelDescribe?: boolean;
  lowercaseFirstCharacterOnly?: boolean;
}

export interface ExpectExpectOption {
  assertFunctionNames?: string[];
  additionalTestBlockFunctions?: string[];
}

export interface ConsistentTestItOption {
  fn?: 'test' | 'it';
  withinDescribe?: 'test' | 'it';
}

export interface NoRestrictedViMethodsOption {
  [k: string]: string | null;
}

export interface NoLargeSnapshotsOption {
  maxSize?: number;
  inlineMaxSize?: number;
  allowedSnapshots?: {
    [k: string]: any[];
  };
}

export interface NoRestrictedMatchersOption {
  [k: string]: string | null;
}

export interface NoStandaloneExpectOption {
  additionaltestblockfunctions?: string[];
  [k: string]: any;
}

export type ValidTitleOption = {
  ignoreTypeOfDescribeName?: boolean;
  allowArguments?: boolean;
  disallowedWords?: string[];
} & {
  [k: string]:
    | string
    | [string]
    | [string, string]
    | {
        [k: string]: string | [string] | [string, string];
      };
};

/**
 * All Vitest rules.
 */
export interface VitestRules {
  /**
   * Enforce lowercase titles.
   * @see [prefer-lowercase-title](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md)
   */
  'vitest/prefer-lowercase-title': [PreferLowercaseTitleOption?];

  /**
   * Require describe block to be less than set max value or default value.
   * @see [max-nested-describe](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md)
   */
  'vitest/max-nested-describe': [
    {
      max?: number;
    }?,
  ];

  /**
   * Disallow identical titles.
   * @see [no-identical-title](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md)
   */
  'vitest/no-identical-title': null;

  /**
   * Disallow focused tests.
   * @see [no-focused-tests](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md)
   */
  'vitest/no-focused-tests': [
    {
      fixable?: boolean;
    }?,
  ];

  /**
   * Disallow conditional tests.
   * @see [no-conditional-tests](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md)
   */
  'vitest/no-conditional-tests': null;

  /**
   * Enforce having expectation in test body.
   * @see [expect-expect](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md)
   */
  'vitest/expect-expect': [ExpectExpectOption?];

  /**
   * Enforce using test or it but not both.
   * @see [consistent-test-it](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md)
   */
  'vitest/consistent-test-it': [ConsistentTestItOption?];

  /**
   * Enforce using toBe().
   * @see [prefer-to-be](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md)
   */
  'vitest/prefer-to-be': null;

  /**
   * Disallow setup and teardown hooks.
   * @see [no-hooks](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md)
   */
  'vitest/no-hooks': [
    {
      allow?: any[];
    }?,
  ];

  /**
   * Disallow specific `vi.` methods.
   * @see [no-restricted-vi-methods](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md)
   */
  'vitest/no-restricted-vi-methods': [NoRestrictedViMethodsOption?];

  /**
   * Require .spec test file pattern.
   * @see [consistent-test-filename](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md)
   */
  'vitest/consistent-test-filename': [
    {
      pattern?: string;
      allTestPattern?: string;
    }?,
  ];

  /**
   * Enforce a maximum number of expect per test.
   * @see [max-expects](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md)
   */
  'vitest/max-expects': [
    {
      max?: number;
    }?,
  ];

  /**
   * Disallow alias methods.
   * @see [no-alias-methods](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md)
   */
  'vitest/no-alias-methods': null;

  /**
   * Disallow commented out tests.
   * @see [no-commented-out-tests](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md)
   */
  'vitest/no-commented-out-tests': null;

  /**
   * Disallow conditional expects.
   * @see [no-conditional-expect](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md)
   */
  'vitest/no-conditional-expect': null;

  /**
   * Disallow conditional tests.
   * @see [no-conditional-in-test](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md)
   */
  'vitest/no-conditional-in-test': null;

  /**
   * Disallow disabled tests.
   * @see [no-disabled-tests](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md)
   */
  'vitest/no-disabled-tests': null;

  /**
   * Disallow using a callback in asynchronous tests and hooks.
   * @deprecated
   * @see [no-done-callback](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md)
   */
  'vitest/no-done-callback': null;

  /**
   * Disallow duplicate hooks and teardown hooks.
   * @see [no-duplicate-hooks](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md)
   */
  'vitest/no-duplicate-hooks': null;

  /**
   * Disallow large snapshots.
   * @see [no-large-snapshots](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md)
   */
  'vitest/no-large-snapshots': [NoLargeSnapshotsOption?];

  /**
   * Disallow string interpolation in snapshots.
   * @see [no-interpolation-in-snapshots](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md)
   */
  'vitest/no-interpolation-in-snapshots': null;

  /**
   * Disallow importing from __mocks__ directory.
   * @see [no-mocks-import](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md)
   */
  'vitest/no-mocks-import': null;

  /**
   * Disallow the use of certain matchers.
   * @see [no-restricted-matchers](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md)
   */
  'vitest/no-restricted-matchers': [NoRestrictedMatchersOption?];

  /**
   * Disallow using `expect` outside of `it` or `test` blocks.
   * @see [no-standalone-expect](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md)
   */
  'vitest/no-standalone-expect': [NoStandaloneExpectOption?];

  /**
   * Disallow using `test` as a prefix.
   * @see [no-test-prefixes](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md)
   */
  'vitest/no-test-prefixes': null;

  /**
   * Disallow return statements in tests.
   * @see [no-test-return-statement](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md)
   */
  'vitest/no-test-return-statement': null;

  /**
   * Disallow importing `node:test`.
   * @see [no-import-node-test](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md)
   */
  'vitest/no-import-node-test': null;

  /**
   * Enforce using `toBeCalledWith()` or `toHaveBeenCalledWith()`.
   * @see [prefer-called-with](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md)
   */
  'vitest/prefer-called-with': null;

  /**
   * Enforce valid titles.
   * @see [valid-title](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md)
   */
  'vitest/valid-title': [ValidTitleOption?];

  /**
   * Enforce valid `expect()` usage.
   * @see [valid-expect](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md)
   */
  'vitest/valid-expect': [
    {
      alwaysAwait?: boolean;
      asyncMatchers?: string[];
      minArgs?: number;
      maxArgs?: number;
    }?,
  ];

  /**
   * Enforce using toBeFalsy().
   * @see [prefer-to-be-falsy](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md)
   */
  'vitest/prefer-to-be-falsy': null;

  /**
   * Enforce using toBeObject().
   * @see [prefer-to-be-object](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md)
   */
  'vitest/prefer-to-be-object': null;

  /**
   * Enforce using `toBeTruthy`.
   * @see [prefer-to-be-truthy](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md)
   */
  'vitest/prefer-to-be-truthy': null;

  /**
   * Enforce using toHaveLength().
   * @see [prefer-to-have-length](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md)
   */
  'vitest/prefer-to-have-length': null;

  /**
   * Enforce using the built-in quality matchers.
   * @see [prefer-equality-matcher](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md)
   */
  'vitest/prefer-equality-matcher': null;

  /**
   * Enforce strict equal over equal.
   * @see [prefer-strict-equal](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md)
   */
  'vitest/prefer-strict-equal': null;

  /**
   * Enforce using `expect().resolves` over `expect(await ...)` syntax.
   * @see [prefer-expect-resolves](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md)
   */
  'vitest/prefer-expect-resolves': null;

  /**
   * Enforce using `each` rather than manual loops.
   * @see [prefer-each](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md)
   */
  'vitest/prefer-each': null;

  /**
   * Enforce having hooks before any test cases.
   * @see [prefer-hooks-on-top](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md)
   */
  'vitest/prefer-hooks-on-top': null;

  /**
   * Enforce having hooks in consistent order.
   * @see [prefer-hooks-in-order](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md)
   */
  'vitest/prefer-hooks-in-order': null;

  /**
   * Require local Test Context for concurrent snapshot tests.
   * @see [require-local-test-context-for-concurrent-snapshots](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md)
   */
  'vitest/require-local-test-context-for-concurrent-snapshots': null;

  /**
   * Enforce mock resolved/rejected shorthands for promises.
   * @see [prefer-mock-promise-shorthand](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md)
   */
  'vitest/prefer-mock-promise-shorthand': null;

  /**
   * Prefer `vi.mocked()` over `fn as Mock`.
   * @see [prefer-vi-mocked](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-vi-mocked.md)
   */
  'vitest/prefer-vi-mocked': null;

  /**
   * Enforce including a hint with external snapshots.
   * @see [prefer-snapshot-hint](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md)
   */
  'vitest/prefer-snapshot-hint': [('always' | 'multi')?];

  /**
   * Enforce valid describe callback.
   * @see [valid-describe-callback](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md)
   */
  'vitest/valid-describe-callback': null;

  /**
   * Enforce that all tests are in a top-level describe.
   * @see [require-top-level-describe](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md)
   */
  'vitest/require-top-level-describe': [
    {
      maxNumberOfTopLevelDescribes?: number;
    }?,
  ];

  /**
   * Require toThrow() to be called with an error message.
   * @see [require-to-throw-message](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md)
   */
  'vitest/require-to-throw-message': null;

  /**
   * Require setup and teardown to be within a hook.
   * @see [require-hook](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md)
   */
  'vitest/require-hook': [
    {
      allowedFunctionCalls?: string[];
    }?,
  ];

  /**
   * Enforce using `test.todo`.
   * @see [prefer-todo](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md)
   */
  'vitest/prefer-todo': null;

  /**
   * Enforce using `vi.spyOn`.
   * @see [prefer-spy-on](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md)
   */
  'vitest/prefer-spy-on': null;

  /**
   * Enforce using the built-in comparison matchers.
   * @see [prefer-comparison-matcher](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md)
   */
  'vitest/prefer-comparison-matcher': null;

  /**
   * Enforce using toContain().
   * @see [prefer-to-contain](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md)
   */
  'vitest/prefer-to-contain': null;

  /**
   * Enforce using expect assertions instead of callbacks.
   * @see [prefer-expect-assertions](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md)
   */
  'vitest/prefer-expect-assertions': [
    {
      onlyFunctionsWithAsyncKeyword?: boolean;
      onlyFunctionsWithExpectInLoop?: boolean;
      onlyFunctionsWithExpectInCallback?: boolean;
    }?,
  ];

  /**
   * Enforce padding around `afterAll` blocks.
   * @see [padding-around-after-all-blocks](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-after-all-blocks.md)
   */
  'vitest/padding-around-after-all-blocks': null;

  /**
   * Enforce padding around `afterEach` blocks.
   * @see [padding-around-after-each-blocks](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-after-each-blocks.md)
   */
  'vitest/padding-around-after-each-blocks': null;

  /**
   * Enforce padding around vitest functions.
   * @see [padding-around-all](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-all.md)
   */
  'vitest/padding-around-all': null;

  /**
   * Enforce padding around `beforeAll` blocks.
   * @see [padding-around-before-all-blocks](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-before-all-blocks.md)
   */
  'vitest/padding-around-before-all-blocks': null;

  /**
   * Enforce padding around `beforeEach` blocks.
   * @see [padding-around-before-each-blocks](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-before-each-blocks.md)
   */
  'vitest/padding-around-before-each-blocks': null;

  /**
   * Enforce padding around `describe` blocks.
   * @see [padding-around-describe-blocks](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-describe-blocks.md)
   */
  'vitest/padding-around-describe-blocks': null;

  /**
   * Enforce padding around `expect` groups.
   * @see [padding-around-expect-groups](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-expect-groups.md)
   */
  'vitest/padding-around-expect-groups': null;

  /**
   * Enforce padding around afterAll blocks.
   * @see [padding-around-test-blocks](https://github.com/vitest-dev/eslint-plugin-vitest/blob/main/docs/rules/padding-around-test-blocks.md)
   */
  'vitest/padding-around-test-blocks': null;
}

export type VitestRulesObject = RulesObject<VitestRules>;
