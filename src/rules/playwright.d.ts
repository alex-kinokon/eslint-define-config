import type { RulesObject } from '../rule-config';

export interface ExpectExpectOption {
  assertFunctionNames?: [] | [string];
  assertFunctionPatterns?: [] | [string];
}

export interface NoRestrictedMatchersOption {
  [k: string]: string | null;
}

export interface PreferLowercaseTitleOption {
  allowedPrefixes?: string[];
  ignore?: ('test.describe' | 'test')[];
  ignoreTopLevelDescribe?: boolean;
}

export interface ValidTestTagsOption {
  allowedTags?: (
    | string
    | {
        source?: string;
      }
  )[];
  disallowedTags?: (
    | string
    | {
        source?: string;
      }
  )[];
}

export type ValidTitleOption = {
  disallowedWords?: string[];
  ignoreSpaces?: boolean;
  ignoreTypeOfDescribeName?: boolean;
  ignoreTypeOfStepName?: boolean;
  ignoreTypeOfTestName?: boolean;
} & {
  [k: string]:
    | string
    | [string]
    | [string, string]
    | {
        [k: string]: string | [string] | [string, string];
      };
}

/**
 * All Playwright rules.
 */
export interface PlaywrightRules {
  /**
   * Enforce assertion to be made in a test body.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [expect-expect](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/expect-expect.md)
   */
  'playwright/expect-expect': [ExpectExpectOption?];

  /**
   * Enforces a maximum number assertion calls in a test body.
   * @see [max-expects](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/max-expects.md)
   */
  'playwright/max-expects': [
    {
      max?: number;
    }?,
  ];

  /**
   * Enforces a maximum depth to nested describe calls.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [max-nested-describe](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/max-nested-describe.md)
   */
  'playwright/max-nested-describe': [
    {
      max?: number;
    }?,
  ];

  /**
   * Identify false positives when async Playwright APIs are not properly awaited.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [missing-playwright-await](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/missing-playwright-await.md)
   */
  'playwright/missing-playwright-await': [
    {
      customMatchers?: string[];
    }?,
  ];

  /**
   * Disallow commented out tests.
   * @see [no-commented-out-tests](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-commented-out-tests.md)
   */
  'playwright/no-commented-out-tests': null;

  /**
   * Disallow calling `expect` conditionally.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-conditional-expect](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-conditional-expect.md)
   */
  'playwright/no-conditional-expect': null;

  /**
   * Disallow conditional logic in tests.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-conditional-in-test](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-conditional-in-test.md)
   */
  'playwright/no-conditional-in-test': null;

  /**
   * Disallow duplicate setup and teardown hooks.
   * @see [no-duplicate-hooks](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-duplicate-hooks.md)
   */
  'playwright/no-duplicate-hooks': null;

  /**
   * The use of ElementHandle is discouraged, use Locator instead.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-element-handle](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-element-handle.md)
   */
  'playwright/no-element-handle': null;

  /**
   * The use of `page.$eval` and `page.$$eval` are discouraged, use `locator.evaluate` or `locator.evaluateAll` instead.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-eval](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-eval.md)
   */
  'playwright/no-eval': null;

  /**
   * Prevent usage of `.only()` focus test annotation.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-focused-test](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-focused-test.md)
   */
  'playwright/no-focused-test': null;

  /**
   * Prevent usage of `{ force: true }` option.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-force-option](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-force-option.md)
   */
  'playwright/no-force-option': null;

  /**
   * Disallows the usage of getByTitle().
   * @see [no-get-by-title](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-get-by-title.md)
   */
  'playwright/no-get-by-title': null;

  /**
   * Disallow setup and teardown hooks.
   * @see [no-hooks](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-hooks.md)
   */
  'playwright/no-hooks': [
    {
      allow?: any[];
    }?,
  ];

  /**
   * Disallow nested `test.step()` methods.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-nested-step](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-nested-step.md)
   */
  'playwright/no-nested-step': null;

  /**
   * Prevent usage of the networkidle option.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-networkidle](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-networkidle.md)
   */
  'playwright/no-networkidle': null;

  /**
   * Disallow usage of nth methods.
   * @see [no-nth-methods](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-nth-methods.md)
   */
  'playwright/no-nth-methods': null;

  /**
   * Prevent usage of page.pause().
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-page-pause](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-page-pause.md)
   */
  'playwright/no-page-pause': null;

  /**
   * Disallows the usage of raw locators.
   * @see [no-raw-locators](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-raw-locators.md)
   */
  'playwright/no-raw-locators': [
    {
      allowed?: string[];
    }?,
  ];

  /**
   * Disallow specific matchers & modifiers.
   * @see [no-restricted-matchers](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-restricted-matchers.md)
   */
  'playwright/no-restricted-matchers': [NoRestrictedMatchersOption?];

  /**
   * Prevent usage of the `.skip()` skip test annotation.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-skipped-test](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-skipped-test.md)
   */
  'playwright/no-skipped-test': [
    {
      allowConditional?: boolean;
    }?,
  ];

  /**
   * Prevent usage of the `.slow()` slow test annotation.
   * @see [no-slowed-test](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-slowed-test.md)
   */
  'playwright/no-slowed-test': [
    {
      allowConditional?: boolean;
    }?,
  ];

  /**
   * Disallow using `expect` outside of `test` blocks.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-standalone-expect](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-standalone-expect.md)
   */
  'playwright/no-standalone-expect': null;

  /**
   * Prevent unsafe variable references in page.evaluate() and page.addInitScript().
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-unsafe-references](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-unsafe-references.md)
   */
  'playwright/no-unsafe-references': null;

  /**
   * Disallow usage of page locators that are not used.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-unused-locators](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-unused-locators.md)
   */
  'playwright/no-unused-locators': null;

  /**
   * Disallow unnecessary awaits for Playwright methods.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-useless-await](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-useless-await.md)
   */
  'playwright/no-useless-await': null;

  /**
   * Disallow usage of 'not' matchers when a more specific matcher exists.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-useless-not](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-useless-not.md)
   */
  'playwright/no-useless-not': null;

  /**
   * Prevent usage of page.waitForNavigation().
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-wait-for-navigation](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-wait-for-navigation.md)
   */
  'playwright/no-wait-for-navigation': null;

  /**
   * Prevent usage of page.waitForSelector().
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-wait-for-selector](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-wait-for-selector.md)
   */
  'playwright/no-wait-for-selector': null;

  /**
   * Prevent usage of page.waitForTimeout().
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [no-wait-for-timeout](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/no-wait-for-timeout.md)
   */
  'playwright/no-wait-for-timeout': null;

  /**
   * Suggest using the built-in comparison matchers.
   * @see [prefer-comparison-matcher](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-comparison-matcher.md)
   */
  'playwright/prefer-comparison-matcher': null;

  /**
   * Suggest using the built-in equality matchers.
   * @see [prefer-equality-matcher](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-equality-matcher.md)
   */
  'playwright/prefer-equality-matcher': null;

  /**
   * Prefer having hooks in a consistent order.
   * @see [prefer-hooks-in-order](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-hooks-in-order.md)
   */
  'playwright/prefer-hooks-in-order': null;

  /**
   * Suggest having hooks before any test cases.
   * @see [prefer-hooks-on-top](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-hooks-on-top.md)
   */
  'playwright/prefer-hooks-on-top': null;

  /**
   * Suggest locators over page methods.
   * @see [prefer-locator](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-locator.md)
   */
  'playwright/prefer-locator': null;

  /**
   * Enforce lowercase test names.
   * @see [prefer-lowercase-title](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-lowercase-title.md)
   */
  'playwright/prefer-lowercase-title': [PreferLowercaseTitleOption?];

  /**
   * Prefer native locator functions.
   * @see [prefer-native-locators](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-native-locators.md)
   */
  'playwright/prefer-native-locators': [
    {
      testIdAttribute?: string;
    }?,
  ];

  /**
   * Suggest using `toStrictEqual()`.
   * @see [prefer-strict-equal](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-strict-equal.md)
   */
  'playwright/prefer-strict-equal': null;

  /**
   * Suggest using `toBe()` for primitive literals.
   * @see [prefer-to-be](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-to-be.md)
   */
  'playwright/prefer-to-be': null;

  /**
   * Suggest using toContain().
   * @see [prefer-to-contain](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-to-contain.md)
   */
  'playwright/prefer-to-contain': null;

  /**
   * Suggest using `toHaveCount()`.
   * @see [prefer-to-have-count](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-to-have-count.md)
   */
  'playwright/prefer-to-have-count': null;

  /**
   * Suggest using `toHaveLength()`.
   * @see [prefer-to-have-length](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-to-have-length.md)
   */
  'playwright/prefer-to-have-length': null;

  /**
   * Prefer web first assertions.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [prefer-web-first-assertions](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/prefer-web-first-assertions.md)
   */
  'playwright/prefer-web-first-assertions': null;

  /**
   * Require setup and teardown code to be within a hook.
   * @see [require-hook](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/require-hook.md)
   */
  'playwright/require-hook': [
    {
      allowedFunctionCalls?: string[];
    }?,
  ];

  /**
   * Require all assertions to use `expect.soft`.
   * @see [require-soft-assertions](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/require-soft-assertions.md)
   */
  'playwright/require-soft-assertions': null;

  /**
   * Require a message for `toThrow()`.
   * @see [require-to-throw-message](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/require-to-throw-message.md)
   */
  'playwright/require-to-throw-message': null;

  /**
   * Require test cases and hooks to be inside a `test.describe` block.
   * @see [require-top-level-describe](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/require-top-level-describe.md)
   */
  'playwright/require-top-level-describe': [
    {
      maxTopLevelDescribes?: number;
    }?,
  ];

  /**
   * Enforce valid `describe()` callback.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [valid-describe-callback](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/valid-describe-callback.md)
   */
  'playwright/valid-describe-callback': null;

  /**
   * Enforce valid `expect()` usage.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [valid-expect](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/valid-expect.md)
   */
  'playwright/valid-expect': [
    {
      maxArgs?: number;
      minArgs?: number;
    }?,
  ];

  /**
   * Require promises that have expectations in their chain to be valid.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [valid-expect-in-promise](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/valid-expect-in-promise.md)
   */
  'playwright/valid-expect-in-promise': null;

  /**
   * Enforce valid tag format in Playwright test blocks and titles.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   */
  'playwright/valid-test-tags': [ValidTestTagsOption?];

  /**
   * Enforce valid titles.
   * @preset `playwright/flat/recommended`, `playwright/playwright-test`, `playwright/recommended`
   * @see [valid-title](https://github.com/playwright-community/eslint-plugin-playwright/tree/main/docs/rules/valid-title.md)
   */
  'playwright/valid-title': [ValidTitleOption?];
}

export type PlaywrightRulesObject = RulesObject<PlaywrightRules>;
