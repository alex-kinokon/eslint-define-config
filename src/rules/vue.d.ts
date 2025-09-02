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
            ArrayPattern?: BasicConfig;
          },
      ];
  export type BasicConfig =
    | ('always' | 'never' | 'consistent')
    | {
        consistent?: boolean;
        multiline?: boolean;
        minItems?: number | null;
      };

  export type ArrayElementNewlineRuleConfig = ArrayElementNewlineOption;
}

export type AttributeHyphenationRuleConfig = [
  ('always' | 'never')?,
  {
    ignore?: string[];
    ignoreTags?: string[];
  }?,
];

export interface AttributesOrderOption {
  order?: (
    | (
        | 'DEFINITION'
        | 'LIST_RENDERING'
        | 'CONDITIONALS'
        | 'RENDER_MODIFIERS'
        | 'GLOBAL'
        | 'UNIQUE'
        | 'SLOT'
        | 'TWO_WAY_BINDING'
        | 'OTHER_DIRECTIVES'
        | 'OTHER_ATTR'
        | 'ATTR_STATIC'
        | 'ATTR_DYNAMIC'
        | 'ATTR_SHORTHAND_BOOL'
        | 'EVENTS'
        | 'CONTENT'
      )
    | (
        | 'DEFINITION'
        | 'LIST_RENDERING'
        | 'CONDITIONALS'
        | 'RENDER_MODIFIERS'
        | 'GLOBAL'
        | 'UNIQUE'
        | 'SLOT'
        | 'TWO_WAY_BINDING'
        | 'OTHER_DIRECTIVES'
        | 'OTHER_ATTR'
        | 'ATTR_STATIC'
        | 'ATTR_DYNAMIC'
        | 'ATTR_SHORTHAND_BOOL'
        | 'EVENTS'
        | 'CONTENT'
      )[]
  )[];
  alphabetical?: boolean;
}

export interface BlockLangOption {
  [k: string]: {
    lang?: string | string[];
    allowNoLang?: boolean;
  };
}

export interface BlockOrderOption {
  order?: (string | string[])[];
}

export interface BlockTagNewlineOption {
  singleline?: 'always' | 'never' | 'consistent' | 'ignore';
  multiline?: 'always' | 'never' | 'consistent' | 'ignore';
  maxEmptyLines?: number;
  blocks?: {
    [k: string]: {
      singleline?: 'always' | 'never' | 'consistent' | 'ignore';
      multiline?: 'always' | 'never' | 'consistent' | 'ignore';
      maxEmptyLines?: number;
    };
  };
}

export type BraceStyleRuleConfig = [
  ('1tbs' | 'stroustrup' | 'allman')?,
  {
    allowSingleLine?: boolean;
  }?,
];

export interface CamelcaseOption {
  ignoreDestructuring?: boolean;
  ignoreImports?: boolean;
  ignoreGlobals?: boolean;
  properties?: 'always' | 'never';
  /**
   * @minItems 0
   */
  allow?: string[];
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
            importAttributes?: ValueWithIgnore;
            dynamicImports?: ValueWithIgnore;
            enums?: ValueWithIgnore;
            generics?: ValueWithIgnore;
            tuples?: ValueWithIgnore;
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
    | 'never'
    | 'only-multiline'
    | 'ignore';

  export type CommaDangleRuleConfig = CommaDangleOption;
}

export interface CommaStyleConfig {
  exceptions?: {
    [k: string]: boolean;
  };
}

/**
 * @minItems 1
 */
export type ComponentApiStyleOption = [
  'script-setup' | 'composition' | 'composition-vue2' | 'options',
  ...('script-setup' | 'composition' | 'composition-vue2' | 'options')[],
];

export type ComponentNameInTemplateCasingRuleConfig = [
  ('PascalCase' | 'kebab-case')?,
  {
    globals?: string[];
    ignores?: string[];
    registeredComponentsOnly?: boolean;
  }?,
];

export type CustomEventNameCasingRuleConfig = [
  ('kebab-case' | 'camelCase')?,
  {
    ignores?: string[];
  }?,
];

export interface DefinePropsDestructuringOption {
  destructure?: 'always' | 'never';
}

export interface EnforceStyleAttributeOption {
  /**
   * @minItems 1
   */
  allow?: ['plain' | 'scoped' | 'module', ...('plain' | 'scoped' | 'module')[]];
}

export type EqeqeqOption =
  | []
  | ['always']
  | [
      'always',
      {
        null?: 'always' | 'never' | 'ignore';
      },
    ]
  | ['smart' | 'allow-null'];

export interface FirstAttributeLinebreakOption {
  multiline?: 'below' | 'beside' | 'ignore';
  singleline?: 'below' | 'beside' | 'ignore';
}

export type FuncCallSpacingOption =
  | []
  | ['never']
  | ['always']
  | [
      'always',
      {
        allowNewlines?: boolean;
        optionalChain?: {
          before?: boolean;
          after?: boolean;
        };
      },
    ];

export interface HtmlClosingBracketNewlineOption {
  singleline?: 'always' | 'never';
  multiline?: 'always' | 'never';
  selfClosingTag?: {
    singleline?: 'always' | 'never';
    multiline?: 'always' | 'never';
  };
}

export interface HtmlClosingBracketSpacingOption {
  startTag?: 'always' | 'never';
  endTag?: 'always' | 'never';
  selfClosingTag?: 'always' | 'never';
}

export type HtmlCommentContentNewlineOption =
  | ('always' | 'never')
  | {
      singleline?: 'always' | 'never' | 'ignore';
      multiline?: 'always' | 'never' | 'ignore';
    };

export type HtmlCommentContentNewlineRuleConfig = [
  HtmlCommentContentNewlineOption?,
  {
    exceptions?: string[];
  }?,
];

export type HtmlCommentContentSpacingRuleConfig = [
  ('always' | 'never')?,
  {
    exceptions?: string[];
  }?,
];

export type HtmlCommentIndentOption = number | 'tab';

export namespace HtmlIndent {
  export type HtmlIndentOption = number | 'tab';

  export interface HtmlIndentConfig {
    attribute?: number;
    baseIndent?: number;
    closeBracket?:
      | number
      | {
          startTag?: number;
          endTag?: number;
          selfClosingTag?: number;
        };
    switchCase?: number;
    alignAttributesVertically?: boolean;
    ignores?: string[];
  }

  export type HtmlIndentRuleConfig = [HtmlIndentOption?, HtmlIndentConfig?];
}

export type HtmlQuotesRuleConfig = [
  ('double' | 'single')?,
  {
    avoidEscape?: boolean;
  }?,
];

export namespace HtmlSelfClosing {
  /**
   * @maxItems 1
   */
  export type HtmlSelfClosingOption =
    | []
    | [
        {
          html?: {
            normal?: OptionValue;
            void?: OptionValue;
            component?: OptionValue;
          };
          svg?: OptionValue;
          math?: OptionValue;
        },
      ];
  export type OptionValue = 'always' | 'never' | 'any';

  export type HtmlSelfClosingRuleConfig = HtmlSelfClosingOption;
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
      ignoredNodes?: (
        | 'ObjectExpression'
        | 'ObjectPattern'
        | 'ImportDeclaration'
        | 'ExportNamedDeclaration'
        | 'ExportAllDeclaration'
        | 'TSTypeLiteral'
        | 'TSInterfaceBody'
        | 'ClassBody'
      )[];
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

export namespace KeywordSpacing {
  export interface KeywordSpacingOption {
    before?: boolean;
    after?: boolean;
    overrides?: {
      abstract?: {
        before?: boolean;
        after?: boolean;
      };
      arguments?: {
        before?: boolean;
        after?: boolean;
      };
      as?: {
        before?: boolean;
        after?: boolean;
      };
      async?: {
        before?: boolean;
        after?: boolean;
      };
      await?: {
        before?: boolean;
        after?: boolean;
      };
      boolean?: {
        before?: boolean;
        after?: boolean;
      };
      break?: {
        before?: boolean;
        after?: boolean;
      };
      byte?: {
        before?: boolean;
        after?: boolean;
      };
      case?: {
        before?: boolean;
        after?: boolean;
      };
      catch?: {
        before?: boolean;
        after?: boolean;
      };
      char?: {
        before?: boolean;
        after?: boolean;
      };
      class?: {
        before?: boolean;
        after?: boolean;
      };
      const?: {
        before?: boolean;
        after?: boolean;
      };
      continue?: {
        before?: boolean;
        after?: boolean;
      };
      debugger?: {
        before?: boolean;
        after?: boolean;
      };
      default?: {
        before?: boolean;
        after?: boolean;
      };
      delete?: {
        before?: boolean;
        after?: boolean;
      };
      do?: {
        before?: boolean;
        after?: boolean;
      };
      double?: {
        before?: boolean;
        after?: boolean;
      };
      else?: {
        before?: boolean;
        after?: boolean;
      };
      enum?: {
        before?: boolean;
        after?: boolean;
      };
      eval?: {
        before?: boolean;
        after?: boolean;
      };
      export?: {
        before?: boolean;
        after?: boolean;
      };
      extends?: {
        before?: boolean;
        after?: boolean;
      };
      false?: {
        before?: boolean;
        after?: boolean;
      };
      final?: {
        before?: boolean;
        after?: boolean;
      };
      finally?: {
        before?: boolean;
        after?: boolean;
      };
      float?: {
        before?: boolean;
        after?: boolean;
      };
      for?: {
        before?: boolean;
        after?: boolean;
      };
      from?: {
        before?: boolean;
        after?: boolean;
      };
      function?: {
        before?: boolean;
        after?: boolean;
      };
      get?: {
        before?: boolean;
        after?: boolean;
      };
      goto?: {
        before?: boolean;
        after?: boolean;
      };
      if?: {
        before?: boolean;
        after?: boolean;
      };
      implements?: {
        before?: boolean;
        after?: boolean;
      };
      import?: {
        before?: boolean;
        after?: boolean;
      };
      in?: {
        before?: boolean;
        after?: boolean;
      };
      instanceof?: {
        before?: boolean;
        after?: boolean;
      };
      int?: {
        before?: boolean;
        after?: boolean;
      };
      interface?: {
        before?: boolean;
        after?: boolean;
      };
      let?: {
        before?: boolean;
        after?: boolean;
      };
      long?: {
        before?: boolean;
        after?: boolean;
      };
      native?: {
        before?: boolean;
        after?: boolean;
      };
      new?: {
        before?: boolean;
        after?: boolean;
      };
      null?: {
        before?: boolean;
        after?: boolean;
      };
      of?: {
        before?: boolean;
        after?: boolean;
      };
      package?: {
        before?: boolean;
        after?: boolean;
      };
      private?: {
        before?: boolean;
        after?: boolean;
      };
      protected?: {
        before?: boolean;
        after?: boolean;
      };
      public?: {
        before?: boolean;
        after?: boolean;
      };
      return?: {
        before?: boolean;
        after?: boolean;
      };
      set?: {
        before?: boolean;
        after?: boolean;
      };
      short?: {
        before?: boolean;
        after?: boolean;
      };
      static?: {
        before?: boolean;
        after?: boolean;
      };
      super?: {
        before?: boolean;
        after?: boolean;
      };
      switch?: {
        before?: boolean;
        after?: boolean;
      };
      synchronized?: {
        before?: boolean;
        after?: boolean;
      };
      this?: {
        before?: boolean;
        after?: boolean;
      };
      throw?: {
        before?: boolean;
        after?: boolean;
      };
      throws?: {
        before?: boolean;
        after?: boolean;
      };
      transient?: {
        before?: boolean;
        after?: boolean;
      };
      true?: {
        before?: boolean;
        after?: boolean;
      };
      try?: {
        before?: boolean;
        after?: boolean;
      };
      type?: {
        before?: boolean;
        after?: boolean;
      };
      typeof?: {
        before?: boolean;
        after?: boolean;
      };
      using?: {
        before?: boolean;
        after?: boolean;
      };
      var?: {
        before?: boolean;
        after?: boolean;
      };
      void?: {
        before?: boolean;
        after?: boolean;
      };
      volatile?: {
        before?: boolean;
        after?: boolean;
      };
      while?: {
        before?: boolean;
        after?: boolean;
      };
      with?: {
        before?: boolean;
        after?: boolean;
      };
      yield?: {
        before?: boolean;
        after?: boolean;
      };
      accessor?: {
        before?: boolean;
        after?: boolean;
      };
      satisfies?: {
        before?: boolean;
        after?: boolean;
      };
    };
  }

  export type KeywordSpacingRuleConfig = [KeywordSpacingOption?];
}

export interface MaxAttributesPerLineOption {
  singleline?:
    | number
    | {
        max?: number;
      };
  multiline?:
    | number
    | {
        max?: number;
      };
}

export namespace MaxLen {
  export type MaxLenOption =
    | {
        code?: number;
        template?: number;
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreTrailingComments?: boolean;
        ignoreUrls?: boolean;
        ignoreStrings?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreHTMLAttributeValues?: boolean;
        ignoreHTMLTextContents?: boolean;
      }
    | number;

  export type MaxLenConfig =
    | {
        code?: number;
        template?: number;
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreTrailingComments?: boolean;
        ignoreUrls?: boolean;
        ignoreStrings?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreHTMLAttributeValues?: boolean;
        ignoreHTMLTextContents?: boolean;
      }
    | number;

  export type MaxLenRuleConfig = [
    MaxLenOption?,
    MaxLenConfig?,
    {
      code?: number;
      template?: number;
      comments?: number;
      tabWidth?: number;
      ignorePattern?: string;
      ignoreComments?: boolean;
      ignoreTrailingComments?: boolean;
      ignoreUrls?: boolean;
      ignoreStrings?: boolean;
      ignoreTemplateLiterals?: boolean;
      ignoreRegExpLiterals?: boolean;
      ignoreHTMLAttributeValues?: boolean;
      ignoreHTMLTextContents?: boolean;
    }?,
  ];
}

export type MultilineTernaryRuleConfig = [
  ('always' | 'always-multiline' | 'never')?,
  {
    ignoreJSX?: boolean;
  }?,
];

export interface NoBareStringsInTemplateOption {
  allowlist?: string[];
  attributes?: {
    [k: string]: string[];
  };
  directives?: string[];
}

export interface NoChildContentOption {
  /**
   * @minItems 1
   */
  additionalDirectives: [string, ...string[]];
}

export interface NoConsoleOption {
  /**
   * @minItems 1
   */
  allow?: [string, ...string[]];
}

export interface NoConstantConditionOption {
  checkLoops?: 'all' | 'allExceptWhileTrue' | 'none' | true | false;
}

export interface NoDeprecatedRouterLinkTagPropOption {
  /**
   * @minItems 1
   */
  components?: [string, ...string[]];
}

export type NoExtraParensOption =
  | []
  | ['functions']
  | ['all']
  | [
      'all',
      {
        conditionalAssign?: boolean;
        ternaryOperandBinaryExpressions?: boolean;
        nestedBinaryExpressions?: boolean;
        returnAssign?: boolean;
        ignoreJSX?: 'none' | 'all' | 'single-line' | 'multi-line';
        enforceForArrowConditionals?: boolean;
        enforceForSequenceExpressions?: boolean;
        enforceForNewInMemberExpressions?: boolean;
        enforceForFunctionPrototypeMethods?: boolean;
        allowParensAfterCommentPattern?: string;
        nestedConditionalExpressions?: boolean;
        allowNodesInSpreadElement?: {
          ConditionalExpression?: boolean;
          LogicalExpression?: boolean;
          AwaitExpression?: boolean;
        };
        ignoredNodes?: string[];
      },
    ];

export interface NoImplicitCoercionOption {
  boolean?: boolean;
  number?: boolean;
  string?: boolean;
  disallowTemplateShorthand?: boolean;
  allow?: ('~' | '!!' | '+' | '- -' | '-' | '*')[];
}

export interface NoParsingErrorOption {
  'abrupt-closing-of-empty-comment'?: boolean;
  'absence-of-digits-in-numeric-character-reference'?: boolean;
  'cdata-in-html-content'?: boolean;
  'character-reference-outside-unicode-range'?: boolean;
  'control-character-in-input-stream'?: boolean;
  'control-character-reference'?: boolean;
  'eof-before-tag-name'?: boolean;
  'eof-in-cdata'?: boolean;
  'eof-in-comment'?: boolean;
  'eof-in-tag'?: boolean;
  'incorrectly-closed-comment'?: boolean;
  'incorrectly-opened-comment'?: boolean;
  'invalid-first-character-of-tag-name'?: boolean;
  'missing-attribute-value'?: boolean;
  'missing-end-tag-name'?: boolean;
  'missing-semicolon-after-character-reference'?: boolean;
  'missing-whitespace-between-attributes'?: boolean;
  'nested-comment'?: boolean;
  'noncharacter-character-reference'?: boolean;
  'noncharacter-in-input-stream'?: boolean;
  'null-character-reference'?: boolean;
  'surrogate-character-reference'?: boolean;
  'surrogate-in-input-stream'?: boolean;
  'unexpected-character-in-attribute-name'?: boolean;
  'unexpected-character-in-unquoted-attribute-value'?: boolean;
  'unexpected-equals-sign-before-attribute-name'?: boolean;
  'unexpected-null-character'?: boolean;
  'unexpected-question-mark-instead-of-tag-name'?: boolean;
  'unexpected-solidus-in-tag'?: boolean;
  'unknown-named-character-reference'?: boolean;
  'end-tag-with-attributes'?: boolean;
  'duplicate-attribute'?: boolean;
  'end-tag-with-trailing-solidus'?: boolean;
  'non-void-html-element-start-tag-with-trailing-solidus'?: boolean;
  'x-invalid-end-tag'?: boolean;
  'x-invalid-namespace'?: boolean;
}

export interface NoPotentialComponentOptionTypoOption {
  /**
   * @minItems 0
   */
  presets?: ('all' | 'vue' | 'vue-router' | 'nuxt')[];
  /**
   * @minItems 0
   */
  custom?: string[];
  threshold?: number;
}

export interface NoReservedPropsOption {
  vueVersion?: 2 | 3;
}

/**
 * @minItems 0
 */
export type NoRestrictedBlockOption = (
  | string
  | {
      element: string;
      message?: string;
    }
)[];

/**
 * @minItems 0
 */
export type NoRestrictedCallAfterAwaitOption = {
  module: string;
  path?: string | string[];
  message?: string;
}[];

export type NoRestrictedClassOption = string[];

/**
 * @minItems 0
 */
export type NoRestrictedComponentNamesOption = (
  | string
  | {
      name: string;
      message?: string;
      suggest?: string;
    }
)[];

/**
 * @minItems 0
 */
export type NoRestrictedComponentOptionsOption = (
  | string
  | string[]
  | {
      name: string | string[];
      message?: string;
    }
)[];

/**
 * @minItems 0
 */
export type NoRestrictedCustomEventOption = (
  | string
  | {
      event: string;
      message?: string;
      suggest?: string;
    }
)[];

/**
 * @minItems 0
 */
export type NoRestrictedHtmlElementsOption = (
  | string
  | {
      element: string | string[];
      message?: string;
    }
)[];

/**
 * @minItems 0
 */
export type NoRestrictedPropsOption = (
  | string
  | {
      name: string;
      message?: string;
      suggest?: string;
    }
)[];

/**
 * @minItems 0
 */
export type NoRestrictedStaticAttributeOption = (
  | string
  | {
      key: string;
      value?: string | true;
      element?: string;
      message?: string;
    }
)[];

/**
 * @minItems 0
 */
export type NoRestrictedSyntaxOption = (
  | string
  | {
      selector: string;
      message?: string;
    }
)[];

/**
 * @minItems 0
 */
export type NoRestrictedVBindOption = (
  | (string | null)
  | {
      argument: string | null;
      modifiers?: ('prop' | 'camel' | 'sync' | 'attr')[];
      element?: string;
      message?: string;
    }
)[];

export type NoRestrictedVOnOption = (
  | (string | null)
  | {
      argument: string | null;
      element?: string;
      message?: string;
      /**
       * @minItems 1
       */
      modifiers?: [
        'prevent' | 'stop' | 'capture' | 'self' | 'once' | 'passive',
        ...('prevent' | 'stop' | 'capture' | 'self' | 'once' | 'passive')[],
      ];
    }
)[];

export interface NoTemplateTargetBlankOption {
  allowReferrer?: boolean;
  enforceDynamicLinks?: 'always' | 'never';
}

export interface NoUnsupportedFeaturesOption {
  version?: string;
  ignores?: (
    | 'slot-scope-attribute'
    | 'dynamic-directive-arguments'
    | 'v-slot'
    | 'script-setup'
    | 'style-css-vars-injection'
    | 'v-model-argument'
    | 'v-model-custom-modifiers'
    | 'v-is'
    | 'is-attribute-with-vue-prefix'
    | 'v-memo'
    | 'v-bind-prop-modifier-shorthand'
    | 'v-bind-attr-modifier'
    | 'define-options'
    | 'define-slots'
    | 'define-model'
    | 'v-bind-same-name-shorthand'
  )[];
}

export interface NoUnusedPropertiesOption {
  groups?: (
    | 'props'
    | 'data'
    | 'asyncData'
    | 'computed'
    | 'methods'
    | 'setup'
  )[];
  deepData?: boolean;
  ignorePublicMembers?: boolean;
  unreferencedOptions?: (
    | 'unknownMemberAsUnreferenced'
    | 'returnAsUnreferenced'
  )[];
}

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
      TSTypeLiteral?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      TSInterfaceBody?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minProperties?: number;
            consistent?: boolean;
          };
      TSEnumBody?:
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

export type ObjectShorthandOption =
  | []
  | [
      | 'always'
      | 'methods'
      | 'properties'
      | 'never'
      | 'consistent'
      | 'consistent-as-needed',
    ]
  | ['always' | 'methods' | 'properties']
  | [
      'always' | 'methods' | 'properties',
      {
        avoidQuotes?: boolean;
      },
    ]
  | ['always' | 'methods']
  | [
      'always' | 'methods',
      {
        ignoreConstructors?: boolean;
        methodsIgnorePattern?: string;
        avoidQuotes?: boolean;
        avoidExplicitReturnArrows?: boolean;
      },
    ];

export namespace OperatorLinebreak {
  export type OperatorLinebreakOption = ('after' | 'before' | 'none') | null;

  export interface OperatorLinebreakConfig {
    overrides?: {
      [k: string]: 'after' | 'before' | 'none' | 'ignore';
    };
  }

  export type OperatorLinebreakRuleConfig = [
    OperatorLinebreakOption?,
    OperatorLinebreakConfig?,
  ];
}

export type PaddingLineBetweenTagsOption = {
  blankLine: 'always' | 'never' | 'consistent';
  prev: string;
  next: string;
}[];

export type PaddingLinesInComponentDefinitionOption =
  | ('always' | 'never')
  | {
      betweenOptions?: 'never' | 'always' | 'ignore';
      withinOption?:
        | ('never' | 'always' | 'ignore')
        | {
            [k: string]:
              | ('never' | 'always' | 'ignore')
              | {
                  betweenItems?: 'never' | 'always' | 'ignore';
                  withinEach?: 'never' | 'always' | 'ignore';
                };
          };
      groupSingleLineProperties?: boolean;
    };

export type PropNameCasingRuleConfig = [
  ('camelCase' | 'snake_case')?,
  {
    ignoreProps?: string[];
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

export interface RequirePropCommentOption {
  type?: 'JSDoc' | 'line' | 'block' | 'any';
}

export type ScriptIndentOption = number | 'tab';

export type ScriptIndentRuleConfig = [
  ScriptIndentOption?,
  {
    baseIndent?: number;
    switchCase?: number;
    ignores?: string[];
  }?,
];

export type SortKeysRuleConfig = [
  ('asc' | 'desc')?,
  {
    caseSensitive?: boolean;
    ignoreChildrenOf?: any[];
    ignoreGrandchildrenOf?: any[];
    minKeys?: number;
    natural?: boolean;
  }?,
];

export interface SpaceInParensConfig {
  exceptions?: ('{}' | '[]' | '()' | 'empty')[];
}

export interface SpaceUnaryOpsOption {
  words?: boolean;
  nonwords?: boolean;
  overrides?: {
    [k: string]: boolean;
  };
}

export interface VBindStyleConfig {
  sameNameShorthand?: 'always' | 'never' | 'ignore';
}

export type VOnEventHyphenationRuleConfig = [
  ('always' | 'never')?,
  {
    autofix?: boolean;
    ignore?: string[];
    ignoreTags?: string[];
  }?,
];

export type VOnHandlerStyleOption =
  | ('inline' | 'inline-function')
  | ['method', 'inline' | 'inline-function'];

export type VOnHandlerStyleRuleConfig = [
  VOnHandlerStyleOption?,
  {
    ignoreIncludesComment?: boolean;
  }?,
];

export type VSlotStyleOption =
  | ('shorthand' | 'longform')
  | {
      atComponent?: 'shorthand' | 'longform' | 'v-slot';
      default?: 'shorthand' | 'longform' | 'v-slot';
      named?: 'shorthand' | 'longform';
    };

/**
 * All Vue rules.
 */
export interface VueRules {
  /**
   * Enforce linebreaks after opening and before closing array brackets in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html)
   */
  'vue/array-bracket-newline': [ArrayBracketNewlineOption?];

  /**
   * Enforce consistent spacing inside array brackets in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html)
   */
  'vue/array-bracket-spacing': ArrayBracketSpacingRuleConfig;

  /**
   * Enforce line breaks after each array element in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [array-element-newline](https://eslint.vuejs.org/rules/array-element-newline.html)
   */
  'vue/array-element-newline': ArrayElementNewline.ArrayElementNewlineRuleConfig;

  /**
   * Enforce consistent spacing before and after the arrow in arrow functions in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html)
   */
  'vue/arrow-spacing': [
    {
      before?: boolean;
      after?: boolean;
    }?,
  ];

  /**
   * Enforce attribute naming style on custom components in template.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`
   * @see [attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html)
   */
  'vue/attribute-hyphenation': AttributeHyphenationRuleConfig;

  /**
   * Enforce order of attributes.
   * @preset `vue/vue2-recommended`, `vue/recommended`
   * @see [attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)
   */
  'vue/attributes-order': [AttributesOrderOption?];

  /**
   * Disallow use other than available `lang`.
   * @see [block-lang](https://eslint.vuejs.org/rules/block-lang.html)
   */
  'vue/block-lang': [BlockLangOption?];

  /**
   * Enforce order of component top-level elements.
   * @preset `vue/vue2-recommended`, `vue/recommended`
   * @see [block-order](https://eslint.vuejs.org/rules/block-order.html)
   */
  'vue/block-order': [BlockOrderOption?];

  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [block-spacing](https://eslint.vuejs.org/rules/block-spacing.html)
   */
  'vue/block-spacing': [('always' | 'never')?];

  /**
   * Enforce line breaks after opening and before closing block-level tags.
   * @preset `vue/no-layout-rules`
   * @see [block-tag-newline](https://eslint.vuejs.org/rules/block-tag-newline.html)
   */
  'vue/block-tag-newline': [BlockTagNewlineOption?];

  /**
   * Enforce consistent brace style for blocks in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [brace-style](https://eslint.vuejs.org/rules/brace-style.html)
   */
  'vue/brace-style': BraceStyleRuleConfig;

  /**
   * Enforce camelcase naming convention in `<template>`.
   * @see [camelcase](https://eslint.vuejs.org/rules/camelcase.html)
   */
  'vue/camelcase': [CamelcaseOption?];

  /**
   * Require or disallow trailing commas in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [comma-dangle](https://eslint.vuejs.org/rules/comma-dangle.html)
   */
  'vue/comma-dangle': CommaDangle.CommaDangleRuleConfig;

  /**
   * Enforce consistent spacing before and after commas in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html)
   */
  'vue/comma-spacing': [
    {
      before?: boolean;
      after?: boolean;
    }?,
  ];

  /**
   * Enforce consistent comma style in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
   */
  'vue/comma-style': [('first' | 'last')?, CommaStyleConfig?];

  /**
   * Support comment-directives in `<template>`.
   * @preset `vue/base`
   * @see [comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)
   */
  'vue/comment-directive': [
    {
      reportUnusedDisableDirectives?: boolean;
    }?,
  ];

  /**
   * Enforce component API style.
   * @see [component-api-style](https://eslint.vuejs.org/rules/component-api-style.html)
   */
  'vue/component-api-style': [ComponentApiStyleOption?];

  /**
   * Enforce specific casing for component definition name.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`
   * @see [component-definition-name-casing](https://eslint.vuejs.org/rules/component-definition-name-casing.html)
   */
  'vue/component-definition-name-casing': [('PascalCase' | 'kebab-case')?];

  /**
   * Enforce specific casing for the component naming style in template.
   * @see [component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)
   */
  'vue/component-name-in-template-casing': ComponentNameInTemplateCasingRuleConfig;

  /**
   * Enforce the casing of component name in `components` options.
   * @see [component-options-name-casing](https://eslint.vuejs.org/rules/component-options-name-casing.html)
   */
  'vue/component-options-name-casing': [
    ('camelCase' | 'kebab-case' | 'PascalCase')?,
  ];

  /**
   * Enforce specific casing for custom event name.
   * @see [custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)
   */
  'vue/custom-event-name-casing': CustomEventNameCasingRuleConfig;

  /**
   * Enforce declaration style of `defineEmits`.
   * @see [define-emits-declaration](https://eslint.vuejs.org/rules/define-emits-declaration.html)
   */
  'vue/define-emits-declaration': [
    ('type-based' | 'type-literal' | 'runtime')?,
  ];

  /**
   * Enforce order of compiler macros (`defineProps`, `defineEmits`, etc.).
   * @preset `vue/no-layout-rules`
   * @see [define-macros-order](https://eslint.vuejs.org/rules/define-macros-order.html)
   */
  'vue/define-macros-order': [
    {
      order?: string[];
      defineExposeLast?: boolean;
    }?,
  ];

  /**
   * Enforce declaration style of `defineProps`.
   * @see [define-props-declaration](https://eslint.vuejs.org/rules/define-props-declaration.html)
   */
  'vue/define-props-declaration': [('type-based' | 'runtime')?];

  /**
   * Enforce consistent style for props destructuring.
   * @see [define-props-destructuring](https://eslint.vuejs.org/rules/define-props-destructuring.html)
   */
  'vue/define-props-destructuring': [DefinePropsDestructuringOption?];

  /**
   * Enforce consistent newlines before and after dots in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [dot-location](https://eslint.vuejs.org/rules/dot-location.html)
   */
  'vue/dot-location': [('object' | 'property')?];

  /**
   * Enforce dot notation whenever possible in `<template>`.
   * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
   */
  'vue/dot-notation': [
    {
      allowKeywords?: boolean;
      allowPattern?: string;
    }?,
  ];

  /**
   * Enforce or forbid the use of the `scoped` and `module` attributes in SFC top level style tags.
   * @see [enforce-style-attribute](https://eslint.vuejs.org/rules/enforce-style-attribute.html)
   */
  'vue/enforce-style-attribute': [EnforceStyleAttributeOption?];

  /**
   * Require the use of `===` and `!==` in `<template>`.
   * @see [eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)
   */
  'vue/eqeqeq': EqeqeqOption;

  /**
   * Enforce the location of first attribute.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [first-attribute-linebreak](https://eslint.vuejs.org/rules/first-attribute-linebreak.html)
   */
  'vue/first-attribute-linebreak': [FirstAttributeLinebreakOption?];

  /**
   * Require or disallow spacing between function identifiers and their invocations in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [func-call-spacing](https://eslint.vuejs.org/rules/func-call-spacing.html)
   */
  'vue/func-call-spacing': FuncCallSpacingOption;

  /**
   * Disallow usage of button without an explicit type attribute.
   * @see [html-button-has-type](https://eslint.vuejs.org/rules/html-button-has-type.html)
   */
  'vue/html-button-has-type': [
    {
      button?: boolean;
      submit?: boolean;
      reset?: boolean;
    }?,
  ];

  /**
   * Require or disallow a line break before tag's closing brackets.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [html-closing-bracket-newline](https://eslint.vuejs.org/rules/html-closing-bracket-newline.html)
   */
  'vue/html-closing-bracket-newline': [HtmlClosingBracketNewlineOption?];

  /**
   * Require or disallow a space before tag's closing brackets.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [html-closing-bracket-spacing](https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html)
   */
  'vue/html-closing-bracket-spacing': [HtmlClosingBracketSpacingOption?];

  /**
   * Enforce unified line break in HTML comments.
   * @preset `vue/no-layout-rules`
   * @see [html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)
   */
  'vue/html-comment-content-newline': HtmlCommentContentNewlineRuleConfig;

  /**
   * Enforce unified spacing in HTML comments.
   * @preset `vue/no-layout-rules`
   * @see [html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)
   */
  'vue/html-comment-content-spacing': HtmlCommentContentSpacingRuleConfig;

  /**
   * Enforce consistent indentation in HTML comments.
   * @preset `vue/no-layout-rules`
   * @see [html-comment-indent](https://eslint.vuejs.org/rules/html-comment-indent.html)
   */
  'vue/html-comment-indent': [HtmlCommentIndentOption?];

  /**
   * Enforce end tag style.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`
   * @see [html-end-tags](https://eslint.vuejs.org/rules/html-end-tags.html)
   */
  'vue/html-end-tags': null;

  /**
   * Enforce consistent indentation in `<template>`.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [html-indent](https://eslint.vuejs.org/rules/html-indent.html)
   */
  'vue/html-indent': HtmlIndent.HtmlIndentRuleConfig;

  /**
   * Enforce quotes style of HTML attributes.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [html-quotes](https://eslint.vuejs.org/rules/html-quotes.html)
   */
  'vue/html-quotes': HtmlQuotesRuleConfig;

  /**
   * Enforce self-closing style.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [html-self-closing](https://eslint.vuejs.org/rules/html-self-closing.html)
   */
  'vue/html-self-closing': HtmlSelfClosing.HtmlSelfClosingRuleConfig;

  /**
   * Prevent variables used in JSX to be marked as unused.
   * @preset `vue/base`
   * @see [jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars.html)
   */
  'vue/jsx-uses-vars': null;

  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [key-spacing](https://eslint.vuejs.org/rules/key-spacing.html)
   */
  'vue/key-spacing': [KeySpacingOption?];

  /**
   * Enforce consistent spacing before and after keywords in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [keyword-spacing](https://eslint.vuejs.org/rules/keyword-spacing.html)
   */
  'vue/keyword-spacing': KeywordSpacing.KeywordSpacingRuleConfig;

  /**
   * Require component name property to match its file name.
   * @see [match-component-file-name](https://eslint.vuejs.org/rules/match-component-file-name.html)
   */
  'vue/match-component-file-name': [
    {
      extensions?: string[];
      shouldMatchCase?: boolean;
    }?,
  ];

  /**
   * Require the registered component name to match the imported component name.
   * @see [match-component-import-name](https://eslint.vuejs.org/rules/match-component-import-name.html)
   */
  'vue/match-component-import-name': null;

  /**
   * Enforce the maximum number of attributes per line.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html)
   */
  'vue/max-attributes-per-line': [MaxAttributesPerLineOption?];

  /**
   * Enforce a maximum line length in `.vue` files.
   * @preset `vue/no-layout-rules`
   * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
   */
  'vue/max-len': MaxLen.MaxLenRuleConfig;

  /**
   * Enforce maximum number of lines in Vue SFC blocks.
   * @see [max-lines-per-block](https://eslint.vuejs.org/rules/max-lines-per-block.html)
   */
  'vue/max-lines-per-block': [
    {
      style?: number;
      template?: number;
      script?: number;
      skipBlankLines?: boolean;
    }?,
  ];

  /**
   * Enforce maximum number of props in Vue component.
   * @see [max-props](https://eslint.vuejs.org/rules/max-props.html)
   */
  'vue/max-props': [
    {
      maxProps?: number;
    }?,
  ];

  /**
   * Enforce maximum depth of template.
   * @see [max-template-depth](https://eslint.vuejs.org/rules/max-template-depth.html)
   */
  'vue/max-template-depth': [
    {
      maxDepth?: number;
    }?,
  ];

  /**
   * Require component names to be always multi-word.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html)
   */
  'vue/multi-word-component-names': [
    {
      ignores?: string[];
    }?,
  ];

  /**
   * Require a line break before and after the contents of a multiline element.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [multiline-html-element-content-newline](https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html)
   */
  'vue/multiline-html-element-content-newline': [
    {
      ignoreWhenEmpty?: boolean;
      ignores?: string[];
      allowEmptyLines?: boolean;
    }?,
  ];

  /**
   * Enforce newlines between operands of ternary expressions in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [multiline-ternary](https://eslint.vuejs.org/rules/multiline-ternary.html)
   */
  'vue/multiline-ternary': MultilineTernaryRuleConfig;

  /**
   * Enforce unified spacing in mustache interpolations.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [mustache-interpolation-spacing](https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html)
   */
  'vue/mustache-interpolation-spacing': [('always' | 'never')?];

  /**
   * Enforce new lines between multi-line properties in Vue components.
   * @preset `vue/no-layout-rules`
   * @see [new-line-between-multi-line-property](https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html)
   */
  'vue/new-line-between-multi-line-property': [
    {
      minLineOfMultilineProperty?: number;
    }?,
  ];

  /**
   * Enforce Promise or callback style in `nextTick`.
   * @see [next-tick-style](https://eslint.vuejs.org/rules/next-tick-style.html)
   */
  'vue/next-tick-style': [('promise' | 'callback')?];

  /**
   * Disallow using arrow functions to define watcher.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-arrow-functions-in-watch](https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html)
   */
  'vue/no-arrow-functions-in-watch': null;

  /**
   * Disallow asynchronous actions in computed properties.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)
   */
  'vue/no-async-in-computed-properties': null;

  /**
   * Disallow the use of bare strings in `<template>`.
   * @see [no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html)
   */
  'vue/no-bare-strings-in-template': [NoBareStringsInTemplateOption?];

  /**
   * Disallow boolean defaults.
   * @see [no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)
   */
  'vue/no-boolean-default': [('default-false' | 'no-default')?];

  /**
   * Disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text`.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-child-content](https://eslint.vuejs.org/rules/no-child-content.html)
   */
  'vue/no-child-content': [NoChildContentOption?];

  /**
   * Disallow accessing computed properties in `data`.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-computed-properties-in-data](https://eslint.vuejs.org/rules/no-computed-properties-in-data.html)
   */
  'vue/no-computed-properties-in-data': null;

  /**
   * Disallow the use of `console` in `<template>`.
   * @see [no-console](https://eslint.vuejs.org/rules/no-console.html)
   */
  'vue/no-console': [NoConsoleOption?];

  /**
   * Disallow constant expressions in conditions in `<template>`.
   * @see [no-constant-condition](https://eslint.vuejs.org/rules/no-constant-condition.html)
   */
  'vue/no-constant-condition': [NoConstantConditionOption?];

  /**
   * Disallow custom modifiers on v-model used on the component.
   * @preset `vue/vue2-essential`
   * @see [no-custom-modifiers-on-v-model](https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html)
   */
  'vue/no-custom-modifiers-on-v-model': null;

  /**
   * Disallow using deprecated object declaration on data (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-data-object-declaration](https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html)
   */
  'vue/no-deprecated-data-object-declaration': null;

  /**
   * Disallow using deprecated `$delete` and `$set` (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-delete-set](https://eslint.vuejs.org/rules/no-deprecated-delete-set.html)
   */
  'vue/no-deprecated-delete-set': null;

  /**
   * Disallow using deprecated `destroyed` and `beforeDestroy` lifecycle hooks (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-destroyed-lifecycle](https://eslint.vuejs.org/rules/no-deprecated-destroyed-lifecycle.html)
   */
  'vue/no-deprecated-destroyed-lifecycle': null;

  /**
   * Disallow using deprecated `$listeners` (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-dollar-listeners-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-listeners-api.html)
   */
  'vue/no-deprecated-dollar-listeners-api': null;

  /**
   * Disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-dollar-scopedslots-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html)
   */
  'vue/no-deprecated-dollar-scopedslots-api': null;

  /**
   * Disallow using deprecated events api (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-events-api](https://eslint.vuejs.org/rules/no-deprecated-events-api.html)
   */
  'vue/no-deprecated-events-api': null;

  /**
   * Disallow using deprecated filters syntax (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-filter](https://eslint.vuejs.org/rules/no-deprecated-filter.html)
   */
  'vue/no-deprecated-filter': null;

  /**
   * Disallow using deprecated the `functional` template (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-functional-template](https://eslint.vuejs.org/rules/no-deprecated-functional-template.html)
   */
  'vue/no-deprecated-functional-template': null;

  /**
   * Disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-html-element-is](https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html)
   */
  'vue/no-deprecated-html-element-is': null;

  /**
   * Disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-inline-template](https://eslint.vuejs.org/rules/no-deprecated-inline-template.html)
   */
  'vue/no-deprecated-inline-template': null;

  /**
   * Disallow deprecated `model` definition (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-model-definition](https://eslint.vuejs.org/rules/no-deprecated-model-definition.html)
   */
  'vue/no-deprecated-model-definition': [
    {
      allowVue3Compat?: boolean;
    }?,
  ];

  /**
   * Disallow deprecated `this` access in props default function (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-props-default-this](https://eslint.vuejs.org/rules/no-deprecated-props-default-this.html)
   */
  'vue/no-deprecated-props-default-this': null;

  /**
   * Disallow using deprecated `tag` property on `RouterLink` (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-router-link-tag-prop](https://eslint.vuejs.org/rules/no-deprecated-router-link-tag-prop.html)
   */
  'vue/no-deprecated-router-link-tag-prop': [
    NoDeprecatedRouterLinkTagPropOption?,
  ];

  /**
   * Disallow deprecated `scope` attribute (in Vue.js 2.5.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html)
   */
  'vue/no-deprecated-scope-attribute': null;

  /**
   * Disallow deprecated `slot` attribute (in Vue.js 2.6.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-slot-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html)
   */
  'vue/no-deprecated-slot-attribute': [
    {
      ignore?: string[];
      ignoreParents?: string[];
    }?,
  ];

  /**
   * Disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-slot-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html)
   */
  'vue/no-deprecated-slot-scope-attribute': null;

  /**
   * Disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-v-bind-sync](https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html)
   */
  'vue/no-deprecated-v-bind-sync': null;

  /**
   * Disallow deprecated `v-is` directive (in Vue.js 3.1.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-v-is](https://eslint.vuejs.org/rules/no-deprecated-v-is.html)
   */
  'vue/no-deprecated-v-is': null;

  /**
   * Disallow using deprecated `.native` modifiers (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-v-on-native-modifier](https://eslint.vuejs.org/rules/no-deprecated-v-on-native-modifier.html)
   */
  'vue/no-deprecated-v-on-native-modifier': null;

  /**
   * Disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-v-on-number-modifiers](https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html)
   */
  'vue/no-deprecated-v-on-number-modifiers': null;

  /**
   * Disallow using deprecated `Vue.config.keyCodes` (in Vue.js 3.0.0+).
   * @preset `vue/essential`
   * @see [no-deprecated-vue-config-keycodes](https://eslint.vuejs.org/rules/no-deprecated-vue-config-keycodes.html)
   */
  'vue/no-deprecated-vue-config-keycodes': null;

  /**
   * Disallow duplication of field names.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)
   */
  'vue/no-dupe-keys': [
    {
      groups?: any[];
    }?,
  ];

  /**
   * Disallow duplicate conditions in `v-if` / `v-else-if` chains.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-dupe-v-else-if](https://eslint.vuejs.org/rules/no-dupe-v-else-if.html)
   */
  'vue/no-dupe-v-else-if': null;

  /**
   * Enforce `inheritAttrs` to be set to `false` when using `v-bind="$attrs"`.
   * @see [no-duplicate-attr-inheritance](https://eslint.vuejs.org/rules/no-duplicate-attr-inheritance.html)
   */
  'vue/no-duplicate-attr-inheritance': [
    {
      checkMultiRootNodes?: boolean;
    }?,
  ];

  /**
   * Disallow duplication of attributes.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)
   */
  'vue/no-duplicate-attributes': [
    {
      allowCoexistClass?: boolean;
      allowCoexistStyle?: boolean;
    }?,
  ];

  /**
   * Disallow the `<template>` `<script>` `<style>` block to be empty.
   * @see [no-empty-component-block](https://eslint.vuejs.org/rules/no-empty-component-block.html)
   */
  'vue/no-empty-component-block': null;

  /**
   * Disallow empty destructuring patterns in `<template>`.
   * @see [no-empty-pattern](https://eslint.vuejs.org/rules/no-empty-pattern.html)
   */
  'vue/no-empty-pattern': [
    {
      allowObjectPatternsAsParameters?: boolean;
    }?,
  ];

  /**
   * Disallow `export` in `<script setup>`.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-export-in-script-setup](https://eslint.vuejs.org/rules/no-export-in-script-setup.html)
   */
  'vue/no-export-in-script-setup': null;

  /**
   * Disallow asynchronously registered `expose`.
   * @preset `vue/essential`
   * @see [no-expose-after-await](https://eslint.vuejs.org/rules/no-expose-after-await.html)
   */
  'vue/no-expose-after-await': null;

  /**
   * Disallow unnecessary parentheses in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
   */
  'vue/no-extra-parens': NoExtraParensOption;

  /**
   * Disallow shorthand type conversions in `<template>`.
   * @see [no-implicit-coercion](https://eslint.vuejs.org/rules/no-implicit-coercion.html)
   */
  'vue/no-implicit-coercion': [NoImplicitCoercionOption?];

  /**
   * Disallow importing Vue compiler macros.
   * @see [no-import-compiler-macros](https://eslint.vuejs.org/rules/no-import-compiler-macros.html)
   */
  'vue/no-import-compiler-macros': null;

  /**
   * Disallow irregular whitespace in `.vue` files.
   * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
   */
  'vue/no-irregular-whitespace': [
    {
      skipComments?: boolean;
      skipStrings?: boolean;
      skipTemplates?: boolean;
      skipRegExps?: boolean;
      skipHTMLAttributeValues?: boolean;
      skipHTMLTextContents?: boolean;
    }?,
  ];

  /**
   * Disallow asynchronously registered lifecycle hooks.
   * @preset `vue/essential`
   * @see [no-lifecycle-after-await](https://eslint.vuejs.org/rules/no-lifecycle-after-await.html)
   */
  'vue/no-lifecycle-after-await': null;

  /**
   * Disallow unnecessary `<template>`.
   * @preset `vue/vue2-recommended`, `vue/recommended`
   * @see [no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html)
   */
  'vue/no-lone-template': [
    {
      ignoreAccessible?: boolean;
    }?,
  ];

  /**
   * Disallow literal numbers that lose precision in `<template>`.
   * @see [no-loss-of-precision](https://eslint.vuejs.org/rules/no-loss-of-precision.html)
   */
  'vue/no-loss-of-precision': null;

  /**
   * Disallow multiple spaces.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [no-multi-spaces](https://eslint.vuejs.org/rules/no-multi-spaces.html)
   */
  'vue/no-multi-spaces': [
    {
      ignoreProperties?: boolean;
    }?,
  ];

  /**
   * Disallow passing multiple objects in an array to class.
   * @see [no-multiple-objects-in-class](https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html)
   */
  'vue/no-multiple-objects-in-class': null;

  /**
   * Disallow passing multiple arguments to scoped slots.
   * @preset `vue/vue2-recommended`, `vue/recommended`
   * @see [no-multiple-slot-args](https://eslint.vuejs.org/rules/no-multiple-slot-args.html)
   */
  'vue/no-multiple-slot-args': null;

  /**
   * Disallow adding multiple root nodes to the template.
   * @preset `vue/vue2-essential`
   * @see [no-multiple-template-root](https://eslint.vuejs.org/rules/no-multiple-template-root.html)
   */
  'vue/no-multiple-template-root': [
    {
      disallowComments?: boolean;
    }?,
  ];

  /**
   * Disallow mutation of component props.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html)
   */
  'vue/no-mutating-props': [
    {
      shallowOnly?: boolean;
    }?,
  ];

  /**
   * Disallow negated conditions in `<template>`.
   * @see [no-negated-condition](https://eslint.vuejs.org/rules/no-negated-condition.html)
   */
  'vue/no-negated-condition': null;

  /**
   * Disallow negated conditions in v-if/v-else.
   * @see [no-negated-v-if-condition](https://eslint.vuejs.org/rules/no-negated-v-if-condition.html)
   */
  'vue/no-negated-v-if-condition': null;

  /**
   * Disallow parsing errors in `<template>`.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)
   */
  'vue/no-parsing-error': [NoParsingErrorOption?];

  /**
   * Disallow a potential typo in your component property.
   * @see [no-potential-component-option-typo](https://eslint.vuejs.org/rules/no-potential-component-option-typo.html)
   */
  'vue/no-potential-component-option-typo': [
    NoPotentialComponentOptionTypoOption?,
  ];

  /**
   * Disallow use of value wrapped by `ref()` (Composition API) as an operand.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-ref-as-operand](https://eslint.vuejs.org/rules/no-ref-as-operand.html)
   */
  'vue/no-ref-as-operand': null;

  /**
   * Disallow usages of ref objects that can lead to loss of reactivity.
   * @see [no-ref-object-reactivity-loss](https://eslint.vuejs.org/rules/no-ref-object-reactivity-loss.html)
   */
  'vue/no-ref-object-reactivity-loss': null;

  /**
   * Enforce props with default values to be optional.
   * @preset `vue/vue2-recommended`, `vue/recommended`
   * @see [no-required-prop-with-default](https://eslint.vuejs.org/rules/no-required-prop-with-default.html)
   */
  'vue/no-required-prop-with-default': [
    {
      autofix?: boolean;
    }?,
  ];

  /**
   * Disallow the use of reserved names in component definitions.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
   */
  'vue/no-reserved-component-names': [
    {
      disallowVueBuiltInComponents?: boolean;
      disallowVue3BuiltInComponents?: boolean;
      htmlElementCaseSensitive?: boolean;
    }?,
  ];

  /**
   * Disallow overwriting reserved keys.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys.html)
   */
  'vue/no-reserved-keys': [
    {
      reserved?: any[];
      groups?: any[];
    }?,
  ];

  /**
   * Disallow reserved names in props.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-reserved-props](https://eslint.vuejs.org/rules/no-reserved-props.html)
   */
  'vue/no-reserved-props': [NoReservedPropsOption?];

  /**
   * Disallow specific block.
   * @see [no-restricted-block](https://eslint.vuejs.org/rules/no-restricted-block.html)
   */
  'vue/no-restricted-block': NoRestrictedBlockOption;

  /**
   * Disallow asynchronously called restricted methods.
   * @see [no-restricted-call-after-await](https://eslint.vuejs.org/rules/no-restricted-call-after-await.html)
   */
  'vue/no-restricted-call-after-await': NoRestrictedCallAfterAwaitOption;

  /**
   * Disallow specific classes in Vue components.
   * @see [no-restricted-class](https://eslint.vuejs.org/rules/no-restricted-class.html)
   */
  'vue/no-restricted-class': NoRestrictedClassOption;

  /**
   * Disallow specific component names.
   * @see [no-restricted-component-names](https://eslint.vuejs.org/rules/no-restricted-component-names.html)
   */
  'vue/no-restricted-component-names': NoRestrictedComponentNamesOption;

  /**
   * Disallow specific component option.
   * @see [no-restricted-component-options](https://eslint.vuejs.org/rules/no-restricted-component-options.html)
   */
  'vue/no-restricted-component-options': NoRestrictedComponentOptionsOption;

  /**
   * Disallow specific custom event.
   * @see [no-restricted-custom-event](https://eslint.vuejs.org/rules/no-restricted-custom-event.html)
   */
  'vue/no-restricted-custom-event': NoRestrictedCustomEventOption;

  /**
   * Disallow specific elements.
   * @see [no-restricted-html-elements](https://eslint.vuejs.org/rules/no-restricted-html-elements.html)
   */
  'vue/no-restricted-html-elements': NoRestrictedHtmlElementsOption;

  /**
   * Disallow specific props.
   * @see [no-restricted-props](https://eslint.vuejs.org/rules/no-restricted-props.html)
   */
  'vue/no-restricted-props': NoRestrictedPropsOption;

  /**
   * Disallow specific attribute.
   * @see [no-restricted-static-attribute](https://eslint.vuejs.org/rules/no-restricted-static-attribute.html)
   */
  'vue/no-restricted-static-attribute': NoRestrictedStaticAttributeOption;

  /**
   * Disallow specified syntax in `<template>`.
   * @see [no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html)
   */
  'vue/no-restricted-syntax': NoRestrictedSyntaxOption;

  /**
   * Disallow specific argument in `v-bind`.
   * @see [no-restricted-v-bind](https://eslint.vuejs.org/rules/no-restricted-v-bind.html)
   */
  'vue/no-restricted-v-bind': NoRestrictedVBindOption;

  /**
   * Disallow specific argument in `v-on`.
   * @see [no-restricted-v-on](https://eslint.vuejs.org/rules/no-restricted-v-on.html)
   */
  'vue/no-restricted-v-on': NoRestrictedVOnOption;

  /**
   * Disallow `v-if` directives on root element.
   * @see [no-root-v-if](https://eslint.vuejs.org/rules/no-root-v-if.html)
   */
  'vue/no-root-v-if': null;

  /**
   * Disallow usages that lose the reactivity of `props` passed to `setup`.
   * @see [no-setup-props-reactivity-loss](https://eslint.vuejs.org/rules/no-setup-props-reactivity-loss.html)
   */
  'vue/no-setup-props-reactivity-loss': null;

  /**
   * Enforce component's data property to be a function.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)
   */
  'vue/no-shared-component-data': null;

  /**
   * Disallow side effects in computed properties.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-side-effects-in-computed-properties](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html)
   */
  'vue/no-side-effects-in-computed-properties': null;

  /**
   * Disallow spaces around equal signs in attribute.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [no-spaces-around-equal-signs-in-attribute](https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html)
   */
  'vue/no-spaces-around-equal-signs-in-attribute': null;

  /**
   * Disallow sparse arrays in `<template>`.
   * @see [no-sparse-arrays](https://eslint.vuejs.org/rules/no-sparse-arrays.html)
   */
  'vue/no-sparse-arrays': null;

  /**
   * Disallow static inline `style` attributes.
   * @see [no-static-inline-styles](https://eslint.vuejs.org/rules/no-static-inline-styles.html)
   */
  'vue/no-static-inline-styles': [
    {
      allowBinding?: boolean;
    }?,
  ];

  /**
   * Disallow `key` attribute on `<template>`.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)
   */
  'vue/no-template-key': null;

  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`
   * @see [no-template-shadow](https://eslint.vuejs.org/rules/no-template-shadow.html)
   */
  'vue/no-template-shadow': [
    {
      allow?: string[];
    }?,
  ];

  /**
   * Disallow target="_blank" attribute without rel="noopener noreferrer".
   * @see [no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html)
   */
  'vue/no-template-target-blank': [NoTemplateTargetBlankOption?];

  /**
   * Disallow mustaches in `<textarea>`.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)
   */
  'vue/no-textarea-mustache': null;

  /**
   * Disallow `this` usage in a `beforeRouteEnter` method.
   * @see [no-this-in-before-route-enter](https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html)
   */
  'vue/no-this-in-before-route-enter': null;

  /**
   * Disallow use of undefined components in `<template>`.
   * @see [no-undef-components](https://eslint.vuejs.org/rules/no-undef-components.html)
   */
  'vue/no-undef-components': [
    {
      ignorePatterns?: any[];
    }?,
  ];

  /**
   * Disallow undefined properties.
   * @see [no-undef-properties](https://eslint.vuejs.org/rules/no-undef-properties.html)
   */
  'vue/no-undef-properties': [
    {
      ignores?: string[];
    }?,
  ];

  /**
   * Disallow unsupported Vue.js syntax on the specified version.
   * @see [no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html)
   */
  'vue/no-unsupported-features': [NoUnsupportedFeaturesOption?];

  /**
   * Disallow registering components that are not used inside templates.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-unused-components](https://eslint.vuejs.org/rules/no-unused-components.html)
   */
  'vue/no-unused-components': [
    {
      ignoreWhenBindingPresent?: boolean;
    }?,
  ];

  /**
   * Disallow unused emit declarations.
   * @see [no-unused-emit-declarations](https://eslint.vuejs.org/rules/no-unused-emit-declarations.html)
   */
  'vue/no-unused-emit-declarations': null;

  /**
   * Disallow unused properties.
   * @see [no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html)
   */
  'vue/no-unused-properties': [NoUnusedPropertiesOption?];

  /**
   * Disallow unused refs.
   * @see [no-unused-refs](https://eslint.vuejs.org/rules/no-unused-refs.html)
   */
  'vue/no-unused-refs': null;

  /**
   * Disallow unused variable definitions of v-for directives or scope attributes.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-unused-vars](https://eslint.vuejs.org/rules/no-unused-vars.html)
   */
  'vue/no-unused-vars': [
    {
      ignorePattern?: string;
    }?,
  ];

  /**
   * Disallow use computed property like method.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-use-computed-property-like-method](https://eslint.vuejs.org/rules/no-use-computed-property-like-method.html)
   */
  'vue/no-use-computed-property-like-method': null;

  /**
   * Disallow using `v-else-if`/`v-else` on the same element as `v-for`.
   * @see [no-use-v-else-with-v-for](https://eslint.vuejs.org/rules/no-use-v-else-with-v-for.html)
   */
  'vue/no-use-v-else-with-v-for': null;

  /**
   * Disallow using `v-if` on the same element as `v-for`.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html)
   */
  'vue/no-use-v-if-with-v-for': [
    {
      allowUsingIterationVar?: boolean;
    }?,
  ];

  /**
   * Disallow unnecessary concatenation of literals or template literals in `<template>`.
   * @see [no-useless-concat](https://eslint.vuejs.org/rules/no-useless-concat.html)
   */
  'vue/no-useless-concat': null;

  /**
   * Disallow unnecessary mustache interpolations.
   * @see [no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html)
   */
  'vue/no-useless-mustaches': [
    {
      ignoreIncludesComment?: boolean;
      ignoreStringEscape?: boolean;
    }?,
  ];

  /**
   * Disallow useless attribute on `<template>`.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-useless-template-attributes](https://eslint.vuejs.org/rules/no-useless-template-attributes.html)
   */
  'vue/no-useless-template-attributes': null;

  /**
   * Disallow unnecessary `v-bind` directives.
   * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
   */
  'vue/no-useless-v-bind': [
    {
      ignoreIncludesComment?: boolean;
      ignoreStringEscape?: boolean;
    }?,
  ];

  /**
   * Disallow key of `<template v-for>` placed on child elements.
   * @preset `vue/essential`
   * @see [no-v-for-template-key-on-child](https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html)
   */
  'vue/no-v-for-template-key-on-child': null;

  /**
   * Disallow `key` attribute on `<template v-for>`.
   * @deprecated
   * @preset `vue/vue2-essential`
   * @see [no-v-for-template-key](https://eslint.vuejs.org/rules/no-v-for-template-key.html)
   */
  'vue/no-v-for-template-key': null;

  /**
   * Disallow use of v-html to prevent XSS attack.
   * @preset `vue/vue2-recommended`, `vue/recommended`
   * @see [no-v-html](https://eslint.vuejs.org/rules/no-v-html.html)
   */
  'vue/no-v-html': null;

  /**
   * Disallow adding an argument to `v-model` used in custom component.
   * @deprecated
   * @preset `vue/vue2-essential`
   * @see [no-v-model-argument](https://eslint.vuejs.org/rules/no-v-model-argument.html)
   */
  'vue/no-v-model-argument': null;

  /**
   * Disallow v-text / v-html on component.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [no-v-text-v-html-on-component](https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html)
   */
  'vue/no-v-text-v-html-on-component': [
    {
      allow?: string[];
      ignoreElementNamespaces?: boolean;
    }?,
  ];

  /**
   * Disallow use of v-text.
   * @see [no-v-text](https://eslint.vuejs.org/rules/no-v-text.html)
   */
  'vue/no-v-text': null;

  /**
   * Disallow asynchronously registered `watch`.
   * @preset `vue/essential`
   * @see [no-watch-after-await](https://eslint.vuejs.org/rules/no-watch-after-await.html)
   */
  'vue/no-watch-after-await': null;

  /**
   * Enforce consistent line breaks after opening and before closing braces in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [object-curly-newline](https://eslint.vuejs.org/rules/object-curly-newline.html)
   */
  'vue/object-curly-newline': [ObjectCurlyNewlineOption?];

  /**
   * Enforce consistent spacing inside braces in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
   */
  'vue/object-curly-spacing': ObjectCurlySpacingRuleConfig;

  /**
   * Enforce placing object properties on separate lines in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
   */
  'vue/object-property-newline': [
    {
      allowAllPropertiesOnSameLine?: boolean;
    }?,
  ];

  /**
   * Require or disallow method and property shorthand syntax for object literals in `<template>`.
   * @see [object-shorthand](https://eslint.vuejs.org/rules/object-shorthand.html)
   */
  'vue/object-shorthand': ObjectShorthandOption;

  /**
   * Enforce that each component should be in its own file.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`
   * @see [one-component-per-file](https://eslint.vuejs.org/rules/one-component-per-file.html)
   */
  'vue/one-component-per-file': null;

  /**
   * Enforce consistent linebreak style for operators in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
   */
  'vue/operator-linebreak': OperatorLinebreak.OperatorLinebreakRuleConfig;

  /**
   * Enforce order of properties in components.
   * @preset `vue/vue2-recommended`, `vue/recommended`
   * @see [order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)
   */
  'vue/order-in-components': [
    {
      order?: any[];
    }?,
  ];

  /**
   * Require or disallow padding lines between blocks.
   * @preset `vue/no-layout-rules`
   * @see [padding-line-between-blocks](https://eslint.vuejs.org/rules/padding-line-between-blocks.html)
   */
  'vue/padding-line-between-blocks': [('never' | 'always')?];

  /**
   * Require or disallow newlines between sibling tags in template.
   * @preset `vue/no-layout-rules`
   * @see [padding-line-between-tags](https://eslint.vuejs.org/rules/padding-line-between-tags.html)
   */
  'vue/padding-line-between-tags': [PaddingLineBetweenTagsOption?];

  /**
   * Require or disallow padding lines in component definition.
   * @preset `vue/no-layout-rules`
   * @see [padding-lines-in-component-definition](https://eslint.vuejs.org/rules/padding-lines-in-component-definition.html)
   */
  'vue/padding-lines-in-component-definition': [
    PaddingLinesInComponentDefinitionOption?,
  ];

  /**
   * Enforce use of `defineOptions` instead of default export.
   * @see [prefer-define-options](https://eslint.vuejs.org/rules/prefer-define-options.html)
   */
  'vue/prefer-define-options': null;

  /**
   * Enforce import from 'vue' instead of import from '@vue/*'.
   * @preset `vue/essential`
   * @see [prefer-import-from-vue](https://eslint.vuejs.org/rules/prefer-import-from-vue.html)
   */
  'vue/prefer-import-from-vue': null;

  /**
   * Enforce `Boolean` comes first in component prop types.
   * @see [prefer-prop-type-boolean-first](https://eslint.vuejs.org/rules/prefer-prop-type-boolean-first.html)
   */
  'vue/prefer-prop-type-boolean-first': null;

  /**
   * Require static class names in template to be in a separate `class` attribute.
   * @see [prefer-separate-static-class](https://eslint.vuejs.org/rules/prefer-separate-static-class.html)
   */
  'vue/prefer-separate-static-class': null;

  /**
   * Require template literals instead of string concatenation in `<template>`.
   * @see [prefer-template](https://eslint.vuejs.org/rules/prefer-template.html)
   */
  'vue/prefer-template': null;

  /**
   * Require shorthand form attribute when `v-bind` value is `true`.
   * @see [prefer-true-attribute-shorthand](https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html)
   */
  'vue/prefer-true-attribute-shorthand': [
    ('always' | 'never')?,
    {
      except?: string[];
    }?,
  ];

  /**
   * Require using `useTemplateRef` instead of `ref`/`shallowRef` for template refs.
   * @see [prefer-use-template-ref](https://eslint.vuejs.org/rules/prefer-use-template-ref.html)
   */
  'vue/prefer-use-template-ref': null;

  /**
   * Enforce specific casing for the Prop name in Vue components.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`
   * @see [prop-name-casing](https://eslint.vuejs.org/rules/prop-name-casing.html)
   */
  'vue/prop-name-casing': PropNameCasingRuleConfig;

  /**
   * Require quotes around object literal, type literal, interfaces and enums property names in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [quote-props](https://eslint.vuejs.org/rules/quote-props.html)
   */
  'vue/quote-props': QuotePropsOption;

  /**
   * Require `v-bind:is` of `<component>` elements.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [require-component-is](https://eslint.vuejs.org/rules/require-component-is.html)
   */
  'vue/require-component-is': null;

  /**
   * Require components to be the default export.
   * @see [require-default-export](https://eslint.vuejs.org/rules/require-default-export.html)
   */
  'vue/require-default-export': null;

  /**
   * Require default value for props.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`
   * @see [require-default-prop](https://eslint.vuejs.org/rules/require-default-prop.html)
   */
  'vue/require-default-prop': null;

  /**
   * Require the component to be directly exported.
   * @see [require-direct-export](https://eslint.vuejs.org/rules/require-direct-export.html)
   */
  'vue/require-direct-export': [
    {
      disallowFunctionalComponentFunction?: boolean;
    }?,
  ];

  /**
   * Require type definitions in emits.
   * @see [require-emit-validator](https://eslint.vuejs.org/rules/require-emit-validator.html)
   */
  'vue/require-emit-validator': null;

  /**
   * Require `emits` option with name triggered by `$emit()`.
   * @preset `vue/strongly-recommended`
   * @see [require-explicit-emits](https://eslint.vuejs.org/rules/require-explicit-emits.html)
   */
  'vue/require-explicit-emits': [
    {
      allowProps?: boolean;
    }?,
  ];

  /**
   * Require slots to be explicitly defined.
   * @see [require-explicit-slots](https://eslint.vuejs.org/rules/require-explicit-slots.html)
   */
  'vue/require-explicit-slots': null;

  /**
   * Require declare public properties using `expose`.
   * @see [require-expose](https://eslint.vuejs.org/rules/require-expose.html)
   */
  'vue/require-expose': null;

  /**
   * Require a certain macro variable name.
   * @see [require-macro-variable-name](https://eslint.vuejs.org/rules/require-macro-variable-name.html)
   */
  'vue/require-macro-variable-name': [
    {
      defineProps?: string;
      defineEmits?: string;
      defineSlots?: string;
      useSlots?: string;
      useAttrs?: string;
    }?,
  ];

  /**
   * Require a name property in Vue components.
   * @see [require-name-property](https://eslint.vuejs.org/rules/require-name-property.html)
   */
  'vue/require-name-property': null;

  /**
   * Require props to have a comment.
   * @see [require-prop-comment](https://eslint.vuejs.org/rules/require-prop-comment.html)
   */
  'vue/require-prop-comment': [RequirePropCommentOption?];

  /**
   * Require prop type to be a constructor.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)
   */
  'vue/require-prop-type-constructor': null;

  /**
   * Require type definitions in props.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`
   * @see [require-prop-types](https://eslint.vuejs.org/rules/require-prop-types.html)
   */
  'vue/require-prop-types': null;

  /**
   * Enforce render function to always return value.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [require-render-return](https://eslint.vuejs.org/rules/require-render-return.html)
   */
  'vue/require-render-return': null;

  /**
   * Enforce properties of `$slots` to be used as a function.
   * @preset `vue/essential`
   * @see [require-slots-as-functions](https://eslint.vuejs.org/rules/require-slots-as-functions.html)
   */
  'vue/require-slots-as-functions': null;

  /**
   * Require control the display of the content inside `<transition>`.
   * @preset `vue/essential`
   * @see [require-toggle-inside-transition](https://eslint.vuejs.org/rules/require-toggle-inside-transition.html)
   */
  'vue/require-toggle-inside-transition': [
    {
      additionalDirectives?: string[];
    }?,
  ];

  /**
   * Enforce adding type declarations to object props.
   * @see [require-typed-object-prop](https://eslint.vuejs.org/rules/require-typed-object-prop.html)
   */
  'vue/require-typed-object-prop': null;

  /**
   * Require `ref` and `shallowRef` functions to be strongly typed.
   * @see [require-typed-ref](https://eslint.vuejs.org/rules/require-typed-ref.html)
   */
  'vue/require-typed-ref': null;

  /**
   * Require `v-bind:key` with `v-for` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [require-v-for-key](https://eslint.vuejs.org/rules/require-v-for-key.html)
   */
  'vue/require-v-for-key': null;

  /**
   * Enforce props default values to be valid.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [require-valid-default-prop](https://eslint.vuejs.org/rules/require-valid-default-prop.html)
   */
  'vue/require-valid-default-prop': null;

  /**
   * Enforce using only specific component names.
   * @see [restricted-component-names](https://eslint.vuejs.org/rules/restricted-component-names.html)
   */
  'vue/restricted-component-names': [
    {
      allow?: string[];
    }?,
  ];

  /**
   * Enforce that a return statement is present in computed property.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html)
   */
  'vue/return-in-computed-property': [
    {
      treatUndefinedAsUnspecified?: boolean;
    }?,
  ];

  /**
   * Enforce that a return statement is present in emits validator.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [return-in-emits-validator](https://eslint.vuejs.org/rules/return-in-emits-validator.html)
   */
  'vue/return-in-emits-validator': null;

  /**
   * Enforce consistent indentation in `<script>`.
   * @preset `vue/no-layout-rules`
   * @see [script-indent](https://eslint.vuejs.org/rules/script-indent.html)
   */
  'vue/script-indent': ScriptIndentRuleConfig;

  /**
   * Require a line break before and after the contents of a singleline element.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`, `vue/no-layout-rules`
   * @see [singleline-html-element-content-newline](https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html)
   */
  'vue/singleline-html-element-content-newline': [
    {
      ignoreWhenNoAttributes?: boolean;
      ignoreWhenEmpty?: boolean;
      ignores?: string[];
      externalIgnores?: string[];
    }?,
  ];

  /**
   * Enforce specific casing for slot names.
   * @see [slot-name-casing](https://eslint.vuejs.org/rules/slot-name-casing.html)
   */
  'vue/slot-name-casing': [('camelCase' | 'kebab-case' | 'singleword')?];

  /**
   * Enforce sort-keys in a manner that is compatible with order-in-components.
   * @see [sort-keys](https://eslint.vuejs.org/rules/sort-keys.html)
   */
  'vue/sort-keys': SortKeysRuleConfig;

  /**
   * Enforce consistent spacing inside parentheses in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)
   */
  'vue/space-in-parens': [('always' | 'never')?, SpaceInParensConfig?];

  /**
   * Require spacing around infix operators in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [space-infix-ops](https://eslint.vuejs.org/rules/space-infix-ops.html)
   */
  'vue/space-infix-ops': [
    {
      int32Hint?: boolean;
      ignoreTypes?: boolean;
    }?,
  ];

  /**
   * Enforce consistent spacing before or after unary operators in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
   */
  'vue/space-unary-ops': [SpaceUnaryOpsOption?];

  /**
   * Enforce static class names order.
   * @see [static-class-names-order](https://eslint.vuejs.org/rules/static-class-names-order.html)
   */
  'vue/static-class-names-order': null;

  /**
   * Require or disallow spacing around embedded expressions of template strings in `<template>`.
   * @preset `vue/no-layout-rules`
   * @see [template-curly-spacing](https://eslint.vuejs.org/rules/template-curly-spacing.html)
   */
  'vue/template-curly-spacing': [('always' | 'never')?];

  /**
   * Disallow usage of `this` in template.
   * @preset `vue/vue2-recommended`, `vue/recommended`
   * @see [this-in-template](https://eslint.vuejs.org/rules/this-in-template.html)
   */
  'vue/this-in-template': [('always' | 'never')?];

  /**
   * Enforce usage of `exact` modifier on `v-on`.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [use-v-on-exact](https://eslint.vuejs.org/rules/use-v-on-exact.html)
   */
  'vue/use-v-on-exact': null;

  /**
   * Enforce `v-bind` directive style.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`
   * @see [v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)
   */
  'vue/v-bind-style': [('shorthand' | 'longform')?, VBindStyleConfig?];

  /**
   * Enforce `v-for` directive's delimiter style.
   * @preset `vue/no-layout-rules`
   * @see [v-for-delimiter-style](https://eslint.vuejs.org/rules/v-for-delimiter-style.html)
   */
  'vue/v-for-delimiter-style': [('in' | 'of')?];

  /**
   * Require key attribute for conditionally rendered repeated components.
   * @see [v-if-else-key](https://eslint.vuejs.org/rules/v-if-else-key.html)
   */
  'vue/v-if-else-key': null;

  /**
   * Enforce v-on event naming style on custom components in template.
   * @preset `vue/strongly-recommended`
   * @see [v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
   */
  'vue/v-on-event-hyphenation': VOnEventHyphenationRuleConfig;

  /**
   * Enforce writing style for handlers in `v-on` directives.
   * @see [v-on-handler-style](https://eslint.vuejs.org/rules/v-on-handler-style.html)
   */
  'vue/v-on-handler-style': VOnHandlerStyleRuleConfig;

  /**
   * Enforce `v-on` directive style.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`
   * @see [v-on-style](https://eslint.vuejs.org/rules/v-on-style.html)
   */
  'vue/v-on-style': [('shorthand' | 'longform')?];

  /**
   * Enforce `v-slot` directive style.
   * @preset `vue/vue2-strongly-recommended`, `vue/strongly-recommended`
   * @see [v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html)
   */
  'vue/v-slot-style': [VSlotStyleOption?];

  /**
   * Require valid attribute names.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-attribute-name](https://eslint.vuejs.org/rules/valid-attribute-name.html)
   */
  'vue/valid-attribute-name': null;

  /**
   * Enforce valid `defineEmits` compiler macro.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-define-emits](https://eslint.vuejs.org/rules/valid-define-emits.html)
   */
  'vue/valid-define-emits': null;

  /**
   * Enforce valid `defineOptions` compiler macro.
   * @preset `vue/essential`
   * @see [valid-define-options](https://eslint.vuejs.org/rules/valid-define-options.html)
   */
  'vue/valid-define-options': null;

  /**
   * Enforce valid `defineProps` compiler macro.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-define-props](https://eslint.vuejs.org/rules/valid-define-props.html)
   */
  'vue/valid-define-props': null;

  /**
   * Require valid keys in model option.
   * @deprecated
   * @preset `vue/vue2-essential`
   * @see [valid-model-definition](https://eslint.vuejs.org/rules/valid-model-definition.html)
   */
  'vue/valid-model-definition': null;

  /**
   * Enforce valid `nextTick` function calls.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-next-tick](https://eslint.vuejs.org/rules/valid-next-tick.html)
   */
  'vue/valid-next-tick': null;

  /**
   * Enforce valid template root.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)
   */
  'vue/valid-template-root': null;

  /**
   * Enforce valid `.sync` modifier on `v-bind` directives.
   * @deprecated
   * @preset `vue/vue2-essential`
   * @see [valid-v-bind-sync](https://eslint.vuejs.org/rules/valid-v-bind-sync.html)
   */
  'vue/valid-v-bind-sync': null;

  /**
   * Enforce valid `v-bind` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)
   */
  'vue/valid-v-bind': null;

  /**
   * Enforce valid `v-cloak` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)
   */
  'vue/valid-v-cloak': null;

  /**
   * Enforce valid `v-else-if` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if.html)
   */
  'vue/valid-v-else-if': null;

  /**
   * Enforce valid `v-else` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)
   */
  'vue/valid-v-else': null;

  /**
   * Enforce valid `v-for` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)
   */
  'vue/valid-v-for': null;

  /**
   * Enforce valid `v-html` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-html](https://eslint.vuejs.org/rules/valid-v-html.html)
   */
  'vue/valid-v-html': null;

  /**
   * Enforce valid `v-if` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)
   */
  'vue/valid-v-if': null;

  /**
   * Enforce valid `v-is` directives.
   * @preset `vue/essential`
   * @see [valid-v-is](https://eslint.vuejs.org/rules/valid-v-is.html)
   */
  'vue/valid-v-is': null;

  /**
   * Enforce valid `v-memo` directives.
   * @preset `vue/essential`
   * @see [valid-v-memo](https://eslint.vuejs.org/rules/valid-v-memo.html)
   */
  'vue/valid-v-memo': null;

  /**
   * Enforce valid `v-model` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)
   */
  'vue/valid-v-model': null;

  /**
   * Enforce valid `v-on` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)
   */
  'vue/valid-v-on': [
    {
      modifiers?: any[];
    }?,
  ];

  /**
   * Enforce valid `v-once` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)
   */
  'vue/valid-v-once': null;

  /**
   * Enforce valid `v-pre` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)
   */
  'vue/valid-v-pre': null;

  /**
   * Enforce valid `v-show` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)
   */
  'vue/valid-v-show': null;

  /**
   * Enforce valid `v-slot` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-slot](https://eslint.vuejs.org/rules/valid-v-slot.html)
   */
  'vue/valid-v-slot': [
    {
      allowModifiers?: boolean;
    }?,
  ];

  /**
   * Enforce valid `v-text` directives.
   * @preset `vue/vue2-essential`, `vue/essential`
   * @see [valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)
   */
  'vue/valid-v-text': null;
}

export type VueRulesObject = RulesObject<VueRules>;
