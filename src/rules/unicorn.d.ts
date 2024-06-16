import type { EmptyRuleConfig, RuleConfig } from '../rule-config';

export type ExpiringTodoCommentsRuleConfig = [
  {
    terms?: string[];
    ignore?: any[];
    ignoreDatesOnPullRequests?: boolean;
    allowWarningComments?: boolean;
    date?: string;
  }?,
];

export interface ExplicitLengthCheckOption {
  'non-zero'?: 'greater-than' | 'not-equal';
}

export type FilenameCaseOption =
  | {
      case?: 'camelCase' | 'snakeCase' | 'kebabCase' | 'pascalCase';
      ignore?: any[];
      multipleFileExtensions?: boolean;
    }
  | {
      cases?: {
        camelCase?: boolean;
        snakeCase?: boolean;
        kebabCase?: boolean;
        pascalCase?: boolean;
      };
      ignore?: any[];
      multipleFileExtensions?: boolean;
    };

export namespace ImportStyle {
  export type ImportStyleOption =
    | []
    | [
        {
          checkImport?: boolean;
          checkDynamicImport?: boolean;
          checkExportFrom?: boolean;
          checkRequire?: boolean;
          extendDefaultStyles?: boolean;
          styles?: ModuleStyles;
        },
      ];
  export type Styles = false | BooleanObject;

  export interface ModuleStyles {
    [k: string]: Styles;
  }
  export interface BooleanObject {
    [k: string]: boolean;
  }

  export type ImportStyleRuleConfig = ImportStyleOption;
}

export interface NoKeywordPrefixOption {
  /**
   * @minItems 0
   */
  disallowedPrefixes?: [] | [string];
  checkProperties?: boolean;
  onlyCamelCase?: boolean;
}

export interface NoUnnecessaryPolyfillsOption {
  targets:
    | string
    | any[]
    | {
        [k: string]: any;
      };
}

export type NoUselessUndefinedRuleConfig = [
  {
    checkArguments?: boolean;
    checkArrowFunctionBody?: boolean;
  }?,
];

export interface NumericSeparatorsStyleOption {
  binary?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  octal?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  hexadecimal?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  number?: {
    onlyIfContainsSeparator?: boolean;
    minimumDigits?: number;
    groupLength?: number;
  };
  onlyIfContainsSeparator?: boolean;
}

export type PreferAtRuleConfig = [
  {
    getLastElementFunctions?: any[];
    checkAllIndexAccess?: boolean;
  }?,
];

export type PreferNumberPropertiesRuleConfig = [
  {
    checkInfinity?: boolean;
    checkNaN?: boolean;
  }?,
];

export interface PreferSwitchOption {
  minimumCases?: number;
  emptyDefaultCase?:
    | 'no-default-comment'
    | 'do-nothing-comment'
    | 'no-default-case';
}

export namespace PreventAbbreviations {
  export type PreventAbbreviationsOption =
    | []
    | [
        {
          checkProperties?: boolean;
          checkVariables?: boolean;
          checkDefaultAndNamespaceImports?: boolean | string;
          checkShorthandImports?: boolean | string;
          checkShorthandProperties?: boolean;
          checkFilenames?: boolean;
          extendDefaultReplacements?: boolean;
          replacements?: Abbreviations;
          extendDefaultAllowList?: boolean;
          allowList?: BooleanObject;
          ignore?: any[];
        },
      ];
  export type Replacements = false | BooleanObject;

  export interface Abbreviations {
    [k: string]: Replacements;
  }
  export interface BooleanObject {
    [k: string]: boolean;
  }

  export type PreventAbbreviationsRuleConfig = PreventAbbreviationsOption;
}

export interface StringContentOption {
  patterns?: {
    [k: string]:
      | string
      | {
          suggest: string;
          fix?: boolean;
          message?: string;
        };
  };
}

export interface TemplateIndentOption {
  indent?: string | number;
  tags?: string[];
  functions?: string[];
  selectors?: string[];
  comments?: string[];
}

/**
 * All Unicorn rules.
 */
export interface UnicornRules {
  /**
   * Improve regexes by making them shorter, consistent, and safer.
   * @see [better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/better-regex.md)
   */
  'unicorn/better-regex': RuleConfig<
    [
      {
        sortCharacterClasses?: boolean;
      }?,
    ]
  >;

  /**
   * Enforce a specific parameter name in catch clauses.
   * @see [catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/catch-error-name.md)
   */
  'unicorn/catch-error-name': RuleConfig<
    [
      {
        name?: string;
        ignore?: any[];
      }?,
    ]
  >;

  /**
   * Use destructured variables over properties.
   * @see [consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/consistent-destructuring.md)
   */
  'unicorn/consistent-destructuring': EmptyRuleConfig;

  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   * @see [consistent-empty-array-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/consistent-empty-array-spread.md)
   */
  'unicorn/consistent-empty-array-spread': EmptyRuleConfig;

  /**
   * Move function definitions to the highest possible scope.
   * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/consistent-function-scoping.md)
   */
  'unicorn/consistent-function-scoping': RuleConfig<
    [
      {
        checkArrowFunctions?: boolean;
      }?,
    ]
  >;

  /**
   * Enforce correct `Error` subclassing.
   * @see [custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/custom-error-definition.md)
   */
  'unicorn/custom-error-definition': EmptyRuleConfig;

  /**
   * Enforce no spaces between braces.
   * @see [empty-brace-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/empty-brace-spaces.md)
   */
  'unicorn/empty-brace-spaces': EmptyRuleConfig;

  /**
   * Enforce passing a `message` value when creating a built-in error.
   * @see [error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/error-message.md)
   */
  'unicorn/error-message': EmptyRuleConfig;

  /**
   * Require escape sequences to use uppercase values.
   * @see [escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/escape-case.md)
   */
  'unicorn/escape-case': EmptyRuleConfig;

  /**
   * Add expiration conditions to TODO comments.
   * @see [expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/expiring-todo-comments.md)
   */
  'unicorn/expiring-todo-comments': RuleConfig<ExpiringTodoCommentsRuleConfig>;

  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   * @see [explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/explicit-length-check.md)
   */
  'unicorn/explicit-length-check': RuleConfig<[ExplicitLengthCheckOption?]>;

  /**
   * Enforce a case style for filenames.
   * @see [filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/filename-case.md)
   */
  'unicorn/filename-case': RuleConfig<[FilenameCaseOption?]>;

  /**
   * Enforce specific import styles per module.
   * @see [import-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/import-style.md)
   */
  'unicorn/import-style': RuleConfig<ImportStyle.ImportStyleRuleConfig>;

  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   * @see [new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/new-for-builtins.md)
   */
  'unicorn/new-for-builtins': EmptyRuleConfig;

  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   * @see [no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-abusive-eslint-disable.md)
   */
  'unicorn/no-abusive-eslint-disable': EmptyRuleConfig;

  /**
   * Disallow anonymous functions and classes as the default export.
   * @see [no-anonymous-default-export](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-anonymous-default-export.md)
   */
  'unicorn/no-anonymous-default-export': EmptyRuleConfig;

  /**
   * Prevent passing a function reference directly to iterator methods.
   * @see [no-array-callback-reference](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-array-callback-reference.md)
   */
  'unicorn/no-array-callback-reference': EmptyRuleConfig;

  /**
   * Prefer `for…of` over the `forEach` method.
   * @see [no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-array-for-each.md)
   */
  'unicorn/no-array-for-each': EmptyRuleConfig;

  /**
   * Disallow using the `this` argument in array methods.
   * @see [no-array-method-this-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-array-method-this-argument.md)
   */
  'unicorn/no-array-method-this-argument': EmptyRuleConfig;

  /**
   * Enforce combining multiple `Array#push()` into one call.
   * @see [no-array-push-push](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-array-push-push.md)
   */
  'unicorn/no-array-push-push': RuleConfig<
    [
      {
        ignore?: any[];
      }?,
    ]
  >;

  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   * @see [no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-array-reduce.md)
   */
  'unicorn/no-array-reduce': RuleConfig<
    [
      {
        allowSimpleOperations?: boolean;
      }?,
    ]
  >;

  /**
   * Disallow member access from await expression.
   * @see [no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-await-expression-member.md)
   */
  'unicorn/no-await-expression-member': EmptyRuleConfig;

  /**
   * Disallow using `await` in `Promise` method parameters.
   * @see [no-await-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-await-in-promise-methods.md)
   */
  'unicorn/no-await-in-promise-methods': EmptyRuleConfig;

  /**
   * Do not use leading/trailing space between `console.log` parameters.
   * @see [no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-console-spaces.md)
   */
  'unicorn/no-console-spaces': EmptyRuleConfig;

  /**
   * Do not use `document.cookie` directly.
   * @see [no-document-cookie](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-document-cookie.md)
   */
  'unicorn/no-document-cookie': EmptyRuleConfig;

  /**
   * Disallow empty files.
   * @see [no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-empty-file.md)
   */
  'unicorn/no-empty-file': EmptyRuleConfig;

  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   * @see [no-for-loop](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-for-loop.md)
   */
  'unicorn/no-for-loop': EmptyRuleConfig;

  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   * @see [no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-hex-escape.md)
   */
  'unicorn/no-hex-escape': EmptyRuleConfig;

  /**
   * Require `Array.isArray()` instead of `instanceof Array`.
   * @see [no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-instanceof-array.md)
   */
  'unicorn/no-instanceof-array': EmptyRuleConfig;

  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   * @see [no-invalid-fetch-options](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-invalid-fetch-options.md)
   */
  'unicorn/no-invalid-fetch-options': EmptyRuleConfig;

  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   * @see [no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-invalid-remove-event-listener.md)
   */
  'unicorn/no-invalid-remove-event-listener': EmptyRuleConfig;

  /**
   * Disallow identifiers starting with `new` or `class`.
   * @see [no-keyword-prefix](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-keyword-prefix.md)
   */
  'unicorn/no-keyword-prefix': RuleConfig<[NoKeywordPrefixOption?]>;

  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   * @see [no-lonely-if](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-lonely-if.md)
   */
  'unicorn/no-lonely-if': EmptyRuleConfig;

  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`.
   * @see [no-magic-array-flat-depth](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-magic-array-flat-depth.md)
   */
  'unicorn/no-magic-array-flat-depth': EmptyRuleConfig;

  /**
   * Disallow negated conditions.
   * @see [no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-negated-condition.md)
   */
  'unicorn/no-negated-condition': EmptyRuleConfig;

  /**
   * Disallow negated expression in equality check.
   * @see [no-negation-in-equality-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-negation-in-equality-check.md)
   */
  'unicorn/no-negation-in-equality-check': EmptyRuleConfig;

  /**
   * Disallow nested ternary expressions.
   * @see [no-nested-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-nested-ternary.md)
   */
  'unicorn/no-nested-ternary': EmptyRuleConfig;

  /**
   * Disallow `new Array()`.
   * @see [no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-new-array.md)
   */
  'unicorn/no-new-array': EmptyRuleConfig;

  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   * @see [no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-new-buffer.md)
   */
  'unicorn/no-new-buffer': EmptyRuleConfig;

  /**
   * Disallow the use of the `null` literal.
   * @see [no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-null.md)
   */
  'unicorn/no-null': RuleConfig<
    [
      {
        checkStrictEquality?: boolean;
      }?,
    ]
  >;

  /**
   * Disallow the use of objects as default parameters.
   * @see [no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-object-as-default-parameter.md)
   */
  'unicorn/no-object-as-default-parameter': EmptyRuleConfig;

  /**
   * Disallow `process.exit()`.
   * @see [no-process-exit](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-process-exit.md)
   */
  'unicorn/no-process-exit': EmptyRuleConfig;

  /**
   * Disallow passing single-element arrays to `Promise` methods.
   * @see [no-single-promise-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-single-promise-in-promise-methods.md)
   */
  'unicorn/no-single-promise-in-promise-methods': EmptyRuleConfig;

  /**
   * Disallow classes that only have static members.
   * @see [no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-static-only-class.md)
   */
  'unicorn/no-static-only-class': EmptyRuleConfig;

  /**
   * Disallow `then` property.
   * @see [no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-thenable.md)
   */
  'unicorn/no-thenable': EmptyRuleConfig;

  /**
   * Disallow assigning `this` to a variable.
   * @see [no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-this-assignment.md)
   */
  'unicorn/no-this-assignment': EmptyRuleConfig;

  /**
   * Disallow comparing `undefined` using `typeof`.
   * @see [no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-typeof-undefined.md)
   */
  'unicorn/no-typeof-undefined': RuleConfig<
    [
      {
        checkGlobalVariables?: boolean;
      }?,
    ]
  >;

  /**
   * Disallow awaiting non-promise values.
   * @see [no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-unnecessary-await.md)
   */
  'unicorn/no-unnecessary-await': EmptyRuleConfig;

  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   * @see [no-unnecessary-polyfills](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-unnecessary-polyfills.md)
   */
  'unicorn/no-unnecessary-polyfills': RuleConfig<
    [NoUnnecessaryPolyfillsOption?]
  >;

  /**
   * Disallow unreadable array destructuring.
   * @see [no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-unreadable-array-destructuring.md)
   */
  'unicorn/no-unreadable-array-destructuring': EmptyRuleConfig;

  /**
   * Disallow unreadable IIFEs.
   * @see [no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-unreadable-iife.md)
   */
  'unicorn/no-unreadable-iife': EmptyRuleConfig;

  /**
   * Disallow unused object properties.
   * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-unused-properties.md)
   */
  'unicorn/no-unused-properties': EmptyRuleConfig;

  /**
   * Disallow useless fallback when spreading in object literals.
   * @see [no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-useless-fallback-in-spread.md)
   */
  'unicorn/no-useless-fallback-in-spread': EmptyRuleConfig;

  /**
   * Disallow useless array length check.
   * @see [no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-useless-length-check.md)
   */
  'unicorn/no-useless-length-check': EmptyRuleConfig;

  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks.
   * @see [no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-useless-promise-resolve-reject.md)
   */
  'unicorn/no-useless-promise-resolve-reject': EmptyRuleConfig;

  /**
   * Disallow unnecessary spread.
   * @see [no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-useless-spread.md)
   */
  'unicorn/no-useless-spread': EmptyRuleConfig;

  /**
   * Disallow useless case in switch statements.
   * @see [no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-useless-switch-case.md)
   */
  'unicorn/no-useless-switch-case': EmptyRuleConfig;

  /**
   * Disallow useless `undefined`.
   * @see [no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-useless-undefined.md)
   */
  'unicorn/no-useless-undefined': RuleConfig<NoUselessUndefinedRuleConfig>;

  /**
   * Disallow number literals with zero fractions or dangling dots.
   * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/no-zero-fractions.md)
   */
  'unicorn/no-zero-fractions': EmptyRuleConfig;

  /**
   * Enforce proper case for numeric literals.
   * @see [number-literal-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/number-literal-case.md)
   */
  'unicorn/number-literal-case': EmptyRuleConfig;

  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   * @see [numeric-separators-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/numeric-separators-style.md)
   */
  'unicorn/numeric-separators-style': RuleConfig<
    [NumericSeparatorsStyleOption?]
  >;

  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   * @see [prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-add-event-listener.md)
   */
  'unicorn/prefer-add-event-listener': RuleConfig<
    [
      {
        excludedPackages?: string[];
      }?,
    ]
  >;

  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   * @see [prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-array-find.md)
   */
  'unicorn/prefer-array-find': RuleConfig<
    [
      {
        checkFromLast?: boolean;
      }?,
    ]
  >;

  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   * @see [prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-array-flat-map.md)
   */
  'unicorn/prefer-array-flat-map': EmptyRuleConfig;

  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   * @see [prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-array-flat.md)
   */
  'unicorn/prefer-array-flat': RuleConfig<
    [
      {
        functions?: any[];
      }?,
    ]
  >;

  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   * @see [prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-array-index-of.md)
   */
  'unicorn/prefer-array-index-of': EmptyRuleConfig;

  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.
   * @see [prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-array-some.md)
   */
  'unicorn/prefer-array-some': EmptyRuleConfig;

  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   * @see [prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-at.md)
   */
  'unicorn/prefer-at': RuleConfig<PreferAtRuleConfig>;

  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   * @see [prefer-blob-reading-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-blob-reading-methods.md)
   */
  'unicorn/prefer-blob-reading-methods': EmptyRuleConfig;

  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   * @see [prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-code-point.md)
   */
  'unicorn/prefer-code-point': EmptyRuleConfig;

  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   * @see [prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-date-now.md)
   */
  'unicorn/prefer-date-now': EmptyRuleConfig;

  /**
   * Prefer default parameters over reassignment.
   * @see [prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-default-parameters.md)
   */
  'unicorn/prefer-default-parameters': EmptyRuleConfig;

  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   * @see [prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-dom-node-append.md)
   */
  'unicorn/prefer-dom-node-append': EmptyRuleConfig;

  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   * @see [prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-dom-node-dataset.md)
   */
  'unicorn/prefer-dom-node-dataset': EmptyRuleConfig;

  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   * @see [prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-dom-node-remove.md)
   */
  'unicorn/prefer-dom-node-remove': EmptyRuleConfig;

  /**
   * Prefer `.textContent` over `.innerText`.
   * @see [prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-dom-node-text-content.md)
   */
  'unicorn/prefer-dom-node-text-content': EmptyRuleConfig;

  /**
   * Prefer `EventTarget` over `EventEmitter`.
   * @see [prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-event-target.md)
   */
  'unicorn/prefer-event-target': EmptyRuleConfig;

  /**
   * Prefer `export…from` when re-exporting.
   * @see [prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-export-from.md)
   */
  'unicorn/prefer-export-from': RuleConfig<
    [
      {
        ignoreUsedVariables?: boolean;
      }?,
    ]
  >;

  /**
   * Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.
   * @see [prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-includes.md)
   */
  'unicorn/prefer-includes': EmptyRuleConfig;

  /**
   * Prefer reading a JSON file as a buffer.
   * @see [prefer-json-parse-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-json-parse-buffer.md)
   */
  'unicorn/prefer-json-parse-buffer': EmptyRuleConfig;

  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   * @see [prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-keyboard-event-key.md)
   */
  'unicorn/prefer-keyboard-event-key': EmptyRuleConfig;

  /**
   * Prefer using a logical operator over a ternary.
   * @see [prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-logical-operator-over-ternary.md)
   */
  'unicorn/prefer-logical-operator-over-ternary': EmptyRuleConfig;

  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   * @see [prefer-math-trunc](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-math-trunc.md)
   */
  'unicorn/prefer-math-trunc': EmptyRuleConfig;

  /**
   * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
   * @see [prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-modern-dom-apis.md)
   */
  'unicorn/prefer-modern-dom-apis': EmptyRuleConfig;

  /**
   * Prefer modern `Math` APIs over legacy patterns.
   * @see [prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-modern-math-apis.md)
   */
  'unicorn/prefer-modern-math-apis': EmptyRuleConfig;

  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   * @see [prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-module.md)
   */
  'unicorn/prefer-module': EmptyRuleConfig;

  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   * @see [prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-native-coercion-functions.md)
   */
  'unicorn/prefer-native-coercion-functions': EmptyRuleConfig;

  /**
   * Prefer negative index over `.length - index` when possible.
   * @see [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-negative-index.md)
   */
  'unicorn/prefer-negative-index': EmptyRuleConfig;

  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   * @see [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-node-protocol.md)
   */
  'unicorn/prefer-node-protocol': EmptyRuleConfig;

  /**
   * Prefer `Number` static properties over global ones.
   * @see [prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-number-properties.md)
   */
  'unicorn/prefer-number-properties': RuleConfig<PreferNumberPropertiesRuleConfig>;

  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   * @see [prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-object-from-entries.md)
   */
  'unicorn/prefer-object-from-entries': RuleConfig<
    [
      {
        functions?: any[];
      }?,
    ]
  >;

  /**
   * Prefer omitting the `catch` binding parameter.
   * @see [prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-optional-catch-binding.md)
   */
  'unicorn/prefer-optional-catch-binding': EmptyRuleConfig;

  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   * @see [prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-prototype-methods.md)
   */
  'unicorn/prefer-prototype-methods': EmptyRuleConfig;

  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()`.
   * @see [prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-query-selector.md)
   */
  'unicorn/prefer-query-selector': EmptyRuleConfig;

  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   * @see [prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-reflect-apply.md)
   */
  'unicorn/prefer-reflect-apply': EmptyRuleConfig;

  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   * @see [prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-regexp-test.md)
   */
  'unicorn/prefer-regexp-test': EmptyRuleConfig;

  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   * @see [prefer-set-has](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-set-has.md)
   */
  'unicorn/prefer-set-has': EmptyRuleConfig;

  /**
   * Prefer using `Set#size` instead of `Array#length`.
   * @see [prefer-set-size](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-set-size.md)
   */
  'unicorn/prefer-set-size': EmptyRuleConfig;

  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.
   * @see [prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-spread.md)
   */
  'unicorn/prefer-spread': EmptyRuleConfig;

  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   * @see [prefer-string-raw](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-string-raw.md)
   */
  'unicorn/prefer-string-raw': EmptyRuleConfig;

  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   * @see [prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-string-replace-all.md)
   */
  'unicorn/prefer-string-replace-all': EmptyRuleConfig;

  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   * @see [prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-string-slice.md)
   */
  'unicorn/prefer-string-slice': EmptyRuleConfig;

  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   * @see [prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-string-starts-ends-with.md)
   */
  'unicorn/prefer-string-starts-ends-with': EmptyRuleConfig;

  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   * @see [prefer-string-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-string-trim-start-end.md)
   */
  'unicorn/prefer-string-trim-start-end': EmptyRuleConfig;

  /**
   * Prefer using `structuredClone` to create a deep clone.
   * @see [prefer-structured-clone](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-structured-clone.md)
   */
  'unicorn/prefer-structured-clone': RuleConfig<
    [
      {
        functions?: any[];
      }?,
    ]
  >;

  /**
   * Prefer `switch` over multiple `else-if`.
   * @see [prefer-switch](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-switch.md)
   */
  'unicorn/prefer-switch': RuleConfig<[PreferSwitchOption?]>;

  /**
   * Prefer ternary expressions over simple `if-else` statements.
   * @see [prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-ternary.md)
   */
  'unicorn/prefer-ternary': RuleConfig<[('always' | 'only-single-line')?]>;

  /**
   * Prefer top-level await over top-level promises and async function calls.
   * @see [prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-top-level-await.md)
   */
  'unicorn/prefer-top-level-await': EmptyRuleConfig;

  /**
   * Enforce throwing `TypeError` in type checking conditions.
   * @see [prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-type-error.md)
   */
  'unicorn/prefer-type-error': EmptyRuleConfig;

  /**
   * Prevent abbreviations.
   * @see [prevent-abbreviations](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prevent-abbreviations.md)
   */
  'unicorn/prevent-abbreviations': RuleConfig<PreventAbbreviations.PreventAbbreviationsRuleConfig>;

  /**
   * Enforce consistent relative URL style.
   * @see [relative-url-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/relative-url-style.md)
   */
  'unicorn/relative-url-style': RuleConfig<[('never' | 'always')?]>;

  /**
   * Enforce using the separator argument with `Array#join()`.
   * @see [require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/require-array-join-separator.md)
   */
  'unicorn/require-array-join-separator': EmptyRuleConfig;

  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   * @see [require-number-to-fixed-digits-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/require-number-to-fixed-digits-argument.md)
   */
  'unicorn/require-number-to-fixed-digits-argument': EmptyRuleConfig;

  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   * @see [require-post-message-target-origin](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/require-post-message-target-origin.md)
   */
  'unicorn/require-post-message-target-origin': EmptyRuleConfig;

  /**
   * Enforce better string content.
   * @see [string-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/string-content.md)
   */
  'unicorn/string-content': RuleConfig<[StringContentOption?]>;

  /**
   * Enforce consistent brace style for `case` clauses.
   * @see [switch-case-braces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/switch-case-braces.md)
   */
  'unicorn/switch-case-braces': RuleConfig<[('always' | 'avoid')?]>;

  /**
   * Fix whitespace-insensitive template indentation.
   * @see [template-indent](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/template-indent.md)
   */
  'unicorn/template-indent': RuleConfig<[TemplateIndentOption?]>;

  /**
   * Enforce consistent case for text encoding identifiers.
   * @see [text-encoding-identifier-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/text-encoding-identifier-case.md)
   */
  'unicorn/text-encoding-identifier-case': EmptyRuleConfig;

  /**
   * Require `new` when creating an error.
   * @see [throw-new-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/throw-new-error.md)
   */
  'unicorn/throw-new-error': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#import-index)
   */
  'unicorn/import-index': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [no-array-instanceof](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#no-array-instanceof)
   */
  'unicorn/no-array-instanceof': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [no-fn-reference-in-iterator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#no-fn-reference-in-iterator)
   */
  'unicorn/no-fn-reference-in-iterator': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [no-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#no-reduce)
   */
  'unicorn/no-reduce': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [no-unsafe-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#no-unsafe-regex)
   */
  'unicorn/no-unsafe-regex': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [prefer-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#prefer-dataset)
   */
  'unicorn/prefer-dataset': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [prefer-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#prefer-event-key)
   */
  'unicorn/prefer-event-key': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [prefer-exponentiation-operator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#prefer-exponentiation-operator)
   */
  'unicorn/prefer-exponentiation-operator': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [prefer-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#prefer-flat-map)
   */
  'unicorn/prefer-flat-map': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [prefer-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#prefer-node-append)
   */
  'unicorn/prefer-node-append': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [prefer-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#prefer-node-remove)
   */
  'unicorn/prefer-node-remove': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [prefer-object-has-own](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#prefer-object-has-own)
   */
  'unicorn/prefer-object-has-own': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [prefer-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#prefer-replace-all)
   */
  'unicorn/prefer-replace-all': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [prefer-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#prefer-starts-ends-with)
   */
  'unicorn/prefer-starts-ends-with': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [prefer-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#prefer-text-content)
   */
  'unicorn/prefer-text-content': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [prefer-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#prefer-trim-start-end)
   */
  'unicorn/prefer-trim-start-end': EmptyRuleConfig;

  /**
   * @deprecated
   * @see [regex-shorthand](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/deprecated-rules.md#regex-shorthand)
   */
  'unicorn/regex-shorthand': EmptyRuleConfig;
}
