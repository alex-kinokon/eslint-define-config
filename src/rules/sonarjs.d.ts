import type { RulesObject } from '../rule-config';

/**
 * @minItems 0
 * @maxItems 1
 */
export type FunctionNameOption =
  | []
  | [
      {
        format?: string;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type ClassNameOption =
  | []
  | [
      {
        format?: string;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type MaxLinesOption =
  | []
  | [
      {
        maximum?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type VariableNameOption =
  | []
  | [
      {
        format?: string;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type CommentRegexOption =
  | []
  | [
      {
        regularExpression?: string;
        message?: string;
        flags?: string;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NestedControlFlowOption =
  | []
  | [
      {
        maximumNestingLevel?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type MaxLinesPerFunctionOption =
  | []
  | [
      {
        maximum?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type ExpressionComplexityOption =
  | []
  | [
      {
        max?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NoDuplicateStringOption =
  | []
  | [
      {
        threshold?: number;
        ignoreStrings?: string;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type FileHeaderOption =
  | []
  | [
      {
        headerFormat?: string;
        isRegularExpression?: boolean;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type MaxSwitchCasesOption = [] | [number];

/**
 * @minItems 0
 * @maxItems 1
 */
export type CyclomaticComplexityOption =
  | []
  | [
      {
        threshold?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NoNestedFunctionsOption =
  | []
  | [
      {
        threshold?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NoHardcodedPasswordsOption =
  | []
  | [
      {
        passwordWords?: string[];
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NewOperatorMisuseOption =
  | []
  | [
      {
        considerJSDoc?: boolean;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type ArrowFunctionConventionOption =
  | []
  | [
      {
        requireParameterParentheses?: boolean;
        requireBodyBraces?: boolean;
      },
    ];

export namespace EnforceTrailingComma {
  export type EnforceTrailingCommaOption =
    | []
    | [
        | Value
        | {
            arrays?: ValueWithIgnore;
            objects?: ValueWithIgnore;
            imports?: ValueWithIgnore;
            exports?: ValueWithIgnore;
            functions?: ValueWithIgnore;
          },
      ];
  export type Value =
    | 'always-multiline'
    | 'always'
    | 'never'
    | 'only-multiline';
  export type ValueWithIgnore =
    | 'always-multiline'
    | 'always'
    | 'ignore'
    | 'never'
    | 'only-multiline';

  export type EnforceTrailingCommaRuleConfig = EnforceTrailingCommaOption;
}

/**
 * @minItems 0
 * @maxItems 2
 */
export type CognitiveComplexityOption =
  | []
  | [number | string]
  | [number | string, string];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NoIdenticalFunctionsOption = [] | [number];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NoImplicitDependenciesOption =
  | []
  | [
      {
        whitelist?: string[];
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type MaxUnionSizeOption =
  | []
  | [
      {
        threshold?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NoIntrusivePermissionsOption =
  | []
  | [
      {
        permissions?: string[];
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type ContentLengthOption =
  | []
  | [
      {
        fileUploadSizeLimit?: number;
        standardSizeLimit?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type RegexComplexityOption =
  | []
  | [
      {
        threshold?: number;
      },
    ];

/**
 * @minItems 0
 * @maxItems 1
 */
export type NoHardcodedSecretsOption =
  | []
  | [
      {
        secretWords?: string;
        randomnessSensibility?: number;
      },
    ];

/**
 * All SonarJS rules.
 */
export interface SonarJSRules {
  /**
   * Function and method names should comply with a naming convention.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [function-name](https://sonarsource.github.io/rspec/#/rspec/S100/javascript)
   */
  'sonarjs/function-name': FunctionNameOption;

  /**
   * Class names should comply with a naming convention.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [class-name](https://sonarsource.github.io/rspec/#/rspec/S101/javascript)
   */
  'sonarjs/class-name': ClassNameOption;

  /**
   * Files should not have too many lines of code.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [max-lines](https://sonarsource.github.io/rspec/#/rspec/S104/javascript)
   */
  'sonarjs/max-lines': MaxLinesOption;

  /**
   * Tabulation characters should not be used.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-tab](https://sonarsource.github.io/rspec/#/rspec/S105/javascript)
   */
  'sonarjs/no-tab': null;

  /**
   * Variable, property and parameter names should comply with a naming convention.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [variable-name](https://sonarsource.github.io/rspec/#/rspec/S117/javascript)
   */
  'sonarjs/variable-name': VariableNameOption;

  /**
   * Track comments matching a regular expression.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [comment-regex](https://sonarsource.github.io/rspec/#/rspec/S124/javascript)
   */
  'sonarjs/comment-regex': CommentRegexOption;

  /**
   * Sections of code should not be commented out.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-commented-code](https://sonarsource.github.io/rspec/#/rspec/S125/javascript)
   */
  'sonarjs/no-commented-code': null;

  /**
   * "if ... else if" constructs should end with "else" clauses.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [elseif-without-else](https://sonarsource.github.io/rspec/#/rspec/S126/javascript)
   */
  'sonarjs/elseif-without-else': null;

  /**
   * Switch cases should end with an unconditional "break" statement.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-fallthrough](https://sonarsource.github.io/rspec/#/rspec/S128/javascript)
   */
  'sonarjs/no-fallthrough': null;

  /**
   * Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [nested-control-flow](https://sonarsource.github.io/rspec/#/rspec/S134/javascript)
   */
  'sonarjs/nested-control-flow': NestedControlFlowOption;

  /**
   * Loops should not contain more than a single "break" or "continue" statement.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [too-many-break-or-continue-in-loop](https://sonarsource.github.io/rspec/#/rspec/S135/javascript)
   */
  'sonarjs/too-many-break-or-continue-in-loop': null;

  /**
   * Functions should not have too many lines of code.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [max-lines-per-function](https://sonarsource.github.io/rspec/#/rspec/S138/javascript)
   */
  'sonarjs/max-lines-per-function': MaxLinesPerFunctionOption;

  /**
   * Increment (++) and decrement (--) operators should not be used in a method call or mixed with other operators in an expression.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-nested-incdec](https://sonarsource.github.io/rspec/#/rspec/S881/javascript)
   */
  'sonarjs/no-nested-incdec': null;

  /**
   * Equality operators should not be used in "for" loop termination conditions.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-equals-in-for-termination](https://sonarsource.github.io/rspec/#/rspec/S888/javascript)
   */
  'sonarjs/no-equals-in-for-termination': null;

  /**
   * Function calls should not pass extra arguments.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-extra-arguments](https://sonarsource.github.io/rspec/#/rspec/S930/javascript)
   */
  'sonarjs/no-extra-arguments': null;

  /**
   * Mergeable "if" statements should be combined.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-collapsible-if](https://sonarsource.github.io/rspec/#/rspec/S1066/javascript)
   */
  'sonarjs/no-collapsible-if': null;

  /**
   * Expressions should not be too complex.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [expression-complexity](https://sonarsource.github.io/rspec/#/rspec/S1067/javascript)
   */
  'sonarjs/expression-complexity': ExpressionComplexityOption;

  /**
   * Redundant pairs of parentheses should be removed.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-redundant-parentheses](https://sonarsource.github.io/rspec/#/rspec/S1110/javascript)
   */
  'sonarjs/no-redundant-parentheses': null;

  /**
   * Labels should not be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-labels](https://sonarsource.github.io/rspec/#/rspec/S1119/javascript)
   */
  'sonarjs/no-labels': null;

  /**
   * Assignments should not be made from within sub-expressions.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-nested-assignment](https://sonarsource.github.io/rspec/#/rspec/S1121/javascript)
   */
  'sonarjs/no-nested-assignment': null;

  /**
   * Boolean literals should not be used in comparisons.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-redundant-boolean](https://sonarsource.github.io/rspec/#/rspec/S1125/javascript)
   */
  'sonarjs/no-redundant-boolean': null;

  /**
   * Return of boolean expressions should not be wrapped into an "if-then-else" statement.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [prefer-single-boolean-return](https://sonarsource.github.io/rspec/#/rspec/S1126/javascript)
   */
  'sonarjs/prefer-single-boolean-return': null;

  /**
   * Unnecessary imports should be removed.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [unused-import](https://sonarsource.github.io/rspec/#/rspec/S1128/javascript)
   */
  'sonarjs/unused-import': null;

  /**
   * Track uses of "FIXME" tags.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [fixme-tag](https://sonarsource.github.io/rspec/#/rspec/S1134/javascript)
   */
  'sonarjs/fixme-tag': null;

  /**
   * Track uses of "TODO" tags.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [todo-tag](https://sonarsource.github.io/rspec/#/rspec/S1135/javascript)
   */
  'sonarjs/todo-tag': null;

  /**
   * Results of operations on strings should not be ignored.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [useless-string-operation](https://sonarsource.github.io/rspec/#/rspec/S1154/javascript)
   */
  'sonarjs/useless-string-operation': null;

  /**
   * Unused function parameters should be removed.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-unused-function-argument](https://sonarsource.github.io/rspec/#/rspec/S1172/javascript)
   */
  'sonarjs/no-unused-function-argument': null;

  /**
   * String literals should not be duplicated.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-duplicate-string](https://sonarsource.github.io/rspec/#/rspec/S1192/javascript)
   */
  'sonarjs/no-duplicate-string': NoDuplicateStringOption;

  /**
   * "switch" statements should not contain non-case labels.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-case-label-in-switch](https://sonarsource.github.io/rspec/#/rspec/S1219/javascript)
   */
  'sonarjs/no-case-label-in-switch': null;

  /**
   * Initial values of parameters, caught exceptions, and loop variables should not be ignored.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-parameter-reassignment](https://sonarsource.github.io/rspec/#/rspec/S1226/javascript)
   */
  'sonarjs/no-parameter-reassignment': null;

  /**
   * A "while" loop should be used instead of a "for" loop.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [prefer-while](https://sonarsource.github.io/rspec/#/rspec/S1264/javascript)
   */
  'sonarjs/prefer-while': null;

  /**
   * Track uses of "NOSONAR" comments.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-sonar-comments](https://sonarsource.github.io/rspec/#/rspec/S1291/javascript)
   */
  'sonarjs/no-sonar-comments': null;

  /**
   * "if" statements should be preferred over "switch" when simpler.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-small-switch](https://sonarsource.github.io/rspec/#/rspec/S1301/javascript)
   */
  'sonarjs/no-small-switch': null;

  /**
   * Using hardcoded IP addresses is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-hardcoded-ip](https://sonarsource.github.io/rspec/#/rspec/S1313/javascript)
   */
  'sonarjs/no-hardcoded-ip': null;

  /**
   * Only "while", "do", "for" and "switch" statements should be labelled.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [label-position](https://sonarsource.github.io/rspec/#/rspec/S1439/javascript)
   */
  'sonarjs/label-position': null;

  /**
   * Public "static" fields should be read-only.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [public-static-readonly](https://sonarsource.github.io/rspec/#/rspec/S1444/javascript)
   */
  'sonarjs/public-static-readonly': null;

  /**
   * Track lack of copyright and license headers.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [file-header](https://sonarsource.github.io/rspec/#/rspec/S1451/javascript)
   */
  'sonarjs/file-header': FileHeaderOption;

  /**
   * Function call arguments should not start on new lines.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [call-argument-line](https://sonarsource.github.io/rspec/#/rspec/S1472/javascript)
   */
  'sonarjs/call-argument-line': null;

  /**
   * "switch" statements should not have too many "case" clauses.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [max-switch-cases](https://sonarsource.github.io/rspec/#/rspec/S1479/javascript)
   */
  'sonarjs/max-switch-cases': MaxSwitchCasesOption;

  /**
   * Unused local variables and functions should be removed.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-unused-vars](https://sonarsource.github.io/rspec/#/rspec/S1481/javascript)
   */
  'sonarjs/no-unused-vars': null;

  /**
   * Local variables should not be declared and then immediately returned or thrown.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [prefer-immediate-return](https://sonarsource.github.io/rspec/#/rspec/S1488/javascript)
   */
  'sonarjs/prefer-immediate-return': null;

  /**
   * Functions should not be defined inside loops.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [function-inside-loop](https://sonarsource.github.io/rspec/#/rspec/S1515/javascript)
   */
  'sonarjs/function-inside-loop': null;

  /**
   * Dynamically executing code is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [code-eval](https://sonarsource.github.io/rspec/#/rspec/S1523/javascript)
   */
  'sonarjs/code-eval': null;

  /**
   * Variables declared with "var" should be declared before they are used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-variable-usage-before-declaration](https://sonarsource.github.io/rspec/#/rspec/S1526/javascript)
   */
  'sonarjs/no-variable-usage-before-declaration': null;

  /**
   * Future reserved words should not be used as identifiers.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [future-reserved-words](https://sonarsource.github.io/rspec/#/rspec/S1527/javascript)
   */
  'sonarjs/future-reserved-words': null;

  /**
   * Array constructors should not be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [array-constructor](https://sonarsource.github.io/rspec/#/rspec/S1528/javascript)
   */
  'sonarjs/array-constructor': null;

  /**
   * Bitwise operators should not be used in boolean contexts.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [bitwise-operators](https://sonarsource.github.io/rspec/#/rspec/S1529/javascript)
   */
  'sonarjs/bitwise-operators': null;

  /**
   * Function declarations should not be made within blocks.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-function-declaration-in-block](https://sonarsource.github.io/rspec/#/rspec/S1530/javascript)
   */
  'sonarjs/no-function-declaration-in-block': null;

  /**
   * Wrapper objects should not be used for primitive types.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-primitive-wrappers](https://sonarsource.github.io/rspec/#/rspec/S1533/javascript)
   */
  'sonarjs/no-primitive-wrappers': null;

  /**
   * "for...in" loops should filter properties before acting on them.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [for-in](https://sonarsource.github.io/rspec/#/rspec/S1535/javascript)
   */
  'sonarjs/for-in': null;

  /**
   * Cyclomatic Complexity of functions should not be too high.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [cyclomatic-complexity](https://sonarsource.github.io/rspec/#/rspec/S1541/javascript)
   */
  'sonarjs/cyclomatic-complexity': CyclomaticComplexityOption;

  /**
   * Tests should not be skipped without providing a reason.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-skipped-tests](https://sonarsource.github.io/rspec/#/rspec/S1607/javascript)
   */
  'sonarjs/no-skipped-tests': null;

  /**
   * Identical expressions should not be used on both sides of a binary operator.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-identical-expressions](https://sonarsource.github.io/rspec/#/rspec/S1764/javascript)
   */
  'sonarjs/no-identical-expressions': null;

  /**
   * "switch" statements should not be nested.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-nested-switch](https://sonarsource.github.io/rspec/#/rspec/S1821/javascript)
   */
  'sonarjs/no-nested-switch': null;

  /**
   * Objects should not be created to be dropped immediately without being used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [constructor-for-side-effects](https://sonarsource.github.io/rspec/#/rspec/S1848/javascript)
   */
  'sonarjs/constructor-for-side-effects': null;

  /**
   * Unused assignments should be removed.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-dead-store](https://sonarsource.github.io/rspec/#/rspec/S1854/javascript)
   */
  'sonarjs/no-dead-store': null;

  /**
   * "if/else if" chains and "switch" cases should not have the same condition.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-identical-conditions](https://sonarsource.github.io/rspec/#/rspec/S1862/javascript)
   */
  'sonarjs/no-identical-conditions': null;

  /**
   * Two branches in a conditional structure should not have exactly the same implementation.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-duplicated-branches](https://sonarsource.github.io/rspec/#/rspec/S1871/javascript)
   */
  'sonarjs/no-duplicated-branches': null;

  /**
   * Deprecated APIs should not be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [deprecation](https://sonarsource.github.io/rspec/#/rspec/S1874/javascript)
   */
  'sonarjs/deprecation': null;

  /**
   * Boolean checks should not be inverted.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-inverted-boolean-check](https://sonarsource.github.io/rspec/#/rspec/S1940/javascript)
   */
  'sonarjs/no-inverted-boolean-check': null;

  /**
   * "for" loop increment clauses should modify the loops' counters.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [misplaced-loop-counter](https://sonarsource.github.io/rspec/#/rspec/S1994/javascript)
   */
  'sonarjs/misplaced-loop-counter': null;

  /**
   * Functions should not be nested too deeply.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-nested-functions](https://sonarsource.github.io/rspec/#/rspec/S2004/javascript)
   */
  'sonarjs/no-nested-functions': NoNestedFunctionsOption;

  /**
   * Hard-coded passwords are security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-hardcoded-passwords](https://sonarsource.github.io/rspec/#/rspec/S2068/javascript)
   */
  'sonarjs/no-hardcoded-passwords': NoHardcodedPasswordsOption;

  /**
   * Formatting SQL queries is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [sql-queries](https://sonarsource.github.io/rspec/#/rspec/S2077/javascript)
   */
  'sonarjs/sql-queries': null;

  /**
   * Creating cookies without the "secure" flag is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [insecure-cookie](https://sonarsource.github.io/rspec/#/rspec/S2092/javascript)
   */
  'sonarjs/insecure-cookie': null;

  /**
   * Values should not be uselessly incremented.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-useless-increment](https://sonarsource.github.io/rspec/#/rspec/S2123/javascript)
   */
  'sonarjs/no-useless-increment': null;

  /**
   * Special identifiers should not be bound or assigned.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-globals-shadowing](https://sonarsource.github.io/rspec/#/rspec/S2137/javascript)
   */
  'sonarjs/no-globals-shadowing': null;

  /**
   * "undefined" should not be assigned.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-undefined-assignment](https://sonarsource.github.io/rspec/#/rspec/S2138/javascript)
   */
  'sonarjs/no-undefined-assignment': null;

  /**
   * Test files should contain at least one test case.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-empty-test-file](https://sonarsource.github.io/rspec/#/rspec/S2187/javascript)
   */
  'sonarjs/no-empty-test-file': null;

  /**
   * Return values from functions without side effects should not be ignored.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-ignored-return](https://sonarsource.github.io/rspec/#/rspec/S2201/javascript)
   */
  'sonarjs/no-ignored-return': null;

  /**
   * Wildcard imports should not be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-wildcard-import](https://sonarsource.github.io/rspec/#/rspec/S2208/javascript)
   */
  'sonarjs/no-wildcard-import': null;

  /**
   * Parameters should be passed in the correct order.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [arguments-order](https://sonarsource.github.io/rspec/#/rspec/S2234/javascript)
   */
  'sonarjs/arguments-order': null;

  /**
   * Using pseudorandom number generators (PRNGs) is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [pseudo-random](https://sonarsource.github.io/rspec/#/rspec/S2245/javascript)
   */
  'sonarjs/pseudo-random': null;

  /**
   * A "for" loop update clause should move the counter in the right direction.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [for-loop-increment-sign](https://sonarsource.github.io/rspec/#/rspec/S2251/javascript)
   */
  'sonarjs/for-loop-increment-sign': null;

  /**
   * Writing cookies is security-sensitive.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [cookies](https://sonarsource.github.io/rspec/#/rspec/S2255/javascript)
   */
  'sonarjs/cookies': null;

  /**
   * Properties of variables with "null" or "undefined" values should not be accessed.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [null-dereference](https://sonarsource.github.io/rspec/#/rspec/S2259/javascript)
   */
  'sonarjs/null-dereference': null;

  /**
   * Methods should not contain selector parameters.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-selector-parameter](https://sonarsource.github.io/rspec/#/rspec/S2301/javascript)
   */
  'sonarjs/no-selector-parameter': null;

  /**
   * Loop counters should not be assigned within the loop body.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [updated-loop-counter](https://sonarsource.github.io/rspec/#/rspec/S2310/javascript)
   */
  'sonarjs/updated-loop-counter': null;

  /**
   * Variables should be used in the blocks where they are declared.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [block-scoped-var](https://sonarsource.github.io/rspec/#/rspec/S2392/javascript)
   */
  'sonarjs/block-scoped-var': null;

  /**
   * Built-in objects should not be overridden.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-built-in-override](https://sonarsource.github.io/rspec/#/rspec/S2424/javascript)
   */
  'sonarjs/no-built-in-override': null;

  /**
   * Object literal syntax should be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [prefer-object-literal](https://sonarsource.github.io/rspec/#/rspec/S2428/javascript)
   */
  'sonarjs/prefer-object-literal': null;

  /**
   * Exceptions should not be ignored.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-ignored-exceptions](https://sonarsource.github.io/rspec/#/rspec/S2486/javascript)
   */
  'sonarjs/no-ignored-exceptions': null;

  /**
   * Boolean expressions should not be gratuitous.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-gratuitous-expressions](https://sonarsource.github.io/rspec/#/rspec/S2589/javascript)
   */
  'sonarjs/no-gratuitous-expressions': null;

  /**
   * File uploads should be restricted.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [file-uploads](https://sonarsource.github.io/rspec/#/rspec/S2598/javascript)
   */
  'sonarjs/file-uploads': null;

  /**
   * Setting loose POSIX file permissions is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [file-permissions](https://sonarsource.github.io/rspec/#/rspec/S2612/javascript)
   */
  'sonarjs/file-permissions': null;

  /**
   * Empty character classes should not be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-empty-character-class](https://sonarsource.github.io/rspec/#/rspec/S2639/javascript)
   */
  'sonarjs/no-empty-character-class': null;

  /**
   * Multiline blocks should be enclosed in curly braces.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-unenclosed-multiline-block](https://sonarsource.github.io/rspec/#/rspec/S2681/javascript)
   */
  'sonarjs/no-unenclosed-multiline-block': null;

  /**
   * "indexOf" checks should not be for positive numbers.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [index-of-compare-to-positive-number](https://sonarsource.github.io/rspec/#/rspec/S2692/javascript)
   */
  'sonarjs/index-of-compare-to-positive-number': null;

  /**
   * Tests should include assertions.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [assertions-in-tests](https://sonarsource.github.io/rspec/#/rspec/S2699/javascript)
   */
  'sonarjs/assertions-in-tests': null;

  /**
   * Variables should be declared explicitly.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-implicit-global](https://sonarsource.github.io/rspec/#/rspec/S2703/javascript)
   */
  'sonarjs/no-implicit-global': null;

  /**
   * "catch" clauses should do more than rethrow.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-useless-catch](https://sonarsource.github.io/rspec/#/rspec/S2737/javascript)
   */
  'sonarjs/no-useless-catch': null;

  /**
   * XML parsers should not be vulnerable to XXE attacks.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [xml-parser-xxe](https://sonarsource.github.io/rspec/#/rspec/S2755/javascript)
   */
  'sonarjs/xml-parser-xxe': null;

  /**
   * Non-existent operators '=+', '=-' and '=!' should not be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [non-existent-operator](https://sonarsource.github.io/rspec/#/rspec/S2757/javascript)
   */
  'sonarjs/non-existent-operator': null;

  /**
   * Web SQL databases should not be used.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [web-sql-database](https://sonarsource.github.io/rspec/#/rspec/S2817/javascript)
   */
  'sonarjs/web-sql-database': null;

  /**
   * Origins should be verified during cross-origin communications.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [post-message](https://sonarsource.github.io/rspec/#/rspec/S2819/javascript)
   */
  'sonarjs/post-message': null;

  /**
   * "delete" should not be used on arrays.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-array-delete](https://sonarsource.github.io/rspec/#/rspec/S2870/javascript)
   */
  'sonarjs/no-array-delete': null;

  /**
   * "Array.prototype.sort()" and "Array.prototype.toSorted()" should use a compare function.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-alphabetical-sort](https://sonarsource.github.io/rspec/#/rspec/S2871/javascript)
   */
  'sonarjs/no-alphabetical-sort': null;

  /**
   * Assertions should be complete.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-incomplete-assertions](https://sonarsource.github.io/rspec/#/rspec/S2970/javascript)
   */
  'sonarjs/no-incomplete-assertions': null;

  /**
   * The global "this" object should not be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-global-this](https://sonarsource.github.io/rspec/#/rspec/S2990/javascript)
   */
  'sonarjs/no-global-this': null;

  /**
   * "new" should only be used with functions and classes.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [new-operator-misuse](https://sonarsource.github.io/rspec/#/rspec/S2999/javascript)
   */
  'sonarjs/new-operator-misuse': NewOperatorMisuseOption;

  /**
   * "delete" should be used only with object properties.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-delete-var](https://sonarsource.github.io/rspec/#/rspec/S3001/javascript)
   */
  'sonarjs/no-delete-var': null;

  /**
   * Comparison operators should not be used with strings.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [strings-comparison](https://sonarsource.github.io/rspec/#/rspec/S3003/javascript)
   */
  'sonarjs/strings-comparison': null;

  /**
   * Default export names and file names should match.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [file-name-differ-from-class](https://sonarsource.github.io/rspec/#/rspec/S3317/javascript)
   */
  'sonarjs/file-name-differ-from-class': null;

  /**
   * Creating cookies without the "HttpOnly" flag is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [cookie-no-httponly](https://sonarsource.github.io/rspec/#/rspec/S3330/javascript)
   */
  'sonarjs/cookie-no-httponly': null;

  /**
   * Ternary operators should not be nested.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-nested-conditional](https://sonarsource.github.io/rspec/#/rspec/S3358/javascript)
   */
  'sonarjs/no-nested-conditional': null;

  /**
   * Strings and non-strings should not be added.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-incorrect-string-concat](https://sonarsource.github.io/rspec/#/rspec/S3402/javascript)
   */
  'sonarjs/no-incorrect-string-concat': null;

  /**
   * Strict equality operators should not be used with dissimilar types.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [different-types-comparison](https://sonarsource.github.io/rspec/#/rspec/S3403/javascript)
   */
  'sonarjs/different-types-comparison': null;

  /**
   * Assertion arguments should be passed in the correct order.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [inverted-assertion-arguments](https://sonarsource.github.io/rspec/#/rspec/S3415/javascript)
   */
  'sonarjs/inverted-assertion-arguments': null;

  /**
   * Shorthand object properties should be grouped at the beginning or end of an object declaration.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [shorthand-property-grouping](https://sonarsource.github.io/rspec/#/rspec/S3499/javascript)
   */
  'sonarjs/shorthand-property-grouping': null;

  /**
   * "const" variables should not be reassigned.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [updated-const-var](https://sonarsource.github.io/rspec/#/rspec/S3500/javascript)
   */
  'sonarjs/updated-const-var': null;

  /**
   * "arguments" should not be accessed directly.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [arguments-usage](https://sonarsource.github.io/rspec/#/rspec/S3513/javascript)
   */
  'sonarjs/arguments-usage': null;

  /**
   * Destructuring syntax should be used for assignments.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [destructuring-assignment-syntax](https://sonarsource.github.io/rspec/#/rspec/S3514/javascript)
   */
  'sonarjs/destructuring-assignment-syntax': null;

  /**
   * Function returns should not be invariant.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-invariant-returns](https://sonarsource.github.io/rspec/#/rspec/S3516/javascript)
   */
  'sonarjs/no-invariant-returns': null;

  /**
   * Braces and parentheses should be used consistently with arrow functions.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [arrow-function-convention](https://sonarsource.github.io/rspec/#/rspec/S3524/javascript)
   */
  'sonarjs/arrow-function-convention': ArrowFunctionConventionOption;

  /**
   * Class methods should be used instead of "prototype" assignments.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [class-prototype](https://sonarsource.github.io/rspec/#/rspec/S3525/javascript)
   */
  'sonarjs/class-prototype': null;

  /**
   * Generators should explicitly "yield" a value.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [generator-without-yield](https://sonarsource.github.io/rspec/#/rspec/S3531/javascript)
   */
  'sonarjs/generator-without-yield': null;

  /**
   * "import" should be used to include external code.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-require-or-define](https://sonarsource.github.io/rspec/#/rspec/S3533/javascript)
   */
  'sonarjs/no-require-or-define': null;

  /**
   * Array indexes should be numeric.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-associative-arrays](https://sonarsource.github.io/rspec/#/rspec/S3579/javascript)
   */
  'sonarjs/no-associative-arrays': null;

  /**
   * Comma and logical OR operators should not be used in switch cases.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [comma-or-logical-or-case](https://sonarsource.github.io/rspec/#/rspec/S3616/javascript)
   */
  'sonarjs/comma-or-logical-or-case': null;

  /**
   * Jump statements should not be redundant.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-redundant-jump](https://sonarsource.github.io/rspec/#/rspec/S3626/javascript)
   */
  'sonarjs/no-redundant-jump': null;

  /**
   * Functions should be called consistently with or without "new".
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [inconsistent-function-call](https://sonarsource.github.io/rspec/#/rspec/S3686/javascript)
   */
  'sonarjs/inconsistent-function-call': null;

  /**
   * The return value of void functions should not be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-use-of-empty-return-value](https://sonarsource.github.io/rspec/#/rspec/S3699/javascript)
   */
  'sonarjs/no-use-of-empty-return-value': null;

  /**
   * Trailing commas should be used.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [enforce-trailing-comma](https://sonarsource.github.io/rspec/#/rspec/S3723/javascript)
   */
  'sonarjs/enforce-trailing-comma': EnforceTrailingComma.EnforceTrailingCommaRuleConfig;

  /**
   * "void" should not be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [void-use](https://sonarsource.github.io/rspec/#/rspec/S3735/javascript)
   */
  'sonarjs/void-use': null;

  /**
   * Arithmetic operations should not result in "NaN".
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [operation-returning-nan](https://sonarsource.github.io/rspec/#/rspec/S3757/javascript)
   */
  'sonarjs/operation-returning-nan': null;

  /**
   * Values not convertible to numbers should not be used in numeric comparisons.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [values-not-convertible-to-numbers](https://sonarsource.github.io/rspec/#/rspec/S3758/javascript)
   */
  'sonarjs/values-not-convertible-to-numbers': null;

  /**
   * Arithmetic operators should only have numbers as operands.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [non-number-in-arithmetic-expression](https://sonarsource.github.io/rspec/#/rspec/S3760/javascript)
   */
  'sonarjs/non-number-in-arithmetic-expression': null;

  /**
   * Cognitive Complexity of functions should not be too high.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [cognitive-complexity](https://sonarsource.github.io/rspec/#/rspec/S3776/javascript)
   */
  'sonarjs/cognitive-complexity': CognitiveComplexityOption;

  /**
   * Arguments to built-in functions should match documented types.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [argument-type](https://sonarsource.github.io/rspec/#/rspec/S3782/javascript)
   */
  'sonarjs/argument-type': null;

  /**
   * "in" should not be used with primitive types.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [in-operator-type-error](https://sonarsource.github.io/rspec/#/rspec/S3785/javascript)
   */
  'sonarjs/in-operator-type-error': null;

  /**
   * Callbacks of array methods should have return statements.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [array-callback-without-return](https://sonarsource.github.io/rspec/#/rspec/S3796/javascript)
   */
  'sonarjs/array-callback-without-return': null;

  /**
   * Variables and functions should not be declared in the global scope.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [declarations-in-global-scope](https://sonarsource.github.io/rspec/#/rspec/S3798/javascript)
   */
  'sonarjs/declarations-in-global-scope': null;

  /**
   * Functions should always return the same type.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [function-return-type](https://sonarsource.github.io/rspec/#/rspec/S3800/javascript)
   */
  'sonarjs/function-return-type': null;

  /**
   * Functions should use "return" consistently.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-inconsistent-returns](https://sonarsource.github.io/rspec/#/rspec/S3801/javascript)
   */
  'sonarjs/no-inconsistent-returns': null;

  /**
   * Variables should be defined before being used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-reference-error](https://sonarsource.github.io/rspec/#/rspec/S3827/javascript)
   */
  'sonarjs/no-reference-error': null;

  /**
   * "super()" should be invoked appropriately.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [super-invocation](https://sonarsource.github.io/rspec/#/rspec/S3854/javascript)
   */
  'sonarjs/super-invocation': null;

  /**
   * All branches in a conditional structure should not have exactly the same implementation.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-all-duplicated-branches](https://sonarsource.github.io/rspec/#/rspec/S3923/javascript)
   */
  'sonarjs/no-all-duplicated-branches': null;

  /**
   * Conditionals should start on new lines.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-same-line-conditional](https://sonarsource.github.io/rspec/#/rspec/S3972/javascript)
   */
  'sonarjs/no-same-line-conditional': null;

  /**
   * A conditionally executed single line should be denoted by indentation.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [conditional-indentation](https://sonarsource.github.io/rspec/#/rspec/S3973/javascript)
   */
  'sonarjs/conditional-indentation': null;

  /**
   * Collection size and array length comparisons should make sense.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-collection-size-mischeck](https://sonarsource.github.io/rspec/#/rspec/S3981/javascript)
   */
  'sonarjs/no-collection-size-mischeck': null;

  /**
   * Errors should not be created without being thrown.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-unthrown-error](https://sonarsource.github.io/rspec/#/rspec/S3984/javascript)
   */
  'sonarjs/no-unthrown-error': null;

  /**
   * Collection contents should be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-unused-collection](https://sonarsource.github.io/rspec/#/rspec/S4030/javascript)
   */
  'sonarjs/no-unused-collection': null;

  /**
   * Searching OS commands in PATH is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-os-command-from-path](https://sonarsource.github.io/rspec/#/rspec/S4036/javascript)
   */
  'sonarjs/no-os-command-from-path': null;

  /**
   * Array-mutating methods should not be used misleadingly.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-misleading-array-reverse](https://sonarsource.github.io/rspec/#/rspec/S4043/javascript)
   */
  'sonarjs/no-misleading-array-reverse': null;

  /**
   * "for in" should not be used with iterables.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-for-in-iterable](https://sonarsource.github.io/rspec/#/rspec/S4139/javascript)
   */
  'sonarjs/no-for-in-iterable': null;

  /**
   * Collection elements should not be replaced unconditionally.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-element-overwrite](https://sonarsource.github.io/rspec/#/rspec/S4143/javascript)
   */
  'sonarjs/no-element-overwrite': null;

  /**
   * Functions should not have identical implementations.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-identical-functions](https://sonarsource.github.io/rspec/#/rspec/S4144/javascript)
   */
  'sonarjs/no-identical-functions': NoIdenticalFunctionsOption;

  /**
   * Empty collections should not be accessed or iterated.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-empty-collection](https://sonarsource.github.io/rspec/#/rspec/S4158/javascript)
   */
  'sonarjs/no-empty-collection': null;

  /**
   * Assignments should not be redundant.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-redundant-assignments](https://sonarsource.github.io/rspec/#/rspec/S4165/javascript)
   */
  'sonarjs/no-redundant-assignments': null;

  /**
   * Type predicates should be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [prefer-type-guard](https://sonarsource.github.io/rspec/#/rspec/S4322/javascript)
   */
  'sonarjs/prefer-type-guard': null;

  /**
   * Type aliases should be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [use-type-alias](https://sonarsource.github.io/rspec/#/rspec/S4323/javascript)
   */
  'sonarjs/use-type-alias': null;

  /**
   * Primitive return types should be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-return-type-any](https://sonarsource.github.io/rspec/#/rspec/S4324/javascript)
   */
  'sonarjs/no-return-type-any': null;

  /**
   * Dependencies should be explicit.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-implicit-dependencies](https://sonarsource.github.io/rspec/#/rspec/S4328/javascript)
   */
  'sonarjs/no-implicit-dependencies': NoImplicitDependenciesOption;

  /**
   * Type intersections should use meaningful types.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-useless-intersection](https://sonarsource.github.io/rspec/#/rspec/S4335/javascript)
   */
  'sonarjs/no-useless-intersection': null;

  /**
   * Weak SSL/TLS protocols should not be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [weak-ssl](https://sonarsource.github.io/rspec/#/rspec/S4423/javascript)
   */
  'sonarjs/weak-ssl': null;

  /**
   * Cryptographic keys should be robust.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-weak-keys](https://sonarsource.github.io/rspec/#/rspec/S4426/javascript)
   */
  'sonarjs/no-weak-keys': null;

  /**
   * Disabling CSRF protections is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [csrf](https://sonarsource.github.io/rspec/#/rspec/S4502/javascript)
   */
  'sonarjs/csrf': null;

  /**
   * Delivering code in production with debug features activated is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [production-debug](https://sonarsource.github.io/rspec/#/rspec/S4507/javascript)
   */
  'sonarjs/production-debug': null;

  /**
   * "default" clauses should be last.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [prefer-default-last](https://sonarsource.github.io/rspec/#/rspec/S4524/javascript)
   */
  'sonarjs/prefer-default-last': null;

  /**
   * "in" should not be used on arrays.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-in-misuse](https://sonarsource.github.io/rspec/#/rspec/S4619/javascript)
   */
  'sonarjs/no-in-misuse': null;

  /**
   * Union and intersection types should not include duplicated constituents.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-duplicate-in-composite](https://sonarsource.github.io/rspec/#/rspec/S4621/javascript)
   */
  'sonarjs/no-duplicate-in-composite': null;

  /**
   * Union types should not have too many elements.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [max-union-size](https://sonarsource.github.io/rspec/#/rspec/S4622/javascript)
   */
  'sonarjs/max-union-size': MaxUnionSizeOption;

  /**
   * "undefined" should not be passed as the value of optional parameters.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-undefined-argument](https://sonarsource.github.io/rspec/#/rspec/S4623/javascript)
   */
  'sonarjs/no-undefined-argument': null;

  /**
   * Template literals should not be nested.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-nested-template-literals](https://sonarsource.github.io/rspec/#/rspec/S4624/javascript)
   */
  'sonarjs/no-nested-template-literals': null;

  /**
   * Shorthand promises should be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [prefer-promise-shorthand](https://sonarsource.github.io/rspec/#/rspec/S4634/javascript)
   */
  'sonarjs/prefer-promise-shorthand': null;

  /**
   * Using shell interpreter when executing OS commands is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [os-command](https://sonarsource.github.io/rspec/#/rspec/S4721/javascript)
   */
  'sonarjs/os-command': null;

  /**
   * Optional property declarations should not use both '?' and 'undefined' syntax.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-redundant-optional](https://sonarsource.github.io/rspec/#/rspec/S4782/javascript)
   */
  'sonarjs/no-redundant-optional': null;

  /**
   * Using regular expressions is security-sensitive.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [regular-expr](https://sonarsource.github.io/rspec/#/rspec/S4784/javascript)
   */
  'sonarjs/regular-expr': null;

  /**
   * Encrypting data is security-sensitive.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [encryption](https://sonarsource.github.io/rspec/#/rspec/S4787/javascript)
   */
  'sonarjs/encryption': null;

  /**
   * Using weak hashing algorithms is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [hashing](https://sonarsource.github.io/rspec/#/rspec/S4790/javascript)
   */
  'sonarjs/hashing': null;

  /**
   * Optional boolean parameters should have default value.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [bool-param-default](https://sonarsource.github.io/rspec/#/rspec/S4798/javascript)
   */
  'sonarjs/bool-param-default': null;

  /**
   * Executing XPath expressions is security-sensitive.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [xpath](https://sonarsource.github.io/rspec/#/rspec/S4817/javascript)
   */
  'sonarjs/xpath': null;

  /**
   * Using Sockets is security-sensitive.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [sockets](https://sonarsource.github.io/rspec/#/rspec/S4818/javascript)
   */
  'sonarjs/sockets': null;

  /**
   * Promise rejections should not be caught by "try" blocks.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-try-promise](https://sonarsource.github.io/rspec/#/rspec/S4822/javascript)
   */
  'sonarjs/no-try-promise': null;

  /**
   * Using command line arguments is security-sensitive.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [process-argv](https://sonarsource.github.io/rspec/#/rspec/S4823/javascript)
   */
  'sonarjs/process-argv': null;

  /**
   * Reading the Standard Input is security-sensitive.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [standard-input](https://sonarsource.github.io/rspec/#/rspec/S4829/javascript)
   */
  'sonarjs/standard-input': null;

  /**
   * Server certificates should be verified during SSL/TLS connections.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [unverified-certificate](https://sonarsource.github.io/rspec/#/rspec/S4830/javascript)
   */
  'sonarjs/unverified-certificate': null;

  /**
   * Expanding archive files without controlling resource consumption is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-unsafe-unzip](https://sonarsource.github.io/rspec/#/rspec/S5042/javascript)
   */
  'sonarjs/no-unsafe-unzip': null;

  /**
   * Having a permissive Cross-Origin Resource Sharing policy is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [cors](https://sonarsource.github.io/rspec/#/rspec/S5122/javascript)
   */
  'sonarjs/cors': null;

  /**
   * Authorizing an opened window to access back to the originating window is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [link-with-target-blank](https://sonarsource.github.io/rspec/#/rspec/S5148/javascript)
   */
  'sonarjs/link-with-target-blank': null;

  /**
   * Disabling auto-escaping in template engines is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [disabled-auto-escaping](https://sonarsource.github.io/rspec/#/rspec/S5247/javascript)
   */
  'sonarjs/disabled-auto-escaping': null;

  /**
   * Tables should have headers.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [table-header](https://sonarsource.github.io/rspec/#/rspec/S5256/javascript)
   */
  'sonarjs/table-header': null;

  /**
   * HTML "<table>" should not be used for layout purposes.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-table-as-layout](https://sonarsource.github.io/rspec/#/rspec/S5257/javascript)
   */
  'sonarjs/no-table-as-layout': null;

  /**
   * Table cells should reference their headers.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [table-header-reference](https://sonarsource.github.io/rspec/#/rspec/S5260/javascript)
   */
  'sonarjs/table-header-reference': null;

  /**
   * "<object>" tags should provide an alternative content.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [object-alt-content](https://sonarsource.github.io/rspec/#/rspec/S5264/javascript)
   */
  'sonarjs/object-alt-content': null;

  /**
   * Using clear-text protocols is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-clear-text-protocols](https://sonarsource.github.io/rspec/#/rspec/S5332/javascript)
   */
  'sonarjs/no-clear-text-protocols': null;

  /**
   * Using publicly writable directories is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [publicly-writable-directories](https://sonarsource.github.io/rspec/#/rspec/S5443/javascript)
   */
  'sonarjs/publicly-writable-directories': null;

  /**
   * Server hostnames should be verified during SSL/TLS connections.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [unverified-hostname](https://sonarsource.github.io/rspec/#/rspec/S5527/javascript)
   */
  'sonarjs/unverified-hostname': null;

  /**
   * Encryption algorithms should be used with secure mode and padding scheme.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [encryption-secure-mode](https://sonarsource.github.io/rspec/#/rspec/S5542/javascript)
   */
  'sonarjs/encryption-secure-mode': null;

  /**
   * Cipher algorithms should be robust.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-weak-cipher](https://sonarsource.github.io/rspec/#/rspec/S5547/javascript)
   */
  'sonarjs/no-weak-cipher': null;

  /**
   * Using intrusive permissions is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-intrusive-permissions](https://sonarsource.github.io/rspec/#/rspec/S5604/javascript)
   */
  'sonarjs/no-intrusive-permissions': NoIntrusivePermissionsOption;

  /**
   * JWT should be signed and verified with strong cipher algorithms.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [insecure-jwt-token](https://sonarsource.github.io/rspec/#/rspec/S5659/javascript)
   */
  'sonarjs/insecure-jwt-token': null;

  /**
   * Disclosing fingerprints from web application technologies is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [x-powered-by](https://sonarsource.github.io/rspec/#/rspec/S5689/javascript)
   */
  'sonarjs/x-powered-by': null;

  /**
   * Statically serving hidden files is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [hidden-files](https://sonarsource.github.io/rspec/#/rspec/S5691/javascript)
   */
  'sonarjs/hidden-files': null;

  /**
   * Allowing requests with excessive content length is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [content-length](https://sonarsource.github.io/rspec/#/rspec/S5693/javascript)
   */
  'sonarjs/content-length': ContentLengthOption;

  /**
   * Using remote artifacts without integrity checks is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [disabled-resource-integrity](https://sonarsource.github.io/rspec/#/rspec/S5725/javascript)
   */
  'sonarjs/disabled-resource-integrity': null;

  /**
   * Disabling content security policy fetch directives is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [content-security-policy](https://sonarsource.github.io/rspec/#/rspec/S5728/javascript)
   */
  'sonarjs/content-security-policy': null;

  /**
   * Allowing mixed-content is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-mixed-content](https://sonarsource.github.io/rspec/#/rspec/S5730/javascript)
   */
  'sonarjs/no-mixed-content': null;

  /**
   * Disabling content security policy frame-ancestors directive is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [frame-ancestors](https://sonarsource.github.io/rspec/#/rspec/S5732/javascript)
   */
  'sonarjs/frame-ancestors': null;

  /**
   * Allowing browsers to sniff MIME types is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-mime-sniff](https://sonarsource.github.io/rspec/#/rspec/S5734/javascript)
   */
  'sonarjs/no-mime-sniff': null;

  /**
   * Disabling strict HTTP no-referrer policy is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-referrer-policy](https://sonarsource.github.io/rspec/#/rspec/S5736/javascript)
   */
  'sonarjs/no-referrer-policy': null;

  /**
   * Disabling Strict-Transport-Security policy is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [strict-transport-security](https://sonarsource.github.io/rspec/#/rspec/S5739/javascript)
   */
  'sonarjs/strict-transport-security': null;

  /**
   * Disabling Certificate Transparency monitoring is security-sensitive.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [certificate-transparency](https://sonarsource.github.io/rspec/#/rspec/S5742/javascript)
   */
  'sonarjs/certificate-transparency': null;

  /**
   * Allowing browsers to perform DNS prefetching is security-sensitive.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [dns-prefetching](https://sonarsource.github.io/rspec/#/rspec/S5743/javascript)
   */
  'sonarjs/dns-prefetching': null;

  /**
   * Allowing confidential information to be logged is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [confidential-information-logging](https://sonarsource.github.io/rspec/#/rspec/S5757/javascript)
   */
  'sonarjs/confidential-information-logging': null;

  /**
   * Forwarding client IP address is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-ip-forward](https://sonarsource.github.io/rspec/#/rspec/S5759/javascript)
   */
  'sonarjs/no-ip-forward': null;

  /**
   * Repeated patterns in regular expressions should not match the empty string.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [empty-string-repetition](https://sonarsource.github.io/rspec/#/rspec/S5842/javascript)
   */
  'sonarjs/empty-string-repetition': null;

  /**
   * Regular expressions should not be too complicated.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [regex-complexity](https://sonarsource.github.io/rspec/#/rspec/S5843/javascript)
   */
  'sonarjs/regex-complexity': RegexComplexityOption;

  /**
   * Alternatives in regular expressions should be grouped when used with anchors.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [anchor-precedence](https://sonarsource.github.io/rspec/#/rspec/S5850/javascript)
   */
  'sonarjs/anchor-precedence': null;

  /**
   * Using slow regular expressions is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [slow-regex](https://sonarsource.github.io/rspec/#/rspec/S5852/javascript)
   */
  'sonarjs/slow-regex': null;

  /**
   * Regular expressions should be syntactically valid.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-invalid-regexp](https://sonarsource.github.io/rspec/#/rspec/S5856/javascript)
   */
  'sonarjs/no-invalid-regexp': null;

  /**
   * Names of regular expressions named groups should be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [unused-named-groups](https://sonarsource.github.io/rspec/#/rspec/S5860/javascript)
   */
  'sonarjs/unused-named-groups': null;

  /**
   * Assertions should not be given twice the same argument.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-same-argument-assert](https://sonarsource.github.io/rspec/#/rspec/S5863/javascript)
   */
  'sonarjs/no-same-argument-assert': null;

  /**
   * Regular expressions using Unicode character classes or property escapes should enable the unicode flag.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [unicode-aware-regex](https://sonarsource.github.io/rspec/#/rspec/S5867/javascript)
   */
  'sonarjs/unicode-aware-regex': null;

  /**
   * Unicode Grapheme Clusters should be avoided inside regex character classes.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-misleading-character-class](https://sonarsource.github.io/rspec/#/rspec/S5868/javascript)
   */
  'sonarjs/no-misleading-character-class': null;

  /**
   * Character classes in regular expressions should not contain the same character twice.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [duplicates-in-character-class](https://sonarsource.github.io/rspec/#/rspec/S5869/javascript)
   */
  'sonarjs/duplicates-in-character-class': null;

  /**
   * A new session should be created during user authentication.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [session-regeneration](https://sonarsource.github.io/rspec/#/rspec/S5876/javascript)
   */
  'sonarjs/session-regeneration': null;

  /**
   * Tests should check which exception is thrown.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [test-check-exception](https://sonarsource.github.io/rspec/#/rspec/S5958/javascript)
   */
  'sonarjs/test-check-exception': null;

  /**
   * Tests should be stable.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [stable-tests](https://sonarsource.github.io/rspec/#/rspec/S5973/javascript)
   */
  'sonarjs/stable-tests': null;

  /**
   * Reluctant quantifiers in regular expressions should be followed by an expression that can't match the empty string.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-empty-after-reluctant](https://sonarsource.github.io/rspec/#/rspec/S6019/javascript)
   */
  'sonarjs/no-empty-after-reluctant': null;

  /**
   * Single-character alternations in regular expressions should be replaced with character classes.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [single-character-alternation](https://sonarsource.github.io/rspec/#/rspec/S6035/javascript)
   */
  'sonarjs/single-character-alternation': null;

  /**
   * Tests should not execute any code after "done()" is called.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-code-after-done](https://sonarsource.github.io/rspec/#/rspec/S6079/javascript)
   */
  'sonarjs/no-code-after-done': null;

  /**
   * Disabling Mocha timeouts should be explicit.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [disabled-timeout](https://sonarsource.github.io/rspec/#/rspec/S6080/javascript)
   */
  'sonarjs/disabled-timeout': null;

  /**
   * Chai assertions should have only one reason to succeed.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [chai-determinate-assertion](https://sonarsource.github.io/rspec/#/rspec/S6092/javascript)
   */
  'sonarjs/chai-determinate-assertion': null;

  /**
   * Disabling server-side encryption of S3 buckets is security-sensitive.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-s3-bucket-server-encryption](https://sonarsource.github.io/rspec/#/rspec/S6245/javascript)
   */
  'sonarjs/aws-s3-bucket-server-encryption': null;

  /**
   * Authorizing HTTP communications with S3 buckets is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-s3-bucket-insecure-http](https://sonarsource.github.io/rspec/#/rspec/S6249/javascript)
   */
  'sonarjs/aws-s3-bucket-insecure-http': null;

  /**
   * Disabling versioning of S3 buckets is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-s3-bucket-versioning](https://sonarsource.github.io/rspec/#/rspec/S6252/javascript)
   */
  'sonarjs/aws-s3-bucket-versioning': null;

  /**
   * Granting access to S3 buckets to all or authenticated users is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-s3-bucket-granted-access](https://sonarsource.github.io/rspec/#/rspec/S6265/javascript)
   */
  'sonarjs/aws-s3-bucket-granted-access': null;

  /**
   * Disabling Angular built-in sanitization is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-angular-bypass-sanitization](https://sonarsource.github.io/rspec/#/rspec/S6268/javascript)
   */
  'sonarjs/no-angular-bypass-sanitization': null;

  /**
   * Policies authorizing public access to resources are security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-iam-public-access](https://sonarsource.github.io/rspec/#/rspec/S6270/javascript)
   */
  'sonarjs/aws-iam-public-access': null;

  /**
   * Using unencrypted EBS volumes is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-ec2-unencrypted-ebs-volume](https://sonarsource.github.io/rspec/#/rspec/S6275/javascript)
   */
  'sonarjs/aws-ec2-unencrypted-ebs-volume': null;

  /**
   * Allowing public ACLs or policies on a S3 bucket is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-s3-bucket-public-access](https://sonarsource.github.io/rspec/#/rspec/S6281/javascript)
   */
  'sonarjs/aws-s3-bucket-public-access': null;

  /**
   * Disabling Vue.js built-in escaping is security-sensitive.
   * @deprecated
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-vue-bypass-sanitization](https://sonarsource.github.io/rspec/#/rspec/S6299/javascript)
   */
  'sonarjs/no-vue-bypass-sanitization': null;

  /**
   * Policies granting all privileges are security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-iam-all-privileges](https://sonarsource.github.io/rspec/#/rspec/S6302/javascript)
   */
  'sonarjs/aws-iam-all-privileges': null;

  /**
   * Using unencrypted RDS DB resources is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-rds-unencrypted-databases](https://sonarsource.github.io/rspec/#/rspec/S6303/javascript)
   */
  'sonarjs/aws-rds-unencrypted-databases': null;

  /**
   * Policies granting access to all resources of an account are security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-iam-all-resources-accessible](https://sonarsource.github.io/rspec/#/rspec/S6304/javascript)
   */
  'sonarjs/aws-iam-all-resources-accessible': null;

  /**
   * Using unencrypted Elasticsearch domains is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-opensearchservice-domain](https://sonarsource.github.io/rspec/#/rspec/S6308/javascript)
   */
  'sonarjs/aws-opensearchservice-domain': null;

  /**
   * AWS IAM policies should limit the scope of permissions given.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-iam-privilege-escalation](https://sonarsource.github.io/rspec/#/rspec/S6317/javascript)
   */
  'sonarjs/aws-iam-privilege-escalation': null;

  /**
   * Using unencrypted SageMaker notebook instances is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-sagemaker-unencrypted-notebook](https://sonarsource.github.io/rspec/#/rspec/S6319/javascript)
   */
  'sonarjs/aws-sagemaker-unencrypted-notebook': null;

  /**
   * Administration services access should be restricted to specific IP addresses.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-restricted-ip-admin-access](https://sonarsource.github.io/rspec/#/rspec/S6321/javascript)
   */
  'sonarjs/aws-restricted-ip-admin-access': null;

  /**
   * Alternation in regular expressions should not contain empty alternatives.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-empty-alternatives](https://sonarsource.github.io/rspec/#/rspec/S6323/javascript)
   */
  'sonarjs/no-empty-alternatives': null;

  /**
   * Regular expressions should not contain control characters.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-control-regex](https://sonarsource.github.io/rspec/#/rspec/S6324/javascript)
   */
  'sonarjs/no-control-regex': null;

  /**
   * Regular expressions should not contain multiple spaces.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-regex-spaces](https://sonarsource.github.io/rspec/#/rspec/S6326/javascript)
   */
  'sonarjs/no-regex-spaces': null;

  /**
   * Using unencrypted SNS topics is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-sns-unencrypted-topics](https://sonarsource.github.io/rspec/#/rspec/S6327/javascript)
   */
  'sonarjs/aws-sns-unencrypted-topics': null;

  /**
   * Replacement strings should reference existing regular expression groups.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [existing-groups](https://sonarsource.github.io/rspec/#/rspec/S6328/javascript)
   */
  'sonarjs/existing-groups': null;

  /**
   * Allowing public network access to cloud resources is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-ec2-rds-dms-public](https://sonarsource.github.io/rspec/#/rspec/S6329/javascript)
   */
  'sonarjs/aws-ec2-rds-dms-public': null;

  /**
   * Using unencrypted SQS queues is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-sqs-unencrypted-queue](https://sonarsource.github.io/rspec/#/rspec/S6330/javascript)
   */
  'sonarjs/aws-sqs-unencrypted-queue': null;

  /**
   * Regular expressions should not contain empty groups.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-empty-group](https://sonarsource.github.io/rspec/#/rspec/S6331/javascript)
   */
  'sonarjs/no-empty-group': null;

  /**
   * Using unencrypted EFS file systems is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-efs-unencrypted](https://sonarsource.github.io/rspec/#/rspec/S6332/javascript)
   */
  'sonarjs/aws-efs-unencrypted': null;

  /**
   * Creating public APIs is security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [aws-apigateway-public-api](https://sonarsource.github.io/rspec/#/rspec/S6333/javascript)
   */
  'sonarjs/aws-apigateway-public-api': null;

  /**
   * Regular expressions with the global flag should be used with caution.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [stateful-regex](https://sonarsource.github.io/rspec/#/rspec/S6351/javascript)
   */
  'sonarjs/stateful-regex': null;

  /**
   * Regular expression quantifiers and character classes should be used concisely.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [concise-regex](https://sonarsource.github.io/rspec/#/rspec/S6353/javascript)
   */
  'sonarjs/concise-regex': null;

  /**
   * Character classes in regular expressions should not contain only one character.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [single-char-in-character-classes](https://sonarsource.github.io/rspec/#/rspec/S6397/javascript)
   */
  'sonarjs/single-char-in-character-classes': null;

  /**
   * Hard-coded secrets are security-sensitive.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-hardcoded-secrets](https://sonarsource.github.io/rspec/#/rspec/S6418/javascript)
   */
  'sonarjs/no-hardcoded-secrets': NoHardcodedSecretsOption;

  /**
   * Exclusive tests should not be committed to version control.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-exclusive-tests](https://sonarsource.github.io/rspec/#/rspec/S6426/javascript)
   */
  'sonarjs/no-exclusive-tests': null;

  /**
   * React components should not render non-boolean condition values.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [jsx-no-leaked-render](https://sonarsource.github.io/rspec/#/rspec/S6439/javascript)
   */
  'sonarjs/jsx-no-leaked-render': null;

  /**
   * React's useState hook should not be used directly in the render function or body of a component.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-hook-setter-in-body](https://sonarsource.github.io/rspec/#/rspec/S6442/javascript)
   */
  'sonarjs/no-hook-setter-in-body': null;

  /**
   * React state setter function should not be called with its matching state variable.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-useless-react-setstate](https://sonarsource.github.io/rspec/#/rspec/S6443/javascript)
   */
  'sonarjs/no-useless-react-setstate': null;

  /**
   * JSX list components keys should match up between renders.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-uniq-key](https://sonarsource.github.io/rspec/#/rspec/S6486/javascript)
   */
  'sonarjs/no-uniq-key': null;

  /**
   * Redundant type aliases should not be used.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [redundant-type-aliases](https://sonarsource.github.io/rspec/#/rspec/S6564/javascript)
   */
  'sonarjs/redundant-type-aliases': null;

  /**
   * "RegExp.exec()" should be preferred over "String.match()".
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [prefer-regexp-exec](https://sonarsource.github.io/rspec/#/rspec/S6594/javascript)
   */
  'sonarjs/prefer-regexp-exec': null;

  /**
   * Users should not use internal APIs.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-internal-api-use](https://sonarsource.github.io/rspec/#/rspec/S6627/javascript)
   */
  'sonarjs/no-internal-api-use': null;

  /**
   * React props should be read-only.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [prefer-read-only-props](https://sonarsource.github.io/rspec/#/rspec/S6759/javascript)
   */
  'sonarjs/prefer-read-only-props': null;

  /**
   * Literals should not be used as functions.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-literal-call](https://sonarsource.github.io/rspec/#/rspec/S6958/javascript)
   */
  'sonarjs/no-literal-call': null;

  /**
   * "Array.reduce()" calls should include an initial value.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [reduce-initial-value](https://sonarsource.github.io/rspec/#/rspec/S6959/javascript)
   */
  'sonarjs/reduce-initial-value': null;

  /**
   * Constructors should not contain asynchronous operations.
   * @preset `sonarjs/recommended`, `sonarjs/recommended-legacy`
   * @see [no-async-constructor](https://sonarsource.github.io/rspec/#/rspec/S7059/javascript)
   */
  'sonarjs/no-async-constructor': null;
}

export type SonarJSRulesObject = RulesObject<SonarJSRules>;
