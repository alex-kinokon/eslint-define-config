import type { EmptyRuleConfig, RuleConfig } from '../rule-config';

export interface PreferLowercaseTitleOption {
  ignore?: ('describe' | 'test' | 'it')[];
  allowedPrefixes?: string[];
  ignoreTopLevelDescribe?: boolean;
  lowercaseFirstCharacterOnly?: boolean;
}

export interface ExpectExpectOption {
  assertFunctionNames?: [] | [string];
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

export type ValidTitleOption = {
  ignoreTypeOfDescribeName?: boolean;
  allowArguments?: boolean;
  disallowedWords?: string[];
} & {
  [k: string]: any;
};

export type ValidExpectRuleConfig = [
  {
    alwaysAwait?: boolean;
    asyncMatchers?: string[];
    minArgs?: number;
    maxArgs?: number;
  }?,
];

export type PreferExpectAssertionsRuleConfig = [
  {
    onlyFunctionsWithAsyncKeyword?: boolean;
    onlyFunctionsWithExpectInLoop?: boolean;
    onlyFunctionsWithExpectInCallback?: boolean;
  }?,
];

/**
 * All Vitest rules.
 */
export interface VitestRules {
  /**
   * Enforce lowercase titles.
   * @see [prefer-lowercase-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md)
   */
  'vitest/prefer-lowercase-title': RuleConfig<[PreferLowercaseTitleOption?]>;

  /**
   * Require describe block to be less than set max value or default value.
   * @see [max-nested-describe](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-nested-describe.md)
   */
  'vitest/max-nested-describe': RuleConfig<
    [
      {
        max?: number;
      }?,
    ]
  >;

  /**
   * Disallow identical titles.
   * @see [no-identical-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-identical-title.md)
   */
  'vitest/no-identical-title': EmptyRuleConfig;

  /**
   * Disallow focused tests.
   * @see [no-focused-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-focused-tests.md)
   */
  'vitest/no-focused-tests': RuleConfig<
    [
      {
        fixable?: boolean;
      }?,
    ]
  >;

  /**
   * Disallow conditional tests.
   * @see [no-conditional-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-tests.md)
   */
  'vitest/no-conditional-tests': EmptyRuleConfig;

  /**
   * Enforce having expectation in test body.
   * @see [expect-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/expect-expect.md)
   */
  'vitest/expect-expect': RuleConfig<[ExpectExpectOption?]>;

  /**
   * Enforce using test or it but not both.
   * @see [consistent-test-it](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-it.md)
   */
  'vitest/consistent-test-it': RuleConfig<[ConsistentTestItOption?]>;

  /**
   * Enforce using toBe().
   * @see [prefer-to-be](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be.md)
   */
  'vitest/prefer-to-be': EmptyRuleConfig;

  /**
   * Disallow setup and teardown hooks.
   * @see [no-hooks](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-hooks.md)
   */
  'vitest/no-hooks': RuleConfig<
    [
      {
        allow?: any[];
      }?,
    ]
  >;

  /**
   * Disallow specific `vi.` methods.
   * @see [no-restricted-vi-methods](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-vi-methods.md)
   */
  'vitest/no-restricted-vi-methods': RuleConfig<[NoRestrictedViMethodsOption?]>;

  /**
   * Require .spec test file pattern.
   * @see [consistent-test-filename](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/consistent-test-filename.md)
   */
  'vitest/consistent-test-filename': RuleConfig<
    [
      {
        pattern?: string;
        allTestPattern?: string;
      }?,
    ]
  >;

  /**
   * Enforce a maximum number of expect per test.
   * @see [max-expects](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/max-expects.md)
   */
  'vitest/max-expects': RuleConfig<
    [
      {
        max?: number;
      }?,
    ]
  >;

  /**
   * Disallow alias methods.
   * @see [no-alias-methods](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md)
   */
  'vitest/no-alias-methods': EmptyRuleConfig;

  /**
   * Disallow commented out tests.
   * @see [no-commented-out-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-commented-out-tests.md)
   */
  'vitest/no-commented-out-tests': EmptyRuleConfig;

  /**
   * Disallow conditional expects.
   * @see [no-conditional-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-expect.md)
   */
  'vitest/no-conditional-expect': EmptyRuleConfig;

  /**
   * Disallow conditional tests.
   * @see [no-conditional-in-test](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-conditional-in-test.md)
   */
  'vitest/no-conditional-in-test': EmptyRuleConfig;

  /**
   * Disallow disabled tests.
   * @see [no-disabled-tests](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-disabled-tests.md)
   */
  'vitest/no-disabled-tests': EmptyRuleConfig;

  /**
   * Disallow using a callback in asynchronous tests and hooks.
   * @deprecated
   * @see [no-done-callback](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-done-callback.md)
   */
  'vitest/no-done-callback': EmptyRuleConfig;

  /**
   * Disallow duplicate hooks and teardown hooks.
   * @see [no-duplicate-hooks](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-duplicate-hooks.md)
   */
  'vitest/no-duplicate-hooks': EmptyRuleConfig;

  /**
   * Disallow large snapshots.
   * @see [no-large-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md)
   */
  'vitest/no-large-snapshots': RuleConfig<[NoLargeSnapshotsOption?]>;

  /**
   * Disallow string interpolation in snapshots.
   * @see [no-interpolation-in-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md)
   */
  'vitest/no-interpolation-in-snapshots': EmptyRuleConfig;

  /**
   * Disallow importing from __mocks__ directory.
   * @see [no-mocks-import](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-mocks-import.md)
   */
  'vitest/no-mocks-import': EmptyRuleConfig;

  /**
   * Disallow the use of certain matchers.
   * @see [no-restricted-matchers](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-restricted-matchers.md)
   */
  'vitest/no-restricted-matchers': RuleConfig<[NoRestrictedMatchersOption?]>;

  /**
   * Disallow using `expect` outside of `it` or `test` blocks.
   * @see [no-standalone-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-standalone-expect.md)
   */
  'vitest/no-standalone-expect': RuleConfig<
    [
      {
        additionalTestBlockFunctions?: string[];
      }?,
    ]
  >;

  /**
   * Disallow using `test` as a prefix.
   * @see [no-test-prefixes](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-prefixes.md)
   */
  'vitest/no-test-prefixes': EmptyRuleConfig;

  /**
   * Disallow return statements in tests.
   * @see [no-test-return-statement](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-test-return-statement.md)
   */
  'vitest/no-test-return-statement': EmptyRuleConfig;

  /**
   * Disallow importing `node:test`.
   * @see [no-import-node-test](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-import-node-test.md)
   */
  'vitest/no-import-node-test': EmptyRuleConfig;

  /**
   * Enforce using `toBeCalledWith()` or `toHaveBeenCalledWith()`.
   * @see [prefer-called-with](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-called-with.md)
   */
  'vitest/prefer-called-with': EmptyRuleConfig;

  /**
   * Enforce valid titles.
   * @see [valid-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-title.md)
   */
  'vitest/valid-title': RuleConfig<[ValidTitleOption?]>;

  /**
   * Enforce valid `expect()` usage.
   * @see [valid-expect](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-expect.md)
   */
  'vitest/valid-expect': RuleConfig<ValidExpectRuleConfig>;

  /**
   * Enforce using toBeFalsy().
   * @see [prefer-to-be-falsy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-falsy.md)
   */
  'vitest/prefer-to-be-falsy': EmptyRuleConfig;

  /**
   * Enforce using toBeObject().
   * @see [prefer-to-be-object](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-object.md)
   */
  'vitest/prefer-to-be-object': EmptyRuleConfig;

  /**
   * Enforce using `toBeTruthy`.
   * @see [prefer-to-be-truthy](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-be-truthy.md)
   */
  'vitest/prefer-to-be-truthy': EmptyRuleConfig;

  /**
   * Enforce using toHaveLength().
   * @see [prefer-to-have-length](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-have-length.md)
   */
  'vitest/prefer-to-have-length': EmptyRuleConfig;

  /**
   * Enforce using the built-in quality matchers.
   * @see [prefer-equality-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-equality-matcher.md)
   */
  'vitest/prefer-equality-matcher': EmptyRuleConfig;

  /**
   * Enforce strict equal over equal.
   * @see [prefer-strict-equal](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-strict-equal.md)
   */
  'vitest/prefer-strict-equal': EmptyRuleConfig;

  /**
   * Enforce using `expect().resolves` over `expect(await ...)` syntax.
   * @see [prefer-expect-resolves](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-resolves.md)
   */
  'vitest/prefer-expect-resolves': EmptyRuleConfig;

  /**
   * Enforce using `each` rather than manual loops.
   * @see [prefer-each](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-each.md)
   */
  'vitest/prefer-each': EmptyRuleConfig;

  /**
   * Enforce having hooks before any test cases.
   * @see [prefer-hooks-on-top](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-on-top.md)
   */
  'vitest/prefer-hooks-on-top': EmptyRuleConfig;

  /**
   * Enforce having hooks in consistent order.
   * @see [prefer-hooks-in-order](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-hooks-in-order.md)
   */
  'vitest/prefer-hooks-in-order': EmptyRuleConfig;

  /**
   * Require local Test Context for concurrent snapshot tests.
   * @see [require-local-test-context-for-concurrent-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-local-test-context-for-concurrent-snapshots.md)
   */
  'vitest/require-local-test-context-for-concurrent-snapshots': EmptyRuleConfig;

  /**
   * Enforce mock resolved/rejected shorthands for promises.
   * @see [prefer-mock-promise-shorthand](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-mock-promise-shorthand.md)
   */
  'vitest/prefer-mock-promise-shorthand': EmptyRuleConfig;

  /**
   * Enforce including a hint with external snapshots.
   * @see [prefer-snapshot-hint](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md)
   */
  'vitest/prefer-snapshot-hint': RuleConfig<[('always' | 'multi')?]>;

  /**
   * Enforce valid describe callback.
   * @see [valid-describe-callback](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/valid-describe-callback.md)
   */
  'vitest/valid-describe-callback': EmptyRuleConfig;

  /**
   * Enforce that all tests are in a top-level describe.
   * @see [require-top-level-describe](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-top-level-describe.md)
   */
  'vitest/require-top-level-describe': RuleConfig<
    [
      {
        maxNumberOfTopLevelDescribes?: number;
      }?,
    ]
  >;

  /**
   * Require toThrow() to be called with an error message.
   * @see [require-to-throw-message](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md)
   */
  'vitest/require-to-throw-message': EmptyRuleConfig;

  /**
   * Require setup and teardown to be within a hook.
   * @see [require-hook](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-hook.md)
   */
  'vitest/require-hook': RuleConfig<
    [
      {
        allowedFunctionCalls?: string[];
      }?,
    ]
  >;

  /**
   * Enforce using `test.todo`.
   * @see [prefer-todo](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-todo.md)
   */
  'vitest/prefer-todo': EmptyRuleConfig;

  /**
   * Enforce using `vi.spyOn`.
   * @see [prefer-spy-on](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-spy-on.md)
   */
  'vitest/prefer-spy-on': EmptyRuleConfig;

  /**
   * Enforce using the built-in comparison matchers.
   * @see [prefer-comparison-matcher](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-comparison-matcher.md)
   */
  'vitest/prefer-comparison-matcher': EmptyRuleConfig;

  /**
   * Enforce using toContain().
   * @see [prefer-to-contain](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-to-contain.md)
   */
  'vitest/prefer-to-contain': EmptyRuleConfig;

  /**
   * Enforce using expect assertions instead of callbacks.
   * @see [prefer-expect-assertions](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-expect-assertions.md)
   */
  'vitest/prefer-expect-assertions': RuleConfig<PreferExpectAssertionsRuleConfig>;
}
