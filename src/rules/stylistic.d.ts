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

export type ComputedPropertySpacingRuleConfig = [
  ('always' | 'never')?,
  {
    enforceForClassMembers?: boolean;
  }?,
];

export type CurlyNewlineOption =
  | ('always' | 'never')
  | {
      IfStatementConsequent?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      IfStatementAlternative?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      DoWhileStatement?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      ForInStatement?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      ForOfStatement?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      ForStatement?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      WhileStatement?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      SwitchStatement?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      SwitchCase?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      TryStatementBlock?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      TryStatementHandler?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      TryStatementFinalizer?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      BlockStatement?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      ArrowFunctionExpression?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      FunctionDeclaration?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      FunctionExpression?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      Property?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      ClassBody?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      StaticBlock?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      WithStatement?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      TSModuleBlock?:
        | ('always' | 'never')
        | {
            multiline?: boolean;
            minElements?: number;
            consistent?: boolean;
          };
      multiline?: boolean;
      minElements?: number;
      consistent?: boolean;
    };

export type FunctionCallSpacingOption =
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
          using?: number | ('first' | 'off');
        };
    outerIIFEBody?: number | 'off';
    MemberExpression?: number | 'off';
    FunctionDeclaration?: {
      parameters?: number | ('first' | 'off');
      body?: number;
      returnType?: number;
    };
    FunctionExpression?: {
      parameters?: number | ('first' | 'off');
      body?: number;
      returnType?: number;
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
    offsetTernaryExpressionsOffsetCallExpressions?: boolean;
    ignoredNodes?: string[];
    ignoreComments?: boolean;
    tabLength?: number;
  }

  export type IndentRuleConfig = [IndentOption?, IndentConfig?];
}

export type IndentBinaryOpsOption = number | 'tab';

export type JsxClosingBracketLocationOption =
  | ('after-props' | 'props-aligned' | 'tag-aligned' | 'line-aligned')
  | {
      location?:
        | 'after-props'
        | 'props-aligned'
        | 'tag-aligned'
        | 'line-aligned';
    }
  | {
      nonEmpty?:
        | ('after-props' | 'props-aligned' | 'tag-aligned' | 'line-aligned')
        | false;
      selfClosing?:
        | ('after-props' | 'props-aligned' | 'tag-aligned' | 'line-aligned')
        | false;
    };

export type JsxCurlyBracePresenceOption =
  | {
      props?: 'always' | 'never' | 'ignore';
      children?: 'always' | 'never' | 'ignore';
      propElementValues?: 'always' | 'never' | 'ignore';
    }
  | ('always' | 'never' | 'ignore');

export type JsxCurlyNewlineOption =
  | ('consistent' | 'never')
  | {
      singleline?: 'consistent' | 'require' | 'forbid';
      multiline?: 'consistent' | 'require' | 'forbid';
    };

export type JsxCurlySpacingOption =
  | []
  | [
      | {
          when?: 'always' | 'never';
          allowMultiline?: boolean;
          spacing?: {
            objectLiterals?: 'always' | 'never';
          };
          attributes?:
            | {
                when?: 'always' | 'never';
                allowMultiline?: boolean;
                spacing?: {
                  objectLiterals?: 'always' | 'never';
                };
              }
            | boolean;
          children?:
            | {
                when?: 'always' | 'never';
                allowMultiline?: boolean;
                spacing?: {
                  objectLiterals?: 'always' | 'never';
                };
              }
            | boolean;
        }
      | ('always' | 'never'),
    ]
  | [
      (
        | {
            when?: 'always' | 'never';
            allowMultiline?: boolean;
            spacing?: {
              objectLiterals?: 'always' | 'never';
            };
            attributes?:
              | {
                  when?: 'always' | 'never';
                  allowMultiline?: boolean;
                  spacing?: {
                    objectLiterals?: 'always' | 'never';
                  };
                }
              | boolean;
            children?:
              | {
                  when?: 'always' | 'never';
                  allowMultiline?: boolean;
                  spacing?: {
                    objectLiterals?: 'always' | 'never';
                  };
                }
              | boolean;
          }
        | ('always' | 'never')
      ),
      {
        allowMultiline?: boolean;
        spacing?: {
          objectLiterals?: 'always' | 'never';
        };
      },
    ];

export type JsxIndentOption = 'tab' | number;

export type JsxIndentRuleConfig = [
  JsxIndentOption?,
  {
    checkAttributes?: boolean;
    indentLogicalExpressions?: boolean;
  }?,
];

export type JsxIndentPropsOption =
  | ('tab' | 'first')
  | number
  | {
      indentMode?: ('tab' | 'first') | number;
      ignoreTernaryOperator?: boolean;
    };

export type JsxMaxPropsPerLineOption =
  | {
      maximum?: {
        single?: number;
        multi?: number;
      };
    }
  | {
      maximum?: number;
      when?: 'always' | 'multiline';
    };

export interface JsxOneExpressionPerLineOption {
  allow?: 'none' | 'literal' | 'single-child' | 'single-line' | 'non-jsx';
}

export interface JsxSortPropsOption {
  callbacksLast?: boolean;
  shorthandFirst?: boolean;
  shorthandLast?: boolean;
  multiline?: 'ignore' | 'first' | 'last';
  ignoreCase?: boolean;
  noSortAlphabetically?: boolean;
  reservedFirst?: string[] | boolean;
  reservedLast?: string[];
  locale?: string;
}

export interface JsxTagSpacingOption {
  closingSlash?: 'always' | 'never' | 'allow';
  beforeSelfClosing?: 'always' | 'proportional-always' | 'never' | 'allow';
  afterOpening?: 'always' | 'allow-multiline' | 'never' | 'allow';
  beforeClosing?: 'always' | 'proportional-always' | 'never' | 'allow';
}

export interface JsxWrapMultilinesOption {
  declaration?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  assignment?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  return?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  arrow?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  condition?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  logical?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  prop?: true | false | 'ignore' | 'parens' | 'parens-new-line';
  propertyValue?: true | false | 'ignore' | 'parens' | 'parens-new-line';
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
      function?: {
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
      accessor?: {
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
      from?: {
        before?: boolean;
        after?: boolean;
      };
      get?: {
        before?: boolean;
        after?: boolean;
      };
      let?: {
        before?: boolean;
        after?: boolean;
      };
      of?: {
        before?: boolean;
        after?: boolean;
      };
      satisfies?: {
        before?: boolean;
        after?: boolean;
      };
      set?: {
        before?: boolean;
        after?: boolean;
      };
      using?: {
        before?: boolean;
        after?: boolean;
      };
      yield?: {
        before?: boolean;
        after?: boolean;
      };
      type?: {
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
    exceptAfterOverload?: boolean;
  }?,
];

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

export interface MaxStatementsPerLineOption {
  max?: number;
  ignoredNodes?: (
    | 'BreakStatement'
    | 'ClassDeclaration'
    | 'ContinueStatement'
    | 'DebuggerStatement'
    | 'DoWhileStatement'
    | 'ExpressionStatement'
    | 'ForInStatement'
    | 'ForOfStatement'
    | 'ForStatement'
    | 'FunctionDeclaration'
    | 'IfStatement'
    | 'ImportDeclaration'
    | 'LabeledStatement'
    | 'ReturnStatement'
    | 'SwitchStatement'
    | 'ThrowStatement'
    | 'TryStatement'
    | 'VariableDeclaration'
    | 'WhileStatement'
    | 'WithStatement'
    | 'ExportNamedDeclaration'
    | 'ExportDefaultDeclaration'
    | 'ExportAllDeclaration'
  )[];
}

export namespace MemberDelimiterStyle {
  export type MultiLineOption = 'none' | 'semi' | 'comma';
  export type SingleLineOption = 'semi' | 'comma';

  export interface MemberDelimiterStyleOption {
    multiline?: {
      delimiter?: MultiLineOption;
      requireLast?: boolean;
    };
    singleline?: {
      delimiter?: SingleLineOption;
      requireLast?: boolean;
    };
    overrides?: {
      interface?: DelimiterConfig;
      typeLiteral?: DelimiterConfig;
    };
    multilineDetection?: 'brackets' | 'last-member';
  }
  export interface DelimiterConfig {
    multiline?: {
      delimiter?: MultiLineOption;
      requireLast?: boolean;
    };
    singleline?: {
      delimiter?: SingleLineOption;
      requireLast?: boolean;
    };
  }

  export type MemberDelimiterStyleRuleConfig = [MemberDelimiterStyleOption?];
}

export type MultilineCommentStyleOption =
  | []
  | ['starred-block' | 'bare-block']
  | ['separate-lines']
  | [
      'separate-lines',
      {
        checkJSDoc?: boolean;
        checkExclamation?: boolean;
      },
    ];

export type MultilineTernaryRuleConfig = [
  ('always' | 'always-multiline' | 'never')?,
  {
    ignoreJSX?: boolean;
  }?,
];

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
      },
    ];

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

export type NoMixedSpacesAndTabsOption = 'smart-tabs' | boolean;

export interface NoMultiSpacesOption {
  exceptions?: {
    [k: string]: boolean;
  };
  ignoreEOLComments?: boolean;
  includeTabs?: boolean;
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

export type PaddedBlocksOption =
  | ('always' | 'never' | 'start' | 'end')
  | {
      blocks?: 'always' | 'never' | 'start' | 'end';
      switches?: 'always' | 'never' | 'start' | 'end';
      classes?: 'always' | 'never' | 'start' | 'end';
    };

export type PaddedBlocksRuleConfig = [
  PaddedBlocksOption?,
  {
    allowSingleLineBlocks?: boolean;
  }?,
];

export namespace PaddingLineBetweenStatements {
  export type PaddingType = 'any' | 'never' | 'always';
  export type StatementOption =
    | StatementType
    | [StatementType, ...StatementType[]];
  export type StatementType =
    | '*'
    | 'exports'
    | 'require'
    | 'directive'
    | 'iife'
    | 'block'
    | 'empty'
    | 'function'
    | 'ts-method'
    | 'break'
    | 'case'
    | 'class'
    | 'continue'
    | 'debugger'
    | 'default'
    | 'do'
    | 'for'
    | 'if'
    | 'import'
    | 'return'
    | 'switch'
    | 'throw'
    | 'try'
    | 'while'
    | 'with'
    | 'cjs-export'
    | 'cjs-import'
    | 'enum'
    | 'interface'
    | 'type'
    | 'function-overload'
    | 'block-like'
    | 'singleline-block-like'
    | 'multiline-block-like'
    | 'expression'
    | 'singleline-expression'
    | 'multiline-expression'
    | 'export'
    | 'singleline-export'
    | 'multiline-export'
    | 'var'
    | 'singleline-var'
    | 'multiline-var'
    | 'let'
    | 'singleline-let'
    | 'multiline-let'
    | 'const'
    | 'singleline-const'
    | 'multiline-const'
    | 'using'
    | 'singleline-using'
    | 'multiline-using';
  export type PaddingLineBetweenStatementsOption = {
    blankLine: PaddingType;
    prev: StatementOption;
    next: StatementOption;
  }[];

  export type PaddingLineBetweenStatementsRuleConfig =
    PaddingLineBetweenStatementsOption;
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
      allowTemplateLiterals?: boolean | ('never' | 'avoidEscape' | 'always');
      ignoreStringLiterals?: boolean;
    };

export type QuotesRuleConfig = [
  ('single' | 'double' | 'backtick')?,
  QuotesConfig?,
];

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

export type SpaceBeforeBlocksOption =
  | ('always' | 'never')
  | {
      keywords?: 'always' | 'never' | 'off';
      functions?: 'always' | 'never' | 'off';
      classes?: 'always' | 'never' | 'off';
      modules?: 'always' | 'never' | 'off';
    };

export type SpaceBeforeFunctionParenOption =
  | ('always' | 'never')
  | {
      anonymous?: 'always' | 'never' | 'ignore';
      named?: 'always' | 'never' | 'ignore';
      asyncArrow?: 'always' | 'never' | 'ignore';
      catch?: 'always' | 'never' | 'ignore';
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

export namespace TypeAnnotationSpacing {
  export interface TypeAnnotationSpacingOption {
    before?: boolean;
    after?: boolean;
    overrides?: {
      colon?: SpacingConfig;
      arrow?: SpacingConfig;
      variable?: SpacingConfig;
      parameter?: SpacingConfig;
      property?: SpacingConfig;
      returnType?: SpacingConfig;
    };
  }
  export interface SpacingConfig {
    before?: boolean;
    after?: boolean;
  }

  export type TypeAnnotationSpacingRuleConfig = [TypeAnnotationSpacingOption?];
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

/**
 * All Stylistic rules.
 */
export interface StylisticRules {
  /**
   * Enforce linebreaks after opening and before closing array brackets.
   * @see [array-bracket-newline](https://eslint.style/rules/array-bracket-newline)
   */
  'stylistic/array-bracket-newline': [ArrayBracketNewlineOption?];

  /**
   * Enforce consistent spacing inside array brackets.
   * @see [array-bracket-spacing](https://eslint.style/rules/array-bracket-spacing)
   */
  'stylistic/array-bracket-spacing': ArrayBracketSpacingRuleConfig;

  /**
   * Enforce line breaks after each array element.
   * @see [array-element-newline](https://eslint.style/rules/array-element-newline)
   */
  'stylistic/array-element-newline': ArrayElementNewline.ArrayElementNewlineRuleConfig;

  /**
   * Require parentheses around arrow function arguments.
   * @see [arrow-parens](https://eslint.style/rules/arrow-parens)
   */
  'stylistic/arrow-parens': ArrowParensRuleConfig;

  /**
   * Enforce consistent spacing before and after the arrow in arrow functions.
   * @see [arrow-spacing](https://eslint.style/rules/arrow-spacing)
   */
  'stylistic/arrow-spacing': [
    {
      before?: boolean;
      after?: boolean;
    }?,
  ];

  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block.
   * @see [block-spacing](https://eslint.style/rules/block-spacing)
   */
  'stylistic/block-spacing': [('always' | 'never')?];

  /**
   * Enforce consistent brace style for blocks.
   * @see [brace-style](https://eslint.style/rules/brace-style)
   */
  'stylistic/brace-style': BraceStyleRuleConfig;

  /**
   * Require or disallow trailing commas.
   * @see [comma-dangle](https://eslint.style/rules/comma-dangle)
   */
  'stylistic/comma-dangle': CommaDangle.CommaDangleRuleConfig;

  /**
   * Enforce consistent spacing before and after commas.
   * @see [comma-spacing](https://eslint.style/rules/comma-spacing)
   */
  'stylistic/comma-spacing': [
    {
      before?: boolean;
      after?: boolean;
    }?,
  ];

  /**
   * Enforce consistent comma style.
   * @see [comma-style](https://eslint.style/rules/comma-style)
   */
  'stylistic/comma-style': [('first' | 'last')?, CommaStyleConfig?];

  /**
   * Enforce consistent spacing inside computed property brackets.
   * @see [computed-property-spacing](https://eslint.style/rules/computed-property-spacing)
   */
  'stylistic/computed-property-spacing': ComputedPropertySpacingRuleConfig;

  /**
   * Enforce consistent line breaks after opening and before closing braces.
   * @see [curly-newline](https://eslint.style/rules/curly-newline)
   */
  'stylistic/curly-newline': [CurlyNewlineOption?];

  /**
   * Enforce consistent newlines before and after dots.
   * @see [dot-location](https://eslint.style/rules/dot-location)
   */
  'stylistic/dot-location': [('object' | 'property')?];

  /**
   * Require or disallow newline at the end of files.
   * @see [eol-last](https://eslint.style/rules/eol-last)
   */
  'stylistic/eol-last': [('always' | 'never' | 'unix' | 'windows')?];

  /**
   * Enforce line breaks between arguments of a function call.
   * @see [function-call-argument-newline](https://eslint.style/rules/function-call-argument-newline)
   */
  'stylistic/function-call-argument-newline': [
    ('always' | 'never' | 'consistent')?,
  ];

  /**
   * Require or disallow spacing between function identifiers and their invocations.
   * @see [function-call-spacing](https://eslint.style/rules/function-call-spacing)
   */
  'stylistic/function-call-spacing': FunctionCallSpacingOption;

  /**
   * Enforce consistent line breaks inside function parentheses.
   * @see [function-paren-newline](https://eslint.style/rules/function-paren-newline)
   */
  'stylistic/function-paren-newline': [FunctionParenNewlineOption?];

  /**
   * Enforce consistent spacing around `*` operators in generator functions.
   * @see [generator-star-spacing](https://eslint.style/rules/generator-star-spacing)
   */
  'stylistic/generator-star-spacing': [GeneratorStarSpacingOption?];

  /**
   * Enforce the location of arrow function bodies.
   * @see [implicit-arrow-linebreak](https://eslint.style/rules/implicit-arrow-linebreak)
   */
  'stylistic/implicit-arrow-linebreak': [('beside' | 'below')?];

  /**
   * Enforce consistent indentation.
   * @see [indent](https://eslint.style/rules/indent)
   */
  'stylistic/indent': Indent.IndentRuleConfig;

  /**
   * Indentation for binary operators.
   * @see [indent-binary-ops](https://eslint.style/rules/indent-binary-ops)
   */
  'stylistic/indent-binary-ops': [IndentBinaryOpsOption?];

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   * @see [jsx-child-element-spacing](https://eslint.style/rules/jsx-child-element-spacing)
   */
  'stylistic/jsx-child-element-spacing': null;

  /**
   * Enforce closing bracket location in JSX.
   * @see [jsx-closing-bracket-location](https://eslint.style/rules/jsx-closing-bracket-location)
   */
  'stylistic/jsx-closing-bracket-location': [JsxClosingBracketLocationOption?];

  /**
   * Enforce closing tag location for multiline JSX.
   * @see [jsx-closing-tag-location](https://eslint.style/rules/jsx-closing-tag-location)
   */
  'stylistic/jsx-closing-tag-location': [('tag-aligned' | 'line-aligned')?];

  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
   * @see [jsx-curly-brace-presence](https://eslint.style/rules/jsx-curly-brace-presence)
   */
  'stylistic/jsx-curly-brace-presence': [JsxCurlyBracePresenceOption?];

  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
   * @see [jsx-curly-newline](https://eslint.style/rules/jsx-curly-newline)
   */
  'stylistic/jsx-curly-newline': [JsxCurlyNewlineOption?];

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   * @see [jsx-curly-spacing](https://eslint.style/rules/jsx-curly-spacing)
   */
  'stylistic/jsx-curly-spacing': JsxCurlySpacingOption;

  /**
   * Enforce or disallow spaces around equal signs in JSX attributes.
   * @see [jsx-equals-spacing](https://eslint.style/rules/jsx-equals-spacing)
   */
  'stylistic/jsx-equals-spacing': [('always' | 'never')?];

  /**
   * Enforce proper position of the first property in JSX.
   * @see [jsx-first-prop-new-line](https://eslint.style/rules/jsx-first-prop-new-line)
   */
  'stylistic/jsx-first-prop-new-line': [
    ('always' | 'never' | 'multiline' | 'multiline-multiprop' | 'multiprop')?,
  ];

  /**
   * Enforce line breaks before and after JSX elements when they are used as arguments to a function.
   * @see [jsx-function-call-newline](https://eslint.style/rules/jsx-function-call-newline)
   */
  'stylistic/jsx-function-call-newline': [('always' | 'multiline')?];

  /**
   * Enforce JSX indentation. Deprecated, use `indent` rule instead.
   * @deprecated
   * @see [jsx-indent](https://eslint.style/rules/jsx-indent)
   */
  'stylistic/jsx-indent': JsxIndentRuleConfig;

  /**
   * Enforce props indentation in JSX.
   * @see [jsx-indent-props](https://eslint.style/rules/jsx-indent-props)
   */
  'stylistic/jsx-indent-props': [JsxIndentPropsOption?];

  /**
   * Enforce maximum of props on a single line in JSX.
   * @see [jsx-max-props-per-line](https://eslint.style/rules/jsx-max-props-per-line)
   */
  'stylistic/jsx-max-props-per-line': [JsxMaxPropsPerLineOption?];

  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see [jsx-newline](https://eslint.style/rules/jsx-newline)
   */
  'stylistic/jsx-newline': [
    {
      prevent?: boolean;
      allowMultilines?: boolean;
    }?,
  ];

  /**
   * Require one JSX element per line.
   * @see [jsx-one-expression-per-line](https://eslint.style/rules/jsx-one-expression-per-line)
   */
  'stylistic/jsx-one-expression-per-line': [JsxOneExpressionPerLineOption?];

  /**
   * Enforce PascalCase for user-defined JSX components.
   * @see [jsx-pascal-case](https://eslint.style/rules/jsx-pascal-case)
   */
  'stylistic/jsx-pascal-case': [
    {
      allowAllCaps?: boolean;
      allowLeadingUnderscore?: boolean;
      allowNamespace?: boolean;
      ignore?: string[];
    }?,
  ];

  /**
   * Disallow multiple spaces between inline JSX props.
   * @see [jsx-props-no-multi-spaces](https://eslint.style/rules/jsx-props-no-multi-spaces)
   */
  'stylistic/jsx-props-no-multi-spaces': null;

  /**
   * Enforce the consistent use of either double or single quotes in JSX attributes.
   * @see [jsx-quotes](https://eslint.style/rules/jsx-quotes)
   */
  'stylistic/jsx-quotes': [('prefer-single' | 'prefer-double')?];

  /**
   * Disallow extra closing tags for components without children.
   * @see [jsx-self-closing-comp](https://eslint.style/rules/jsx-self-closing-comp)
   */
  'stylistic/jsx-self-closing-comp': [
    {
      component?: boolean;
      html?: boolean;
    }?,
  ];

  /**
   * Enforce props alphabetical sorting.
   * @see [jsx-sort-props](https://eslint.style/rules/jsx-sort-props)
   */
  'stylistic/jsx-sort-props': [JsxSortPropsOption?];

  /**
   * Enforce whitespace in and around the JSX opening and closing brackets.
   * @see [jsx-tag-spacing](https://eslint.style/rules/jsx-tag-spacing)
   */
  'stylistic/jsx-tag-spacing': [JsxTagSpacingOption?];

  /**
   * Disallow missing parentheses around multiline JSX.
   * @see [jsx-wrap-multilines](https://eslint.style/rules/jsx-wrap-multilines)
   */
  'stylistic/jsx-wrap-multilines': [JsxWrapMultilinesOption?];

  /**
   * Enforce consistent spacing between property names and type annotations in types and interfaces.
   * @see [key-spacing](https://eslint.style/rules/key-spacing)
   */
  'stylistic/key-spacing': [KeySpacingOption?];

  /**
   * Enforce consistent spacing before and after keywords.
   * @see [keyword-spacing](https://eslint.style/rules/keyword-spacing)
   */
  'stylistic/keyword-spacing': KeywordSpacing.KeywordSpacingRuleConfig;

  /**
   * Enforce position of line comments.
   * @see [line-comment-position](https://eslint.style/rules/line-comment-position)
   */
  'stylistic/line-comment-position': [LineCommentPositionOption?];

  /**
   * Enforce consistent linebreak style.
   * @see [linebreak-style](https://eslint.style/rules/linebreak-style)
   */
  'stylistic/linebreak-style': [('unix' | 'windows')?];

  /**
   * Require empty lines around comments.
   * @see [lines-around-comment](https://eslint.style/rules/lines-around-comment)
   */
  'stylistic/lines-around-comment': [
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
      allowInterfaceStart?: boolean;
      allowInterfaceEnd?: boolean;
      allowTypeStart?: boolean;
      allowTypeEnd?: boolean;
      allowEnumStart?: boolean;
      allowEnumEnd?: boolean;
      allowModuleStart?: boolean;
      allowModuleEnd?: boolean;
      ignorePattern?: string;
      applyDefaultIgnorePatterns?: boolean;
      afterHashbangComment?: boolean;
    }?,
  ];

  /**
   * Require or disallow an empty line between class members.
   * @see [lines-between-class-members](https://eslint.style/rules/lines-between-class-members)
   */
  'stylistic/lines-between-class-members': LinesBetweenClassMembersRuleConfig;

  /**
   * Enforce a maximum line length.
   * @see [max-len](https://eslint.style/rules/max-len)
   */
  'stylistic/max-len': MaxLen.MaxLenRuleConfig;

  /**
   * Enforce a maximum number of statements allowed per line.
   * @see [max-statements-per-line](https://eslint.style/rules/max-statements-per-line)
   */
  'stylistic/max-statements-per-line': [MaxStatementsPerLineOption?];

  /**
   * Require a specific member delimiter style for interfaces and type literals.
   * @see [member-delimiter-style](https://eslint.style/rules/member-delimiter-style)
   */
  'stylistic/member-delimiter-style': MemberDelimiterStyle.MemberDelimiterStyleRuleConfig;

  /**
   * Enforce a particular style for multiline comments.
   * @see [multiline-comment-style](https://eslint.style/rules/multiline-comment-style)
   */
  'stylistic/multiline-comment-style': MultilineCommentStyleOption;

  /**
   * Enforce newlines between operands of ternary expressions.
   * @see [multiline-ternary](https://eslint.style/rules/multiline-ternary)
   */
  'stylistic/multiline-ternary': MultilineTernaryRuleConfig;

  /**
   * Enforce or disallow parentheses when invoking a constructor with no arguments.
   * @see [new-parens](https://eslint.style/rules/new-parens)
   */
  'stylistic/new-parens': [('always' | 'never')?];

  /**
   * Require a newline after each call in a method chain.
   * @see [newline-per-chained-call](https://eslint.style/rules/newline-per-chained-call)
   */
  'stylistic/newline-per-chained-call': [
    {
      ignoreChainWithDepth?: number;
    }?,
  ];

  /**
   * Disallow arrow functions where they could be confused with comparisons.
   * @see [no-confusing-arrow](https://eslint.style/rules/no-confusing-arrow)
   */
  'stylistic/no-confusing-arrow': [
    {
      allowParens?: boolean;
      onlyOneSimpleParam?: boolean;
    }?,
  ];

  /**
   * Disallow unnecessary parentheses.
   * @see [no-extra-parens](https://eslint.style/rules/no-extra-parens)
   */
  'stylistic/no-extra-parens': NoExtraParensOption;

  /**
   * Disallow unnecessary semicolons.
   * @see [no-extra-semi](https://eslint.style/rules/no-extra-semi)
   */
  'stylistic/no-extra-semi': null;

  /**
   * Disallow leading or trailing decimal points in numeric literals.
   * @see [no-floating-decimal](https://eslint.style/rules/no-floating-decimal)
   */
  'stylistic/no-floating-decimal': null;

  /**
   * Disallow mixed binary operators.
   * @see [no-mixed-operators](https://eslint.style/rules/no-mixed-operators)
   */
  'stylistic/no-mixed-operators': [NoMixedOperatorsOption?];

  /**
   * Disallow mixed spaces and tabs for indentation.
   * @see [no-mixed-spaces-and-tabs](https://eslint.style/rules/no-mixed-spaces-and-tabs)
   */
  'stylistic/no-mixed-spaces-and-tabs': [NoMixedSpacesAndTabsOption?];

  /**
   * Disallow multiple spaces.
   * @see [no-multi-spaces](https://eslint.style/rules/no-multi-spaces)
   */
  'stylistic/no-multi-spaces': [NoMultiSpacesOption?];

  /**
   * Disallow multiple empty lines.
   * @see [no-multiple-empty-lines](https://eslint.style/rules/no-multiple-empty-lines)
   */
  'stylistic/no-multiple-empty-lines': [
    {
      max: number;
      maxEOF?: number;
      maxBOF?: number;
    }?,
  ];

  /**
   * Disallow all tabs.
   * @see [no-tabs](https://eslint.style/rules/no-tabs)
   */
  'stylistic/no-tabs': [
    {
      allowIndentationTabs?: boolean;
    }?,
  ];

  /**
   * Disallow trailing whitespace at the end of lines.
   * @see [no-trailing-spaces](https://eslint.style/rules/no-trailing-spaces)
   */
  'stylistic/no-trailing-spaces': [
    {
      skipBlankLines?: boolean;
      ignoreComments?: boolean;
    }?,
  ];

  /**
   * Disallow whitespace before properties.
   * @see [no-whitespace-before-property](https://eslint.style/rules/no-whitespace-before-property)
   */
  'stylistic/no-whitespace-before-property': null;

  /**
   * Enforce the location of single-line statements.
   * @see [nonblock-statement-body-position](https://eslint.style/rules/nonblock-statement-body-position)
   */
  'stylistic/nonblock-statement-body-position': NonblockStatementBodyPositionRuleConfig;

  /**
   * Enforce consistent line breaks after opening and before closing braces.
   * @see [object-curly-newline](https://eslint.style/rules/object-curly-newline)
   */
  'stylistic/object-curly-newline': [ObjectCurlyNewlineOption?];

  /**
   * Enforce consistent spacing inside braces.
   * @see [object-curly-spacing](https://eslint.style/rules/object-curly-spacing)
   */
  'stylistic/object-curly-spacing': ObjectCurlySpacingRuleConfig;

  /**
   * Enforce placing object properties on separate lines.
   * @see [object-property-newline](https://eslint.style/rules/object-property-newline)
   */
  'stylistic/object-property-newline': [
    {
      allowAllPropertiesOnSameLine?: boolean;
    }?,
  ];

  /**
   * Require or disallow newlines around variable declarations.
   * @see [one-var-declaration-per-line](https://eslint.style/rules/one-var-declaration-per-line)
   */
  'stylistic/one-var-declaration-per-line': [('always' | 'initializations')?];

  /**
   * Enforce consistent linebreak style for operators.
   * @see [operator-linebreak](https://eslint.style/rules/operator-linebreak)
   */
  'stylistic/operator-linebreak': OperatorLinebreak.OperatorLinebreakRuleConfig;

  /**
   * Require or disallow padding within blocks.
   * @see [padded-blocks](https://eslint.style/rules/padded-blocks)
   */
  'stylistic/padded-blocks': PaddedBlocksRuleConfig;

  /**
   * Require or disallow padding lines between statements.
   * @see [padding-line-between-statements](https://eslint.style/rules/padding-line-between-statements)
   */
  'stylistic/padding-line-between-statements': PaddingLineBetweenStatements.PaddingLineBetweenStatementsRuleConfig;

  /**
   * Require quotes around object literal, type literal, interfaces and enums property names.
   * @see [quote-props](https://eslint.style/rules/quote-props)
   */
  'stylistic/quote-props': QuotePropsOption;

  /**
   * Enforce the consistent use of either backticks, double, or single quotes.
   * @see [quotes](https://eslint.style/rules/quotes)
   */
  'stylistic/quotes': QuotesRuleConfig;

  /**
   * Enforce spacing between rest and spread operators and their expressions.
   * @see [rest-spread-spacing](https://eslint.style/rules/rest-spread-spacing)
   */
  'stylistic/rest-spread-spacing': [('always' | 'never')?];

  /**
   * Require or disallow semicolons instead of ASI.
   * @see [semi](https://eslint.style/rules/semi)
   */
  'stylistic/semi': SemiOption;

  /**
   * Enforce consistent spacing before and after semicolons.
   * @see [semi-spacing](https://eslint.style/rules/semi-spacing)
   */
  'stylistic/semi-spacing': [
    {
      before?: boolean;
      after?: boolean;
    }?,
  ];

  /**
   * Enforce location of semicolons.
   * @see [semi-style](https://eslint.style/rules/semi-style)
   */
  'stylistic/semi-style': [('last' | 'first')?];

  /**
   * Enforce consistent spacing before blocks.
   * @see [space-before-blocks](https://eslint.style/rules/space-before-blocks)
   */
  'stylistic/space-before-blocks': [SpaceBeforeBlocksOption?];

  /**
   * Enforce consistent spacing before function parenthesis.
   * @see [space-before-function-paren](https://eslint.style/rules/space-before-function-paren)
   */
  'stylistic/space-before-function-paren': [SpaceBeforeFunctionParenOption?];

  /**
   * Enforce consistent spacing inside parentheses.
   * @see [space-in-parens](https://eslint.style/rules/space-in-parens)
   */
  'stylistic/space-in-parens': [('always' | 'never')?, SpaceInParensConfig?];

  /**
   * Require spacing around infix operators.
   * @see [space-infix-ops](https://eslint.style/rules/space-infix-ops)
   */
  'stylistic/space-infix-ops': [
    {
      int32Hint?: boolean;
      ignoreTypes?: boolean;
    }?,
  ];

  /**
   * Enforce consistent spacing before or after unary operators.
   * @see [space-unary-ops](https://eslint.style/rules/space-unary-ops)
   */
  'stylistic/space-unary-ops': [SpaceUnaryOpsOption?];

  /**
   * Enforce consistent spacing after the `//` or `/*` in a comment.
   * @see [spaced-comment](https://eslint.style/rules/spaced-comment)
   */
  'stylistic/spaced-comment': [('always' | 'never')?, SpacedCommentConfig?];

  /**
   * Enforce spacing around colons of switch statements.
   * @see [switch-colon-spacing](https://eslint.style/rules/switch-colon-spacing)
   */
  'stylistic/switch-colon-spacing': [
    {
      before?: boolean;
      after?: boolean;
    }?,
  ];

  /**
   * Require or disallow spacing around embedded expressions of template strings.
   * @see [template-curly-spacing](https://eslint.style/rules/template-curly-spacing)
   */
  'stylistic/template-curly-spacing': [('always' | 'never')?];

  /**
   * Require or disallow spacing between template tags and their literals.
   * @see [template-tag-spacing](https://eslint.style/rules/template-tag-spacing)
   */
  'stylistic/template-tag-spacing': [('always' | 'never')?];

  /**
   * Require consistent spacing around type annotations.
   * @see [type-annotation-spacing](https://eslint.style/rules/type-annotation-spacing)
   */
  'stylistic/type-annotation-spacing': TypeAnnotationSpacing.TypeAnnotationSpacingRuleConfig;

  /**
   * Enforces consistent spacing inside TypeScript type generics.
   * @see [type-generic-spacing](https://eslint.style/rules/type-generic-spacing)
   */
  'stylistic/type-generic-spacing': null;

  /**
   * Expect space before the type declaration in the named tuple.
   * @see [type-named-tuple-spacing](https://eslint.style/rules/type-named-tuple-spacing)
   */
  'stylistic/type-named-tuple-spacing': null;

  /**
   * Require parentheses around immediate `function` invocations.
   * @see [wrap-iife](https://eslint.style/rules/wrap-iife)
   */
  'stylistic/wrap-iife': WrapIifeRuleConfig;

  /**
   * Require parenthesis around regex literals.
   * @see [wrap-regex](https://eslint.style/rules/wrap-regex)
   */
  'stylistic/wrap-regex': null;

  /**
   * Require or disallow spacing around the `*` in `yield*` expressions.
   * @see [yield-star-spacing](https://eslint.style/rules/yield-star-spacing)
   */
  'stylistic/yield-star-spacing': [YieldStarSpacingOption?];
}

export type StylisticRulesObject = RulesObject<StylisticRules>;
