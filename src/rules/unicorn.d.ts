import type { RulesObject } from '../rule-config';

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

export interface NoInstanceofBuiltinsOption {
  useErrorIsError?: boolean;
  strategy?: 'loose' | 'strict';
  include?: string[];
  exclude?: string[];
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

export interface NumberLiteralCaseOption {
  hexadecimalValue?: 'uppercase' | 'lowercase';
}

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
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/better-regex.md)
   */
  'unicorn/better-regex': [
    {
      sortCharacterClasses?: boolean;
    }?,
  ];

  /**
   * Enforce a specific parameter name in catch clauses.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/catch-error-name.md)
   */
  'unicorn/catch-error-name': [
    {
      name?: string;
      ignore?: any[];
    }?,
  ];

  /**
   * Enforce consistent assertion style with `node:assert`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [consistent-assert](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/consistent-assert.md)
   */
  'unicorn/consistent-assert': null;

  /**
   * Prefer passing `Date` directly to the constructor when cloning.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [consistent-date-clone](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/consistent-date-clone.md)
   */
  'unicorn/consistent-date-clone': null;

  /**
   * Use destructured variables over properties.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/consistent-destructuring.md)
   */
  'unicorn/consistent-destructuring': null;

  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [consistent-empty-array-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/consistent-empty-array-spread.md)
   */
  'unicorn/consistent-empty-array-spread': null;

  /**
   * Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [consistent-existence-index-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/consistent-existence-index-check.md)
   */
  'unicorn/consistent-existence-index-check': null;

  /**
   * Move function definitions to the highest possible scope.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/consistent-function-scoping.md)
   */
  'unicorn/consistent-function-scoping': [
    {
      checkArrowFunctions?: boolean;
    }?,
  ];

  /**
   * Enforce correct `Error` subclassing.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/custom-error-definition.md)
   */
  'unicorn/custom-error-definition': null;

  /**
   * Enforce no spaces between braces.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [empty-brace-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/empty-brace-spaces.md)
   */
  'unicorn/empty-brace-spaces': null;

  /**
   * Enforce passing a `message` value when creating a built-in error.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/error-message.md)
   */
  'unicorn/error-message': null;

  /**
   * Require escape sequences to use uppercase or lowercase values.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/escape-case.md)
   */
  'unicorn/escape-case': [('uppercase' | 'lowercase')?];

  /**
   * Add expiration conditions to TODO comments.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/expiring-todo-comments.md)
   */
  'unicorn/expiring-todo-comments': [
    {
      terms?: string[];
      ignore?: any[];
      ignoreDatesOnPullRequests?: boolean;
      allowWarningComments?: boolean;
      date?: string;
    }?,
  ];

  /**
   * Enforce explicitly comparing the `length` or `size` property of a value.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/explicit-length-check.md)
   */
  'unicorn/explicit-length-check': [ExplicitLengthCheckOption?];

  /**
   * Enforce a case style for filenames.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/filename-case.md)
   */
  'unicorn/filename-case': [FilenameCaseOption?];

  /**
   * Enforce specific import styles per module.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [import-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/import-style.md)
   */
  'unicorn/import-style': ImportStyle.ImportStyleRuleConfig;

  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/new-for-builtins.md)
   */
  'unicorn/new-for-builtins': null;

  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-abusive-eslint-disable.md)
   */
  'unicorn/no-abusive-eslint-disable': null;

  /**
   * Disallow recursive access to `this` within getters and setters.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-accessor-recursion](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-accessor-recursion.md)
   */
  'unicorn/no-accessor-recursion': null;

  /**
   * Disallow anonymous functions and classes as the default export.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-anonymous-default-export](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-anonymous-default-export.md)
   */
  'unicorn/no-anonymous-default-export': null;

  /**
   * Prevent passing a function reference directly to iterator methods.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-array-callback-reference](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-array-callback-reference.md)
   */
  'unicorn/no-array-callback-reference': null;

  /**
   * Prefer `for…of` over the `forEach` method.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-array-for-each.md)
   */
  'unicorn/no-array-for-each': null;

  /**
   * Disallow using the `this` argument in array methods.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-array-method-this-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-array-method-this-argument.md)
   */
  'unicorn/no-array-method-this-argument': null;

  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-array-reduce.md)
   */
  'unicorn/no-array-reduce': [
    {
      allowSimpleOperations?: boolean;
    }?,
  ];

  /**
   * Prefer `Array#toReversed()` over `Array#reverse()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-array-reverse](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-array-reverse.md)
   */
  'unicorn/no-array-reverse': [
    {
      allowExpressionStatement?: boolean;
    }?,
  ];

  /**
   * Prefer `Array#toSorted()` over `Array#sort()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-array-sort](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-array-sort.md)
   */
  'unicorn/no-array-sort': [
    {
      allowExpressionStatement?: boolean;
    }?,
  ];

  /**
   * Disallow member access from await expression.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-await-expression-member.md)
   */
  'unicorn/no-await-expression-member': null;

  /**
   * Disallow using `await` in `Promise` method parameters.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-await-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-await-in-promise-methods.md)
   */
  'unicorn/no-await-in-promise-methods': null;

  /**
   * Do not use leading/trailing space between `console.log` parameters.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-console-spaces.md)
   */
  'unicorn/no-console-spaces': null;

  /**
   * Do not use `document.cookie` directly.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-document-cookie](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-document-cookie.md)
   */
  'unicorn/no-document-cookie': null;

  /**
   * Disallow empty files.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-empty-file.md)
   */
  'unicorn/no-empty-file': null;

  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-for-loop](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-for-loop.md)
   */
  'unicorn/no-for-loop': null;

  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-hex-escape.md)
   */
  'unicorn/no-hex-escape': null;

  /**
   * Disallow `instanceof` with built-in objects.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-instanceof-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-instanceof-builtins.md)
   */
  'unicorn/no-instanceof-builtins': [NoInstanceofBuiltinsOption?];

  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-invalid-fetch-options](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-invalid-fetch-options.md)
   */
  'unicorn/no-invalid-fetch-options': null;

  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-invalid-remove-event-listener.md)
   */
  'unicorn/no-invalid-remove-event-listener': null;

  /**
   * Disallow identifiers starting with `new` or `class`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-keyword-prefix](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-keyword-prefix.md)
   */
  'unicorn/no-keyword-prefix': [NoKeywordPrefixOption?];

  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-lonely-if](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-lonely-if.md)
   */
  'unicorn/no-lonely-if': null;

  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-magic-array-flat-depth](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-magic-array-flat-depth.md)
   */
  'unicorn/no-magic-array-flat-depth': null;

  /**
   * Disallow named usage of default import and export.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-named-default](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-named-default.md)
   */
  'unicorn/no-named-default': null;

  /**
   * Disallow negated conditions.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-negated-condition.md)
   */
  'unicorn/no-negated-condition': null;

  /**
   * Disallow negated expression in equality check.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-negation-in-equality-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-negation-in-equality-check.md)
   */
  'unicorn/no-negation-in-equality-check': null;

  /**
   * Disallow nested ternary expressions.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-nested-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-nested-ternary.md)
   */
  'unicorn/no-nested-ternary': null;

  /**
   * Disallow `new Array()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-new-array.md)
   */
  'unicorn/no-new-array': null;

  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-new-buffer.md)
   */
  'unicorn/no-new-buffer': null;

  /**
   * Disallow the use of the `null` literal.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-null.md)
   */
  'unicorn/no-null': [
    {
      checkStrictEquality?: boolean;
    }?,
  ];

  /**
   * Disallow the use of objects as default parameters.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-object-as-default-parameter.md)
   */
  'unicorn/no-object-as-default-parameter': null;

  /**
   * Disallow `process.exit()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-process-exit](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-process-exit.md)
   */
  'unicorn/no-process-exit': null;

  /**
   * Disallow passing single-element arrays to `Promise` methods.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-single-promise-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-single-promise-in-promise-methods.md)
   */
  'unicorn/no-single-promise-in-promise-methods': null;

  /**
   * Disallow classes that only have static members.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-static-only-class.md)
   */
  'unicorn/no-static-only-class': null;

  /**
   * Disallow `then` property.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-thenable.md)
   */
  'unicorn/no-thenable': null;

  /**
   * Disallow assigning `this` to a variable.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-this-assignment.md)
   */
  'unicorn/no-this-assignment': null;

  /**
   * Disallow comparing `undefined` using `typeof`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-typeof-undefined.md)
   */
  'unicorn/no-typeof-undefined': [
    {
      checkGlobalVariables?: boolean;
    }?,
  ];

  /**
   * Disallow using `1` as the `depth` argument of `Array#flat()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-unnecessary-array-flat-depth](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-unnecessary-array-flat-depth.md)
   */
  'unicorn/no-unnecessary-array-flat-depth': null;

  /**
   * Disallow using `.length` or `Infinity` as the `deleteCount` or `skipCount` argument of `Array#{splice,toSpliced}()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-unnecessary-array-splice-count](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-unnecessary-array-splice-count.md)
   */
  'unicorn/no-unnecessary-array-splice-count': null;

  /**
   * Disallow awaiting non-promise values.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-unnecessary-await.md)
   */
  'unicorn/no-unnecessary-await': null;

  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-unnecessary-polyfills](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-unnecessary-polyfills.md)
   */
  'unicorn/no-unnecessary-polyfills': [NoUnnecessaryPolyfillsOption?];

  /**
   * Disallow using `.length` or `Infinity` as the `end` argument of `{Array,String,TypedArray}#slice()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-unnecessary-slice-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-unnecessary-slice-end.md)
   */
  'unicorn/no-unnecessary-slice-end': null;

  /**
   * Disallow unreadable array destructuring.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-unreadable-array-destructuring.md)
   */
  'unicorn/no-unreadable-array-destructuring': null;

  /**
   * Disallow unreadable IIFEs.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-unreadable-iife.md)
   */
  'unicorn/no-unreadable-iife': null;

  /**
   * Disallow unused object properties.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-unused-properties.md)
   */
  'unicorn/no-unused-properties': null;

  /**
   * Disallow unnecessary `Error.captureStackTrace(…)`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-useless-error-capture-stack-trace](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-useless-error-capture-stack-trace.md)
   */
  'unicorn/no-useless-error-capture-stack-trace': null;

  /**
   * Disallow useless fallback when spreading in object literals.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-useless-fallback-in-spread.md)
   */
  'unicorn/no-useless-fallback-in-spread': null;

  /**
   * Disallow useless array length check.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-useless-length-check.md)
   */
  'unicorn/no-useless-length-check': null;

  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-useless-promise-resolve-reject.md)
   */
  'unicorn/no-useless-promise-resolve-reject': null;

  /**
   * Disallow unnecessary spread.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-useless-spread.md)
   */
  'unicorn/no-useless-spread': null;

  /**
   * Disallow useless case in switch statements.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-useless-switch-case.md)
   */
  'unicorn/no-useless-switch-case': null;

  /**
   * Disallow useless `undefined`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-useless-undefined.md)
   */
  'unicorn/no-useless-undefined': [
    {
      checkArguments?: boolean;
      checkArrowFunctionBody?: boolean;
    }?,
  ];

  /**
   * Disallow number literals with zero fractions or dangling dots.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/no-zero-fractions.md)
   */
  'unicorn/no-zero-fractions': null;

  /**
   * Enforce proper case for numeric literals.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [number-literal-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/number-literal-case.md)
   */
  'unicorn/number-literal-case': [NumberLiteralCaseOption?];

  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [numeric-separators-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/numeric-separators-style.md)
   */
  'unicorn/numeric-separators-style': [NumericSeparatorsStyleOption?];

  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-add-event-listener.md)
   */
  'unicorn/prefer-add-event-listener': [
    {
      excludedPackages?: string[];
    }?,
  ];

  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-array-find.md)
   */
  'unicorn/prefer-array-find': [
    {
      checkFromLast?: boolean;
    }?,
  ];

  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-array-flat.md)
   */
  'unicorn/prefer-array-flat': [
    {
      functions?: any[];
    }?,
  ];

  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-array-flat-map.md)
   */
  'unicorn/prefer-array-flat-map': null;

  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-array-index-of.md)
   */
  'unicorn/prefer-array-index-of': null;

  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-array-some.md)
   */
  'unicorn/prefer-array-some': null;

  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-at.md)
   */
  'unicorn/prefer-at': [
    {
      getLastElementFunctions?: any[];
      checkAllIndexAccess?: boolean;
    }?,
  ];

  /**
   * Prefer `BigInt` literals over the constructor.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-bigint-literals](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-bigint-literals.md)
   */
  'unicorn/prefer-bigint-literals': null;

  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-blob-reading-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-blob-reading-methods.md)
   */
  'unicorn/prefer-blob-reading-methods': null;

  /**
   * Prefer class field declarations over `this` assignments in constructors.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-class-fields](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-class-fields.md)
   */
  'unicorn/prefer-class-fields': null;

  /**
   * Prefer using `Element#classList.toggle()` to toggle class names.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-classlist-toggle](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-classlist-toggle.md)
   */
  'unicorn/prefer-classlist-toggle': null;

  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-code-point.md)
   */
  'unicorn/prefer-code-point': null;

  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-date-now.md)
   */
  'unicorn/prefer-date-now': null;

  /**
   * Prefer default parameters over reassignment.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-default-parameters.md)
   */
  'unicorn/prefer-default-parameters': null;

  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-dom-node-append.md)
   */
  'unicorn/prefer-dom-node-append': null;

  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-dom-node-dataset.md)
   */
  'unicorn/prefer-dom-node-dataset': null;

  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-dom-node-remove.md)
   */
  'unicorn/prefer-dom-node-remove': null;

  /**
   * Prefer `.textContent` over `.innerText`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-dom-node-text-content.md)
   */
  'unicorn/prefer-dom-node-text-content': null;

  /**
   * Prefer `EventTarget` over `EventEmitter`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-event-target.md)
   */
  'unicorn/prefer-event-target': null;

  /**
   * Prefer `export…from` when re-exporting.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-export-from.md)
   */
  'unicorn/prefer-export-from': [
    {
      ignoreUsedVariables?: boolean;
    }?,
  ];

  /**
   * Prefer `globalThis` over `window`, `self`, and `global`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-global-this](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-global-this.md)
   */
  'unicorn/prefer-global-this': null;

  /**
   * Prefer `import.meta.{dirname,filename}` over legacy techniques for getting file paths.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-import-meta-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-import-meta-properties.md)
   */
  'unicorn/prefer-import-meta-properties': null;

  /**
   * Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-includes.md)
   */
  'unicorn/prefer-includes': null;

  /**
   * Prefer reading a JSON file as a buffer.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-json-parse-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-json-parse-buffer.md)
   */
  'unicorn/prefer-json-parse-buffer': null;

  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-keyboard-event-key.md)
   */
  'unicorn/prefer-keyboard-event-key': null;

  /**
   * Prefer using a logical operator over a ternary.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-logical-operator-over-ternary.md)
   */
  'unicorn/prefer-logical-operator-over-ternary': null;

  /**
   * Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-math-min-max](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-math-min-max.md)
   */
  'unicorn/prefer-math-min-max': null;

  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-math-trunc](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-math-trunc.md)
   */
  'unicorn/prefer-math-trunc': null;

  /**
   * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-modern-dom-apis.md)
   */
  'unicorn/prefer-modern-dom-apis': null;

  /**
   * Prefer modern `Math` APIs over legacy patterns.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-modern-math-apis.md)
   */
  'unicorn/prefer-modern-math-apis': null;

  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-module.md)
   */
  'unicorn/prefer-module': null;

  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-native-coercion-functions.md)
   */
  'unicorn/prefer-native-coercion-functions': null;

  /**
   * Prefer negative index over `.length - index` when possible.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-negative-index.md)
   */
  'unicorn/prefer-negative-index': null;

  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-node-protocol.md)
   */
  'unicorn/prefer-node-protocol': null;

  /**
   * Prefer `Number` static properties over global ones.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-number-properties.md)
   */
  'unicorn/prefer-number-properties': [
    {
      checkInfinity?: boolean;
      checkNaN?: boolean;
    }?,
  ];

  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-object-from-entries.md)
   */
  'unicorn/prefer-object-from-entries': [
    {
      functions?: any[];
    }?,
  ];

  /**
   * Prefer omitting the `catch` binding parameter.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-optional-catch-binding.md)
   */
  'unicorn/prefer-optional-catch-binding': null;

  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-prototype-methods.md)
   */
  'unicorn/prefer-prototype-methods': null;

  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-query-selector.md)
   */
  'unicorn/prefer-query-selector': null;

  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-reflect-apply.md)
   */
  'unicorn/prefer-reflect-apply': null;

  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-regexp-test.md)
   */
  'unicorn/prefer-regexp-test': null;

  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-set-has](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-set-has.md)
   */
  'unicorn/prefer-set-has': null;

  /**
   * Prefer using `Set#size` instead of `Array#length`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-set-size](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-set-size.md)
   */
  'unicorn/prefer-set-size': null;

  /**
   * Enforce combining multiple `Array#push()`, `Element#classList.{add,remove}()`, and `importScripts()` into one call.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-single-call](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-single-call.md)
   */
  'unicorn/prefer-single-call': [
    {
      ignore?: any[];
    }?,
  ];

  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-spread.md)
   */
  'unicorn/prefer-spread': null;

  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-string-raw](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-string-raw.md)
   */
  'unicorn/prefer-string-raw': null;

  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-string-replace-all.md)
   */
  'unicorn/prefer-string-replace-all': null;

  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-string-slice.md)
   */
  'unicorn/prefer-string-slice': null;

  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-string-starts-ends-with.md)
   */
  'unicorn/prefer-string-starts-ends-with': null;

  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-string-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-string-trim-start-end.md)
   */
  'unicorn/prefer-string-trim-start-end': null;

  /**
   * Prefer using `structuredClone` to create a deep clone.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-structured-clone](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-structured-clone.md)
   */
  'unicorn/prefer-structured-clone': [
    {
      functions?: any[];
    }?,
  ];

  /**
   * Prefer `switch` over multiple `else-if`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-switch](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-switch.md)
   */
  'unicorn/prefer-switch': [PreferSwitchOption?];

  /**
   * Prefer ternary expressions over simple `if-else` statements.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-ternary.md)
   */
  'unicorn/prefer-ternary': [('always' | 'only-single-line')?];

  /**
   * Prefer top-level await over top-level promises and async function calls.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-top-level-await.md)
   */
  'unicorn/prefer-top-level-await': null;

  /**
   * Enforce throwing `TypeError` in type checking conditions.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prefer-type-error.md)
   */
  'unicorn/prefer-type-error': null;

  /**
   * Prevent abbreviations.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [prevent-abbreviations](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/prevent-abbreviations.md)
   */
  'unicorn/prevent-abbreviations': PreventAbbreviations.PreventAbbreviationsRuleConfig;

  /**
   * Enforce consistent relative URL style.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [relative-url-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/relative-url-style.md)
   */
  'unicorn/relative-url-style': [('never' | 'always')?];

  /**
   * Enforce using the separator argument with `Array#join()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/require-array-join-separator.md)
   */
  'unicorn/require-array-join-separator': null;

  /**
   * Require non-empty module attributes for imports and exports.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [require-module-attributes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/require-module-attributes.md)
   */
  'unicorn/require-module-attributes': null;

  /**
   * Require non-empty specifier list in import and export statements.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [require-module-specifiers](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/require-module-specifiers.md)
   */
  'unicorn/require-module-specifiers': null;

  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [require-number-to-fixed-digits-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/require-number-to-fixed-digits-argument.md)
   */
  'unicorn/require-number-to-fixed-digits-argument': null;

  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [require-post-message-target-origin](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/require-post-message-target-origin.md)
   */
  'unicorn/require-post-message-target-origin': null;

  /**
   * Enforce better string content.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [string-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/string-content.md)
   */
  'unicorn/string-content': [StringContentOption?];

  /**
   * Enforce consistent brace style for `case` clauses.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [switch-case-braces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/switch-case-braces.md)
   */
  'unicorn/switch-case-braces': [('always' | 'avoid')?];

  /**
   * Fix whitespace-insensitive template indentation.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [template-indent](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/template-indent.md)
   */
  'unicorn/template-indent': [TemplateIndentOption?];

  /**
   * Enforce consistent case for text encoding identifiers.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [text-encoding-identifier-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/text-encoding-identifier-case.md)
   */
  'unicorn/text-encoding-identifier-case': null;

  /**
   * Require `new` when creating an error.
   * @preset `unicorn/recommended`, `unicorn/unopinionated`, `unicorn/all`, `unicorn/flat/recommended`, `unicorn/flat/all`
   * @see [throw-new-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/rules/throw-new-error.md)
   */
  'unicorn/throw-new-error': null;

  /**
   * Replaced by `unicorn/no-instanceof-builtins` which covers more cases.
   * @deprecated
   * @see [no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/deprecated-rules.md#no-instanceof-array)
   */
  'unicorn/no-instanceof-array': null;

  /**
   * Replaced by `unicorn/no-unnecessary-slice-end` which covers more cases.
   * @deprecated
   * @see [no-length-as-slice-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/deprecated-rules.md#no-length-as-slice-end)
   */
  'unicorn/no-length-as-slice-end': null;

  /**
   * Replaced by `unicorn/prefer-single-call` which covers more cases.
   * @deprecated
   * @see [no-array-push-push](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v61.0.2/docs/deprecated-rules.md#no-array-push-push)
   */
  'unicorn/no-array-push-push': null;
}

export type UnicornRulesObject = RulesObject<UnicornRules>;
