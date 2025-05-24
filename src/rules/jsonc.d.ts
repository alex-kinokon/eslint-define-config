import type { RulesObject } from '../rule-config';

export type ArrayBracketNewlineOption =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };

export type ArrayBracketSpacingRuleConfig = [
  ('always' | 'never')?,
  {
    singleValue?: boolean;
    objectsInArrays?: boolean;
    arraysInArrays?: boolean;
  }?,
];

export namespace ArrayElementNewline {
  export type ArrayElementNewlineOption =
    | []
    | [
        | BasicConfig
        | {
            ArrayExpression?: BasicConfig;
            JSONArrayExpression?: BasicConfig;
            ArrayPattern?: BasicConfig;
          },
      ];
  export type BasicConfig =
    | ('always' | 'never' | 'consistent')
    | {
        multiline?: boolean;
        minItems?: number | null;
      };

  export type ArrayElementNewlineRuleConfig = ArrayElementNewlineOption;
}

export namespace CommaDangle {
  export type CommaDangleOption =
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

  export type CommaDangleRuleConfig = CommaDangleOption;
}

export interface CommaStyleConfig {
  exceptions?: {
    [k: string]: boolean;
  };
}

export namespace Indent {
  export type IndentOption = 'tab' | number;

  export interface IndentConfig {
    SwitchCase?: number;
    VariableDeclarator?:
      | (number | ('first' | 'off'))
      | {
          var?: number | ('first' | 'off');
          let?: number | ('first' | 'off');
          const?: number | ('first' | 'off');
        };
    outerIIFEBody?: number | 'off';
    MemberExpression?: number | 'off';
    FunctionDeclaration?: {
      parameters?: number | ('first' | 'off');
      body?: number;
    };
    FunctionExpression?: {
      parameters?: number | ('first' | 'off');
      body?: number;
    };
    StaticBlock?: {
      body?: number;
    };
    CallExpression?: {
      arguments?: number | ('first' | 'off');
    };
    ArrayExpression?: number | ('first' | 'off');
    ObjectExpression?: number | ('first' | 'off');
    ImportDeclaration?: number | ('first' | 'off');
    flatTernaryExpressions?: boolean;
    offsetTernaryExpressions?: boolean;
    ignoredNodes?: string[];
    ignoreComments?: boolean;
  }

  export type IndentRuleConfig = [IndentOption?, IndentConfig?];
}

export interface KeyNameCasingOption {
  camelCase?: boolean;
  PascalCase?: boolean;
  SCREAMING_SNAKE_CASE?: boolean;
  'kebab-case'?: boolean;
  snake_case?: boolean;
  ignores?: string[];
}

export type KeySpacingOption =
  | {
      align?:
        | ('colon' | 'value')
        | {
            mode?: 'strict' | 'minimum';
            on?: 'colon' | 'value';
            beforeColon?: boolean;
            afterColon?: boolean;
          };
      mode?: 'strict' | 'minimum';
      beforeColon?: boolean;
      afterColon?: boolean;
    }
  | {
      singleLine?: {
        mode?: 'strict' | 'minimum';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
      multiLine?: {
        align?:
          | ('colon' | 'value')
          | {
              mode?: 'strict' | 'minimum';
              on?: 'colon' | 'value';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
        mode?: 'strict' | 'minimum';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
    }
  | {
      singleLine?: {
        mode?: 'strict' | 'minimum';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
      multiLine?: {
        mode?: 'strict' | 'minimum';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
      align?: {
        mode?: 'strict' | 'minimum';
        on?: 'colon' | 'value';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
    };

export type ObjectCurlyNewlineOption =
  | (
      | ('always' | 'never')
      | {
          multiline?: boolean;
          minProperties?: number;
          consistent?: boolean;
        }
    )
  | {
      ObjectExpression?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ObjectPattern?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ImportDeclaration?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      ExportDeclaration?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
    };

export type ObjectCurlySpacingRuleConfig = [
  ('always' | 'never')?,
  {
    arraysInObjects?: boolean;
    objectsInObjects?: boolean;
  }?,
];

export type QuotePropsOption =
  | []
  | ['always' | 'as-needed' | 'consistent' | 'consistent-as-needed']
  | ['always' | 'as-needed' | 'consistent' | 'consistent-as-needed']
  | [
      'always' | 'as-needed' | 'consistent' | 'consistent-as-needed',
      {
        keywords?: boolean;
        unnecessary?: boolean;
        numbers?: boolean;
      },
    ];

export type QuotesConfig =
  | 'avoid-escape'
  | {
      avoidEscape?: boolean;
      allowTemplateLiterals?: boolean;
    };

export type QuotesRuleConfig = [
  ('single' | 'double' | 'backtick')?,
  QuotesConfig?,
];

/**
 * @minItems 1
 */
export type SortArrayValuesOption = [
  {
    pathPattern: string;
    order:
      | (
          | string
          | {
              valuePattern?: string;
              order?: {
                type?: 'asc' | 'desc';
                caseSensitive?: boolean;
                natural?: boolean;
              };
            }
        )[]
      | {
          type?: 'asc' | 'desc';
          caseSensitive?: boolean;
          natural?: boolean;
        };
    minValues?: number;
  },
  ...{
    pathPattern: string;
    order:
      | (
          | string
          | {
              valuePattern?: string;
              order?: {
                type?: 'asc' | 'desc';
                caseSensitive?: boolean;
                natural?: boolean;
              };
            }
        )[]
      | {
          type?: 'asc' | 'desc';
          caseSensitive?: boolean;
          natural?: boolean;
        };
    minValues?: number;
  }[],
];

export type SortKeysOption =
  | [
      {
        pathPattern: string;
        hasProperties?: string[];
        order:
          | (
              | string
              | {
                  keyPattern?: string;
                  order?: {
                    type?: 'asc' | 'desc';
                    caseSensitive?: boolean;
                    natural?: boolean;
                  };
                }
            )[]
          | {
              type?: 'asc' | 'desc';
              caseSensitive?: boolean;
              natural?: boolean;
            };
        minKeys?: number;
        allowLineSeparatedGroups?: boolean;
      },
      ...{
        pathPattern: string;
        hasProperties?: string[];
        order:
          | (
              | string
              | {
                  keyPattern?: string;
                  order?: {
                    type?: 'asc' | 'desc';
                    caseSensitive?: boolean;
                    natural?: boolean;
                  };
                }
            )[]
          | {
              type?: 'asc' | 'desc';
              caseSensitive?: boolean;
              natural?: boolean;
            };
        minKeys?: number;
        allowLineSeparatedGroups?: boolean;
      }[],
    ]
  | []
  | ['asc' | 'desc']
  | [
      'asc' | 'desc',
      {
        caseSensitive?: boolean;
        natural?: boolean;
        minKeys?: number;
        allowLineSeparatedGroups?: boolean;
      },
    ];

export interface SpaceUnaryOpsOption {
  words?: boolean;
  nonwords?: boolean;
  overrides?: {
    [k: string]: boolean;
  };
}

/**
 * All Jsonc rules.
 */
export interface JsoncRules {
  /**
   * Enforce line breaks after opening and before closing array brackets.
   * @see [array-bracket-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-newline.html)
   */
  'jsonc/array-bracket-newline': [ArrayBracketNewlineOption?];

  /**
   * Disallow or enforce spaces inside of brackets.
   * @see [array-bracket-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-bracket-spacing.html)
   */
  'jsonc/array-bracket-spacing': ArrayBracketSpacingRuleConfig;

  /**
   * Enforce line breaks between array elements.
   * @see [array-element-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html)
   */
  'jsonc/array-element-newline': ArrayElementNewline.ArrayElementNewlineRuleConfig;

  /**
   * Apply jsonc rules similar to your configured ESLint core rules.
   * @see [auto](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/auto.html)
   */
  'jsonc/auto': null;

  /**
   * Require or disallow trailing commas.
   * @see [comma-dangle](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-dangle.html)
   */
  'jsonc/comma-dangle': CommaDangle.CommaDangleRuleConfig;

  /**
   * Enforce consistent comma style.
   * @see [comma-style](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/comma-style.html)
   */
  'jsonc/comma-style': [('first' | 'last')?, CommaStyleConfig?];

  /**
   * Enforce consistent indentation.
   * @see [indent](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html)
   */
  'jsonc/indent': Indent.IndentRuleConfig;

  /**
   * Enforce naming convention to property key names.
   * @see [key-name-casing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-name-casing.html)
   */
  'jsonc/key-name-casing': [KeyNameCasingOption?];

  /**
   * Enforce consistent spacing between keys and values in object literal properties.
   * @see [key-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-spacing.html)
   */
  'jsonc/key-spacing': [KeySpacingOption?];

  /**
   * Disallow BigInt literals.
   * @see [no-bigint-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-bigint-literals.html)
   */
  'jsonc/no-bigint-literals': null;

  /**
   * Disallow binary expression.
   * @see [no-binary-expression](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-expression.html)
   */
  'jsonc/no-binary-expression': null;

  /**
   * Disallow binary numeric literals.
   * @see [no-binary-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-binary-numeric-literals.html)
   */
  'jsonc/no-binary-numeric-literals': null;

  /**
   * Disallow comments.
   * @see [no-comments](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-comments.html)
   */
  'jsonc/no-comments': null;

  /**
   * Disallow duplicate keys in object literals.
   * @see [no-dupe-keys](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-dupe-keys.html)
   */
  'jsonc/no-dupe-keys': null;

  /**
   * Disallow escape sequences in identifiers.
   * @see [no-escape-sequence-in-identifier](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-escape-sequence-in-identifier.html)
   */
  'jsonc/no-escape-sequence-in-identifier': null;

  /**
   * Disallow leading or trailing decimal points in numeric literals.
   * @see [no-floating-decimal](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-floating-decimal.html)
   */
  'jsonc/no-floating-decimal': null;

  /**
   * Disallow hexadecimal numeric literals.
   * @see [no-hexadecimal-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-hexadecimal-numeric-literals.html)
   */
  'jsonc/no-hexadecimal-numeric-literals': null;

  /**
   * Disallow Infinity.
   * @see [no-infinity](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-infinity.html)
   */
  'jsonc/no-infinity': null;

  /**
   * Disallow irregular whitespace.
   * @see [no-irregular-whitespace](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html)
   */
  'jsonc/no-irregular-whitespace': [
    {
      skipComments?: boolean;
      skipStrings?: boolean;
      skipTemplates?: boolean;
      skipRegExps?: boolean;
      skipJSXText?: boolean;
    }?,
  ];

  /**
   * Disallow multiline strings.
   * @see [no-multi-str](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-multi-str.html)
   */
  'jsonc/no-multi-str': null;

  /**
   * Disallow NaN.
   * @see [no-nan](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-nan.html)
   */
  'jsonc/no-nan': null;

  /**
   * Disallow number property keys.
   * @see [no-number-props](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-number-props.html)
   */
  'jsonc/no-number-props': null;

  /**
   * Disallow numeric separators.
   * @see [no-numeric-separators](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-numeric-separators.html)
   */
  'jsonc/no-numeric-separators': null;

  /**
   * Disallow octal escape sequences in string literals.
   * @see [no-octal-escape](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-escape.html)
   */
  'jsonc/no-octal-escape': null;

  /**
   * Disallow octal numeric literals.
   * @see [no-octal-numeric-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal-numeric-literals.html)
   */
  'jsonc/no-octal-numeric-literals': null;

  /**
   * Disallow legacy octal literals.
   * @see [no-octal](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-octal.html)
   */
  'jsonc/no-octal': null;

  /**
   * Disallow parentheses around the expression.
   * @see [no-parenthesized](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html)
   */
  'jsonc/no-parenthesized': null;

  /**
   * Disallow plus sign.
   * @see [no-plus-sign](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-plus-sign.html)
   */
  'jsonc/no-plus-sign': null;

  /**
   * Disallow RegExp literals.
   * @see [no-regexp-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html)
   */
  'jsonc/no-regexp-literals': null;

  /**
   * Disallow sparse arrays.
   * @see [no-sparse-arrays](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-sparse-arrays.html)
   */
  'jsonc/no-sparse-arrays': null;

  /**
   * Disallow template literals.
   * @see [no-template-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-template-literals.html)
   */
  'jsonc/no-template-literals': null;

  /**
   * Disallow `undefined`.
   * @see [no-undefined-value](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-undefined-value.html)
   */
  'jsonc/no-undefined-value': null;

  /**
   * Disallow Unicode code point escape sequences.
   * @see [no-unicode-codepoint-escapes](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-unicode-codepoint-escapes.html)
   */
  'jsonc/no-unicode-codepoint-escapes': null;

  /**
   * Disallow unnecessary escape usage.
   * @see [no-useless-escape](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-useless-escape.html)
   */
  'jsonc/no-useless-escape': [
    {
      allowRegexCharacters?: string[];
    }?,
  ];

  /**
   * Enforce consistent line breaks inside braces.
   * @see [object-curly-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html)
   */
  'jsonc/object-curly-newline': [ObjectCurlyNewlineOption?];

  /**
   * Enforce consistent spacing inside braces.
   * @see [object-curly-spacing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-spacing.html)
   */
  'jsonc/object-curly-spacing': ObjectCurlySpacingRuleConfig;

  /**
   * Enforce placing object properties on separate lines.
   * @see [object-property-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html)
   */
  'jsonc/object-property-newline': [
    {
      allowAllPropertiesOnSameLine?: boolean;
      allowMultiplePropertiesPerLine?: boolean;
    }?,
  ];

  /**
   * Require quotes around object literal property names.
   * @see [quote-props](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quote-props.html)
   */
  'jsonc/quote-props': QuotePropsOption;

  /**
   * Enforce use of double or single quotes.
   * @see [quotes](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html)
   */
  'jsonc/quotes': QuotesRuleConfig;

  /**
   * Require array values to be sorted.
   * @see [sort-array-values](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-array-values.html)
   */
  'jsonc/sort-array-values': SortArrayValuesOption;

  /**
   * Require object keys to be sorted.
   * @see [sort-keys](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html)
   */
  'jsonc/sort-keys': SortKeysOption;

  /**
   * Disallow spaces after unary operators.
   * @see [space-unary-ops](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/space-unary-ops.html)
   */
  'jsonc/space-unary-ops': [SpaceUnaryOpsOption?];

  /**
   * Disallow invalid number for JSON.
   * @see [valid-json-number](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/valid-json-number.html)
   */
  'jsonc/valid-json-number': null;

  /**
   * Disallow parsing errors in Vue custom blocks.
   * @see [vue-custom-block/no-parsing-error](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/vue-custom-block/no-parsing-error.html)
   */
  'jsonc/vue-custom-block/no-parsing-error': null;
}

export type JsoncRulesObject = RulesObject<JsoncRules>;
