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
        multiline?: boolean;
        minItems?: number | null;
      };

  export type ArrayElementNewlineRuleConfig = ArrayElementNewlineOption;
}

export type ArrowBodyStyleOption =
  | []
  | ['always' | 'never']
  | ['as-needed']
  | [
      'as-needed',
      {
        requireReturnForObjectLiteral?: boolean;
      },
    ];

export type ArrowParensRuleConfig = [
  ('always' | 'as-needed')?,
  {
    requireForBlockBody?: boolean;
  }?,
];

export type BraceStyleRuleConfig = [
  ('1tbs' | 'stroustrup' | 'allman')?,
  {
    allowSingleLine?: boolean;
  }?,
];

export type CallbackReturnOption = string[];

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

export type CapitalizedCommentsConfig =
  | {
      ignorePattern?: string;
      ignoreInlineComments?: boolean;
      ignoreConsecutiveComments?: boolean;
    }
  | {
      line?: {
        ignorePattern?: string;
        ignoreInlineComments?: boolean;
        ignoreConsecutiveComments?: boolean;
      };
      block?: {
        ignorePattern?: string;
        ignoreInlineComments?: boolean;
        ignoreConsecutiveComments?: boolean;
      };
    };

export type CapitalizedCommentsRuleConfig = [
  ('always' | 'never')?,
  CapitalizedCommentsConfig?,
];

export interface ClassMethodsUseThisOption {
  exceptMethods?: string[];
  enforceForClassFields?: boolean;
  ignoreOverrideMethods?: boolean;
  ignoreClassesWithImplements?: 'all' | 'public-fields';
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

export type ComplexityOption =
  | number
  | {
      maximum?: number;
      max?: number;
      variant?: 'classic' | 'modified';
    };

export type ComputedPropertySpacingRuleConfig = [
  ('always' | 'never')?,
  {
    enforceForClassMembers?: boolean;
  }?,
];

export type ConsistentThisOption = string[];

export type CurlyOption =
  | []
  | ['all']
  | ['multi' | 'multi-line' | 'multi-or-nest']
  | ['multi' | 'multi-line' | 'multi-or-nest', 'consistent'];

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

export type FuncCallSpacingOption =
  | []
  | ['never']
  | ['always']
  | [
      'always',
      {
        allowNewlines?: boolean;
      },
    ];

export type FuncNameMatchingOption =
  | []
  | ['always' | 'never']
  | [
      'always' | 'never',
      {
        considerPropertyDescriptor?: boolean;
        includeCommonJSModuleExports?: boolean;
      },
    ]
  | [
      {
        considerPropertyDescriptor?: boolean;
        includeCommonJSModuleExports?: boolean;
      },
    ];

export namespace FuncNames {
  export type FuncNamesOption =
    | []
    | [Value]
    | [
        Value,
        {
          generators?: Value;
        },
      ];
  export type Value = 'always' | 'as-needed' | 'never';

  export type FuncNamesRuleConfig = FuncNamesOption;
}

export interface FuncStyleConfig {
  allowArrowFunctions?: boolean;
  allowTypeAnnotation?: boolean;
  overrides?: {
    namedExports?: 'declaration' | 'expression' | 'ignore';
  };
}

export type FuncStyleRuleConfig = [
  ('declaration' | 'expression')?,
  FuncStyleConfig?,
];

export type FunctionParenNewlineOption =
  | ('always' | 'never' | 'consistent' | 'multiline' | 'multiline-arguments')
  | {
      minItems?: number;
    };

export type GeneratorStarSpacingOption =
  | ('before' | 'after' | 'both' | 'neither')
  | {
      before?: boolean;
      after?: boolean;
      named?:
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
          };
      anonymous?:
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
          };
      method?:
        | ('before' | 'after' | 'both' | 'neither')
        | {
            before?: boolean;
            after?: boolean;
          };
    };

export type HandleCallbackErrOption = string;

export type IdBlacklistOption = string[];

export type IdDenylistOption = string[];

export interface IdLengthOption {
  min?: number;
  max?: number;
  exceptions?: string[];
  exceptionPatterns?: string[];
  properties?: 'always' | 'never';
}

export type IdMatchOption = string;

export type IdMatchRuleConfig = [
  IdMatchOption?,
  {
    properties?: boolean;
    classFields?: boolean;
    onlyDeclarations?: boolean;
    ignoreDestructuring?: boolean;
  }?,
];

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
export namespace IndentLegacy {
  export type IndentLegacyOption = 'tab' | number;

  export interface IndentLegacyConfig {
    SwitchCase?: number;
    VariableDeclarator?:
      | number
      | {
          var?: number;
          let?: number;
          const?: number;
          [k: string]: any;
        };
    outerIIFEBody?: number;
    MemberExpression?: number;
    FunctionDeclaration?: {
      parameters?: number | 'first';
      body?: number;
      [k: string]: any;
    };
    FunctionExpression?: {
      parameters?: number | 'first';
      body?: number;
      [k: string]: any;
    };
    CallExpression?: {
      parameters?: number | 'first';
      [k: string]: any;
    };
    ArrayExpression?: number | 'first';
    ObjectExpression?: number | 'first';
  }

  export type IndentLegacyRuleConfig = [
    IndentLegacyOption?,
    IndentLegacyConfig?,
  ];
}

export type InitDeclarationsOption =
  | []
  | ['always']
  | ['never']
  | [
      'never',
      {
        ignoreForLoopInit?: boolean;
      },
    ];

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

export namespace KeywordSpacing {
  export interface KeywordSpacingOption {
    before?: boolean;
    after?: boolean;
    overrides?: {
      abstract?: {
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
      typeof?: {
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
    };
  }

  export type KeywordSpacingRuleConfig = [KeywordSpacingOption?];
}

export type LineCommentPositionOption =
  | ('above' | 'beside')
  | {
      position?: 'above' | 'beside';
      ignorePattern?: string;
      applyDefaultPatterns?: boolean;
      applyDefaultIgnorePatterns?: boolean;
    };

export type LinesAroundDirectiveOption =
  | ('always' | 'never')
  | {
      before?: 'always' | 'never';
      after?: 'always' | 'never';
    };

export type LinesBetweenClassMembersOption =
  | {
      /**
       * @minItems 1
       */
      enforce: [
        {
          blankLine: 'always' | 'never';
          prev: 'method' | 'field' | '*';
          next: 'method' | 'field' | '*';
        },
        ...{
          blankLine: 'always' | 'never';
          prev: 'method' | 'field' | '*';
          next: 'method' | 'field' | '*';
        }[],
      ];
    }
  | ('always' | 'never');

export type LinesBetweenClassMembersRuleConfig = [
  LinesBetweenClassMembersOption?,
  {
    exceptAfterSingleLine?: boolean;
  }?,
];

export type LogicalAssignmentOperatorsOption = (
  | []
  | ['always']
  | [
      'always',
      {
        enforceForIfStatements?: boolean;
      },
    ]
  | ['never']
) &
  any[];

export type MaxClassesPerFileOption =
  | number
  | {
      ignoreExpressions?: boolean;
      max?: number;
    };

export type MaxDepthOption =
  | number
  | {
      maximum?: number;
      max?: number;
    };

export namespace MaxLen {
  export type MaxLenOption =
    | {
        code?: number;
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreStrings?: boolean;
        ignoreUrls?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreTrailingComments?: boolean;
      }
    | number;

  export type MaxLenConfig =
    | {
        code?: number;
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreStrings?: boolean;
        ignoreUrls?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreTrailingComments?: boolean;
      }
    | number;

  export type MaxLenRuleConfig = [
    MaxLenOption?,
    MaxLenConfig?,
    {
      code?: number;
      comments?: number;
      tabWidth?: number;
      ignorePattern?: string;
      ignoreComments?: boolean;
      ignoreStrings?: boolean;
      ignoreUrls?: boolean;
      ignoreTemplateLiterals?: boolean;
      ignoreRegExpLiterals?: boolean;
      ignoreTrailingComments?: boolean;
    }?,
  ];
}

export type MaxLinesOption =
  | number
  | {
      max?: number;
      skipComments?: boolean;
      skipBlankLines?: boolean;
    };

export type MaxLinesPerFunctionOption =
  | {
      max?: number;
      skipComments?: boolean;
      skipBlankLines?: boolean;
      IIFEs?: boolean;
    }
  | number;

export type MaxNestedCallbacksOption =
  | number
  | {
      maximum?: number;
      max?: number;
    };

export type MaxParamsOption =
  | number
  | {
      maximum?: number;
      max?: number;
      /**
       * Whether to count a `this` declaration when the type is `void`.
       */
      countVoidThis?: boolean;
    };

export type MaxStatementsOption =
  | number
  | {
      maximum?: number;
      max?: number;
    };

export type MaxStatementsRuleConfig = [
  MaxStatementsOption?,
  {
    ignoreTopLevelFunctions?: boolean;
  }?,
];

export type MultilineCommentStyleOption =
  | []
  | ['starred-block' | 'bare-block']
  | ['separate-lines']
  | [
      'separate-lines',
      {
        checkJSDoc?: boolean;
      },
    ];

export interface NoBitwiseOption {
  allow?: (
    | '^'
    | '|'
    | '&'
    | '<<'
    | '>>'
    | '>>>'
    | '^='
    | '|='
    | '&='
    | '<<='
    | '>>='
    | '>>>='
    | '~'
  )[];
  int32Hint?: boolean;
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

export interface NoEmptyFunctionOption {
  allow?: (
    | 'functions'
    | 'arrowFunctions'
    | 'generatorFunctions'
    | 'methods'
    | 'generatorMethods'
    | 'getters'
    | 'setters'
    | 'constructors'
    | 'asyncFunctions'
    | 'asyncMethods'
    | 'privateConstructors'
    | 'protectedConstructors'
    | 'decoratedFunctions'
    | 'overrideMethods'
  )[];
}

export type NoExtraBooleanCastOption =
  | {
      enforceForInnerExpressions?: boolean;
    }
  | {
      enforceForLogicalOperands?: boolean;
    };

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
      },
    ];

export interface NoImplicitCoercionOption {
  boolean?: boolean;
  number?: boolean;
  string?: boolean;
  disallowTemplateShorthand?: boolean;
  allow?: ('~' | '!!' | '+' | '- -' | '-' | '*')[];
}

export interface NoInnerDeclarationsConfig {
  blockScopedFunctions?: 'allow' | 'disallow';
}

export type NoInnerDeclarationsRuleConfig = [
  ('functions' | 'both')?,
  NoInnerDeclarationsConfig?,
];

export interface NoMagicNumbersOption {
  detectObjects?: boolean;
  enforceConst?: boolean;
  ignore?: (number | string)[];
  ignoreArrayIndexes?: boolean;
  ignoreDefaultValues?: boolean;
  ignoreClassFieldInitialValues?: boolean;
  ignoreEnums?: boolean;
  ignoreNumericLiteralTypes?: boolean;
  ignoreReadonlyClassProperties?: boolean;
  ignoreTypeIndexes?: boolean;
}

export interface NoMixedOperatorsOption {
  groups?: [
    (
      | '+'
      | '-'
      | '*'
      | '/'
      | '%'
      | '**'
      | '&'
      | '|'
      | '^'
      | '~'
      | '<<'
      | '>>'
      | '>>>'
      | '=='
      | '!='
      | '==='
      | '!=='
      | '>'
      | '>='
      | '<'
      | '<='
      | '&&'
      | '||'
      | 'in'
      | 'instanceof'
      | '?:'
      | '??'
    ),
    (
      | '+'
      | '-'
      | '*'
      | '/'
      | '%'
      | '**'
      | '&'
      | '|'
      | '^'
      | '~'
      | '<<'
      | '>>'
      | '>>>'
      | '=='
      | '!='
      | '==='
      | '!=='
      | '>'
      | '>='
      | '<'
      | '<='
      | '&&'
      | '||'
      | 'in'
      | 'instanceof'
      | '?:'
      | '??'
    ),
    ...(
      | '+'
      | '-'
      | '*'
      | '/'
      | '%'
      | '**'
      | '&'
      | '|'
      | '^'
      | '~'
      | '<<'
      | '>>'
      | '>>>'
      | '=='
      | '!='
      | '==='
      | '!=='
      | '>'
      | '>='
      | '<'
      | '<='
      | '&&'
      | '||'
      | 'in'
      | 'instanceof'
      | '?:'
      | '??'
    )[],
  ][];
  allowSamePrecedence?: boolean;
}

export type NoMixedRequiresOption =
  | boolean
  | {
      grouping?: boolean;
      allowCall?: boolean;
    };

export type NoMixedSpacesAndTabsOption = 'smart-tabs' | true | false;

export interface NoMultiSpacesOption {
  exceptions?: {
    /**
     */
    [k: string]: boolean;
  };
  ignoreEOLComments?: boolean;
}

export type NoParamReassignOption =
  | {
      props?: false;
    }
  | {
      props?: true;
      ignorePropertyModificationsFor?: string[];
      ignorePropertyModificationsForRegex?: string[];
    };

export type NoRestrictedExportsOption =
  | {
      restrictedNamedExports?: string[];
      restrictedNamedExportsPattern?: string;
    }
  | {
      restrictedNamedExports?: string[];
      restrictedNamedExportsPattern?: string;
      restrictDefaultExports?: {
        direct?: boolean;
        named?: boolean;
        defaultFrom?: boolean;
        namedFrom?: boolean;
        namespaceFrom?: boolean;
      };
    };

/**
 * @minItems 0
 */
export type NoRestrictedGlobalsOption = (
  | string
  | {
      name: string;
      message?: string;
    }
)[];

export type NoRestrictedImportsOption =
  | (
      | string
      | {
          name: string;
          message?: string;
          importNames?: string[];
          allowImportNames?: string[];
        }
    )[]
  | []
  | [
      {
        paths?: (
          | string
          | {
              name: string;
              message?: string;
              importNames?: string[];
              allowImportNames?: string[];
            }
        )[];
        patterns?:
          | string[]
          | (
              | {
                  [k: string]: any;
                }
              | {
                  [k: string]: any;
                }
            )[];
      },
    ];

export type NoRestrictedModulesOption =
  | (
      | string
      | {
          name: string;
          message?: string;
        }
    )[]
  | {
      paths?: (
        | string
        | {
            name: string;
            message?: string;
          }
      )[];
      patterns?: string[];
    }[];

export type NoRestrictedPropertiesOption = {
  [k: string]: any;
}[];

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

export interface NoShadowOption {
  builtinGlobals?: boolean;
  hoist?: 'all' | 'functions' | 'never' | 'types' | 'functions-and-types';
  allow?: string[];
  ignoreOnInitialization?: boolean;
  ignoreTypeValueShadow?: boolean;
  ignoreFunctionTypeParameterNameValueShadow?: boolean;
}

export interface NoUnreachableLoopOption {
  ignore?: (
    | 'WhileStatement'
    | 'DoWhileStatement'
    | 'ForStatement'
    | 'ForInStatement'
    | 'ForOfStatement'
  )[];
}

export type NoUnusedVarsOption =
  | ('all' | 'local')
  | {
      vars?: 'all' | 'local';
      varsIgnorePattern?: string;
      args?: 'all' | 'after-used' | 'none';
      ignoreRestSiblings?: boolean;
      argsIgnorePattern?: string;
      caughtErrors?: 'all' | 'none';
      caughtErrorsIgnorePattern?: string;
      destructuredArrayIgnorePattern?: string;
      ignoreClassWithStaticInitBlock?: boolean;
      reportUsedIgnorePattern?: boolean;
    };

export type NoUseBeforeDefineOption =
  | 'nofunc'
  | {
      functions?: boolean;
      classes?: boolean;
      variables?: boolean;
      allowNamedExports?: boolean;
      enums?: boolean;
      typedefs?: boolean;
      ignoreTypeReferences?: boolean;
    };

export interface NoWarningCommentsOption {
  terms?: string[];
  location?: 'start' | 'anywhere';
  /**
   * @minItems 1
   */
  decoration?: [string, ...string[]];
}

export interface NonblockStatementBodyPositionConfig {
  overrides?: {
    if?: 'beside' | 'below' | 'any';
    else?: 'beside' | 'below' | 'any';
    while?: 'beside' | 'below' | 'any';
    do?: 'beside' | 'below' | 'any';
    for?: 'beside' | 'below' | 'any';
  };
}

export type NonblockStatementBodyPositionRuleConfig = [
  ('beside' | 'below' | 'any')?,
  NonblockStatementBodyPositionConfig?,
];

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

export type OneVarOption =
  | ('always' | 'never' | 'consecutive')
  | {
      separateRequires?: boolean;
      var?: 'always' | 'never' | 'consecutive';
      let?: 'always' | 'never' | 'consecutive';
      const?: 'always' | 'never' | 'consecutive';
    }
  | {
      initialized?: 'always' | 'never' | 'consecutive';
      uninitialized?: 'always' | 'never' | 'consecutive';
    };

export namespace OperatorLinebreak {
  export type OperatorLinebreakOption = 'after' | 'before' | 'none' | null;

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

export type PaddedBlocksOption =
  | ('always' | 'never')
  | {
      blocks?: 'always' | 'never';
      switches?: 'always' | 'never';
      classes?: 'always' | 'never';
    };

export type PaddedBlocksRuleConfig = [
  PaddedBlocksOption?,
  {
    allowSingleLineBlocks?: boolean;
  }?,
];

export namespace PaddingLineBetweenStatements {
  export type PaddingType = 'any' | 'never' | 'always';
  export type StatementType =
    | (
        | '*'
        | 'block-like'
        | 'cjs-export'
        | 'cjs-import'
        | 'directive'
        | 'expression'
        | 'iife'
        | 'multiline-block-like'
        | 'multiline-expression'
        | 'multiline-const'
        | 'multiline-let'
        | 'multiline-var'
        | 'singleline-const'
        | 'singleline-let'
        | 'singleline-var'
        | 'block'
        | 'empty'
        | 'function'
        | 'break'
        | 'case'
        | 'class'
        | 'const'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'do'
        | 'export'
        | 'for'
        | 'if'
        | 'import'
        | 'let'
        | 'return'
        | 'switch'
        | 'throw'
        | 'try'
        | 'var'
        | 'while'
        | 'with'
      )
    | [
        (
          | '*'
          | 'block-like'
          | 'cjs-export'
          | 'cjs-import'
          | 'directive'
          | 'expression'
          | 'iife'
          | 'multiline-block-like'
          | 'multiline-expression'
          | 'multiline-const'
          | 'multiline-let'
          | 'multiline-var'
          | 'singleline-const'
          | 'singleline-let'
          | 'singleline-var'
          | 'block'
          | 'empty'
          | 'function'
          | 'break'
          | 'case'
          | 'class'
          | 'const'
          | 'continue'
          | 'debugger'
          | 'default'
          | 'do'
          | 'export'
          | 'for'
          | 'if'
          | 'import'
          | 'let'
          | 'return'
          | 'switch'
          | 'throw'
          | 'try'
          | 'var'
          | 'while'
          | 'with'
        ),
        ...(
          | '*'
          | 'block-like'
          | 'cjs-export'
          | 'cjs-import'
          | 'directive'
          | 'expression'
          | 'iife'
          | 'multiline-block-like'
          | 'multiline-expression'
          | 'multiline-const'
          | 'multiline-let'
          | 'multiline-var'
          | 'singleline-const'
          | 'singleline-let'
          | 'singleline-var'
          | 'block'
          | 'empty'
          | 'function'
          | 'break'
          | 'case'
          | 'class'
          | 'const'
          | 'continue'
          | 'debugger'
          | 'default'
          | 'do'
          | 'export'
          | 'for'
          | 'if'
          | 'import'
          | 'let'
          | 'return'
          | 'switch'
          | 'throw'
          | 'try'
          | 'var'
          | 'while'
          | 'with'
        )[],
      ];
  export type PaddingLineBetweenStatementsOption = {
    blankLine: PaddingType;
    prev: StatementType;
    next: StatementType;
  }[];

  export type PaddingLineBetweenStatementsRuleConfig =
    PaddingLineBetweenStatementsOption;
}

export interface PreferConstOption {
  destructuring?: 'any' | 'all';
  ignoreReadBeforeAssign?: boolean;
}

export type PreferDestructuringOption =
  | {
      VariableDeclarator?: {
        array?: boolean;
        object?: boolean;
      };
      AssignmentExpression?: {
        array?: boolean;
        object?: boolean;
      };
    }
  | {
      array?: boolean;
      object?: boolean;
    };

export type PreferDestructuringRuleConfig = [
  PreferDestructuringOption?,
  {
    enforceForRenamedProperties?: boolean;
  }?,
];

export interface PreferReflectOption {
  exceptions?: (
    | 'apply'
    | 'call'
    | 'delete'
    | 'defineProperty'
    | 'getOwnPropertyDescriptor'
    | 'getPrototypeOf'
    | 'setPrototypeOf'
    | 'isExtensible'
    | 'getOwnPropertyNames'
    | 'preventExtensions'
  )[];
}

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

export interface RequireUnicodeRegexpOption {
  requireFlag?: 'u' | 'v';
}

export type SemiOption =
  | []
  | ['never']
  | [
      'never',
      {
        beforeStatementContinuationChars?: 'always' | 'any' | 'never';
      },
    ]
  | ['always']
  | [
      'always',
      {
        omitLastInOneLineBlock?: boolean;
        omitLastInOneLineClassBody?: boolean;
      },
    ];

export interface SortImportsOption {
  ignoreCase?: boolean;
  /**
   * @minItems 4
   * @maxItems 4
   */
  memberSyntaxSortOrder?: [
    'none' | 'all' | 'multiple' | 'single',
    'none' | 'all' | 'multiple' | 'single',
    'none' | 'all' | 'multiple' | 'single',
    'none' | 'all' | 'multiple' | 'single',
  ];
  ignoreDeclarationSort?: boolean;
  ignoreMemberSort?: boolean;
  allowSeparatedGroups?: boolean;
}

export type SortKeysRuleConfig = [
  ('asc' | 'desc')?,
  {
    caseSensitive?: boolean;
    natural?: boolean;
    minKeys?: number;
    allowLineSeparatedGroups?: boolean;
    ignoreComputedKeys?: boolean;
  }?,
];

export type SpaceBeforeBlocksOption =
  | ('always' | 'never')
  | {
      keywords?: 'always' | 'never' | 'off';
      functions?: 'always' | 'never' | 'off';
      classes?: 'always' | 'never' | 'off';
    };

export type SpaceBeforeFunctionParenOption =
  | ('always' | 'never')
  | {
      anonymous?: 'always' | 'never' | 'ignore';
      named?: 'always' | 'never' | 'ignore';
      asyncArrow?: 'always' | 'never' | 'ignore';
    };

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

export interface SpacedCommentConfig {
  exceptions?: string[];
  markers?: string[];
  line?: {
    exceptions?: string[];
    markers?: string[];
  };
  block?: {
    exceptions?: string[];
    markers?: string[];
    balanced?: boolean;
  };
}

export type WrapIifeRuleConfig = [
  ('outside' | 'inside' | 'any')?,
  {
    functionPrototypeMethods?: boolean;
  }?,
];

export type YieldStarSpacingOption =
  | ('before' | 'after' | 'both' | 'neither')
  | {
      before?: boolean;
      after?: boolean;
    };

export type YodaRuleConfig = [
  ('always' | 'never')?,
  {
    exceptRange?: boolean;
    onlyEquality?: boolean;
  }?,
];

/**
 * All Eslint rules.
 */
export interface EslintRules {
  /**
   * Enforce getter and setter pairs in objects and classes.
   * @see [accessor-pairs](https://eslint.org/docs/latest/rules/accessor-pairs)
   */
  'accessor-pairs': [
    {
      getWithoutSet?: boolean;
      setWithoutGet?: boolean;
      enforceForClassMembers?: boolean;
    }?,
  ];

  /**
   * Enforce linebreaks after opening and before closing array brackets.
   * @deprecated
   * @see [array-bracket-newline](https://eslint.org/docs/latest/rules/array-bracket-newline)
   */
  'array-bracket-newline': [ArrayBracketNewlineOption?];

  /**
   * Enforce consistent spacing inside array brackets.
   * @deprecated
   * @see [array-bracket-spacing](https://eslint.org/docs/latest/rules/array-bracket-spacing)
   */
  'array-bracket-spacing': ArrayBracketSpacingRuleConfig;

  /**
   * Enforce `return` statements in callbacks of array methods.
   * @see [array-callback-return](https://eslint.org/docs/latest/rules/array-callback-return)
   */
  'array-callback-return': [
    {
      allowImplicit?: boolean;
      checkForEach?: boolean;
      allowVoid?: boolean;
    }?,
  ];

  /**
   * Enforce line breaks after each array element.
   * @deprecated
   * @see [array-element-newline](https://eslint.org/docs/latest/rules/array-element-newline)
   */
  'array-element-newline': ArrayElementNewline.ArrayElementNewlineRuleConfig;

  /**
   * Require braces around arrow function bodies.
   * @see [arrow-body-style](https://eslint.org/docs/latest/rules/arrow-body-style)
   */
  'arrow-body-style': ArrowBodyStyleOption;

  /**
   * Require parentheses around arrow function arguments.
   * @deprecated
   * @see [arrow-parens](https://eslint.org/docs/latest/rules/arrow-parens)
   */
  'arrow-parens': ArrowParensRuleConfig;

  /**
   * Enforce consistent spacing before and after the arrow in arrow functions.
   * @deprecated
   * @see [arrow-spacing](https://eslint.org/docs/latest/rules/arrow-spacing)
   */
  'arrow-spacing': [
    {
      before?: boolean;
      after?: boolean;
    }?,
  ];

  /**
   * Enforce the use of variables within the scope they are defined.
   * @see [block-scoped-var](https://eslint.org/docs/latest/rules/block-scoped-var)
   */
  'block-scoped-var': null;

  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block.
   * @deprecated
   * @see [block-spacing](https://eslint.org/docs/latest/rules/block-spacing)
   */
  'block-spacing': [('always' | 'never')?];

  /**
   * Enforce consistent brace style for blocks.
   * @deprecated
   * @see [brace-style](https://eslint.org/docs/latest/rules/brace-style)
   */
  'brace-style': BraceStyleRuleConfig;

  /**
   * Require `return` statements after callbacks.
   * @deprecated
   * @see [callback-return](https://eslint.org/docs/latest/rules/callback-return)
   */
  'callback-return': [CallbackReturnOption?];

  /**
   * Enforce camelcase naming convention.
   * @see [camelcase](https://eslint.org/docs/latest/rules/camelcase)
   */
  camelcase: [CamelcaseOption?];

  /**
   * Enforce or disallow capitalization of the first letter of a comment.
   * @see [capitalized-comments](https://eslint.org/docs/latest/rules/capitalized-comments)
   */
  'capitalized-comments': CapitalizedCommentsRuleConfig;

  /**
   * Enforce that class methods utilize `this`.
   * @see [class-methods-use-this](https://eslint.org/docs/latest/rules/class-methods-use-this)
   */
  'class-methods-use-this': [ClassMethodsUseThisOption?];

  /**
   * Require or disallow trailing commas.
   * @deprecated
   * @see [comma-dangle](https://eslint.org/docs/latest/rules/comma-dangle)
   */
  'comma-dangle': CommaDangle.CommaDangleRuleConfig;

  /**
   * Enforce consistent spacing before and after commas.
   * @deprecated
   * @see [comma-spacing](https://eslint.org/docs/latest/rules/comma-spacing)
   */
  'comma-spacing': [
    {
      before?: boolean;
      after?: boolean;
    }?,
  ];

  /**
   * Enforce consistent comma style.
   * @deprecated
   * @see [comma-style](https://eslint.org/docs/latest/rules/comma-style)
   */
  'comma-style': [('first' | 'last')?, CommaStyleConfig?];

  /**
   * Enforce a maximum cyclomatic complexity allowed in a program.
   * @see [complexity](https://eslint.org/docs/latest/rules/complexity)
   */
  complexity: [ComplexityOption?];

  /**
   * Enforce consistent spacing inside computed property brackets.
   * @deprecated
   * @see [computed-property-spacing](https://eslint.org/docs/latest/rules/computed-property-spacing)
   */
  'computed-property-spacing': ComputedPropertySpacingRuleConfig;

  /**
   * Require `return` statements to either always or never specify values.
   * @see [consistent-return](https://eslint.org/docs/latest/rules/consistent-return)
   */
  'consistent-return': [
    {
      treatUndefinedAsUnspecified?: boolean;
    }?,
  ];

  /**
   * Enforce consistent naming when capturing the current execution context.
   * @see [consistent-this](https://eslint.org/docs/latest/rules/consistent-this)
   */
  'consistent-this': ConsistentThisOption;

  /**
   * Require `super()` calls in constructors.
   * @see [constructor-super](https://eslint.org/docs/latest/rules/constructor-super)
   */
  'constructor-super': null;

  /**
   * Enforce consistent brace style for all control statements.
   * @see [curly](https://eslint.org/docs/latest/rules/curly)
   */
  curly: CurlyOption;

  /**
   * Require `default` cases in `switch` statements.
   * @see [default-case](https://eslint.org/docs/latest/rules/default-case)
   */
  'default-case': [
    {
      commentPattern?: string;
    }?,
  ];

  /**
   * Enforce `default` clauses in `switch` statements to be last.
   * @see [default-case-last](https://eslint.org/docs/latest/rules/default-case-last)
   */
  'default-case-last': null;

  /**
   * Enforce default parameters to be last.
   * @see [default-param-last](https://eslint.org/docs/latest/rules/default-param-last)
   */
  'default-param-last': null;

  /**
   * Enforce consistent newlines before and after dots.
   * @deprecated
   * @see [dot-location](https://eslint.org/docs/latest/rules/dot-location)
   */
  'dot-location': [('object' | 'property')?];

  /**
   * Enforce dot notation whenever possible.
   * @see [dot-notation](https://eslint.org/docs/latest/rules/dot-notation)
   */
  'dot-notation': [
    {
      allowKeywords?: boolean;
      allowPattern?: string;
    }?,
  ];

  /**
   * Require or disallow newline at the end of files.
   * @deprecated
   * @see [eol-last](https://eslint.org/docs/latest/rules/eol-last)
   */
  'eol-last': [('always' | 'never' | 'unix' | 'windows')?];

  /**
   * Require the use of `===` and `!==`.
   * @see [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
   */
  eqeqeq: EqeqeqOption;

  /**
   * Enforce `for` loop update clause moving the counter in the right direction.
   * @see [for-direction](https://eslint.org/docs/latest/rules/for-direction)
   */
  'for-direction': null;

  /**
   * Require or disallow spacing between function identifiers and their invocations.
   * @deprecated
   * @see [func-call-spacing](https://eslint.org/docs/latest/rules/func-call-spacing)
   */
  'func-call-spacing': FuncCallSpacingOption;

  /**
   * Require function names to match the name of the variable or property to which they are assigned.
   * @see [func-name-matching](https://eslint.org/docs/latest/rules/func-name-matching)
   */
  'func-name-matching': FuncNameMatchingOption;

  /**
   * Require or disallow named `function` expressions.
   * @see [func-names](https://eslint.org/docs/latest/rules/func-names)
   */
  'func-names': FuncNames.FuncNamesRuleConfig;

  /**
   * Enforce the consistent use of either `function` declarations or expressions assigned to variables.
   * @see [func-style](https://eslint.org/docs/latest/rules/func-style)
   */
  'func-style': FuncStyleRuleConfig;

  /**
   * Enforce line breaks between arguments of a function call.
   * @deprecated
   * @see [function-call-argument-newline](https://eslint.org/docs/latest/rules/function-call-argument-newline)
   */
  'function-call-argument-newline': [('always' | 'never' | 'consistent')?];

  /**
   * Enforce consistent line breaks inside function parentheses.
   * @deprecated
   * @see [function-paren-newline](https://eslint.org/docs/latest/rules/function-paren-newline)
   */
  'function-paren-newline': [FunctionParenNewlineOption?];

  /**
   * Enforce consistent spacing around `*` operators in generator functions.
   * @deprecated
   * @see [generator-star-spacing](https://eslint.org/docs/latest/rules/generator-star-spacing)
   */
  'generator-star-spacing': [GeneratorStarSpacingOption?];

  /**
   * Enforce `return` statements in getters.
   * @see [getter-return](https://eslint.org/docs/latest/rules/getter-return)
   */
  'getter-return': [
    {
      allowImplicit?: boolean;
    }?,
  ];

  /**
   * Require `require()` calls to be placed at top-level module scope.
   * @deprecated
   * @see [global-require](https://eslint.org/docs/latest/rules/global-require)
   */
  'global-require': null;

  /**
   * Require grouped accessor pairs in object literals and classes.
   * @see [grouped-accessor-pairs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)
   */
  'grouped-accessor-pairs': [('anyOrder' | 'getBeforeSet' | 'setBeforeGet')?];

  /**
   * Require `for-in` loops to include an `if` statement.
   * @see [guard-for-in](https://eslint.org/docs/latest/rules/guard-for-in)
   */
  'guard-for-in': null;

  /**
   * Require error handling in callbacks.
   * @deprecated
   * @see [handle-callback-err](https://eslint.org/docs/latest/rules/handle-callback-err)
   */
  'handle-callback-err': [HandleCallbackErrOption?];

  /**
   * Disallow specified identifiers.
   * @deprecated
   * @see [id-blacklist](https://eslint.org/docs/latest/rules/id-blacklist)
   */
  'id-blacklist': IdBlacklistOption;

  /**
   * Disallow specified identifiers.
   * @see [id-denylist](https://eslint.org/docs/latest/rules/id-denylist)
   */
  'id-denylist': IdDenylistOption;

  /**
   * Enforce minimum and maximum identifier lengths.
   * @see [id-length](https://eslint.org/docs/latest/rules/id-length)
   */
  'id-length': [IdLengthOption?];

  /**
   * Require identifiers to match a specified regular expression.
   * @see [id-match](https://eslint.org/docs/latest/rules/id-match)
   */
  'id-match': IdMatchRuleConfig;

  /**
   * Enforce the location of arrow function bodies.
   * @deprecated
   * @see [implicit-arrow-linebreak](https://eslint.org/docs/latest/rules/implicit-arrow-linebreak)
   */
  'implicit-arrow-linebreak': [('beside' | 'below')?];

  /**
   * Enforce consistent indentation.
   * @deprecated
   * @see [indent](https://eslint.org/docs/latest/rules/indent)
   */
  indent: Indent.IndentRuleConfig;

  /**
   * Enforce consistent indentation.
   * @deprecated
   * @see [indent-legacy](https://eslint.org/docs/latest/rules/indent-legacy)
   */
  'indent-legacy': IndentLegacy.IndentLegacyRuleConfig;

  /**
   * Require or disallow initialization in variable declarations.
   * @see [init-declarations](https://eslint.org/docs/latest/rules/init-declarations)
   */
  'init-declarations': InitDeclarationsOption;

  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes.
   * @deprecated
   * @see [jsx-quotes](https://eslint.org/docs/latest/rules/jsx-quotes)
   */
  'jsx-quotes': [('prefer-single' | 'prefer-double')?];

  /**
   * Enforce consistent spacing between keys and values in object literal properties.
   * @deprecated
   * @see [key-spacing](https://eslint.org/docs/latest/rules/key-spacing)
   */
  'key-spacing': [KeySpacingOption?];

  /**
   * Enforce consistent spacing before and after keywords.
   * @deprecated
   * @see [keyword-spacing](https://eslint.org/docs/latest/rules/keyword-spacing)
   */
  'keyword-spacing': KeywordSpacing.KeywordSpacingRuleConfig;

  /**
   * Enforce position of line comments.
   * @deprecated
   * @see [line-comment-position](https://eslint.org/docs/latest/rules/line-comment-position)
   */
  'line-comment-position': [LineCommentPositionOption?];

  /**
   * Enforce consistent linebreak style.
   * @deprecated
   * @see [linebreak-style](https://eslint.org/docs/latest/rules/linebreak-style)
   */
  'linebreak-style': [('unix' | 'windows')?];

  /**
   * Require empty lines around comments.
   * @deprecated
   * @see [lines-around-comment](https://eslint.org/docs/latest/rules/lines-around-comment)
   */
  'lines-around-comment': [
    {
      beforeBlockComment?: boolean;
      afterBlockComment?: boolean;
      beforeLineComment?: boolean;
      afterLineComment?: boolean;
      allowBlockStart?: boolean;
      allowBlockEnd?: boolean;
      allowClassStart?: boolean;
      allowClassEnd?: boolean;
      allowObjectStart?: boolean;
      allowObjectEnd?: boolean;
      allowArrayStart?: boolean;
      allowArrayEnd?: boolean;
      ignorePattern?: string;
      applyDefaultIgnorePatterns?: boolean;
      afterHashbangComment?: boolean;
    }?,
  ];

  /**
   * Require or disallow newlines around directives.
   * @deprecated
   * @see [lines-around-directive](https://eslint.org/docs/latest/rules/lines-around-directive)
   */
  'lines-around-directive': [LinesAroundDirectiveOption?];

  /**
   * Require or disallow an empty line between class members.
   * @deprecated
   * @see [lines-between-class-members](https://eslint.org/docs/latest/rules/lines-between-class-members)
   */
  'lines-between-class-members': LinesBetweenClassMembersRuleConfig;

  /**
   * Require or disallow logical assignment operator shorthand.
   * @see [logical-assignment-operators](https://eslint.org/docs/latest/rules/logical-assignment-operators)
   */
  'logical-assignment-operators': LogicalAssignmentOperatorsOption;

  /**
   * Enforce a maximum number of classes per file.
   * @see [max-classes-per-file](https://eslint.org/docs/latest/rules/max-classes-per-file)
   */
  'max-classes-per-file': [MaxClassesPerFileOption?];

  /**
   * Enforce a maximum depth that blocks can be nested.
   * @see [max-depth](https://eslint.org/docs/latest/rules/max-depth)
   */
  'max-depth': [MaxDepthOption?];

  /**
   * Enforce a maximum line length.
   * @deprecated
   * @see [max-len](https://eslint.org/docs/latest/rules/max-len)
   */
  'max-len': MaxLen.MaxLenRuleConfig;

  /**
   * Enforce a maximum number of lines per file.
   * @see [max-lines](https://eslint.org/docs/latest/rules/max-lines)
   */
  'max-lines': [MaxLinesOption?];

  /**
   * Enforce a maximum number of lines of code in a function.
   * @see [max-lines-per-function](https://eslint.org/docs/latest/rules/max-lines-per-function)
   */
  'max-lines-per-function': [MaxLinesPerFunctionOption?];

  /**
   * Enforce a maximum depth that callbacks can be nested.
   * @see [max-nested-callbacks](https://eslint.org/docs/latest/rules/max-nested-callbacks)
   */
  'max-nested-callbacks': [MaxNestedCallbacksOption?];

  /**
   * Enforce a maximum number of parameters in function definitions.
   * @see [max-params](https://eslint.org/docs/latest/rules/max-params)
   */
  'max-params': [MaxParamsOption?];

  /**
   * Enforce a maximum number of statements allowed in function blocks.
   * @see [max-statements](https://eslint.org/docs/latest/rules/max-statements)
   */
  'max-statements': MaxStatementsRuleConfig;

  /**
   * Enforce a maximum number of statements allowed per line.
   * @deprecated
   * @see [max-statements-per-line](https://eslint.org/docs/latest/rules/max-statements-per-line)
   */
  'max-statements-per-line': [
    {
      max?: number;
    }?,
  ];

  /**
   * Enforce a particular style for multiline comments.
   * @deprecated
   * @see [multiline-comment-style](https://eslint.org/docs/latest/rules/multiline-comment-style)
   */
  'multiline-comment-style': MultilineCommentStyleOption;

  /**
   * Enforce newlines between operands of ternary expressions.
   * @deprecated
   * @see [multiline-ternary](https://eslint.org/docs/latest/rules/multiline-ternary)
   */
  'multiline-ternary': [('always' | 'always-multiline' | 'never')?];

  /**
   * Require constructor names to begin with a capital letter.
   * @see [new-cap](https://eslint.org/docs/latest/rules/new-cap)
   */
  'new-cap': [
    {
      newIsCap?: boolean;
      capIsNew?: boolean;
      newIsCapExceptions?: string[];
      newIsCapExceptionPattern?: string;
      capIsNewExceptions?: string[];
      capIsNewExceptionPattern?: string;
      properties?: boolean;
    }?,
  ];

  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments.
   * @deprecated
   * @see [new-parens](https://eslint.org/docs/latest/rules/new-parens)
   */
  'new-parens': [('always' | 'never')?];

  /**
   * Require or disallow an empty line after variable declarations.
   * @deprecated
   * @see [newline-after-var](https://eslint.org/docs/latest/rules/newline-after-var)
   */
  'newline-after-var': [('never' | 'always')?];

  /**
   * Require an empty line before `return` statements.
   * @deprecated
   * @see [newline-before-return](https://eslint.org/docs/latest/rules/newline-before-return)
   */
  'newline-before-return': null;

  /**
   * Require a newline after each call in a method chain.
   * @deprecated
   * @see [newline-per-chained-call](https://eslint.org/docs/latest/rules/newline-per-chained-call)
   */
  'newline-per-chained-call': [
    {
      ignoreChainWithDepth?: number;
    }?,
  ];

  /**
   * Disallow the use of `alert`, `confirm`, and `prompt`.
   * @see [no-alert](https://eslint.org/docs/latest/rules/no-alert)
   */
  'no-alert': null;

  /**
   * Disallow `Array` constructors.
   * @see [no-array-constructor](https://eslint.org/docs/latest/rules/no-array-constructor)
   */
  'no-array-constructor': null;

  /**
   * Disallow using an async function as a Promise executor.
   * @see [no-async-promise-executor](https://eslint.org/docs/latest/rules/no-async-promise-executor)
   */
  'no-async-promise-executor': null;

  /**
   * Disallow `await` inside of loops.
   * @see [no-await-in-loop](https://eslint.org/docs/latest/rules/no-await-in-loop)
   */
  'no-await-in-loop': null;

  /**
   * Disallow bitwise operators.
   * @see [no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise)
   */
  'no-bitwise': [NoBitwiseOption?];

  /**
   * Disallow use of the `Buffer()` constructor.
   * @deprecated
   * @see [no-buffer-constructor](https://eslint.org/docs/latest/rules/no-buffer-constructor)
   */
  'no-buffer-constructor': null;

  /**
   * Disallow the use of `arguments.caller` or `arguments.callee`.
   * @see [no-caller](https://eslint.org/docs/latest/rules/no-caller)
   */
  'no-caller': null;

  /**
   * Disallow lexical declarations in case clauses.
   * @see [no-case-declarations](https://eslint.org/docs/latest/rules/no-case-declarations)
   */
  'no-case-declarations': null;

  /**
   * Disallow `catch` clause parameters from shadowing variables in the outer scope.
   * @deprecated
   * @see [no-catch-shadow](https://eslint.org/docs/latest/rules/no-catch-shadow)
   */
  'no-catch-shadow': null;

  /**
   * Disallow reassigning class members.
   * @see [no-class-assign](https://eslint.org/docs/latest/rules/no-class-assign)
   */
  'no-class-assign': null;

  /**
   * Disallow comparing against `-0`.
   * @see [no-compare-neg-zero](https://eslint.org/docs/latest/rules/no-compare-neg-zero)
   */
  'no-compare-neg-zero': null;

  /**
   * Disallow assignment operators in conditional expressions.
   * @see [no-cond-assign](https://eslint.org/docs/latest/rules/no-cond-assign)
   */
  'no-cond-assign': [('except-parens' | 'always')?];

  /**
   * Disallow arrow functions where they could be confused with comparisons.
   * @deprecated
   * @see [no-confusing-arrow](https://eslint.org/docs/latest/rules/no-confusing-arrow)
   */
  'no-confusing-arrow': [
    {
      allowParens?: boolean;
      onlyOneSimpleParam?: boolean;
    }?,
  ];

  /**
   * Disallow the use of `console`.
   * @see [no-console](https://eslint.org/docs/latest/rules/no-console)
   */
  'no-console': [NoConsoleOption?];

  /**
   * Disallow reassigning `const` variables.
   * @see [no-const-assign](https://eslint.org/docs/latest/rules/no-const-assign)
   */
  'no-const-assign': null;

  /**
   * Disallow expressions where the operation doesn't affect the value.
   * @see [no-constant-binary-expression](https://eslint.org/docs/latest/rules/no-constant-binary-expression)
   */
  'no-constant-binary-expression': null;

  /**
   * Disallow constant expressions in conditions.
   * @see [no-constant-condition](https://eslint.org/docs/latest/rules/no-constant-condition)
   */
  'no-constant-condition': [NoConstantConditionOption?];

  /**
   * Disallow returning value from constructor.
   * @see [no-constructor-return](https://eslint.org/docs/latest/rules/no-constructor-return)
   */
  'no-constructor-return': null;

  /**
   * Disallow `continue` statements.
   * @see [no-continue](https://eslint.org/docs/latest/rules/no-continue)
   */
  'no-continue': null;

  /**
   * Disallow control characters in regular expressions.
   * @see [no-control-regex](https://eslint.org/docs/latest/rules/no-control-regex)
   */
  'no-control-regex': null;

  /**
   * Disallow the use of `debugger`.
   * @see [no-debugger](https://eslint.org/docs/latest/rules/no-debugger)
   */
  'no-debugger': null;

  /**
   * Disallow deleting variables.
   * @see [no-delete-var](https://eslint.org/docs/latest/rules/no-delete-var)
   */
  'no-delete-var': null;

  /**
   * Disallow equal signs explicitly at the beginning of regular expressions.
   * @see [no-div-regex](https://eslint.org/docs/latest/rules/no-div-regex)
   */
  'no-div-regex': null;

  /**
   * Disallow duplicate arguments in `function` definitions.
   * @see [no-dupe-args](https://eslint.org/docs/latest/rules/no-dupe-args)
   */
  'no-dupe-args': null;

  /**
   * Disallow duplicate class members.
   * @see [no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members)
   */
  'no-dupe-class-members': null;

  /**
   * Disallow duplicate conditions in if-else-if chains.
   * @see [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if)
   */
  'no-dupe-else-if': null;

  /**
   * Disallow duplicate keys in object literals.
   * @see [no-dupe-keys](https://eslint.org/docs/latest/rules/no-dupe-keys)
   */
  'no-dupe-keys': null;

  /**
   * Disallow duplicate case labels.
   * @see [no-duplicate-case](https://eslint.org/docs/latest/rules/no-duplicate-case)
   */
  'no-duplicate-case': null;

  /**
   * Disallow duplicate module imports.
   * @see [no-duplicate-imports](https://eslint.org/docs/latest/rules/no-duplicate-imports)
   */
  'no-duplicate-imports': [
    {
      includeExports?: boolean;
    }?,
  ];

  /**
   * Disallow `else` blocks after `return` statements in `if` statements.
   * @see [no-else-return](https://eslint.org/docs/latest/rules/no-else-return)
   */
  'no-else-return': [
    {
      allowElseIf?: boolean;
    }?,
  ];

  /**
   * Disallow empty block statements.
   * @see [no-empty](https://eslint.org/docs/latest/rules/no-empty)
   */
  'no-empty': [
    {
      allowEmptyCatch?: boolean;
    }?,
  ];

  /**
   * Disallow empty character classes in regular expressions.
   * @see [no-empty-character-class](https://eslint.org/docs/latest/rules/no-empty-character-class)
   */
  'no-empty-character-class': null;

  /**
   * Disallow empty functions.
   * @see [no-empty-function](https://eslint.org/docs/latest/rules/no-empty-function)
   */
  'no-empty-function': [NoEmptyFunctionOption?];

  /**
   * Disallow empty destructuring patterns.
   * @see [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern)
   */
  'no-empty-pattern': [
    {
      allowObjectPatternsAsParameters?: boolean;
    }?,
  ];

  /**
   * Disallow empty static blocks.
   * @see [no-empty-static-block](https://eslint.org/docs/latest/rules/no-empty-static-block)
   */
  'no-empty-static-block': null;

  /**
   * Disallow `null` comparisons without type-checking operators.
   * @see [no-eq-null](https://eslint.org/docs/latest/rules/no-eq-null)
   */
  'no-eq-null': null;

  /**
   * Disallow the use of `eval()`.
   * @see [no-eval](https://eslint.org/docs/latest/rules/no-eval)
   */
  'no-eval': [
    {
      allowIndirect?: boolean;
    }?,
  ];

  /**
   * Disallow reassigning exceptions in `catch` clauses.
   * @see [no-ex-assign](https://eslint.org/docs/latest/rules/no-ex-assign)
   */
  'no-ex-assign': null;

  /**
   * Disallow extending native types.
   * @see [no-extend-native](https://eslint.org/docs/latest/rules/no-extend-native)
   */
  'no-extend-native': [
    {
      exceptions?: string[];
    }?,
  ];

  /**
   * Disallow unnecessary calls to `.bind()`.
   * @see [no-extra-bind](https://eslint.org/docs/latest/rules/no-extra-bind)
   */
  'no-extra-bind': null;

  /**
   * Disallow unnecessary boolean casts.
   * @see [no-extra-boolean-cast](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)
   */
  'no-extra-boolean-cast': [NoExtraBooleanCastOption?];

  /**
   * Disallow unnecessary labels.
   * @see [no-extra-label](https://eslint.org/docs/latest/rules/no-extra-label)
   */
  'no-extra-label': null;

  /**
   * Disallow unnecessary parentheses.
   * @deprecated
   * @see [no-extra-parens](https://eslint.org/docs/latest/rules/no-extra-parens)
   */
  'no-extra-parens': NoExtraParensOption;

  /**
   * Disallow unnecessary semicolons.
   * @deprecated
   * @see [no-extra-semi](https://eslint.org/docs/latest/rules/no-extra-semi)
   */
  'no-extra-semi': null;

  /**
   * Disallow fallthrough of `case` statements.
   * @see [no-fallthrough](https://eslint.org/docs/latest/rules/no-fallthrough)
   */
  'no-fallthrough': [
    {
      commentPattern?: string;
      allowEmptyCase?: boolean;
      reportUnusedFallthroughComment?: boolean;
    }?,
  ];

  /**
   * Disallow leading or trailing decimal points in numeric literals.
   * @deprecated
   * @see [no-floating-decimal](https://eslint.org/docs/latest/rules/no-floating-decimal)
   */
  'no-floating-decimal': null;

  /**
   * Disallow reassigning `function` declarations.
   * @see [no-func-assign](https://eslint.org/docs/latest/rules/no-func-assign)
   */
  'no-func-assign': null;

  /**
   * Disallow assignments to native objects or read-only global variables.
   * @see [no-global-assign](https://eslint.org/docs/latest/rules/no-global-assign)
   */
  'no-global-assign': [
    {
      exceptions?: string[];
    }?,
  ];

  /**
   * Disallow shorthand type conversions.
   * @see [no-implicit-coercion](https://eslint.org/docs/latest/rules/no-implicit-coercion)
   */
  'no-implicit-coercion': [NoImplicitCoercionOption?];

  /**
   * Disallow declarations in the global scope.
   * @see [no-implicit-globals](https://eslint.org/docs/latest/rules/no-implicit-globals)
   */
  'no-implicit-globals': [
    {
      lexicalBindings?: boolean;
    }?,
  ];

  /**
   * Disallow the use of `eval()`-like methods.
   * @see [no-implied-eval](https://eslint.org/docs/latest/rules/no-implied-eval)
   */
  'no-implied-eval': null;

  /**
   * Disallow assigning to imported bindings.
   * @see [no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign)
   */
  'no-import-assign': null;

  /**
   * Disallow inline comments after code.
   * @see [no-inline-comments](https://eslint.org/docs/latest/rules/no-inline-comments)
   */
  'no-inline-comments': [
    {
      ignorePattern?: string;
    }?,
  ];

  /**
   * Disallow variable or `function` declarations in nested blocks.
   * @see [no-inner-declarations](https://eslint.org/docs/latest/rules/no-inner-declarations)
   */
  'no-inner-declarations': NoInnerDeclarationsRuleConfig;

  /**
   * Disallow invalid regular expression strings in `RegExp` constructors.
   * @see [no-invalid-regexp](https://eslint.org/docs/latest/rules/no-invalid-regexp)
   */
  'no-invalid-regexp': [
    {
      allowConstructorFlags?: string[];
    }?,
  ];

  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`.
   * @see [no-invalid-this](https://eslint.org/docs/latest/rules/no-invalid-this)
   */
  'no-invalid-this': [
    {
      capIsConstructor?: boolean;
    }?,
  ];

  /**
   * Disallow irregular whitespace.
   * @see [no-irregular-whitespace](https://eslint.org/docs/latest/rules/no-irregular-whitespace)
   */
  'no-irregular-whitespace': [
    {
      skipComments?: boolean;
      skipStrings?: boolean;
      skipTemplates?: boolean;
      skipRegExps?: boolean;
      skipJSXText?: boolean;
    }?,
  ];

  /**
   * Disallow the use of the `__iterator__` property.
   * @see [no-iterator](https://eslint.org/docs/latest/rules/no-iterator)
   */
  'no-iterator': null;

  /**
   * Disallow labels that share a name with a variable.
   * @see [no-label-var](https://eslint.org/docs/latest/rules/no-label-var)
   */
  'no-label-var': null;

  /**
   * Disallow labeled statements.
   * @see [no-labels](https://eslint.org/docs/latest/rules/no-labels)
   */
  'no-labels': [
    {
      allowLoop?: boolean;
      allowSwitch?: boolean;
    }?,
  ];

  /**
   * Disallow unnecessary nested blocks.
   * @see [no-lone-blocks](https://eslint.org/docs/latest/rules/no-lone-blocks)
   */
  'no-lone-blocks': null;

  /**
   * Disallow `if` statements as the only statement in `else` blocks.
   * @see [no-lonely-if](https://eslint.org/docs/latest/rules/no-lonely-if)
   */
  'no-lonely-if': null;

  /**
   * Disallow function declarations that contain unsafe references inside loop statements.
   * @see [no-loop-func](https://eslint.org/docs/latest/rules/no-loop-func)
   */
  'no-loop-func': null;

  /**
   * Disallow literal numbers that lose precision.
   * @see [no-loss-of-precision](https://eslint.org/docs/latest/rules/no-loss-of-precision)
   */
  'no-loss-of-precision': null;

  /**
   * Disallow magic numbers.
   * @see [no-magic-numbers](https://eslint.org/docs/latest/rules/no-magic-numbers)
   */
  'no-magic-numbers': [NoMagicNumbersOption?];

  /**
   * Disallow characters which are made with multiple code points in character class syntax.
   * @see [no-misleading-character-class](https://eslint.org/docs/latest/rules/no-misleading-character-class)
   */
  'no-misleading-character-class': [
    {
      allowEscape?: boolean;
    }?,
  ];

  /**
   * Disallow mixed binary operators.
   * @deprecated
   * @see [no-mixed-operators](https://eslint.org/docs/latest/rules/no-mixed-operators)
   */
  'no-mixed-operators': [NoMixedOperatorsOption?];

  /**
   * Disallow `require` calls to be mixed with regular variable declarations.
   * @deprecated
   * @see [no-mixed-requires](https://eslint.org/docs/latest/rules/no-mixed-requires)
   */
  'no-mixed-requires': [NoMixedRequiresOption?];

  /**
   * Disallow mixed spaces and tabs for indentation.
   * @deprecated
   * @see [no-mixed-spaces-and-tabs](https://eslint.org/docs/latest/rules/no-mixed-spaces-and-tabs)
   */
  'no-mixed-spaces-and-tabs': [NoMixedSpacesAndTabsOption?];

  /**
   * Disallow use of chained assignment expressions.
   * @see [no-multi-assign](https://eslint.org/docs/latest/rules/no-multi-assign)
   */
  'no-multi-assign': [
    {
      ignoreNonDeclaration?: boolean;
    }?,
  ];

  /**
   * Disallow multiple spaces.
   * @deprecated
   * @see [no-multi-spaces](https://eslint.org/docs/latest/rules/no-multi-spaces)
   */
  'no-multi-spaces': [NoMultiSpacesOption?];

  /**
   * Disallow multiline strings.
   * @see [no-multi-str](https://eslint.org/docs/latest/rules/no-multi-str)
   */
  'no-multi-str': null;

  /**
   * Disallow multiple empty lines.
   * @deprecated
   * @see [no-multiple-empty-lines](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
   */
  'no-multiple-empty-lines': [
    {
      max: number;
      maxEOF?: number;
      maxBOF?: number;
    }?,
  ];

  /**
   * Disallow assignments to native objects or read-only global variables.
   * @deprecated
   * @see [no-native-reassign](https://eslint.org/docs/latest/rules/no-native-reassign)
   */
  'no-native-reassign': [
    {
      exceptions?: string[];
    }?,
  ];

  /**
   * Disallow negated conditions.
   * @see [no-negated-condition](https://eslint.org/docs/latest/rules/no-negated-condition)
   */
  'no-negated-condition': null;

  /**
   * Disallow negating the left operand in `in` expressions.
   * @deprecated
   * @see [no-negated-in-lhs](https://eslint.org/docs/latest/rules/no-negated-in-lhs)
   */
  'no-negated-in-lhs': null;

  /**
   * Disallow nested ternary expressions.
   * @see [no-nested-ternary](https://eslint.org/docs/latest/rules/no-nested-ternary)
   */
  'no-nested-ternary': null;

  /**
   * Disallow `new` operators outside of assignments or comparisons.
   * @see [no-new](https://eslint.org/docs/latest/rules/no-new)
   */
  'no-new': null;

  /**
   * Disallow `new` operators with the `Function` object.
   * @see [no-new-func](https://eslint.org/docs/latest/rules/no-new-func)
   */
  'no-new-func': null;

  /**
   * Disallow `new` operators with global non-constructor functions.
   * @see [no-new-native-nonconstructor](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)
   */
  'no-new-native-nonconstructor': null;

  /**
   * Disallow `Object` constructors.
   * @deprecated
   * @see [no-new-object](https://eslint.org/docs/latest/rules/no-new-object)
   */
  'no-new-object': null;

  /**
   * Disallow `new` operators with calls to `require`.
   * @deprecated
   * @see [no-new-require](https://eslint.org/docs/latest/rules/no-new-require)
   */
  'no-new-require': null;

  /**
   * Disallow `new` operators with the `Symbol` object.
   * @deprecated
   * @see [no-new-symbol](https://eslint.org/docs/latest/rules/no-new-symbol)
   */
  'no-new-symbol': null;

  /**
   * Disallow `new` operators with the `String`, `Number`, and `Boolean` objects.
   * @see [no-new-wrappers](https://eslint.org/docs/latest/rules/no-new-wrappers)
   */
  'no-new-wrappers': null;

  /**
   * Disallow `\8` and `\9` escape sequences in string literals.
   * @see [no-nonoctal-decimal-escape](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)
   */
  'no-nonoctal-decimal-escape': null;

  /**
   * Disallow calling global object properties as functions.
   * @see [no-obj-calls](https://eslint.org/docs/latest/rules/no-obj-calls)
   */
  'no-obj-calls': null;

  /**
   * Disallow calls to the `Object` constructor without an argument.
   * @see [no-object-constructor](https://eslint.org/docs/latest/rules/no-object-constructor)
   */
  'no-object-constructor': null;

  /**
   * Disallow octal literals.
   * @see [no-octal](https://eslint.org/docs/latest/rules/no-octal)
   */
  'no-octal': null;

  /**
   * Disallow octal escape sequences in string literals.
   * @see [no-octal-escape](https://eslint.org/docs/latest/rules/no-octal-escape)
   */
  'no-octal-escape': null;

  /**
   * Disallow reassigning function parameters.
   * @see [no-param-reassign](https://eslint.org/docs/latest/rules/no-param-reassign)
   */
  'no-param-reassign': [NoParamReassignOption?];

  /**
   * Disallow string concatenation with `__dirname` and `__filename`.
   * @deprecated
   * @see [no-path-concat](https://eslint.org/docs/latest/rules/no-path-concat)
   */
  'no-path-concat': null;

  /**
   * Disallow the unary operators `++` and `--`.
   * @see [no-plusplus](https://eslint.org/docs/latest/rules/no-plusplus)
   */
  'no-plusplus': [
    {
      allowForLoopAfterthoughts?: boolean;
    }?,
  ];

  /**
   * Disallow the use of `process.env`.
   * @deprecated
   * @see [no-process-env](https://eslint.org/docs/latest/rules/no-process-env)
   */
  'no-process-env': null;

  /**
   * Disallow the use of `process.exit()`.
   * @deprecated
   * @see [no-process-exit](https://eslint.org/docs/latest/rules/no-process-exit)
   */
  'no-process-exit': null;

  /**
   * Disallow returning values from Promise executor functions.
   * @see [no-promise-executor-return](https://eslint.org/docs/latest/rules/no-promise-executor-return)
   */
  'no-promise-executor-return': [
    {
      allowVoid?: boolean;
    }?,
  ];

  /**
   * Disallow the use of the `__proto__` property.
   * @see [no-proto](https://eslint.org/docs/latest/rules/no-proto)
   */
  'no-proto': null;

  /**
   * Disallow calling some `Object.prototype` methods directly on objects.
   * @see [no-prototype-builtins](https://eslint.org/docs/latest/rules/no-prototype-builtins)
   */
  'no-prototype-builtins': null;

  /**
   * Disallow variable redeclaration.
   * @see [no-redeclare](https://eslint.org/docs/latest/rules/no-redeclare)
   */
  'no-redeclare': [
    {
      builtinGlobals?: boolean;
    }?,
  ];

  /**
   * Disallow multiple spaces in regular expressions.
   * @see [no-regex-spaces](https://eslint.org/docs/latest/rules/no-regex-spaces)
   */
  'no-regex-spaces': null;

  /**
   * Disallow specified names in exports.
   * @see [no-restricted-exports](https://eslint.org/docs/latest/rules/no-restricted-exports)
   */
  'no-restricted-exports': [NoRestrictedExportsOption?];

  /**
   * Disallow specified global variables.
   * @see [no-restricted-globals](https://eslint.org/docs/latest/rules/no-restricted-globals)
   */
  'no-restricted-globals': NoRestrictedGlobalsOption;

  /**
   * Disallow specified modules when loaded by `import`.
   * @see [no-restricted-imports](https://eslint.org/docs/latest/rules/no-restricted-imports)
   */
  'no-restricted-imports': NoRestrictedImportsOption;

  /**
   * Disallow specified modules when loaded by `require`.
   * @deprecated
   * @see [no-restricted-modules](https://eslint.org/docs/latest/rules/no-restricted-modules)
   */
  'no-restricted-modules': NoRestrictedModulesOption;

  /**
   * Disallow certain properties on certain objects.
   * @see [no-restricted-properties](https://eslint.org/docs/latest/rules/no-restricted-properties)
   */
  'no-restricted-properties': NoRestrictedPropertiesOption;

  /**
   * Disallow specified syntax.
   * @see [no-restricted-syntax](https://eslint.org/docs/latest/rules/no-restricted-syntax)
   */
  'no-restricted-syntax': NoRestrictedSyntaxOption;

  /**
   * Disallow assignment operators in `return` statements.
   * @see [no-return-assign](https://eslint.org/docs/latest/rules/no-return-assign)
   */
  'no-return-assign': [('except-parens' | 'always')?];

  /**
   * Disallow unnecessary `return await`.
   * @deprecated
   * @see [no-return-await](https://eslint.org/docs/latest/rules/no-return-await)
   */
  'no-return-await': null;

  /**
   * Disallow `javascript:` URLs.
   * @see [no-script-url](https://eslint.org/docs/latest/rules/no-script-url)
   */
  'no-script-url': null;

  /**
   * Disallow assignments where both sides are exactly the same.
   * @see [no-self-assign](https://eslint.org/docs/latest/rules/no-self-assign)
   */
  'no-self-assign': [
    {
      props?: boolean;
    }?,
  ];

  /**
   * Disallow comparisons where both sides are exactly the same.
   * @see [no-self-compare](https://eslint.org/docs/latest/rules/no-self-compare)
   */
  'no-self-compare': null;

  /**
   * Disallow comma operators.
   * @see [no-sequences](https://eslint.org/docs/latest/rules/no-sequences)
   */
  'no-sequences': [
    {
      allowInParentheses?: boolean;
    }?,
  ];

  /**
   * Disallow returning values from setters.
   * @see [no-setter-return](https://eslint.org/docs/latest/rules/no-setter-return)
   */
  'no-setter-return': null;

  /**
   * Disallow variable declarations from shadowing variables declared in the outer scope.
   * @see [no-shadow](https://eslint.org/docs/latest/rules/no-shadow)
   */
  'no-shadow': [NoShadowOption?];

  /**
   * Disallow identifiers from shadowing restricted names.
   * @see [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)
   */
  'no-shadow-restricted-names': [
    {
      reportGlobalThis?: boolean;
    }?,
  ];

  /**
   * Disallow spacing between function identifiers and their applications (deprecated).
   * @deprecated
   * @see [no-spaced-func](https://eslint.org/docs/latest/rules/no-spaced-func)
   */
  'no-spaced-func': null;

  /**
   * Disallow sparse arrays.
   * @see [no-sparse-arrays](https://eslint.org/docs/latest/rules/no-sparse-arrays)
   */
  'no-sparse-arrays': null;

  /**
   * Disallow synchronous methods.
   * @deprecated
   * @see [no-sync](https://eslint.org/docs/latest/rules/no-sync)
   */
  'no-sync': [
    {
      allowAtRootLevel?: boolean;
    }?,
  ];

  /**
   * Disallow all tabs.
   * @deprecated
   * @see [no-tabs](https://eslint.org/docs/latest/rules/no-tabs)
   */
  'no-tabs': [
    {
      allowIndentationTabs?: boolean;
    }?,
  ];

  /**
   * Disallow template literal placeholder syntax in regular strings.
   * @see [no-template-curly-in-string](https://eslint.org/docs/latest/rules/no-template-curly-in-string)
   */
  'no-template-curly-in-string': null;

  /**
   * Disallow ternary operators.
   * @see [no-ternary](https://eslint.org/docs/latest/rules/no-ternary)
   */
  'no-ternary': null;

  /**
   * Disallow `this`/`super` before calling `super()` in constructors.
   * @see [no-this-before-super](https://eslint.org/docs/latest/rules/no-this-before-super)
   */
  'no-this-before-super': null;

  /**
   * Disallow throwing literals as exceptions.
   * @see [no-throw-literal](https://eslint.org/docs/latest/rules/no-throw-literal)
   */
  'no-throw-literal': null;

  /**
   * Disallow trailing whitespace at the end of lines.
   * @deprecated
   * @see [no-trailing-spaces](https://eslint.org/docs/latest/rules/no-trailing-spaces)
   */
  'no-trailing-spaces': [
    {
      skipBlankLines?: boolean;
      ignoreComments?: boolean;
    }?,
  ];

  /**
   * Disallow `let` or `var` variables that are read but never assigned.
   * @see [no-unassigned-vars](https://eslint.org/docs/latest/rules/no-unassigned-vars)
   */
  'no-unassigned-vars': null;

  /**
   * Disallow the use of undeclared variables unless mentioned in `/*global ` comments.
   * @see [no-undef](https://eslint.org/docs/latest/rules/no-undef)
   */
  'no-undef': [
    {
      typeof?: boolean;
    }?,
  ];

  /**
   * Disallow initializing variables to `undefined`.
   * @see [no-undef-init](https://eslint.org/docs/latest/rules/no-undef-init)
   */
  'no-undef-init': null;

  /**
   * Disallow the use of `undefined` as an identifier.
   * @see [no-undefined](https://eslint.org/docs/latest/rules/no-undefined)
   */
  'no-undefined': null;

  /**
   * Disallow dangling underscores in identifiers.
   * @see [no-underscore-dangle](https://eslint.org/docs/latest/rules/no-underscore-dangle)
   */
  'no-underscore-dangle': [
    {
      allow?: string[];
      allowAfterThis?: boolean;
      allowAfterSuper?: boolean;
      allowAfterThisConstructor?: boolean;
      enforceInMethodNames?: boolean;
      allowFunctionParams?: boolean;
      enforceInClassFields?: boolean;
      allowInArrayDestructuring?: boolean;
      allowInObjectDestructuring?: boolean;
    }?,
  ];

  /**
   * Disallow confusing multiline expressions.
   * @see [no-unexpected-multiline](https://eslint.org/docs/latest/rules/no-unexpected-multiline)
   */
  'no-unexpected-multiline': null;

  /**
   * Disallow unmodified loop conditions.
   * @see [no-unmodified-loop-condition](https://eslint.org/docs/latest/rules/no-unmodified-loop-condition)
   */
  'no-unmodified-loop-condition': null;

  /**
   * Disallow ternary operators when simpler alternatives exist.
   * @see [no-unneeded-ternary](https://eslint.org/docs/latest/rules/no-unneeded-ternary)
   */
  'no-unneeded-ternary': [
    {
      defaultAssignment?: boolean;
    }?,
  ];

  /**
   * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements.
   * @see [no-unreachable](https://eslint.org/docs/latest/rules/no-unreachable)
   */
  'no-unreachable': null;

  /**
   * Disallow loops with a body that allows only one iteration.
   * @see [no-unreachable-loop](https://eslint.org/docs/latest/rules/no-unreachable-loop)
   */
  'no-unreachable-loop': [NoUnreachableLoopOption?];

  /**
   * Disallow control flow statements in `finally` blocks.
   * @see [no-unsafe-finally](https://eslint.org/docs/latest/rules/no-unsafe-finally)
   */
  'no-unsafe-finally': null;

  /**
   * Disallow negating the left operand of relational operators.
   * @see [no-unsafe-negation](https://eslint.org/docs/latest/rules/no-unsafe-negation)
   */
  'no-unsafe-negation': [
    {
      enforceForOrderingRelations?: boolean;
    }?,
  ];

  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed.
   * @see [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
   */
  'no-unsafe-optional-chaining': [
    {
      disallowArithmeticOperators?: boolean;
    }?,
  ];

  /**
   * Disallow unused expressions.
   * @see [no-unused-expressions](https://eslint.org/docs/latest/rules/no-unused-expressions)
   */
  'no-unused-expressions': [
    {
      allowShortCircuit?: boolean;
      allowTernary?: boolean;
      allowTaggedTemplates?: boolean;
      enforceForJSX?: boolean;
      ignoreDirectives?: boolean;
    }?,
  ];

  /**
   * Disallow unused labels.
   * @see [no-unused-labels](https://eslint.org/docs/latest/rules/no-unused-labels)
   */
  'no-unused-labels': null;

  /**
   * Disallow unused private class members.
   * @see [no-unused-private-class-members](https://eslint.org/docs/latest/rules/no-unused-private-class-members)
   */
  'no-unused-private-class-members': null;

  /**
   * Disallow unused variables.
   * @see [no-unused-vars](https://eslint.org/docs/latest/rules/no-unused-vars)
   */
  'no-unused-vars': [NoUnusedVarsOption?];

  /**
   * Disallow the use of variables before they are defined.
   * @see [no-use-before-define](https://eslint.org/docs/latest/rules/no-use-before-define)
   */
  'no-use-before-define': [NoUseBeforeDefineOption?];

  /**
   * Disallow variable assignments when the value is not used.
   * @see [no-useless-assignment](https://eslint.org/docs/latest/rules/no-useless-assignment)
   */
  'no-useless-assignment': null;

  /**
   * Disallow useless backreferences in regular expressions.
   * @see [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference)
   */
  'no-useless-backreference': null;

  /**
   * Disallow unnecessary calls to `.call()` and `.apply()`.
   * @see [no-useless-call](https://eslint.org/docs/latest/rules/no-useless-call)
   */
  'no-useless-call': null;

  /**
   * Disallow unnecessary `catch` clauses.
   * @see [no-useless-catch](https://eslint.org/docs/latest/rules/no-useless-catch)
   */
  'no-useless-catch': null;

  /**
   * Disallow unnecessary computed property keys in objects and classes.
   * @see [no-useless-computed-key](https://eslint.org/docs/latest/rules/no-useless-computed-key)
   */
  'no-useless-computed-key': [
    {
      enforceForClassMembers?: boolean;
    }?,
  ];

  /**
   * Disallow unnecessary concatenation of literals or template literals.
   * @see [no-useless-concat](https://eslint.org/docs/latest/rules/no-useless-concat)
   */
  'no-useless-concat': null;

  /**
   * Disallow unnecessary constructors.
   * @see [no-useless-constructor](https://eslint.org/docs/latest/rules/no-useless-constructor)
   */
  'no-useless-constructor': null;

  /**
   * Disallow unnecessary escape characters.
   * @see [no-useless-escape](https://eslint.org/docs/latest/rules/no-useless-escape)
   */
  'no-useless-escape': [
    {
      allowRegexCharacters?: string[];
    }?,
  ];

  /**
   * Disallow renaming import, export, and destructured assignments to the same name.
   * @see [no-useless-rename](https://eslint.org/docs/latest/rules/no-useless-rename)
   */
  'no-useless-rename': [
    {
      ignoreDestructuring?: boolean;
      ignoreImport?: boolean;
      ignoreExport?: boolean;
    }?,
  ];

  /**
   * Disallow redundant return statements.
   * @see [no-useless-return](https://eslint.org/docs/latest/rules/no-useless-return)
   */
  'no-useless-return': null;

  /**
   * Require `let` or `const` instead of `var`.
   * @see [no-var](https://eslint.org/docs/latest/rules/no-var)
   */
  'no-var': null;

  /**
   * Disallow `void` operators.
   * @see [no-void](https://eslint.org/docs/latest/rules/no-void)
   */
  'no-void': [
    {
      allowAsStatement?: boolean;
    }?,
  ];

  /**
   * Disallow specified warning terms in comments.
   * @see [no-warning-comments](https://eslint.org/docs/latest/rules/no-warning-comments)
   */
  'no-warning-comments': [NoWarningCommentsOption?];

  /**
   * Disallow whitespace before properties.
   * @deprecated
   * @see [no-whitespace-before-property](https://eslint.org/docs/latest/rules/no-whitespace-before-property)
   */
  'no-whitespace-before-property': null;

  /**
   * Disallow `with` statements.
   * @see [no-with](https://eslint.org/docs/latest/rules/no-with)
   */
  'no-with': null;

  /**
   * Enforce the location of single-line statements.
   * @deprecated
   * @see [nonblock-statement-body-position](https://eslint.org/docs/latest/rules/nonblock-statement-body-position)
   */
  'nonblock-statement-body-position': NonblockStatementBodyPositionRuleConfig;

  /**
   * Enforce consistent line breaks after opening and before closing braces.
   * @deprecated
   * @see [object-curly-newline](https://eslint.org/docs/latest/rules/object-curly-newline)
   */
  'object-curly-newline': [ObjectCurlyNewlineOption?];

  /**
   * Enforce consistent spacing inside braces.
   * @deprecated
   * @see [object-curly-spacing](https://eslint.org/docs/latest/rules/object-curly-spacing)
   */
  'object-curly-spacing': ObjectCurlySpacingRuleConfig;

  /**
   * Enforce placing object properties on separate lines.
   * @deprecated
   * @see [object-property-newline](https://eslint.org/docs/latest/rules/object-property-newline)
   */
  'object-property-newline': [
    {
      allowAllPropertiesOnSameLine?: boolean;
      allowMultiplePropertiesPerLine?: boolean;
    }?,
  ];

  /**
   * Require or disallow method and property shorthand syntax for object literals.
   * @see [object-shorthand](https://eslint.org/docs/latest/rules/object-shorthand)
   */
  'object-shorthand': ObjectShorthandOption;

  /**
   * Enforce variables to be declared either together or separately in functions.
   * @see [one-var](https://eslint.org/docs/latest/rules/one-var)
   */
  'one-var': [OneVarOption?];

  /**
   * Require or disallow newlines around variable declarations.
   * @deprecated
   * @see [one-var-declaration-per-line](https://eslint.org/docs/latest/rules/one-var-declaration-per-line)
   */
  'one-var-declaration-per-line': [('always' | 'initializations')?];

  /**
   * Require or disallow assignment operator shorthand where possible.
   * @see [operator-assignment](https://eslint.org/docs/latest/rules/operator-assignment)
   */
  'operator-assignment': [('always' | 'never')?];

  /**
   * Enforce consistent linebreak style for operators.
   * @deprecated
   * @see [operator-linebreak](https://eslint.org/docs/latest/rules/operator-linebreak)
   */
  'operator-linebreak': OperatorLinebreak.OperatorLinebreakRuleConfig;

  /**
   * Require or disallow padding within blocks.
   * @deprecated
   * @see [padded-blocks](https://eslint.org/docs/latest/rules/padded-blocks)
   */
  'padded-blocks': PaddedBlocksRuleConfig;

  /**
   * Require or disallow padding lines between statements.
   * @deprecated
   * @see [padding-line-between-statements](https://eslint.org/docs/latest/rules/padding-line-between-statements)
   */
  'padding-line-between-statements': PaddingLineBetweenStatements.PaddingLineBetweenStatementsRuleConfig;

  /**
   * Require using arrow functions for callbacks.
   * @see [prefer-arrow-callback](https://eslint.org/docs/latest/rules/prefer-arrow-callback)
   */
  'prefer-arrow-callback': [
    {
      allowNamedFunctions?: boolean;
      allowUnboundThis?: boolean;
    }?,
  ];

  /**
   * Require `const` declarations for variables that are never reassigned after declared.
   * @see [prefer-const](https://eslint.org/docs/latest/rules/prefer-const)
   */
  'prefer-const': [PreferConstOption?];

  /**
   * Require destructuring from arrays and/or objects.
   * @see [prefer-destructuring](https://eslint.org/docs/latest/rules/prefer-destructuring)
   */
  'prefer-destructuring': PreferDestructuringRuleConfig;

  /**
   * Disallow the use of `Math.pow` in favor of the `**` operator.
   * @see [prefer-exponentiation-operator](https://eslint.org/docs/latest/rules/prefer-exponentiation-operator)
   */
  'prefer-exponentiation-operator': null;

  /**
   * Enforce using named capture group in regular expression.
   * @see [prefer-named-capture-group](https://eslint.org/docs/latest/rules/prefer-named-capture-group)
   */
  'prefer-named-capture-group': null;

  /**
   * Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals.
   * @see [prefer-numeric-literals](https://eslint.org/docs/latest/rules/prefer-numeric-literals)
   */
  'prefer-numeric-literals': null;

  /**
   * Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`.
   * @see [prefer-object-has-own](https://eslint.org/docs/latest/rules/prefer-object-has-own)
   */
  'prefer-object-has-own': null;

  /**
   * Disallow using `Object.assign` with an object literal as the first argument and prefer the use of object spread instead.
   * @see [prefer-object-spread](https://eslint.org/docs/latest/rules/prefer-object-spread)
   */
  'prefer-object-spread': null;

  /**
   * Require using Error objects as Promise rejection reasons.
   * @see [prefer-promise-reject-errors](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors)
   */
  'prefer-promise-reject-errors': [
    {
      allowEmptyReject?: boolean;
    }?,
  ];

  /**
   * Require `Reflect` methods where applicable.
   * @deprecated
   * @see [prefer-reflect](https://eslint.org/docs/latest/rules/prefer-reflect)
   */
  'prefer-reflect': [PreferReflectOption?];

  /**
   * Disallow use of the `RegExp` constructor in favor of regular expression literals.
   * @see [prefer-regex-literals](https://eslint.org/docs/latest/rules/prefer-regex-literals)
   */
  'prefer-regex-literals': [
    {
      disallowRedundantWrapping?: boolean;
    }?,
  ];

  /**
   * Require rest parameters instead of `arguments`.
   * @see [prefer-rest-params](https://eslint.org/docs/latest/rules/prefer-rest-params)
   */
  'prefer-rest-params': null;

  /**
   * Require spread operators instead of `.apply()`.
   * @see [prefer-spread](https://eslint.org/docs/latest/rules/prefer-spread)
   */
  'prefer-spread': null;

  /**
   * Require template literals instead of string concatenation.
   * @see [prefer-template](https://eslint.org/docs/latest/rules/prefer-template)
   */
  'prefer-template': null;

  /**
   * Require quotes around object literal property names.
   * @deprecated
   * @see [quote-props](https://eslint.org/docs/latest/rules/quote-props)
   */
  'quote-props': QuotePropsOption;

  /**
   * Enforce the consistent use of either backticks, double, or single quotes.
   * @deprecated
   * @see [quotes](https://eslint.org/docs/latest/rules/quotes)
   */
  quotes: QuotesRuleConfig;

  /**
   * Enforce the consistent use of the radix argument when using `parseInt()`.
   * @see [radix](https://eslint.org/docs/latest/rules/radix)
   */
  radix: [('always' | 'as-needed')?];

  /**
   * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`.
   * @see [require-atomic-updates](https://eslint.org/docs/latest/rules/require-atomic-updates)
   */
  'require-atomic-updates': [
    {
      allowProperties?: boolean;
    }?,
  ];

  /**
   * Disallow async functions which have no `await` expression.
   * @see [require-await](https://eslint.org/docs/latest/rules/require-await)
   */
  'require-await': null;

  /**
   * Enforce the use of `u` or `v` flag on regular expressions.
   * @see [require-unicode-regexp](https://eslint.org/docs/latest/rules/require-unicode-regexp)
   */
  'require-unicode-regexp': [RequireUnicodeRegexpOption?];

  /**
   * Require generator functions to contain `yield`.
   * @see [require-yield](https://eslint.org/docs/latest/rules/require-yield)
   */
  'require-yield': null;

  /**
   * Enforce spacing between rest and spread operators and their expressions.
   * @deprecated
   * @see [rest-spread-spacing](https://eslint.org/docs/latest/rules/rest-spread-spacing)
   */
  'rest-spread-spacing': [('always' | 'never')?];

  /**
   * Require or disallow semicolons instead of ASI.
   * @deprecated
   * @see [semi](https://eslint.org/docs/latest/rules/semi)
   */
  semi: SemiOption;

  /**
   * Enforce consistent spacing before and after semicolons.
   * @deprecated
   * @see [semi-spacing](https://eslint.org/docs/latest/rules/semi-spacing)
   */
  'semi-spacing': [
    {
      before?: boolean;
      after?: boolean;
    }?,
  ];

  /**
   * Enforce location of semicolons.
   * @deprecated
   * @see [semi-style](https://eslint.org/docs/latest/rules/semi-style)
   */
  'semi-style': [('last' | 'first')?];

  /**
   * Enforce sorted `import` declarations within modules.
   * @see [sort-imports](https://eslint.org/docs/latest/rules/sort-imports)
   */
  'sort-imports': [SortImportsOption?];

  /**
   * Require object keys to be sorted.
   * @see [sort-keys](https://eslint.org/docs/latest/rules/sort-keys)
   */
  'sort-keys': SortKeysRuleConfig;

  /**
   * Require variables within the same declaration block to be sorted.
   * @see [sort-vars](https://eslint.org/docs/latest/rules/sort-vars)
   */
  'sort-vars': [
    {
      ignoreCase?: boolean;
    }?,
  ];

  /**
   * Enforce consistent spacing before blocks.
   * @deprecated
   * @see [space-before-blocks](https://eslint.org/docs/latest/rules/space-before-blocks)
   */
  'space-before-blocks': [SpaceBeforeBlocksOption?];

  /**
   * Enforce consistent spacing before `function` definition opening parenthesis.
   * @deprecated
   * @see [space-before-function-paren](https://eslint.org/docs/latest/rules/space-before-function-paren)
   */
  'space-before-function-paren': [SpaceBeforeFunctionParenOption?];

  /**
   * Enforce consistent spacing inside parentheses.
   * @deprecated
   * @see [space-in-parens](https://eslint.org/docs/latest/rules/space-in-parens)
   */
  'space-in-parens': [('always' | 'never')?, SpaceInParensConfig?];

  /**
   * Require spacing around infix operators.
   * @deprecated
   * @see [space-infix-ops](https://eslint.org/docs/latest/rules/space-infix-ops)
   */
  'space-infix-ops': [
    {
      int32Hint?: boolean;
    }?,
  ];

  /**
   * Enforce consistent spacing before or after unary operators.
   * @deprecated
   * @see [space-unary-ops](https://eslint.org/docs/latest/rules/space-unary-ops)
   */
  'space-unary-ops': [SpaceUnaryOpsOption?];

  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment.
   * @deprecated
   * @see [spaced-comment](https://eslint.org/docs/latest/rules/spaced-comment)
   */
  'spaced-comment': [('always' | 'never')?, SpacedCommentConfig?];

  /**
   * Require or disallow strict mode directives.
   * @see [strict](https://eslint.org/docs/latest/rules/strict)
   */
  strict: [('never' | 'global' | 'function' | 'safe')?];

  /**
   * Enforce spacing around colons of switch statements.
   * @deprecated
   * @see [switch-colon-spacing](https://eslint.org/docs/latest/rules/switch-colon-spacing)
   */
  'switch-colon-spacing': [
    {
      before?: boolean;
      after?: boolean;
    }?,
  ];

  /**
   * Require symbol descriptions.
   * @see [symbol-description](https://eslint.org/docs/latest/rules/symbol-description)
   */
  'symbol-description': null;

  /**
   * Require or disallow spacing around embedded expressions of template strings.
   * @deprecated
   * @see [template-curly-spacing](https://eslint.org/docs/latest/rules/template-curly-spacing)
   */
  'template-curly-spacing': [('always' | 'never')?];

  /**
   * Require or disallow spacing between template tags and their literals.
   * @deprecated
   * @see [template-tag-spacing](https://eslint.org/docs/latest/rules/template-tag-spacing)
   */
  'template-tag-spacing': [('always' | 'never')?];

  /**
   * Require or disallow Unicode byte order mark (BOM).
   * @see [unicode-bom](https://eslint.org/docs/latest/rules/unicode-bom)
   */
  'unicode-bom': [('always' | 'never')?];

  /**
   * Require calls to `isNaN()` when checking for `NaN`.
   * @see [use-isnan](https://eslint.org/docs/latest/rules/use-isnan)
   */
  'use-isnan': [
    {
      enforceForSwitchCase?: boolean;
      enforceForIndexOf?: boolean;
    }?,
  ];

  /**
   * Enforce comparing `typeof` expressions against valid strings.
   * @see [valid-typeof](https://eslint.org/docs/latest/rules/valid-typeof)
   */
  'valid-typeof': [
    {
      requireStringLiterals?: boolean;
    }?,
  ];

  /**
   * Require `var` declarations be placed at the top of their containing scope.
   * @see [vars-on-top](https://eslint.org/docs/latest/rules/vars-on-top)
   */
  'vars-on-top': null;

  /**
   * Require parentheses around immediate `function` invocations.
   * @deprecated
   * @see [wrap-iife](https://eslint.org/docs/latest/rules/wrap-iife)
   */
  'wrap-iife': WrapIifeRuleConfig;

  /**
   * Require parenthesis around regex literals.
   * @deprecated
   * @see [wrap-regex](https://eslint.org/docs/latest/rules/wrap-regex)
   */
  'wrap-regex': null;

  /**
   * Require or disallow spacing around the `*` in `yield*` expressions.
   * @deprecated
   * @see [yield-star-spacing](https://eslint.org/docs/latest/rules/yield-star-spacing)
   */
  'yield-star-spacing': [YieldStarSpacingOption?];

  /**
   * Require or disallow "Yoda" conditions.
   * @see [yoda](https://eslint.org/docs/latest/rules/yoda)
   */
  yoda: YodaRuleConfig;
}

export type EslintRulesObject = RulesObject<EslintRules>;
