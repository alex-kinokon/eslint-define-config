import type { EmptyRuleConfig, RuleConfig } from '../rule-config';

export interface CheckExamplesOption {
  allowInlineConfig?: boolean;
  baseConfig?: {
    [k: string]: any;
  };
  captionRequired?: boolean;
  checkDefaults?: boolean;
  checkEslintrc?: boolean;
  checkParams?: boolean;
  checkProperties?: boolean;
  configFile?: string;
  exampleCodeRegex?: string;
  matchingFileName?: string;
  matchingFileNameDefaults?: string;
  matchingFileNameParams?: string;
  matchingFileNameProperties?: string;
  noDefaultExampleRules?: boolean;
  paddedIndent?: number;
  rejectExampleCodeRegex?: string;
  reportUnusedDisableDirectives?: boolean;
}

export interface CheckLineAlignmentConfig {
  customSpacings?: {
    postDelimiter?: number;
    postHyphen?: number;
    postName?: number;
    postTag?: number;
    postType?: number;
  };
  preserveMainDescriptionPostDelimiter?: boolean;
  tags?: string[];
  wrapIndent?: string;
  disableWrapIndent?: boolean;
}

export type CheckLineAlignmentRuleConfig = [
  ('always' | 'never' | 'any')?,
  CheckLineAlignmentConfig?,
];

export type CheckParamNamesRuleConfig = [
  {
    allowExtraTrailingParamDocs?: boolean;
    checkDestructured?: boolean;
    checkRestProperty?: boolean;
    checkTypesPattern?: string;
    disableExtraPropertyReporting?: boolean;
    disableMissingParamChecks?: boolean;
    enableFixer?: boolean;
    useDefaultObjectProperties?: boolean;
  }?,
];

export type CheckTagNamesRuleConfig = [
  {
    definedTags?: string[];
    enableFixer?: boolean;
    jsxTags?: boolean;
    typed?: boolean;
  }?,
];

export interface CheckTypesOption {
  exemptTagContexts?: {
    tag?: string;
    types?: boolean | string[];
  }[];
  noDefaults?: boolean;
  unifyParentAndChildTypeChecks?: boolean;
}

export interface CheckValuesOption {
  allowedAuthors?: string[];
  allowedLicenses?: string[] | boolean;
  licensePattern?: string;
  numericOnlyVariation?: boolean;
}

export interface ImplementsOnClassesOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
}

export interface InformativeDocsOption {
  aliases?: {
    /**
     */
    [k: string]: string[];
  };
  excludedTags?: string[];
  uselessWords?: string[];
}

export interface MatchDescriptionOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  mainDescription?:
    | string
    | boolean
    | {
        match?: string | boolean;
        message?: string;
      };
  matchDescription?: string;
  message?: string;
  nonemptyTags?: boolean;
  tags?: {
    /**
     */
    [k: string]:
      | string
      | true
      | {
          match?: string | true;
          message?: string;
        };
  };
}

export interface MatchNameOption {
  match: {
    allowName?: string;
    comment?: string;
    context?: string;
    disallowName?: string;
    message?: string;
    tags?: string[];
    [k: string]: any;
  }[];
}

export interface MultilineBlocksOption {
  allowMultipleTags?: boolean;
  minimumLengthForMultiline?: number;
  multilineTags?: '*' | string[];
  noFinalLineText?: boolean;
  noMultilineBlocks?: boolean;
  noSingleLineBlocks?: boolean;
  noZeroLineText?: boolean;
  singleLineTags?: string[];
}

export type NoBadBlocksRuleConfig = [
  {
    ignore?: string[];
    preventAllMultiAsteriskBlocks?: boolean;
  }?,
];

export interface NoDefaultsOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  noOptionalParamNames?: boolean;
}

export interface NoMissingSyntaxOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
        message?: string;
        minimum?: number;
      }
  )[];
}

export type NoMultiAsterisksRuleConfig = [
  {
    allowWhitespace?: boolean;
    preventAtEnd?: boolean;
    preventAtMiddleLines?: boolean;
  }?,
];

export interface NoRestrictedSyntaxOption {
  contexts: (
    | string
    | {
        comment?: string;
        context?: string;
        message?: string;
      }
  )[];
}

export interface NoTypesOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
}

export type NoUndefinedTypesRuleConfig = [
  {
    definedTypes?: string[];
    disableReporting?: boolean;
    markVariablesAsUsed?: boolean;
  }?,
];

export interface RequireAsteriskPrefixConfig {
  tags?: {
    always?: string[];
    any?: string[];
    never?: string[];
    [k: string]: any;
  };
}

export type RequireAsteriskPrefixRuleConfig = [
  ('always' | 'never' | 'any')?,
  RequireAsteriskPrefixConfig?,
];

export interface RequireDescriptionOption {
  checkConstructors?: boolean;
  checkGetters?: boolean;
  checkSetters?: boolean;
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  descriptionStyle?: 'body' | 'tag' | 'any';
  exemptedBy?: string[];
}

export type RequireDescriptionCompleteSentenceRuleConfig = [
  {
    abbreviations?: string[];
    newlineBeforeCapsAssumesBadSentenceEnd?: boolean;
    tags?: string[];
  }?,
];

export interface RequireExampleOption {
  checkConstructors?: boolean;
  checkGetters?: boolean;
  checkSetters?: boolean;
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  enableFixer?: boolean;
  exemptedBy?: string[];
  exemptNoArguments?: boolean;
}

export interface RequireFileOverviewOption {
  tags?: {
    /**
     */
    [k: string]: {
      initialCommentsOnly?: boolean;
      mustExist?: boolean;
      preventDuplicates?: boolean;
    };
  };
}

export interface RequireHyphenBeforeParamDescriptionConfig {
  tags?:
    | {
        /**
         */
        [k: string]: 'always' | 'never';
      }
    | 'any';
}

export type RequireHyphenBeforeParamDescriptionRuleConfig = [
  ('always' | 'never')?,
  RequireHyphenBeforeParamDescriptionConfig?,
];

export interface RequireJsdocOption {
  checkConstructors?: boolean;
  checkGetters?: boolean | 'no-setter';
  checkSetters?: boolean | 'no-getter';
  contexts?: (
    | string
    | {
        context?: string;
        inlineCommentBlock?: boolean;
        minLineCount?: number;
      }
  )[];
  enableFixer?: boolean;
  exemptEmptyConstructors?: boolean;
  exemptEmptyFunctions?: boolean;
  fixerMessage?: string;
  minLineCount?: number;
  publicOnly?:
    | boolean
    | {
        ancestorsOnly?: boolean;
        cjs?: boolean;
        esm?: boolean;
        window?: boolean;
      };
  require?: {
    ArrowFunctionExpression?: boolean;
    ClassDeclaration?: boolean;
    ClassExpression?: boolean;
    FunctionDeclaration?: boolean;
    FunctionExpression?: boolean;
    MethodDefinition?: boolean;
  };
}

export interface RequireParamOption {
  autoIncrementBase?: number;
  checkConstructors?: boolean;
  checkDestructured?: boolean;
  checkDestructuredRoots?: boolean;
  checkGetters?: boolean;
  checkRestProperty?: boolean;
  checkSetters?: boolean;
  checkTypesPattern?: string;
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  enableFixer?: boolean;
  enableRestElementFixer?: boolean;
  enableRootFixer?: boolean;
  exemptedBy?: string[];
  unnamedRootBase?: string[];
  useDefaultObjectProperties?: boolean;
}

export interface RequireParamDescriptionOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  defaultDestructuredRootDescription?: string;
  setDefaultDestructuredRootDescription?: boolean;
}

export interface RequireParamNameOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
}

export interface RequireParamTypeOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  defaultDestructuredRootType?: string;
  setDefaultDestructuredRootType?: boolean;
}

export interface RequireReturnsOption {
  checkConstructors?: boolean;
  checkGetters?: boolean;
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
        forceRequireReturn?: boolean;
      }
  )[];
  enableFixer?: boolean;
  exemptedBy?: string[];
  forceRequireReturn?: boolean;
  forceReturnsWithAsync?: boolean;
  publicOnly?:
    | boolean
    | {
        ancestorsOnly?: boolean;
        cjs?: boolean;
        esm?: boolean;
        window?: boolean;
      };
}

export type RequireReturnsCheckRuleConfig = [
  {
    exemptAsync?: boolean;
    exemptGenerators?: boolean;
    reportMissingReturnForUndefinedTypes?: boolean;
  }?,
];

export interface RequireReturnsDescriptionOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
}

export interface RequireReturnsTypeOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
}

export interface RequireThrowsOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  exemptedBy?: string[];
}

export interface RequireYieldsOption {
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  exemptedBy?: string[];
  forceRequireNext?: boolean;
  forceRequireYields?: boolean;
  next?: boolean;
  nextWithGeneratorTag?: boolean;
  withGeneratorTag?: boolean;
}

export interface RequireYieldsCheckOption {
  checkGeneratorsOnly?: boolean;
  contexts?: (
    | string
    | {
        comment?: string;
        context?: string;
      }
  )[];
  exemptedBy?: string[];
  next?: boolean;
}

export interface SortTagsOption {
  alphabetizeExtras?: boolean;
  linesBetween?: number;
  reportIntraTagGroupSpacing?: boolean;
  reportTagGroupSpacing?: boolean;
  tagSequence?: {
    tags?: string[];
    [k: string]: any;
  }[];
}

export interface TagLinesConfig {
  applyToEndTag?: boolean;
  count?: number;
  endLines?: number | null;
  startLines?: number | null;
  tags?: {
    /**
     */
    [k: string]: {
      count?: number;
      lines?: 'always' | 'never' | 'any';
    };
  };
}

export type TextEscapingRuleConfig = [
  {
    escapeHTML?: boolean;
    escapeMarkdown?: boolean;
  }?,
];

/**
 * All JSDoc rules.
 */
export interface JSDocRules {
  /**
   * Checks that `@access` tags have a valid value.
   * @see [check-access](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-access.md#repos-sticky-header)
   */
  'jsdoc/check-access': EmptyRuleConfig;

  /**
   * Reports invalid alignment of JSDoc block asterisks.
   * @see [check-alignment](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-alignment.md#repos-sticky-header)
   */
  'jsdoc/check-alignment': EmptyRuleConfig;

  /**
   * Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
   * @see [check-examples](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-examples.md#repos-sticky-header)
   */
  'jsdoc/check-examples': RuleConfig<[CheckExamplesOption?]>;

  /**
   * Reports invalid padding inside JSDoc blocks.
   * @see [check-indentation](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-indentation.md#repos-sticky-header)
   */
  'jsdoc/check-indentation': RuleConfig<
    [
      {
        excludeTags?: string[];
      }?,
    ]
  >;

  /**
   * Reports invalid alignment of JSDoc block lines.
   * @see [check-line-alignment](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-line-alignment.md#repos-sticky-header)
   */
  'jsdoc/check-line-alignment': RuleConfig<CheckLineAlignmentRuleConfig>;

  /**
   * Ensures that parameter names in JSDoc match those in the function declaration.
   * @see [check-param-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-param-names.md#repos-sticky-header)
   */
  'jsdoc/check-param-names': RuleConfig<CheckParamNamesRuleConfig>;

  /**
   * Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
   * @see [check-property-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-property-names.md#repos-sticky-header)
   */
  'jsdoc/check-property-names': RuleConfig<
    [
      {
        enableFixer?: boolean;
      }?,
    ]
  >;

  /**
   * Reports against syntax not valid for the mode (e.g., Google Closure Compiler in non-Closure mode).
   * @see [check-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-syntax.md#repos-sticky-header)
   */
  'jsdoc/check-syntax': EmptyRuleConfig;

  /**
   * Reports invalid block tag names.
   * @see [check-tag-names](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-tag-names.md#repos-sticky-header)
   */
  'jsdoc/check-tag-names': RuleConfig<CheckTagNamesRuleConfig>;

  /**
   * Reports invalid types.
   * @see [check-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-types.md#repos-sticky-header)
   */
  'jsdoc/check-types': RuleConfig<[CheckTypesOption?]>;

  /**
   * This rule checks the values for a handful of tags: `@version`, `@since`, `@license` and `@author`.
   * @see [check-values](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/check-values.md#repos-sticky-header)
   */
  'jsdoc/check-values': RuleConfig<[CheckValuesOption?]>;

  /**
   * Expects specific tags to be empty of any content.
   * @see [empty-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/empty-tags.md#repos-sticky-header)
   */
  'jsdoc/empty-tags': RuleConfig<
    [
      {
        tags?: string[];
      }?,
    ]
  >;

  /**
   * Reports an issue with any non-constructor function using `@implements`.
   * @see [implements-on-classes](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header)
   */
  'jsdoc/implements-on-classes': RuleConfig<[ImplementsOnClassesOption?]>;

  /**
   * Reports if JSDoc `import()` statements point to a package which is not listed in `dependencies` or `devDependencies`.
   * @see [imports-as-dependencies](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/imports-as-dependencies.md#repos-sticky-header)
   */
  'jsdoc/imports-as-dependencies': EmptyRuleConfig;

  /**
   * This rule reports doc comments that only restate their attached name.
   * @see [informative-docs](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/informative-docs.md#repos-sticky-header)
   */
  'jsdoc/informative-docs': RuleConfig<[InformativeDocsOption?]>;

  /**
   * Enforces a regular expression pattern on descriptions.
   * @see [match-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-description.md#repos-sticky-header)
   */
  'jsdoc/match-description': RuleConfig<[MatchDescriptionOption?]>;

  /**
   * Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
   * @see [match-name](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/match-name.md#repos-sticky-header)
   */
  'jsdoc/match-name': RuleConfig<[MatchNameOption?]>;

  /**
   * Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
   * @see [multiline-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/multiline-blocks.md#repos-sticky-header)
   */
  'jsdoc/multiline-blocks': RuleConfig<[MultilineBlocksOption?]>;

  /**
   * This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block.
   * @see [no-bad-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-bad-blocks.md#repos-sticky-header)
   */
  'jsdoc/no-bad-blocks': RuleConfig<NoBadBlocksRuleConfig>;

  /**
   * Detects and removes extra lines of a blank block description.
   * @see [no-blank-block-descriptions](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-block-descriptions.md#repos-sticky-header)
   */
  'jsdoc/no-blank-block-descriptions': EmptyRuleConfig;

  /**
   * Removes empty blocks with nothing but possibly line breaks.
   * @see [no-blank-blocks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-blank-blocks.md#repos-sticky-header)
   */
  'jsdoc/no-blank-blocks': RuleConfig<
    [
      {
        enableFixer?: boolean;
      }?,
    ]
  >;

  /**
   * This rule reports defaults being used on the relevant portion of `@param` or `@default`.
   * @see [no-defaults](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-defaults.md#repos-sticky-header)
   */
  'jsdoc/no-defaults': RuleConfig<[NoDefaultsOption?]>;

  /**
   * Reports when certain comment structures are always expected.
   * @see [no-missing-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-missing-syntax.md#repos-sticky-header)
   */
  'jsdoc/no-missing-syntax': RuleConfig<[NoMissingSyntaxOption?]>;

  /**
   * @see [no-multi-asterisks](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-multi-asterisks.md#repos-sticky-header)
   */
  'jsdoc/no-multi-asterisks': RuleConfig<NoMultiAsterisksRuleConfig>;

  /**
   * Reports when certain comment structures are present.
   * @see [no-restricted-syntax](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-restricted-syntax.md#repos-sticky-header)
   */
  'jsdoc/no-restricted-syntax': RuleConfig<[NoRestrictedSyntaxOption?]>;

  /**
   * This rule reports types being used on `@param` or `@returns`.
   * @see [no-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-types.md#repos-sticky-header)
   */
  'jsdoc/no-types': RuleConfig<[NoTypesOption?]>;

  /**
   * Checks that types in jsdoc comments are defined.
   * @see [no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/no-undefined-types.md#repos-sticky-header)
   */
  'jsdoc/no-undefined-types': RuleConfig<NoUndefinedTypesRuleConfig>;

  /**
   * Requires that each JSDoc line starts with an `*`.
   * @see [require-asterisk-prefix](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header)
   */
  'jsdoc/require-asterisk-prefix': RuleConfig<RequireAsteriskPrefixRuleConfig>;

  /**
   * Requires that all functions have a description.
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description.md#repos-sticky-header)
   */
  'jsdoc/require-description': RuleConfig<[RequireDescriptionOption?]>;

  /**
   * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
   * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-description-complete-sentence.md#repos-sticky-header)
   */
  'jsdoc/require-description-complete-sentence': RuleConfig<RequireDescriptionCompleteSentenceRuleConfig>;

  /**
   * Requires that all functions have examples.
   * @see [require-example](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-example.md#repos-sticky-header)
   */
  'jsdoc/require-example': RuleConfig<[RequireExampleOption?]>;

  /**
   * Checks that all files have one `@file`, `@fileoverview`, or `@overview` tag at the beginning of the file.
   * @see [require-file-overview](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-file-overview.md#repos-sticky-header)
   */
  'jsdoc/require-file-overview': RuleConfig<[RequireFileOverviewOption?]>;

  /**
   * Requires a hyphen before the `@param` description.
   * @see [require-hyphen-before-param-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-hyphen-before-param-description.md#repos-sticky-header)
   */
  'jsdoc/require-hyphen-before-param-description': RuleConfig<RequireHyphenBeforeParamDescriptionRuleConfig>;

  /**
   * Require JSDoc comments.
   * @see [require-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md#repos-sticky-header)
   */
  'jsdoc/require-jsdoc': RuleConfig<[RequireJsdocOption?]>;

  /**
   * Requires that all function parameters are documented.
   * @see [require-param](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param.md#repos-sticky-header)
   */
  'jsdoc/require-param': RuleConfig<[RequireParamOption?]>;

  /**
   * Requires that each `@param` tag has a `description` value.
   * @see [require-param-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-description.md#repos-sticky-header)
   */
  'jsdoc/require-param-description': RuleConfig<
    [RequireParamDescriptionOption?]
  >;

  /**
   * Requires that all function parameters have names.
   * @see [require-param-name](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-name.md#repos-sticky-header)
   */
  'jsdoc/require-param-name': RuleConfig<[RequireParamNameOption?]>;

  /**
   * Requires that each `@param` tag has a `type` value.
   * @see [require-param-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-param-type.md#repos-sticky-header)
   */
  'jsdoc/require-param-type': RuleConfig<[RequireParamTypeOption?]>;

  /**
   * Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
   * @see [require-property](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property.md#repos-sticky-header)
   */
  'jsdoc/require-property': EmptyRuleConfig;

  /**
   * Requires that each `@property` tag has a `description` value.
   * @see [require-property-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-description.md#repos-sticky-header)
   */
  'jsdoc/require-property-description': EmptyRuleConfig;

  /**
   * Requires that all function `@property` tags have names.
   * @see [require-property-name](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-name.md#repos-sticky-header)
   */
  'jsdoc/require-property-name': EmptyRuleConfig;

  /**
   * Requires that each `@property` tag has a `type` value.
   * @see [require-property-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-property-type.md#repos-sticky-header)
   */
  'jsdoc/require-property-type': EmptyRuleConfig;

  /**
   * Requires that returns are documented.
   * @see [require-returns](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns.md#repos-sticky-header)
   */
  'jsdoc/require-returns': RuleConfig<[RequireReturnsOption?]>;

  /**
   * Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
   * @see [require-returns-check](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-check.md#repos-sticky-header)
   */
  'jsdoc/require-returns-check': RuleConfig<RequireReturnsCheckRuleConfig>;

  /**
   * Requires that the `@returns` tag has a `description` value.
   * @see [require-returns-description](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-description.md#repos-sticky-header)
   */
  'jsdoc/require-returns-description': RuleConfig<
    [RequireReturnsDescriptionOption?]
  >;

  /**
   * Requires that `@returns` tag has `type` value.
   * @see [require-returns-type](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-returns-type.md#repos-sticky-header)
   */
  'jsdoc/require-returns-type': RuleConfig<[RequireReturnsTypeOption?]>;

  /**
   * Requires that throw statements are documented.
   * @see [require-throws](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-throws.md#repos-sticky-header)
   */
  'jsdoc/require-throws': RuleConfig<[RequireThrowsOption?]>;

  /**
   * Requires yields are documented.
   * @see [require-yields](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields.md#repos-sticky-header)
   */
  'jsdoc/require-yields': RuleConfig<[RequireYieldsOption?]>;

  /**
   * Requires a yield statement in function body if a `@yields` tag is specified in jsdoc comment.
   * @see [require-yields-check](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-yields-check.md#repos-sticky-header)
   */
  'jsdoc/require-yields-check': RuleConfig<[RequireYieldsCheckOption?]>;

  /**
   * Sorts tags by a specified sequence according to tag name.
   * @see [sort-tags](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/sort-tags.md#repos-sticky-header)
   */
  'jsdoc/sort-tags': RuleConfig<[SortTagsOption?]>;

  /**
   * Enforces lines (or no lines) between tags.
   * @see [tag-lines](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/tag-lines.md#repos-sticky-header)
   */
  'jsdoc/tag-lines': RuleConfig<
    [('always' | 'any' | 'never')?, TagLinesConfig?]
  >;

  /**
   * @see [text-escaping](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/text-escaping.md#repos-sticky-header)
   */
  'jsdoc/text-escaping': RuleConfig<TextEscapingRuleConfig>;

  /**
   * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
   * @see [valid-types](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/valid-types.md#repos-sticky-header)
   */
  'jsdoc/valid-types': RuleConfig<
    [
      {
        allowEmptyNamepaths?: boolean;
      }?,
    ]
  >;
}
