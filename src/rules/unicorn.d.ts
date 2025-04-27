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
   * @see [better-regex](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/better-regex.md)
   */
  'unicorn/better-regex': [
    {
      sortCharacterClasses?: boolean;
    }?,
  ];

  /**
   * Enforce a specific parameter name in catch clauses.
   * @see [catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/catch-error-name.md)
   */
  'unicorn/catch-error-name': [
    {
      name?: string;
      ignore?: any[];
    }?,
  ];

  /**
   * Enforce consistent assertion style with `node:assert`.
   * @see [consistent-assert](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-assert.md)
   */
  'unicorn/consistent-assert': null;

  /**
   * Prefer passing `Date` directly to the constructor when cloning.
   * @see [consistent-date-clone](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-date-clone.md)
   */
  'unicorn/consistent-date-clone': null;

  /**
   * Use destructured variables over properties.
   * @see [consistent-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-destructuring.md)
   */
  'unicorn/consistent-destructuring': null;

  /**
   * Prefer consistent types when spreading a ternary in an array literal.
   * @see [consistent-empty-array-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-empty-array-spread.md)
   */
  'unicorn/consistent-empty-array-spread': null;

  /**
   * Enforce consistent style for element existence checks with `indexOf()`, `lastIndexOf()`, `findIndex()`, and `findLastIndex()`.
   * @see [consistent-existence-index-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-existence-index-check.md)
   */
  'unicorn/consistent-existence-index-check': null;

  /**
   * Move function definitions to the highest possible scope.
   * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/consistent-function-scoping.md)
   */
  'unicorn/consistent-function-scoping': [
    {
      checkArrowFunctions?: boolean;
    }?,
  ];

  /**
   * Enforce correct `Error` subclassing.
   * @see [custom-error-definition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/custom-error-definition.md)
   */
  'unicorn/custom-error-definition': null;

  /**
   * Enforce no spaces between braces.
   * @see [empty-brace-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/empty-brace-spaces.md)
   */
  'unicorn/empty-brace-spaces': null;

  /**
   * Enforce passing a `message` value when creating a built-in error.
   * @see [error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/error-message.md)
   */
  'unicorn/error-message': null;

  /**
   * Require escape sequences to use uppercase or lowercase values.
   * @see [escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/escape-case.md)
   */
  'unicorn/escape-case': [('uppercase' | 'lowercase')?];

  /**
   * Add expiration conditions to TODO comments.
   * @see [expiring-todo-comments](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/expiring-todo-comments.md)
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
   * @see [explicit-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/explicit-length-check.md)
   */
  'unicorn/explicit-length-check': [ExplicitLengthCheckOption?];

  /**
   * Enforce a case style for filenames.
   * @see [filename-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/filename-case.md)
   */
  'unicorn/filename-case': [FilenameCaseOption?];

  /**
   * Enforce specific import styles per module.
   * @see [import-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/import-style.md)
   */
  'unicorn/import-style': ImportStyle.ImportStyleRuleConfig;

  /**
   * Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`.
   * @see [new-for-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/new-for-builtins.md)
   */
  'unicorn/new-for-builtins': null;

  /**
   * Enforce specifying rules to disable in `eslint-disable` comments.
   * @see [no-abusive-eslint-disable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-abusive-eslint-disable.md)
   */
  'unicorn/no-abusive-eslint-disable': null;

  /**
   * Disallow recursive access to `this` within getters and setters.
   * @see [no-accessor-recursion](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-accessor-recursion.md)
   */
  'unicorn/no-accessor-recursion': null;

  /**
   * Disallow anonymous functions and classes as the default export.
   * @see [no-anonymous-default-export](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-anonymous-default-export.md)
   */
  'unicorn/no-anonymous-default-export': null;

  /**
   * Prevent passing a function reference directly to iterator methods.
   * @see [no-array-callback-reference](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-array-callback-reference.md)
   */
  'unicorn/no-array-callback-reference': null;

  /**
   * Prefer `for…of` over the `forEach` method.
   * @see [no-array-for-each](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-array-for-each.md)
   */
  'unicorn/no-array-for-each': null;

  /**
   * Disallow using the `this` argument in array methods.
   * @see [no-array-method-this-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-array-method-this-argument.md)
   */
  'unicorn/no-array-method-this-argument': null;

  /**
   * Enforce combining multiple `Array#push()` into one call.
   * @see [no-array-push-push](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-array-push-push.md)
   */
  'unicorn/no-array-push-push': [
    {
      ignore?: any[];
    }?,
  ];

  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   * @see [no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-array-reduce.md)
   */
  'unicorn/no-array-reduce': [
    {
      allowSimpleOperations?: boolean;
    }?,
  ];

  /**
   * Disallow member access from await expression.
   * @see [no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-await-expression-member.md)
   */
  'unicorn/no-await-expression-member': null;

  /**
   * Disallow using `await` in `Promise` method parameters.
   * @see [no-await-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-await-in-promise-methods.md)
   */
  'unicorn/no-await-in-promise-methods': null;

  /**
   * Do not use leading/trailing space between `console.log` parameters.
   * @see [no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-console-spaces.md)
   */
  'unicorn/no-console-spaces': null;

  /**
   * Do not use `document.cookie` directly.
   * @see [no-document-cookie](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-document-cookie.md)
   */
  'unicorn/no-document-cookie': null;

  /**
   * Disallow empty files.
   * @see [no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-empty-file.md)
   */
  'unicorn/no-empty-file': null;

  /**
   * Do not use a `for` loop that can be replaced with a `for-of` loop.
   * @see [no-for-loop](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-for-loop.md)
   */
  'unicorn/no-for-loop': null;

  /**
   * Enforce the use of Unicode escapes instead of hexadecimal escapes.
   * @see [no-hex-escape](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-hex-escape.md)
   */
  'unicorn/no-hex-escape': null;

  /**
   * Disallow `instanceof` with built-in objects.
   * @see [no-instanceof-builtins](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-instanceof-builtins.md)
   */
  'unicorn/no-instanceof-builtins': [NoInstanceofBuiltinsOption?];

  /**
   * Disallow invalid options in `fetch()` and `new Request()`.
   * @see [no-invalid-fetch-options](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-invalid-fetch-options.md)
   */
  'unicorn/no-invalid-fetch-options': null;

  /**
   * Prevent calling `EventTarget#removeEventListener()` with the result of an expression.
   * @see [no-invalid-remove-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-invalid-remove-event-listener.md)
   */
  'unicorn/no-invalid-remove-event-listener': null;

  /**
   * Disallow identifiers starting with `new` or `class`.
   * @see [no-keyword-prefix](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-keyword-prefix.md)
   */
  'unicorn/no-keyword-prefix': [NoKeywordPrefixOption?];

  /**
   * Disallow using `.length` as the `end` argument of `{Array,String,TypedArray}#slice()`.
   * @see [no-length-as-slice-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-length-as-slice-end.md)
   */
  'unicorn/no-length-as-slice-end': null;

  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   * @see [no-lonely-if](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-lonely-if.md)
   */
  'unicorn/no-lonely-if': null;

  /**
   * Disallow a magic number as the `depth` argument in `Array#flat(…).`.
   * @see [no-magic-array-flat-depth](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-magic-array-flat-depth.md)
   */
  'unicorn/no-magic-array-flat-depth': null;

  /**
   * Disallow named usage of default import and export.
   * @see [no-named-default](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-named-default.md)
   */
  'unicorn/no-named-default': null;

  /**
   * Disallow negated conditions.
   * @see [no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-negated-condition.md)
   */
  'unicorn/no-negated-condition': null;

  /**
   * Disallow negated expression in equality check.
   * @see [no-negation-in-equality-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-negation-in-equality-check.md)
   */
  'unicorn/no-negation-in-equality-check': null;

  /**
   * Disallow nested ternary expressions.
   * @see [no-nested-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-nested-ternary.md)
   */
  'unicorn/no-nested-ternary': null;

  /**
   * Disallow `new Array()`.
   * @see [no-new-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-new-array.md)
   */
  'unicorn/no-new-array': null;

  /**
   * Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`.
   * @see [no-new-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-new-buffer.md)
   */
  'unicorn/no-new-buffer': null;

  /**
   * Disallow the use of the `null` literal.
   * @see [no-null](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-null.md)
   */
  'unicorn/no-null': [
    {
      checkStrictEquality?: boolean;
    }?,
  ];

  /**
   * Disallow the use of objects as default parameters.
   * @see [no-object-as-default-parameter](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-object-as-default-parameter.md)
   */
  'unicorn/no-object-as-default-parameter': null;

  /**
   * Disallow `process.exit()`.
   * @see [no-process-exit](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-process-exit.md)
   */
  'unicorn/no-process-exit': null;

  /**
   * Disallow passing single-element arrays to `Promise` methods.
   * @see [no-single-promise-in-promise-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-single-promise-in-promise-methods.md)
   */
  'unicorn/no-single-promise-in-promise-methods': null;

  /**
   * Disallow classes that only have static members.
   * @see [no-static-only-class](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-static-only-class.md)
   */
  'unicorn/no-static-only-class': null;

  /**
   * Disallow `then` property.
   * @see [no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-thenable.md)
   */
  'unicorn/no-thenable': null;

  /**
   * Disallow assigning `this` to a variable.
   * @see [no-this-assignment](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-this-assignment.md)
   */
  'unicorn/no-this-assignment': null;

  /**
   * Disallow comparing `undefined` using `typeof`.
   * @see [no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-typeof-undefined.md)
   */
  'unicorn/no-typeof-undefined': [
    {
      checkGlobalVariables?: boolean;
    }?,
  ];

  /**
   * Disallow awaiting non-promise values.
   * @see [no-unnecessary-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-unnecessary-await.md)
   */
  'unicorn/no-unnecessary-await': null;

  /**
   * Enforce the use of built-in methods instead of unnecessary polyfills.
   * @see [no-unnecessary-polyfills](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-unnecessary-polyfills.md)
   */
  'unicorn/no-unnecessary-polyfills': [NoUnnecessaryPolyfillsOption?];

  /**
   * Disallow unreadable array destructuring.
   * @see [no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-unreadable-array-destructuring.md)
   */
  'unicorn/no-unreadable-array-destructuring': null;

  /**
   * Disallow unreadable IIFEs.
   * @see [no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-unreadable-iife.md)
   */
  'unicorn/no-unreadable-iife': null;

  /**
   * Disallow unused object properties.
   * @see [no-unused-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-unused-properties.md)
   */
  'unicorn/no-unused-properties': null;

  /**
   * Disallow useless fallback when spreading in object literals.
   * @see [no-useless-fallback-in-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-fallback-in-spread.md)
   */
  'unicorn/no-useless-fallback-in-spread': null;

  /**
   * Disallow useless array length check.
   * @see [no-useless-length-check](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-length-check.md)
   */
  'unicorn/no-useless-length-check': null;

  /**
   * Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks.
   * @see [no-useless-promise-resolve-reject](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-promise-resolve-reject.md)
   */
  'unicorn/no-useless-promise-resolve-reject': null;

  /**
   * Disallow unnecessary spread.
   * @see [no-useless-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-spread.md)
   */
  'unicorn/no-useless-spread': null;

  /**
   * Disallow useless case in switch statements.
   * @see [no-useless-switch-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-switch-case.md)
   */
  'unicorn/no-useless-switch-case': null;

  /**
   * Disallow useless `undefined`.
   * @see [no-useless-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-useless-undefined.md)
   */
  'unicorn/no-useless-undefined': [
    {
      checkArguments?: boolean;
      checkArrowFunctionBody?: boolean;
    }?,
  ];

  /**
   * Disallow number literals with zero fractions or dangling dots.
   * @see [no-zero-fractions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/no-zero-fractions.md)
   */
  'unicorn/no-zero-fractions': null;

  /**
   * Enforce proper case for numeric literals.
   * @see [number-literal-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/number-literal-case.md)
   */
  'unicorn/number-literal-case': [NumberLiteralCaseOption?];

  /**
   * Enforce the style of numeric separators by correctly grouping digits.
   * @see [numeric-separators-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/numeric-separators-style.md)
   */
  'unicorn/numeric-separators-style': [NumericSeparatorsStyleOption?];

  /**
   * Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions.
   * @see [prefer-add-event-listener](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-add-event-listener.md)
   */
  'unicorn/prefer-add-event-listener': [
    {
      excludedPackages?: string[];
    }?,
  ];

  /**
   * Prefer `.find(…)` and `.findLast(…)` over the first or last element from `.filter(…)`.
   * @see [prefer-array-find](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-array-find.md)
   */
  'unicorn/prefer-array-find': [
    {
      checkFromLast?: boolean;
    }?,
  ];

  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   * @see [prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-array-flat-map.md)
   */
  'unicorn/prefer-array-flat-map': null;

  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   * @see [prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-array-flat.md)
   */
  'unicorn/prefer-array-flat': [
    {
      functions?: any[];
    }?,
  ];

  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   * @see [prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-array-index-of.md)
   */
  'unicorn/prefer-array-index-of': null;

  /**
   * Prefer `.some(…)` over `.filter(…).length` check and `.{find,findLast,findIndex,findLastIndex}(…)`.
   * @see [prefer-array-some](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-array-some.md)
   */
  'unicorn/prefer-array-some': null;

  /**
   * Prefer `.at()` method for index access and `String#charAt()`.
   * @see [prefer-at](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-at.md)
   */
  'unicorn/prefer-at': [
    {
      getLastElementFunctions?: any[];
      checkAllIndexAccess?: boolean;
    }?,
  ];

  /**
   * Prefer `Blob#arrayBuffer()` over `FileReader#readAsArrayBuffer(…)` and `Blob#text()` over `FileReader#readAsText(…)`.
   * @see [prefer-blob-reading-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-blob-reading-methods.md)
   */
  'unicorn/prefer-blob-reading-methods': null;

  /**
   * Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`.
   * @see [prefer-code-point](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-code-point.md)
   */
  'unicorn/prefer-code-point': null;

  /**
   * Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch.
   * @see [prefer-date-now](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-date-now.md)
   */
  'unicorn/prefer-date-now': null;

  /**
   * Prefer default parameters over reassignment.
   * @see [prefer-default-parameters](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-default-parameters.md)
   */
  'unicorn/prefer-default-parameters': null;

  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   * @see [prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-dom-node-append.md)
   */
  'unicorn/prefer-dom-node-append': null;

  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   * @see [prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-dom-node-dataset.md)
   */
  'unicorn/prefer-dom-node-dataset': null;

  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   * @see [prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-dom-node-remove.md)
   */
  'unicorn/prefer-dom-node-remove': null;

  /**
   * Prefer `.textContent` over `.innerText`.
   * @see [prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-dom-node-text-content.md)
   */
  'unicorn/prefer-dom-node-text-content': null;

  /**
   * Prefer `EventTarget` over `EventEmitter`.
   * @see [prefer-event-target](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-event-target.md)
   */
  'unicorn/prefer-event-target': null;

  /**
   * Prefer `export…from` when re-exporting.
   * @see [prefer-export-from](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-export-from.md)
   */
  'unicorn/prefer-export-from': [
    {
      ignoreUsedVariables?: boolean;
    }?,
  ];

  /**
   * Prefer `globalThis` over `window`, `self`, and `global`.
   * @see [prefer-global-this](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-global-this.md)
   */
  'unicorn/prefer-global-this': null;

  /**
   * Prefer `.includes()` over `.indexOf()`, `.lastIndexOf()`, and `Array#some()` when checking for existence or non-existence.
   * @see [prefer-includes](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-includes.md)
   */
  'unicorn/prefer-includes': null;

  /**
   * Prefer reading a JSON file as a buffer.
   * @see [prefer-json-parse-buffer](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-json-parse-buffer.md)
   */
  'unicorn/prefer-json-parse-buffer': null;

  /**
   * Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`.
   * @see [prefer-keyboard-event-key](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-keyboard-event-key.md)
   */
  'unicorn/prefer-keyboard-event-key': null;

  /**
   * Prefer using a logical operator over a ternary.
   * @see [prefer-logical-operator-over-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-logical-operator-over-ternary.md)
   */
  'unicorn/prefer-logical-operator-over-ternary': null;

  /**
   * Prefer `Math.min()` and `Math.max()` over ternaries for simple comparisons.
   * @see [prefer-math-min-max](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-math-min-max.md)
   */
  'unicorn/prefer-math-min-max': null;

  /**
   * Enforce the use of `Math.trunc` instead of bitwise operators.
   * @see [prefer-math-trunc](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-math-trunc.md)
   */
  'unicorn/prefer-math-trunc': null;

  /**
   * Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`.
   * @see [prefer-modern-dom-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-modern-dom-apis.md)
   */
  'unicorn/prefer-modern-dom-apis': null;

  /**
   * Prefer modern `Math` APIs over legacy patterns.
   * @see [prefer-modern-math-apis](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-modern-math-apis.md)
   */
  'unicorn/prefer-modern-math-apis': null;

  /**
   * Prefer JavaScript modules (ESM) over CommonJS.
   * @see [prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-module.md)
   */
  'unicorn/prefer-module': null;

  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   * @see [prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-native-coercion-functions.md)
   */
  'unicorn/prefer-native-coercion-functions': null;

  /**
   * Prefer negative index over `.length - index` when possible.
   * @see [prefer-negative-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-negative-index.md)
   */
  'unicorn/prefer-negative-index': null;

  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   * @see [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-node-protocol.md)
   */
  'unicorn/prefer-node-protocol': null;

  /**
   * Prefer `Number` static properties over global ones.
   * @see [prefer-number-properties](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-number-properties.md)
   */
  'unicorn/prefer-number-properties': [
    {
      checkInfinity?: boolean;
      checkNaN?: boolean;
    }?,
  ];

  /**
   * Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object.
   * @see [prefer-object-from-entries](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-object-from-entries.md)
   */
  'unicorn/prefer-object-from-entries': [
    {
      functions?: any[];
    }?,
  ];

  /**
   * Prefer omitting the `catch` binding parameter.
   * @see [prefer-optional-catch-binding](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-optional-catch-binding.md)
   */
  'unicorn/prefer-optional-catch-binding': null;

  /**
   * Prefer borrowing methods from the prototype instead of the instance.
   * @see [prefer-prototype-methods](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-prototype-methods.md)
   */
  'unicorn/prefer-prototype-methods': null;

  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()` and `.getElementsByName()`.
   * @see [prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-query-selector.md)
   */
  'unicorn/prefer-query-selector': null;

  /**
   * Prefer `Reflect.apply()` over `Function#apply()`.
   * @see [prefer-reflect-apply](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-reflect-apply.md)
   */
  'unicorn/prefer-reflect-apply': null;

  /**
   * Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`.
   * @see [prefer-regexp-test](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-regexp-test.md)
   */
  'unicorn/prefer-regexp-test': null;

  /**
   * Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence.
   * @see [prefer-set-has](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-set-has.md)
   */
  'unicorn/prefer-set-has': null;

  /**
   * Prefer using `Set#size` instead of `Array#length`.
   * @see [prefer-set-size](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-set-size.md)
   */
  'unicorn/prefer-set-size': null;

  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.
   * @see [prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-spread.md)
   */
  'unicorn/prefer-spread': null;

  /**
   * Prefer using the `String.raw` tag to avoid escaping `\`.
   * @see [prefer-string-raw](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-string-raw.md)
   */
  'unicorn/prefer-string-raw': null;

  /**
   * Prefer `String#replaceAll()` over regex searches with the global flag.
   * @see [prefer-string-replace-all](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-string-replace-all.md)
   */
  'unicorn/prefer-string-replace-all': null;

  /**
   * Prefer `String#slice()` over `String#substr()` and `String#substring()`.
   * @see [prefer-string-slice](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-string-slice.md)
   */
  'unicorn/prefer-string-slice': null;

  /**
   * Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`.
   * @see [prefer-string-starts-ends-with](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-string-starts-ends-with.md)
   */
  'unicorn/prefer-string-starts-ends-with': null;

  /**
   * Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`.
   * @see [prefer-string-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-string-trim-start-end.md)
   */
  'unicorn/prefer-string-trim-start-end': null;

  /**
   * Prefer using `structuredClone` to create a deep clone.
   * @see [prefer-structured-clone](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-structured-clone.md)
   */
  'unicorn/prefer-structured-clone': [
    {
      functions?: any[];
    }?,
  ];

  /**
   * Prefer `switch` over multiple `else-if`.
   * @see [prefer-switch](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-switch.md)
   */
  'unicorn/prefer-switch': [PreferSwitchOption?];

  /**
   * Prefer ternary expressions over simple `if-else` statements.
   * @see [prefer-ternary](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-ternary.md)
   */
  'unicorn/prefer-ternary': [('always' | 'only-single-line')?];

  /**
   * Prefer top-level await over top-level promises and async function calls.
   * @see [prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-top-level-await.md)
   */
  'unicorn/prefer-top-level-await': null;

  /**
   * Enforce throwing `TypeError` in type checking conditions.
   * @see [prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prefer-type-error.md)
   */
  'unicorn/prefer-type-error': null;

  /**
   * Prevent abbreviations.
   * @see [prevent-abbreviations](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/prevent-abbreviations.md)
   */
  'unicorn/prevent-abbreviations': PreventAbbreviations.PreventAbbreviationsRuleConfig;

  /**
   * Enforce consistent relative URL style.
   * @see [relative-url-style](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/relative-url-style.md)
   */
  'unicorn/relative-url-style': [('never' | 'always')?];

  /**
   * Enforce using the separator argument with `Array#join()`.
   * @see [require-array-join-separator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/require-array-join-separator.md)
   */
  'unicorn/require-array-join-separator': null;

  /**
   * Enforce using the digits argument with `Number#toFixed()`.
   * @see [require-number-to-fixed-digits-argument](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/require-number-to-fixed-digits-argument.md)
   */
  'unicorn/require-number-to-fixed-digits-argument': null;

  /**
   * Enforce using the `targetOrigin` argument with `window.postMessage()`.
   * @see [require-post-message-target-origin](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/require-post-message-target-origin.md)
   */
  'unicorn/require-post-message-target-origin': null;

  /**
   * Enforce better string content.
   * @see [string-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/string-content.md)
   */
  'unicorn/string-content': [StringContentOption?];

  /**
   * Enforce consistent brace style for `case` clauses.
   * @see [switch-case-braces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/switch-case-braces.md)
   */
  'unicorn/switch-case-braces': [('always' | 'avoid')?];

  /**
   * Fix whitespace-insensitive template indentation.
   * @see [template-indent](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/template-indent.md)
   */
  'unicorn/template-indent': [TemplateIndentOption?];

  /**
   * Enforce consistent case for text encoding identifiers.
   * @see [text-encoding-identifier-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/text-encoding-identifier-case.md)
   */
  'unicorn/text-encoding-identifier-case': null;

  /**
   * Require `new` when creating an error.
   * @see [throw-new-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/rules/throw-new-error.md)
   */
  'unicorn/throw-new-error': null;

  /**
   * Replaced by `unicorn/no-instanceof-builtins` which covers more cases.
   * @deprecated
   * @see [no-instanceof-array](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v58.0.0/docs/deprecated-rules.md#no-instanceof-array)
   */
  'unicorn/no-instanceof-array': null;
}

export type UnicornRulesObject = RulesObject<UnicornRules>;
