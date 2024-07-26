import type { RulesObject } from '../rule-config';

export interface BooleanPropNamingOption {
  /**
   * @minItems 1
   */
  propTypeNames?: [string, ...string[]];
  rule?: string;
  message?: string;
  validateNested?: boolean;
}

export interface DestructuringAssignmentConfig {
  ignoreClassFields?: boolean;
  destructureInSignature?: 'always' | 'ignore';
}

export type DestructuringAssignmentRuleConfig = [
  ('always' | 'never')?,
  DestructuringAssignmentConfig?,
];

export interface ForbidComponentPropsOption {
  forbid?: (
    | string
    | {
        propName?: string;
        allowedFor?: string[];
        message?: string;
      }
    | {
        propName?: string;
        /**
         * @minItems 1
         */
        disallowedFor: [string, ...string[]];
        message?: string;
      }
    | {
        propNamePattern?: string;
        allowedFor?: string[];
        message?: string;
      }
    | {
        propNamePattern?: string;
        /**
         * @minItems 1
         */
        disallowedFor: [string, ...string[]];
        message?: string;
      }
  )[];
  [k: string]: any;
}

export interface ForbidDomPropsOption {
  forbid?: (
    | string
    | {
        propName?: string;
        disallowedFor?: string[];
        message?: string;
        [k: string]: any;
      }
  )[];
}

export interface ForbidElementsOption {
  forbid?: (
    | string
    | {
        element: string;
        message?: string;
      }
  )[];
}

export interface ForbidPropTypesOption {
  forbid?: string[];
  checkContextTypes?: boolean;
  checkChildContextTypes?: boolean;
  [k: string]: any;
}

export interface FunctionComponentDefinitionOption {
  namedComponents?:
    | ('function-declaration' | 'arrow-function' | 'function-expression')
    | ('function-declaration' | 'arrow-function' | 'function-expression')[];
  unnamedComponents?:
    | ('arrow-function' | 'function-expression')
    | ('arrow-function' | 'function-expression')[];
  [k: string]: any;
}

export type JsxBooleanValueOption =
  | []
  | ['always' | 'never']
  | ['always']
  | [
      'always',
      {
        never?: string[];
        assumeUndefinedIsFalse?: boolean;
      },
    ]
  | ['never']
  | [
      'never',
      {
        always?: string[];
        assumeUndefinedIsFalse?: boolean;
      },
    ];

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
        | 'after-props'
        | 'props-aligned'
        | 'tag-aligned'
        | 'line-aligned'
        | false;
      selfClosing?:
        | 'after-props'
        | 'props-aligned'
        | 'tag-aligned'
        | 'line-aligned'
        | false;
    };

export type JsxClosingTagLocationOption =
  | ('tag-aligned' | 'line-aligned')
  | {
      location?: 'tag-aligned' | 'line-aligned';
    };

export namespace JsxCurlySpacing {
  export type JsxCurlySpacingOption =
    | []
    | [
        | (BasicConfig & {
            attributes?: BasicConfigOrBoolean;
            children?: BasicConfigOrBoolean;
            [k: string]: any;
          })
        | ('always' | 'never'),
      ]
    | [
        (
          | (BasicConfig & {
              attributes?: BasicConfigOrBoolean;
              children?: BasicConfigOrBoolean;
              [k: string]: any;
            })
          | ('always' | 'never')
        ),
        {
          allowMultiline?: boolean;
          spacing?: {
            objectLiterals?: 'always' | 'never';
            [k: string]: any;
          };
        },
      ];
  export type BasicConfigOrBoolean = BasicConfig | boolean;

  export interface BasicConfig {
    when?: 'always' | 'never';
    allowMultiline?: boolean;
    spacing?: {
      objectLiterals?: 'always' | 'never';
      [k: string]: any;
    };
    [k: string]: any;
  }

  export type JsxCurlySpacingRuleConfig = JsxCurlySpacingOption;
}

export type JsxCurlyNewlineOption =
  | ('consistent' | 'never')
  | {
      singleline?: 'consistent' | 'require' | 'forbid';
      multiline?: 'consistent' | 'require' | 'forbid';
    };

export interface JsxFilenameExtensionOption {
  allow?: 'always' | 'as-needed';
  extensions?: string[];
  ignoreFilesWithoutCode?: boolean;
}

export type JsxHandlerNamesOption =
  | {
      eventHandlerPrefix?: string;
      eventHandlerPropPrefix?: string;
      checkLocalVariables?: boolean;
      checkInlineFunction?: boolean;
      ignoreComponentNames?: string[];
    }
  | {
      eventHandlerPrefix?: string;
      eventHandlerPropPrefix?: false;
      checkLocalVariables?: boolean;
      checkInlineFunction?: boolean;
      ignoreComponentNames?: string[];
    }
  | {
      eventHandlerPrefix?: false;
      eventHandlerPropPrefix?: string;
      checkLocalVariables?: boolean;
      checkInlineFunction?: boolean;
      ignoreComponentNames?: string[];
    }
  | {
      checkLocalVariables?: boolean;
    }
  | {
      checkInlineFunction?: boolean;
    }
  | {
      ignoreComponentNames?: string[];
      [k: string]: any;
    };

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
      [k: string]: any;
    };

export type JsxMaxPropsPerLineOption =
  | {
      maximum?: {
        single?: number;
        multi?: number;
        [k: string]: any;
      };
    }
  | {
      maximum?: number;
      when?: 'always' | 'multiline';
    };

export interface JsxNoLeakedRenderOption {
  validStrategies?: ('ternary' | 'coerce')[];
}

export type JsxNoScriptUrlOption =
  | []
  | [
      {
        name: string;
        props: string[];
      }[],
    ]
  | [
      {
        name: string;
        props: string[];
      }[],
      {
        includeFromSettings?: boolean;
        [k: string]: any;
      },
    ]
  | [
      {
        includeFromSettings?: boolean;
        [k: string]: any;
      },
    ];

export interface JsxNoTargetBlankOption {
  allowReferrer?: boolean;
  enforceDynamicLinks?: 'always' | 'never';
  warnOnSpreadAttributes?: boolean;
  links?: boolean;
  forms?: boolean;
}

export interface JsxNoUselessFragmentOption {
  allowExpressions?: boolean;
  [k: string]: any;
}

export interface JsxOneExpressionPerLineOption {
  allow?: 'none' | 'literal' | 'single-child' | 'non-jsx';
}

export type JsxCurlyBracePresenceOption =
  | {
      props?: 'always' | 'never' | 'ignore';
      children?: 'always' | 'never' | 'ignore';
      propElementValues?: 'always' | 'never' | 'ignore';
    }
  | ('always' | 'never' | 'ignore');

export interface JsxPascalCaseOption {
  allowAllCaps?: boolean;
  allowLeadingUnderscore?: boolean;
  allowNamespace?: boolean;
  /**
   * @minItems 0
   */
  ignore?: [] | [string];
}

export type JsxPropsNoSpreadingOption = {
  html?: 'enforce' | 'ignore';
  custom?: 'enforce' | 'ignore';
  exceptions?: string[];
  [k: string]: any;
};

export interface JsxSortPropsOption {
  callbacksLast?: boolean;
  shorthandFirst?: boolean;
  shorthandLast?: boolean;
  multiline?: 'ignore' | 'first' | 'last';
  ignoreCase?: boolean;
  noSortAlphabetically?: boolean;
  reservedFirst?: any[] | boolean;
  locale?: string;
}

export interface JsxTagSpacingOption {
  closingSlash?: 'always' | 'never' | 'allow';
  beforeSelfClosing?: 'always' | 'proportional-always' | 'never' | 'allow';
  afterOpening?: 'always' | 'allow-multiline' | 'never' | 'allow';
  beforeClosing?: 'always' | 'proportional-always' | 'never' | 'allow';
}

export interface JsxWrapMultilinesOption {
  declaration?:
    | true
    | false
    | 'ignore'
    | 'parens'
    | 'parens-new-line'
    | 'never';
  assignment?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
  return?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
  arrow?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
  condition?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
  logical?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
  prop?: true | false | 'ignore' | 'parens' | 'parens-new-line' | 'never';
}

export type NoInvalidHtmlAttributeOption = 'rel'[];

export interface NoDangerOption {
  /**
   * @minItems 0
   */
  customComponentNames?: string[];
  [k: string]: any;
}

export interface NoUnescapedEntitiesOption {
  forbid?: (
    | string
    | {
        char?: string;
        alternatives?: string[];
        [k: string]: any;
      }
  )[];
}

export interface RequireDefaultPropsOption {
  forbidDefaultForRequired?: boolean;
  classes?: 'defaultProps' | 'ignore';
  functions?: 'defaultArguments' | 'defaultProps' | 'ignore';
  ignoreFunctionalComponents?: boolean;
}

export interface SortCompOption {
  order?: string[];
  groups?: {
    /**
     */
    [k: string]: string[];
  };
}

export interface StaticPropertyPlacementConfig {
  propTypes?: 'static public field' | 'static getter' | 'property assignment';
  defaultProps?:
    | 'static public field'
    | 'static getter'
    | 'property assignment';
  childContextTypes?:
    | 'static public field'
    | 'static getter'
    | 'property assignment';
  contextTypes?:
    | 'static public field'
    | 'static getter'
    | 'property assignment';
  contextType?: 'static public field' | 'static getter' | 'property assignment';
  displayName?: 'static public field' | 'static getter' | 'property assignment';
}

export type StaticPropertyPlacementRuleConfig = [
  ('static public field' | 'static getter' | 'property assignment')?,
  StaticPropertyPlacementConfig?,
];

export interface StylePropObjectOption {
  allow?: string[];
  [k: string]: any;
}

/**
 * All React rules.
 */
export interface ReactRules {
  /**
   * Enforces consistent naming for boolean props.
   * @see [boolean-prop-naming](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md)
   */
  'react/boolean-prop-naming': [BooleanPropNamingOption?];

  /**
   * Disallow usage of `button` elements without an explicit `type` attribute.
   * @see [button-has-type](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/button-has-type.md)
   */
  'react/button-has-type': [
    {
      button?: boolean;
      submit?: boolean;
      reset?: boolean;
    }?,
  ];

  /**
   * Enforce using `onChange` or `readonly` attribute when `checked` is used.
   * @see [checked-requires-onchange-or-readonly](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/checked-requires-onchange-or-readonly.md)
   */
  'react/checked-requires-onchange-or-readonly': [
    {
      ignoreMissingProperties?: boolean;
      ignoreExclusiveCheckedAttribute?: boolean;
    }?,
  ];

  /**
   * Enforce all defaultProps have a corresponding non-required PropType.
   * @see [default-props-match-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md)
   */
  'react/default-props-match-prop-types': [
    {
      allowRequiredDefaults?: boolean;
    }?,
  ];

  /**
   * Enforce consistent usage of destructuring assignment of props, state, and context.
   * @see [destructuring-assignment](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md)
   */
  'react/destructuring-assignment': DestructuringAssignmentRuleConfig;

  /**
   * Disallow missing displayName in a React component definition.
   * @see [display-name](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/display-name.md)
   */
  'react/display-name': [
    {
      ignoreTranspilerName?: boolean;
      checkContextObjects?: boolean;
    }?,
  ];

  /**
   * Disallow certain props on components.
   * @see [forbid-component-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md)
   */
  'react/forbid-component-props': [ForbidComponentPropsOption?];

  /**
   * Disallow certain props on DOM Nodes.
   * @see [forbid-dom-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md)
   */
  'react/forbid-dom-props': [ForbidDomPropsOption?];

  /**
   * Disallow certain elements.
   * @see [forbid-elements](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md)
   */
  'react/forbid-elements': [ForbidElementsOption?];

  /**
   * Disallow using another component's propTypes.
   * @see [forbid-foreign-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md)
   */
  'react/forbid-foreign-prop-types': [
    {
      allowInPropTypes?: boolean;
    }?,
  ];

  /**
   * Disallow certain propTypes.
   * @see [forbid-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md)
   */
  'react/forbid-prop-types': [ForbidPropTypesOption?];

  /**
   * Enforce a specific function type for function components.
   * @see [function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md)
   */
  'react/function-component-definition': [FunctionComponentDefinitionOption?];

  /**
   * Ensure destructuring and symmetric naming of useState hook value and setter variables.
   * @see [hook-use-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/hook-use-state.md)
   */
  'react/hook-use-state': [
    {
      allowDestructuredState?: boolean;
    }?,
  ];

  /**
   * Enforce sandbox attribute on iframe elements.
   * @see [iframe-missing-sandbox](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/iframe-missing-sandbox.md)
   */
  'react/iframe-missing-sandbox': null;

  /**
   * Enforce boolean attributes notation in JSX.
   * @see [jsx-boolean-value](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md)
   */
  'react/jsx-boolean-value': JsxBooleanValueOption;

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   * @see [jsx-child-element-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md)
   */
  'react/jsx-child-element-spacing': null;

  /**
   * Enforce closing bracket location in JSX.
   * @see [jsx-closing-bracket-location](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md)
   */
  'react/jsx-closing-bracket-location': [JsxClosingBracketLocationOption?];

  /**
   * Enforce closing tag location for multiline JSX.
   * @see [jsx-closing-tag-location](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md)
   */
  'react/jsx-closing-tag-location': [JsxClosingTagLocationOption?];

  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   * @see [jsx-curly-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md)
   */
  'react/jsx-curly-spacing': JsxCurlySpacing.JsxCurlySpacingRuleConfig;

  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
   * @see [jsx-curly-newline](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md)
   */
  'react/jsx-curly-newline': [JsxCurlyNewlineOption?];

  /**
   * Enforce or disallow spaces around equal signs in JSX attributes.
   * @see [jsx-equals-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md)
   */
  'react/jsx-equals-spacing': [('always' | 'never')?];

  /**
   * Disallow file extensions that may contain JSX.
   * @see [jsx-filename-extension](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md)
   */
  'react/jsx-filename-extension': [JsxFilenameExtensionOption?];

  /**
   * Enforce proper position of the first property in JSX.
   * @see [jsx-first-prop-new-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md)
   */
  'react/jsx-first-prop-new-line': [
    ('always' | 'never' | 'multiline' | 'multiline-multiprop' | 'multiprop')?,
  ];

  /**
   * Enforce event handler naming conventions in JSX.
   * @see [jsx-handler-names](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md)
   */
  'react/jsx-handler-names': [JsxHandlerNamesOption?];

  /**
   * Enforce JSX indentation.
   * @see [jsx-indent](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md)
   */
  'react/jsx-indent': JsxIndentRuleConfig;

  /**
   * Enforce props indentation in JSX.
   * @see [jsx-indent-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md)
   */
  'react/jsx-indent-props': [JsxIndentPropsOption?];

  /**
   * Disallow missing `key` props in iterators/collection literals.
   * @see [jsx-key](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md)
   */
  'react/jsx-key': [
    {
      checkFragmentShorthand?: boolean;
      checkKeyMustBeforeSpread?: boolean;
      warnOnDuplicates?: boolean;
    }?,
  ];

  /**
   * Enforce JSX maximum depth.
   * @see [jsx-max-depth](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md)
   */
  'react/jsx-max-depth': [
    {
      max?: number;
    }?,
  ];

  /**
   * Enforce maximum of props on a single line in JSX.
   * @see [jsx-max-props-per-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md)
   */
  'react/jsx-max-props-per-line': [JsxMaxPropsPerLineOption?];

  /**
   * Require or prevent a new line after jsx elements and expressions.
   * @see [jsx-newline](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md)
   */
  'react/jsx-newline': [
    {
      prevent?: boolean;
      allowMultilines?: boolean;
    }?,
  ];

  /**
   * Disallow `.bind()` or arrow functions in JSX props.
   * @see [jsx-no-bind](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md)
   */
  'react/jsx-no-bind': [
    {
      allowArrowFunctions?: boolean;
      allowBind?: boolean;
      allowFunctions?: boolean;
      ignoreRefs?: boolean;
      ignoreDOMComponents?: boolean;
    }?,
  ];

  /**
   * Disallow comments from being inserted as text nodes.
   * @see [jsx-no-comment-textnodes](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md)
   */
  'react/jsx-no-comment-textnodes': null;

  /**
   * Disallows JSX context provider values from taking values that will cause needless rerenders.
   * @see [jsx-no-constructed-context-values](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md)
   */
  'react/jsx-no-constructed-context-values': null;

  /**
   * Disallow duplicate properties in JSX.
   * @see [jsx-no-duplicate-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md)
   */
  'react/jsx-no-duplicate-props': [
    {
      ignoreCase?: boolean;
    }?,
  ];

  /**
   * Disallow problematic leaked values from being rendered.
   * @see [jsx-no-leaked-render](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-leaked-render.md)
   */
  'react/jsx-no-leaked-render': [JsxNoLeakedRenderOption?];

  /**
   * Disallow usage of string literals in JSX.
   * @see [jsx-no-literals](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md)
   */
  'react/jsx-no-literals': [
    {
      noStrings?: boolean;
      allowedStrings?: string[];
      ignoreProps?: boolean;
      noAttributeStrings?: boolean;
    }?,
  ];

  /**
   * Disallow usage of `javascript:` URLs.
   * @see [jsx-no-script-url](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md)
   */
  'react/jsx-no-script-url': JsxNoScriptUrlOption;

  /**
   * Disallow `target="_blank"` attribute without `rel="noreferrer"`.
   * @see [jsx-no-target-blank](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md)
   */
  'react/jsx-no-target-blank': [JsxNoTargetBlankOption?];

  /**
   * Disallow unnecessary fragments.
   * @see [jsx-no-useless-fragment](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md)
   */
  'react/jsx-no-useless-fragment': [JsxNoUselessFragmentOption?];

  /**
   * Require one JSX element per line.
   * @see [jsx-one-expression-per-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md)
   */
  'react/jsx-one-expression-per-line': [JsxOneExpressionPerLineOption?];

  /**
   * Disallow undeclared variables in JSX.
   * @see [jsx-no-undef](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md)
   */
  'react/jsx-no-undef': [
    {
      allowGlobals?: boolean;
    }?,
  ];

  /**
   * Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes.
   * @see [jsx-curly-brace-presence](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md)
   */
  'react/jsx-curly-brace-presence': [JsxCurlyBracePresenceOption?];

  /**
   * Enforce PascalCase for user-defined JSX components.
   * @see [jsx-pascal-case](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md)
   */
  'react/jsx-pascal-case': [JsxPascalCaseOption?];

  /**
   * Enforce shorthand or standard form for React fragments.
   * @see [jsx-fragments](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md)
   */
  'react/jsx-fragments': [('syntax' | 'element')?];

  /**
   * Disallow multiple spaces between inline JSX props.
   * @see [jsx-props-no-multi-spaces](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md)
   */
  'react/jsx-props-no-multi-spaces': null;

  /**
   * Disallow JSX prop spreading.
   * @see [jsx-props-no-spreading](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md)
   */
  'react/jsx-props-no-spreading': [JsxPropsNoSpreadingOption?];

  /**
   * Disallow JSX prop spreading the same identifier multiple times.
   * @see [jsx-props-no-spread-multi](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spread-multi.md)
   */
  'react/jsx-props-no-spread-multi': null;

  /**
   * Enforce defaultProps declarations alphabetical sorting.
   * @deprecated
   * @see [jsx-sort-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md)
   */
  'react/jsx-sort-default-props': [
    {
      ignoreCase?: boolean;
    }?,
  ];

  /**
   * Enforce props alphabetical sorting.
   * @see [jsx-sort-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md)
   */
  'react/jsx-sort-props': [JsxSortPropsOption?];

  /**
   * Enforce spacing before closing bracket in JSX.
   * @deprecated
   * @see [jsx-space-before-closing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-space-before-closing.md)
   */
  'react/jsx-space-before-closing': [('always' | 'never')?];

  /**
   * Enforce whitespace in and around the JSX opening and closing brackets.
   * @see [jsx-tag-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md)
   */
  'react/jsx-tag-spacing': [JsxTagSpacingOption?];

  /**
   * Disallow React to be incorrectly marked as unused.
   * @see [jsx-uses-react](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md)
   */
  'react/jsx-uses-react': null;

  /**
   * Disallow variables used in JSX to be incorrectly marked as unused.
   * @see [jsx-uses-vars](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md)
   */
  'react/jsx-uses-vars': null;

  /**
   * Disallow missing parentheses around multiline JSX.
   * @see [jsx-wrap-multilines](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md)
   */
  'react/jsx-wrap-multilines': [JsxWrapMultilinesOption?];

  /**
   * Disallow usage of invalid attributes.
   * @see [no-invalid-html-attribute](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-invalid-html-attribute.md)
   */
  'react/no-invalid-html-attribute': [NoInvalidHtmlAttributeOption?];

  /**
   * Disallow when this.state is accessed within setState.
   * @see [no-access-state-in-setstate](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md)
   */
  'react/no-access-state-in-setstate': null;

  /**
   * Disallow adjacent inline elements not separated by whitespace.
   * @see [no-adjacent-inline-elements](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md)
   */
  'react/no-adjacent-inline-elements': null;

  /**
   * Disallow usage of Array index in keys.
   * @see [no-array-index-key](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md)
   */
  'react/no-array-index-key': null;

  /**
   * Lifecycle methods should be methods on the prototype, not class fields.
   * @see [no-arrow-function-lifecycle](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-arrow-function-lifecycle.md)
   */
  'react/no-arrow-function-lifecycle': null;

  /**
   * Disallow passing of children as props.
   * @see [no-children-prop](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md)
   */
  'react/no-children-prop': [
    {
      allowFunctions?: boolean;
    }?,
  ];

  /**
   * Disallow usage of dangerous JSX properties.
   * @see [no-danger](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger.md)
   */
  'react/no-danger': [NoDangerOption?];

  /**
   * Disallow when a DOM element is using both children and dangerouslySetInnerHTML.
   * @see [no-danger-with-children](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md)
   */
  'react/no-danger-with-children': null;

  /**
   * Disallow usage of deprecated methods.
   * @see [no-deprecated](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md)
   */
  'react/no-deprecated': null;

  /**
   * Disallow usage of setState in componentDidMount.
   * @see [no-did-mount-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md)
   */
  'react/no-did-mount-set-state': ['disallow-in-func'?];

  /**
   * Disallow usage of setState in componentDidUpdate.
   * @see [no-did-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md)
   */
  'react/no-did-update-set-state': ['disallow-in-func'?];

  /**
   * Disallow direct mutation of this.state.
   * @see [no-direct-mutation-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md)
   */
  'react/no-direct-mutation-state': null;

  /**
   * Disallow usage of findDOMNode.
   * @see [no-find-dom-node](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md)
   */
  'react/no-find-dom-node': null;

  /**
   * Disallow usage of isMounted.
   * @see [no-is-mounted](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md)
   */
  'react/no-is-mounted': null;

  /**
   * Disallow multiple component definition per file.
   * @see [no-multi-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md)
   */
  'react/no-multi-comp': [
    {
      ignoreStateless?: boolean;
    }?,
  ];

  /**
   * Enforce that namespaces are not used in React elements.
   * @see [no-namespace](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-namespace.md)
   */
  'react/no-namespace': null;

  /**
   * Disallow usage of setState.
   * @see [no-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-set-state.md)
   */
  'react/no-set-state': null;

  /**
   * Disallow using string references.
   * @see [no-string-refs](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md)
   */
  'react/no-string-refs': [
    {
      noTemplateLiterals?: boolean;
    }?,
  ];

  /**
   * Disallow usage of shouldComponentUpdate when extending React.PureComponent.
   * @see [no-redundant-should-component-update](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md)
   */
  'react/no-redundant-should-component-update': null;

  /**
   * Disallow usage of the return value of ReactDOM.render.
   * @see [no-render-return-value](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md)
   */
  'react/no-render-return-value': null;

  /**
   * Disallow `this` from being used in stateless functional components.
   * @see [no-this-in-sfc](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md)
   */
  'react/no-this-in-sfc': null;

  /**
   * Disallow common typos.
   * @see [no-typos](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-typos.md)
   */
  'react/no-typos': null;

  /**
   * Disallow unescaped HTML entities from appearing in markup.
   * @see [no-unescaped-entities](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md)
   */
  'react/no-unescaped-entities': [NoUnescapedEntitiesOption?];

  /**
   * Disallow usage of unknown DOM property.
   * @see [no-unknown-property](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md)
   */
  'react/no-unknown-property': [
    {
      ignore?: string[];
      requireDataLowercase?: boolean;
    }?,
  ];

  /**
   * Disallow usage of unsafe lifecycle methods.
   * @see [no-unsafe](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md)
   */
  'react/no-unsafe': [
    {
      checkAliases?: boolean;
    }?,
  ];

  /**
   * Disallow creating unstable components inside components.
   * @see [no-unstable-nested-components](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unstable-nested-components.md)
   */
  'react/no-unstable-nested-components': [
    {
      customValidators?: string[];
      allowAsProps?: boolean;
    }?,
  ];

  /**
   * Disallow declaring unused methods of component class.
   * @see [no-unused-class-component-methods](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-class-component-methods.md)
   */
  'react/no-unused-class-component-methods': null;

  /**
   * Disallow definitions of unused propTypes.
   * @see [no-unused-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md)
   */
  'react/no-unused-prop-types': [
    {
      ignore?: string[];
      customValidators?: string[];
      skipShapeProps?: boolean;
    }?,
  ];

  /**
   * Disallow definitions of unused state.
   * @see [no-unused-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md)
   */
  'react/no-unused-state': null;

  /**
   * Disallow usage of referential-type variables as default param in functional component.
   * @see [no-object-type-as-default-prop](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-object-type-as-default-prop.md)
   */
  'react/no-object-type-as-default-prop': null;

  /**
   * Disallow usage of setState in componentWillUpdate.
   * @see [no-will-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md)
   */
  'react/no-will-update-set-state': ['disallow-in-func'?];

  /**
   * Enforce ES5 or ES6 class for React Components.
   * @see [prefer-es6-class](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md)
   */
  'react/prefer-es6-class': [('always' | 'never')?];

  /**
   * Prefer exact proptype definitions.
   * @see [prefer-exact-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-exact-props.md)
   */
  'react/prefer-exact-props': null;

  /**
   * Enforce that props are read-only.
   * @see [prefer-read-only-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md)
   */
  'react/prefer-read-only-props': null;

  /**
   * Enforce stateless components to be written as a pure function.
   * @see [prefer-stateless-function](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md)
   */
  'react/prefer-stateless-function': [
    {
      ignorePureComponents?: boolean;
    }?,
  ];

  /**
   * Disallow missing props validation in a React component definition.
   * @see [prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md)
   */
  'react/prop-types': [
    {
      ignore?: string[];
      customValidators?: string[];
      skipUndeclared?: boolean;
    }?,
  ];

  /**
   * Disallow missing React when using JSX.
   * @see [react-in-jsx-scope](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md)
   */
  'react/react-in-jsx-scope': null;

  /**
   * Enforce a defaultProps definition for every prop that is not a required prop.
   * @see [require-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md)
   */
  'react/require-default-props': [RequireDefaultPropsOption?];

  /**
   * Enforce React components to have a shouldComponentUpdate method.
   * @see [require-optimization](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-optimization.md)
   */
  'react/require-optimization': [
    {
      allowDecorators?: string[];
    }?,
  ];

  /**
   * Enforce ES5 or ES6 class for returning value in render function.
   * @see [require-render-return](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-render-return.md)
   */
  'react/require-render-return': null;

  /**
   * Disallow extra closing tags for components without children.
   * @see [self-closing-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md)
   */
  'react/self-closing-comp': [
    {
      component?: boolean;
      html?: boolean;
    }?,
  ];

  /**
   * Enforce component methods order.
   * @see [sort-comp](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md)
   */
  'react/sort-comp': [SortCompOption?];

  /**
   * Enforce defaultProps declarations alphabetical sorting.
   * @see [sort-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-default-props.md)
   */
  'react/sort-default-props': [
    {
      ignoreCase?: boolean;
    }?,
  ];

  /**
   * Enforce propTypes declarations alphabetical sorting.
   * @see [sort-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md)
   */
  'react/sort-prop-types': [
    {
      requiredFirst?: boolean;
      callbacksLast?: boolean;
      ignoreCase?: boolean;
      noSortAlphabetically?: boolean;
      sortShapeProp?: boolean;
      checkTypes?: boolean;
    }?,
  ];

  /**
   * Enforce class component state initialization style.
   * @see [state-in-constructor](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md)
   */
  'react/state-in-constructor': [('always' | 'never')?];

  /**
   * Enforces where React component static properties should be positioned.
   * @see [static-property-placement](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md)
   */
  'react/static-property-placement': StaticPropertyPlacementRuleConfig;

  /**
   * Enforce style prop value is an object.
   * @see [style-prop-object](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md)
   */
  'react/style-prop-object': [StylePropObjectOption?];

  /**
   * Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children.
   * @see [void-dom-elements-no-children](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md)
   */
  'react/void-dom-elements-no-children': null;
}

export type ReactRulesObject = RulesObject<ReactRules>;
