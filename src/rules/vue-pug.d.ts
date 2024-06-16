import type { EmptyRuleConfig, RuleConfig } from '../rule-config';

export type ComponentNameInTemplateCasingRuleConfig = [
  ('PascalCase' | 'kebab-case')?,
  {
    globals?: string[];
    ignores?: string[];
    registeredComponentsOnly?: boolean;
  }?,
];

export type NoParsingErrorRuleConfig = [
  {
    ASSERT_FAILED?: boolean;
    SYNTAX_ERROR?: boolean;
    INCORRECT_NESTING?: boolean;
    NO_END_BRACKET?: boolean;
    BRACKET_MISMATCH?: boolean;
    INVALID_ID?: boolean;
    INVALID_CLASS_NAME?: boolean;
    NO_EXTENDS_PATH?: boolean;
    MALFORMED_EXTENDS?: boolean;
    NO_INCLUDE_PATH?: boolean;
    MALFORMED_INCLUDE?: boolean;
    NO_CASE_EXPRESSION?: boolean;
    NO_WHEN_EXPRESSION?: boolean;
    DEFAULT_WITH_EXPRESSION?: boolean;
    ELSE_CONDITION?: boolean;
    NO_WHILE_EXPRESSION?: boolean;
    MALFORMED_EACH?: boolean;
    MALFORMED_EACH_OF_LVAL?: boolean;
    INVALID_KEY_CHARACTER?: boolean;
    INVALID_INDENTATION?: boolean;
    INCONSISTENT_INDENTATION?: boolean;
    UNEXPECTED_TEXT?: boolean;
    INVALID_TOKEN?: boolean;
    BLOCK_IN_BUFFERED_CODE?: boolean;
    BLOCK_OUTISDE_MIXIN?: boolean;
    RAW_INCLUDE_BLOCK?: boolean;
    MIXIN_WITHOUT_BODY?: boolean;
  }?,
];

/**
 * All VuePug rules.
 */
export interface VuePugRules {
  /**
   * Enforce specific casing for the component naming style in template.
   * @see [component-name-in-template-casing](https://eslint-plugin-vue-pug.rash.codes/rules/component-name-in-template-casing.html)
   */
  'vue-pug/component-name-in-template-casing': RuleConfig<ComponentNameInTemplateCasingRuleConfig>;

  /**
   * Disallow parsing errors in `<template lang="pug">`.
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'vue-pug/no-parsing-error': RuleConfig<NoParsingErrorRuleConfig>;

  /**
   * Disallow pug control flow features.
   * @see [no-pug-control-flow](https://eslint-plugin-vue-pug.rash.codes/rules/no-pug-control-flow.html)
   */
  'vue-pug/no-pug-control-flow': EmptyRuleConfig;
}
