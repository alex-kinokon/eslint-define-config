import type { EmptyRuleConfig, RuleConfig } from '../rule-config';

export type BlockMappingOption =
  | ('always' | 'never')
  | {
      singleline?: 'always' | 'never' | 'ignore';
      multiline?: 'always' | 'never' | 'ignore';
    };

export interface BlockSequenceHyphenIndicatorNewlineConfig {
  nestedHyphen?: 'always' | 'never';
  blockMapping?: 'always' | 'never';
}

export type BlockSequenceHyphenIndicatorNewlineRuleConfig = [
  ('always' | 'never')?,
  BlockSequenceHyphenIndicatorNewlineConfig?,
];

export type BlockSequenceOption =
  | ('always' | 'never')
  | {
      singleline?: 'always' | 'never' | 'ignore';
      multiline?: 'always' | 'never' | 'ignore';
    };

export interface FileExtensionOption {
  extension?: 'yaml' | 'yml';
  caseSensitive?: boolean;
}

export type FlowMappingCurlyNewlineOption =
  | ('always' | 'never')
  | {
      multiline?: boolean;
      minProperties?: number;
      consistent?: boolean;
    };

export type FlowMappingCurlySpacingRuleConfig = [
  ('always' | 'never')?,
  {
    arraysInObjects?: boolean;
    objectsInObjects?: boolean;
  }?,
];

export type FlowSequenceBracketNewlineOption =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };

export type FlowSequenceBracketSpacingRuleConfig = [
  ('always' | 'never')?,
  {
    singleValue?: boolean;
    objectsInArrays?: boolean;
    arraysInArrays?: boolean;
  }?,
];

export type IndentOption = number;

export type IndentRuleConfig = [
  IndentOption?,
  {
    indentBlockSequences?: boolean;
    indicatorValueIndent?: number;
  }?,
];

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
            on?: 'colon' | 'value';
            mode?: 'strict' | 'minimum';
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
              on?: 'colon' | 'value';
              mode?: 'strict' | 'minimum';
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
        on?: 'colon' | 'value';
        mode?: 'strict' | 'minimum';
        beforeColon?: boolean;
        afterColon?: boolean;
      };
    };

export type NoIrregularWhitespaceRuleConfig = [
  {
    skipComments?: boolean;
    skipQuotedScalars?: boolean;
  }?,
];

export type NoMultipleEmptyLinesRuleConfig = [
  {
    max: number;
    maxEOF?: number;
    maxBOF?: number;
  }?,
];

export type PlainScalarRuleConfig = [
  ('always' | 'never')?,
  {
    ignorePatterns?: string[];
  }?,
];

export interface QuotesOption {
  prefer?: 'double' | 'single';
  avoidEscape?: boolean;
}

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

/**
 * @minItems 1
 */
export type SortSequenceValuesOption = [
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

export type SpacedCommentRuleConfig = [
  ('always' | 'never')?,
  {
    exceptions?: string[];
    markers?: string[];
  }?,
];

/**
 * All Yml rules.
 */
export interface YmlRules {
  /**
   * Enforce consistent line breaks after `:` indicator.
   * @see [block-mapping-colon-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html)
   */
  'yml/block-mapping-colon-indicator-newline': RuleConfig<
    [('always' | 'never')?]
  >;

  /**
   * Enforce consistent line breaks after `?` indicator.
   * @see [block-mapping-question-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html)
   */
  'yml/block-mapping-question-indicator-newline': RuleConfig<
    [('always' | 'never')?]
  >;

  /**
   * Require or disallow block style mappings.
   * @see [block-mapping](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html)
   */
  'yml/block-mapping': RuleConfig<[BlockMappingOption?]>;

  /**
   * Enforce consistent line breaks after `-` indicator.
   * @see [block-sequence-hyphen-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html)
   */
  'yml/block-sequence-hyphen-indicator-newline': RuleConfig<BlockSequenceHyphenIndicatorNewlineRuleConfig>;

  /**
   * Require or disallow block style sequences.
   * @see [block-sequence](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html)
   */
  'yml/block-sequence': RuleConfig<[BlockSequenceOption?]>;

  /**
   * Enforce YAML file extension.
   * @see [file-extension](https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html)
   */
  'yml/file-extension': RuleConfig<[FileExtensionOption?]>;

  /**
   * Enforce consistent line breaks inside braces.
   * @see [flow-mapping-curly-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-newline.html)
   */
  'yml/flow-mapping-curly-newline': RuleConfig<
    [FlowMappingCurlyNewlineOption?]
  >;

  /**
   * Enforce consistent spacing inside braces.
   * @see [flow-mapping-curly-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-mapping-curly-spacing.html)
   */
  'yml/flow-mapping-curly-spacing': RuleConfig<FlowMappingCurlySpacingRuleConfig>;

  /**
   * Enforce linebreaks after opening and before closing flow sequence brackets.
   * @see [flow-sequence-bracket-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-newline.html)
   */
  'yml/flow-sequence-bracket-newline': RuleConfig<
    [FlowSequenceBracketNewlineOption?]
  >;

  /**
   * Enforce consistent spacing inside flow sequence brackets.
   * @see [flow-sequence-bracket-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/flow-sequence-bracket-spacing.html)
   */
  'yml/flow-sequence-bracket-spacing': RuleConfig<FlowSequenceBracketSpacingRuleConfig>;

  /**
   * Enforce consistent indentation.
   * @see [indent](https://ota-meshi.github.io/eslint-plugin-yml/rules/indent.html)
   */
  'yml/indent': RuleConfig<IndentRuleConfig>;

  /**
   * Enforce naming convention to key names.
   * @see [key-name-casing](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html)
   */
  'yml/key-name-casing': RuleConfig<[KeyNameCasingOption?]>;

  /**
   * Enforce consistent spacing between keys and values in mapping pairs.
   * @see [key-spacing](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-spacing.html)
   */
  'yml/key-spacing': RuleConfig<[KeySpacingOption?]>;

  /**
   * Disallow empty document.
   * @see [no-empty-document](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-document.html)
   */
  'yml/no-empty-document': EmptyRuleConfig;

  /**
   * Disallow empty mapping keys.
   * @see [no-empty-key](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-key.html)
   */
  'yml/no-empty-key': EmptyRuleConfig;

  /**
   * Disallow empty mapping values.
   * @see [no-empty-mapping-value](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-mapping-value.html)
   */
  'yml/no-empty-mapping-value': EmptyRuleConfig;

  /**
   * Disallow empty sequence entries.
   * @see [no-empty-sequence-entry](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-empty-sequence-entry.html)
   */
  'yml/no-empty-sequence-entry': EmptyRuleConfig;

  /**
   * Disallow irregular whitespace.
   * @see [no-irregular-whitespace](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-irregular-whitespace.html)
   */
  'yml/no-irregular-whitespace': RuleConfig<NoIrregularWhitespaceRuleConfig>;

  /**
   * Disallow multiple empty lines.
   * @see [no-multiple-empty-lines](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-multiple-empty-lines.html)
   */
  'yml/no-multiple-empty-lines': RuleConfig<NoMultipleEmptyLinesRuleConfig>;

  /**
   * Disallow tabs for indentation.
   * @see [no-tab-indent](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-tab-indent.html)
   */
  'yml/no-tab-indent': EmptyRuleConfig;

  /**
   * Disallow trailing zeros for floats.
   * @see [no-trailing-zeros](https://ota-meshi.github.io/eslint-plugin-yml/rules/no-trailing-zeros.html)
   */
  'yml/no-trailing-zeros': EmptyRuleConfig;

  /**
   * Require or disallow plain style scalar.
   * @see [plain-scalar](https://ota-meshi.github.io/eslint-plugin-yml/rules/plain-scalar.html)
   */
  'yml/plain-scalar': RuleConfig<PlainScalarRuleConfig>;

  /**
   * Enforce the consistent use of either double, or single quotes.
   * @see [quotes](https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html)
   */
  'yml/quotes': RuleConfig<[QuotesOption?]>;

  /**
   * Disallow mapping keys other than strings.
   * @see [require-string-key](https://ota-meshi.github.io/eslint-plugin-yml/rules/require-string-key.html)
   */
  'yml/require-string-key': EmptyRuleConfig;

  /**
   * Require mapping keys to be sorted.
   * @see [sort-keys](https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-keys.html)
   */
  'yml/sort-keys': RuleConfig<SortKeysOption>;

  /**
   * Require sequence values to be sorted.
   * @see [sort-sequence-values](https://ota-meshi.github.io/eslint-plugin-yml/rules/sort-sequence-values.html)
   */
  'yml/sort-sequence-values': RuleConfig<SortSequenceValuesOption>;

  /**
   * Enforce consistent spacing after the `#` in a comment.
   * @see [spaced-comment](https://ota-meshi.github.io/eslint-plugin-yml/rules/spaced-comment.html)
   */
  'yml/spaced-comment': RuleConfig<SpacedCommentRuleConfig>;

  /**
   * Disallow parsing errors in Vue custom blocks.
   * @see [vue-custom-block/no-parsing-error](https://ota-meshi.github.io/eslint-plugin-yml/rules/vue-custom-block/no-parsing-error.html)
   */
  'yml/vue-custom-block/no-parsing-error': EmptyRuleConfig;
}