import type { EmptyRuleConfig, RuleConfig } from '../rule-config';

export type CognitiveComplexityOption = number;

export type CognitiveComplexityRuleConfig = [
  CognitiveComplexityOption?,
  ('sonar-runtime' | 'metric')?,
];

export type MaxSwitchCasesOption = number;

export interface NoDuplicateStringOption {
  threshold?: number;
  ignoreStrings?: string;
  [k: string]: any;
}

export type NoIdenticalFunctionsOption = number;

/**
 * All SonarJS rules.
 */
export interface SonarJSRules {
  /**
   * Cognitive Complexity of functions should not be too high.
   * @see [cognitive-complexity](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md)
   */
  'sonarjs/cognitive-complexity': RuleConfig<CognitiveComplexityRuleConfig>;

  /**
   * "if ... else if" constructs should end with "else" clauses.
   * @see [elseif-without-else](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/elseif-without-else.md)
   */
  'sonarjs/elseif-without-else': EmptyRuleConfig;

  /**
   * "switch" statements should not have too many "case" clauses.
   * @see [max-switch-cases](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/max-switch-cases.md)
   */
  'sonarjs/max-switch-cases': RuleConfig<[MaxSwitchCasesOption?]>;

  /**
   * All branches in a conditional structure should not have exactly the same implementation.
   * @see [no-all-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-all-duplicated-branches.md)
   */
  'sonarjs/no-all-duplicated-branches': EmptyRuleConfig;

  /**
   * Collapsible "if" statements should be merged.
   * @see [no-collapsible-if](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collapsible-if.md)
   */
  'sonarjs/no-collapsible-if': RuleConfig<['sonar-runtime'?]>;

  /**
   * Collection sizes and array length comparisons should make sense.
   * @see [no-collection-size-mischeck](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collection-size-mischeck.md)
   */
  'sonarjs/no-collection-size-mischeck': EmptyRuleConfig;

  /**
   * String literals should not be duplicated.
   * @see [no-duplicate-string](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicate-string.md)
   */
  'sonarjs/no-duplicate-string': RuleConfig<
    [NoDuplicateStringOption?, 'sonar-runtime'?]
  >;

  /**
   * Two branches in a conditional structure should not have exactly the same implementation.
   * @see [no-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicated-branches.md)
   */
  'sonarjs/no-duplicated-branches': RuleConfig<['sonar-runtime'?]>;

  /**
   * Collection elements should not be replaced unconditionally.
   * @see [no-element-overwrite](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-element-overwrite.md)
   */
  'sonarjs/no-element-overwrite': RuleConfig<['sonar-runtime'?]>;

  /**
   * Empty collections should not be accessed or iterated.
   * @see [no-empty-collection](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-empty-collection.md)
   */
  'sonarjs/no-empty-collection': EmptyRuleConfig;

  /**
   * Function calls should not pass extra arguments.
   * @see [no-extra-arguments](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-extra-arguments.md)
   */
  'sonarjs/no-extra-arguments': RuleConfig<['sonar-runtime'?]>;

  /**
   * Boolean expressions should not be gratuitous.
   * @see [no-gratuitous-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-gratuitous-expressions.md)
   */
  'sonarjs/no-gratuitous-expressions': RuleConfig<['sonar-runtime'?]>;

  /**
   * Related "if-else-if" and "switch-case" statements should not have the same condition.
   * @see [no-identical-conditions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-conditions.md)
   */
  'sonarjs/no-identical-conditions': RuleConfig<['sonar-runtime'?]>;

  /**
   * Identical expressions should not be used on both sides of a binary operator.
   * @see [no-identical-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-expressions.md)
   */
  'sonarjs/no-identical-expressions': RuleConfig<['sonar-runtime'?]>;

  /**
   * Functions should not have identical implementations.
   * @see [no-identical-functions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-functions.md)
   */
  'sonarjs/no-identical-functions': RuleConfig<
    [NoIdenticalFunctionsOption?, 'sonar-runtime'?]
  >;

  /**
   * Return values from functions without side effects should not be ignored.
   * @see [no-ignored-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-ignored-return.md)
   */
  'sonarjs/no-ignored-return': EmptyRuleConfig;

  /**
   * Boolean checks should not be inverted.
   * @see [no-inverted-boolean-check](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-inverted-boolean-check.md)
   */
  'sonarjs/no-inverted-boolean-check': EmptyRuleConfig;

  /**
   * "switch" statements should not be nested.
   * @see [no-nested-switch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-switch.md)
   */
  'sonarjs/no-nested-switch': EmptyRuleConfig;

  /**
   * Template literals should not be nested.
   * @see [no-nested-template-literals](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-template-literals.md)
   */
  'sonarjs/no-nested-template-literals': EmptyRuleConfig;

  /**
   * Loops with at most one iteration should be refactored.
   * @see [no-one-iteration-loop](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-one-iteration-loop.md)
   */
  'sonarjs/no-one-iteration-loop': EmptyRuleConfig;

  /**
   * Boolean literals should not be redundant.
   * @see [no-redundant-boolean](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-boolean.md)
   */
  'sonarjs/no-redundant-boolean': EmptyRuleConfig;

  /**
   * Jump statements should not be redundant.
   * @see [no-redundant-jump](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-jump.md)
   */
  'sonarjs/no-redundant-jump': EmptyRuleConfig;

  /**
   * Conditionals should start on new lines.
   * @see [no-same-line-conditional](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-same-line-conditional.md)
   */
  'sonarjs/no-same-line-conditional': RuleConfig<['sonar-runtime'?]>;

  /**
   * "switch" statements should have at least 3 "case" clauses.
   * @see [no-small-switch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-small-switch.md)
   */
  'sonarjs/no-small-switch': EmptyRuleConfig;

  /**
   * Collection and array contents should be used.
   * @see [no-unused-collection](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-unused-collection.md)
   */
  'sonarjs/no-unused-collection': EmptyRuleConfig;

  /**
   * The output of functions that don't return anything should not be used.
   * @see [no-use-of-empty-return-value](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-use-of-empty-return-value.md)
   */
  'sonarjs/no-use-of-empty-return-value': EmptyRuleConfig;

  /**
   * "catch" clauses should do more than rethrow.
   * @see [no-useless-catch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-useless-catch.md)
   */
  'sonarjs/no-useless-catch': EmptyRuleConfig;

  /**
   * Non-existent operators "=+", "=-" and "=!" should not be used.
   * @see [non-existent-operator](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/non-existent-operator.md)
   */
  'sonarjs/non-existent-operator': EmptyRuleConfig;

  /**
   * Local variables should not be declared and then immediately returned or thrown.
   * @see [prefer-immediate-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-immediate-return.md)
   */
  'sonarjs/prefer-immediate-return': EmptyRuleConfig;

  /**
   * Object literal syntax should be used.
   * @see [prefer-object-literal](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-object-literal.md)
   */
  'sonarjs/prefer-object-literal': EmptyRuleConfig;

  /**
   * Return of boolean expressions should not be wrapped into an "if-then-else" statement.
   * @see [prefer-single-boolean-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-single-boolean-return.md)
   */
  'sonarjs/prefer-single-boolean-return': EmptyRuleConfig;

  /**
   * A "while" loop should be used instead of a "for" loop.
   * @see [prefer-while](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-while.md)
   */
  'sonarjs/prefer-while': EmptyRuleConfig;
}
