import type { RulesObject } from '../rule-config';

/**
 * Whether to enforce having output assertions 'always' or to be 'consistent' when some cases have them.
 */
export type ConsistentOutputOption = 'always' | 'consistent';

/**
 * What order to enforce for meta properties.
 */
export type MetaPropertyOrderingOption = any[];

export interface NoPropertyInNodeOption {
  /**
   * Any additional regular expressions to consider source files defining AST Node types.
   */
  additionalNodeTypeFiles?: any[];
}

/**
 * Format that all report messages must match.
 */
export type ReportMessageFormatOption = string;

export interface RequireMetaDocsDescriptionOption {
  /**
   * A regular expression that the description must match. Use `'.+'` to allow anything.
   */
  pattern?: string;
}

export interface RequireMetaDocsRecommendedOption {
  /**
   * Whether to allow values of types other than boolean.
   */
  allowNonBoolean?: boolean;
}

export interface RequireMetaDocsUrlOption {
  /**
   * A pattern to enforce rule's document URL. It replaces `{{name}}` placeholder by each rule name. The rule name is the basename of each rule file. Omitting this allows any URL.
   */
  pattern?: string;
}

export interface RequireMetaFixableOption {
  /**
   * Whether the rule should attempt to detect rules that do not have a fixer but enable the `meta.fixable` property. This option is off by default because it increases the chance of false positives since fixers can't always be detected when helper functions are used.
   */
  catchNoFixerButFixableProperty?: boolean;
}

export interface RequireMetaSchemaOption {
  /**
   * Whether the rule should require the `meta.schema` property to be specified (with `schema: []`) for rules that have no options.
   */
  requireSchemaPropertyWhenOptionless?: boolean;
}

export interface RequireTestCaseNameOption {
  /**
   * When should the name property be required on a test case object.
   */
  require?: 'always' | 'objects' | 'objects-with-config';
}

/**
 * What order to enforce for test case properties.
 */
export type TestCasePropertyOrderingOption = any[];

/**
 * What behavior to enforce of when shorthand strings should be banned or required.
 */
export type TestCaseShorthandStringsOption =
  | 'as-needed'
  | 'never'
  | 'consistent'
  | 'consistent-as-needed';

/**
 * All EslintPlugin rules.
 */
export interface EslintPluginRules {
  /**
   * Enforce consistent use of `output` assertions in rule tests.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/tests`
   * @see [consistent-output](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/consistent-output.md)
   */
  'eslint-plugin/consistent-output': [ConsistentOutputOption?];

  /**
   * Require fixer functions to return a fix.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [fixer-return](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/fixer-return.md)
   */
  'eslint-plugin/fixer-return': null;

  /**
   * Enforce the order of meta properties.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/rules`
   * @see [meta-property-ordering](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/meta-property-ordering.md)
   */
  'eslint-plugin/meta-property-ordering': [MetaPropertyOrderingOption?];

  /**
   * Disallow usage of deprecated methods on rule context objects.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [no-deprecated-context-methods](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-deprecated-context-methods.md)
   */
  'eslint-plugin/no-deprecated-context-methods': null;

  /**
   * Disallow the version of `context.report()` with multiple arguments.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [no-deprecated-report-api](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-deprecated-report-api.md)
   */
  'eslint-plugin/no-deprecated-report-api': null;

  /**
   * Disallow identical tests.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/tests`, `eslint-plugin/tests-recommended`
   * @see [no-identical-tests](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-identical-tests.md)
   */
  'eslint-plugin/no-identical-tests': null;

  /**
   * Disallow using the `meta.replacedBy` rule property.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [no-meta-replaced-by](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-meta-replaced-by.md)
   */
  'eslint-plugin/no-meta-replaced-by': null;

  /**
   * Disallow rules `meta.schema` properties to include defaults.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [no-meta-schema-default](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-meta-schema-default.md)
   */
  'eslint-plugin/no-meta-schema-default': null;

  /**
   * Disallow `messageId`s that are missing from `meta.messages`.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [no-missing-message-ids](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-missing-message-ids.md)
   */
  'eslint-plugin/no-missing-message-ids': null;

  /**
   * Disallow missing placeholders in rule report messages.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [no-missing-placeholders](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-missing-placeholders.md)
   */
  'eslint-plugin/no-missing-placeholders': null;

  /**
   * Disallow the test case property `only`.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/tests`, `eslint-plugin/tests-recommended`
   * @see [no-only-tests](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-only-tests.md)
   */
  'eslint-plugin/no-only-tests': null;

  /**
   * Disallow using `in` to narrow node types instead of looking at properties.
   * @preset `eslint-plugin/all-type-checked`, `eslint-plugin/rules`
   * @see [no-property-in-node](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-property-in-node.md)
   */
  'eslint-plugin/no-property-in-node': [NoPropertyInNodeOption?];

  /**
   * Disallow unused `messageId`s in `meta.messages`.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [no-unused-message-ids](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-unused-message-ids.md)
   */
  'eslint-plugin/no-unused-message-ids': null;

  /**
   * Disallow unused placeholders in rule report messages.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [no-unused-placeholders](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-unused-placeholders.md)
   */
  'eslint-plugin/no-unused-placeholders': null;

  /**
   * Disallow unnecessary calls to `sourceCode.getFirstToken()` and `sourceCode.getLastToken()`.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [no-useless-token-range](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/no-useless-token-range.md)
   */
  'eslint-plugin/no-useless-token-range': null;

  /**
   * Require using `messageId` instead of `message` or `desc` to report rule violations.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [prefer-message-ids](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/prefer-message-ids.md)
   */
  'eslint-plugin/prefer-message-ids': null;

  /**
   * Disallow function-style rules.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [prefer-object-rule](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/prefer-object-rule.md)
   */
  'eslint-plugin/prefer-object-rule': null;

  /**
   * Disallow invalid RuleTester test cases where the `output` matches the `code`.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/tests`, `eslint-plugin/tests-recommended`
   * @see [prefer-output-null](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/prefer-output-null.md)
   */
  'eslint-plugin/prefer-output-null': null;

  /**
   * Require using placeholders for dynamic report messages.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/rules`
   * @see [prefer-placeholders](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/prefer-placeholders.md)
   */
  'eslint-plugin/prefer-placeholders': null;

  /**
   * Require using `replaceText()` instead of `replaceTextRange()`.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/rules`
   * @see [prefer-replace-text](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/prefer-replace-text.md)
   */
  'eslint-plugin/prefer-replace-text': null;

  /**
   * Enforce a consistent format for rule report messages.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/rules`
   * @see [report-message-format](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/report-message-format.md)
   */
  'eslint-plugin/report-message-format': [ReportMessageFormatOption?];

  /**
   * Require only rules with options to implement a `meta.defaultOptions` property.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [require-meta-default-options](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-default-options.md)
   */
  'eslint-plugin/require-meta-default-options': null;

  /**
   * Require rules to implement a `meta.docs.description` property with the correct format.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/rules`
   * @see [require-meta-docs-description](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-docs-description.md)
   */
  'eslint-plugin/require-meta-docs-description': [
    RequireMetaDocsDescriptionOption?,
  ];

  /**
   * Require rules to implement a `meta.docs.recommended` property.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/rules`
   * @see [require-meta-docs-recommended](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-docs-recommended.md)
   */
  'eslint-plugin/require-meta-docs-recommended': [
    RequireMetaDocsRecommendedOption?,
  ];

  /**
   * Require rules to implement a `meta.docs.url` property.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/rules`
   * @see [require-meta-docs-url](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-docs-url.md)
   */
  'eslint-plugin/require-meta-docs-url': [RequireMetaDocsUrlOption?];

  /**
   * Require rules to implement a `meta.fixable` property.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [require-meta-fixable](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-fixable.md)
   */
  'eslint-plugin/require-meta-fixable': [RequireMetaFixableOption?];

  /**
   * Require suggestable rules to implement a `meta.hasSuggestions` property.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [require-meta-has-suggestions](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-has-suggestions.md)
   */
  'eslint-plugin/require-meta-has-suggestions': null;

  /**
   * Require rules `meta.schema` properties to include descriptions.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [require-meta-schema-description](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-schema-description.md)
   */
  'eslint-plugin/require-meta-schema-description': null;

  /**
   * Require rules to implement a `meta.schema` property.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [require-meta-schema](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-schema.md)
   */
  'eslint-plugin/require-meta-schema': [RequireMetaSchemaOption?];

  /**
   * Require rules to implement a `meta.type` property.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/recommended`, `eslint-plugin/rules`, `eslint-plugin/rules-recommended`
   * @see [require-meta-type](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-meta-type.md)
   */
  'eslint-plugin/require-meta-type': null;

  /**
   * Require test cases to have a `name` property under certain conditions.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/tests`
   * @see [require-test-case-name](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/require-test-case-name.md)
   */
  'eslint-plugin/require-test-case-name': [RequireTestCaseNameOption?];

  /**
   * Require the properties of a test case to be placed in a consistent order.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/tests`
   * @see [test-case-property-ordering](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/test-case-property-ordering.md)
   */
  'eslint-plugin/test-case-property-ordering': [
    TestCasePropertyOrderingOption?,
  ];

  /**
   * Enforce consistent usage of shorthand strings for test cases with no options.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/tests`
   * @see [test-case-shorthand-strings](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/test-case-shorthand-strings.md)
   */
  'eslint-plugin/test-case-shorthand-strings': [
    TestCaseShorthandStringsOption?,
  ];

  /**
   * Enforce that all test cases with names have unique names.
   * @preset `eslint-plugin/all`, `eslint-plugin/all-type-checked`, `eslint-plugin/tests`
   * @see [unique-test-case-names](https://github.com/eslint-community/eslint-plugin-eslint-plugin/tree/HEAD/docs/rules/unique-test-case-names.md)
   */
  'eslint-plugin/unique-test-case-names': null;
}

export type EslintPluginRulesObject = RulesObject<EslintPluginRules>;
