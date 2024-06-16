import type { EmptyRuleConfig, RuleConfig } from '../rule-config';

export interface NoUnresolvedOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
  caseSensitive?: boolean;
  caseSensitiveStrict?: boolean;
}

export interface NamespaceOption {
  /**
   * If `false`, will report computed (and thus, un-lintable) references to namespace members.
   */
  allowComputed?: boolean;
}

export interface NoNamespaceOption {
  ignore?: string[];
  [k: string]: any;
}

export type ExtensionsOption =
  | []
  | ['always' | 'ignorePackages' | 'never']
  | ['always' | 'ignorePackages' | 'never']
  | [
      'always' | 'ignorePackages' | 'never',
      {
        pattern?: {
          /**
           */
          [k: string]: 'always' | 'ignorePackages' | 'never';
        };
        ignorePackages?: boolean;
        [k: string]: any;
      },
    ]
  | [
      {
        pattern?: {
          /**
           */
          [k: string]: 'always' | 'ignorePackages' | 'never';
        };
        ignorePackages?: boolean;
        [k: string]: any;
      },
    ]
  | [
      {
        /**
         */
        [k: string]: 'always' | 'ignorePackages' | 'never';
      },
    ]
  | ['always' | 'ignorePackages' | 'never']
  | [
      'always' | 'ignorePackages' | 'never',
      {
        /**
         */
        [k: string]: 'always' | 'ignorePackages' | 'never';
      },
    ];

export interface NoRestrictedPathsOption {
  /**
   * @minItems 1
   */
  zones?: [
    {
      target?: string | string[];
      from?: string | string[];
      except?: string[];
      message?: string;
    },
    ...{
      target?: string | string[];
      from?: string | string[];
      except?: string[];
      message?: string;
    }[],
  ];
  basePath?: string;
}

export type NoInternalModulesOption =
  | {
      allow?: string[];
    }
  | {
      forbid?: string[];
    };

export interface NoRelativePackagesOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
}

export interface NoRelativeParentImportsOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
}

export interface NoCycleOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
  maxDepth?: number | '∞';
  /**
   * ignore external modules
   */
  ignoreExternal?: boolean;
  /**
   * Allow cyclic dependency if there is at least one dynamic import in the chain
   */
  allowUnsafeDynamicCyclicDependency?: boolean;
}

export namespace NoAnonymousDefaultExport {
  export interface NoAnonymousDefaultExportOption {
    /**
     * If `false`, will report default export of an array
     */
    allowArray?: boolean;
    /**
     * If `false`, will report default export of an arrow function
     */
    allowArrowFunction?: boolean;
    /**
     * If `false`, will report default export of a function call
     */
    allowCallExpression?: boolean;
    /**
     * If `false`, will report default export of an anonymous class
     */
    allowAnonymousClass?: boolean;
    /**
     * If `false`, will report default export of an anonymous function
     */
    allowAnonymousFunction?: boolean;
    /**
     * If `false`, will report default export of a literal
     */
    allowLiteral?: boolean;
    /**
     * If `false`, will report default export of an object expression
     */
    allowObject?: boolean;
    /**
     * If `false`, will report default export of a class instantiation
     */
    allowNew?: boolean;
  }

  export type NoAnonymousDefaultExportRuleConfig = [
    NoAnonymousDefaultExportOption?,
  ];
}
export namespace NoUnusedModules {
  export type NoUnusedModulesOption = (
    | {
        unusedExports: true;
        src?: {
          [k: string]: any;
        };
        [k: string]: any;
      }
    | {
        missingExports: true;
        [k: string]: any;
      }
  ) & {
    /**
     * files/paths to be analyzed (only for unused exports)
     */
    src?: string[];
    /**
     * files/paths for which unused exports will not be reported (e.g module entry points)
     */
    ignoreExports?: string[];
    /**
     * report modules without any exports
     */
    missingExports?: boolean;
    /**
     * report exports without any usage
     */
    unusedExports?: boolean;
    [k: string]: any;
  };

  export type NoUnusedModulesRuleConfig = [NoUnusedModulesOption?];
}

export type NoCommonjsOption =
  | []
  | ['allow-primitive-modules']
  | [
      {
        allowPrimitiveModules?: boolean;
        allowRequire?: boolean;
        allowConditionalRequire?: boolean;
      },
    ];

export interface NoDuplicatesOption {
  considerQueryString?: boolean;
  'prefer-inline'?: boolean;
}

export interface NoExtraneousDependenciesOption {
  devDependencies?: boolean | any[];
  optionalDependencies?: boolean | any[];
  peerDependencies?: boolean | any[];
  bundledDependencies?: boolean | any[];
  packageDir?: string | any[];
  includeInternal?: boolean;
  includeTypes?: boolean;
}

export interface NoAbsolutePathOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
}

export interface OrderOption {
  groups?: any[];
  pathGroupsExcludedImportTypes?: any[];
  distinctGroup?: boolean;
  pathGroups?: {
    pattern: string;
    patternOptions?: {
      [k: string]: any;
    };
    group:
      | 'builtin'
      | 'external'
      | 'internal'
      | 'unknown'
      | 'parent'
      | 'sibling'
      | 'index'
      | 'object'
      | 'type';
    position?: 'after' | 'before';
  }[];
  'newlines-between'?:
    | 'ignore'
    | 'always'
    | 'always-and-inside-groups'
    | 'never';
  alphabetize?: {
    caseInsensitive?: boolean;
    order?: 'ignore' | 'asc' | 'desc';
    orderImportKind?: 'ignore' | 'asc' | 'desc';
  };
  warnOnUnassignedImports?: boolean;
}

export type NewlineAfterImportRuleConfig = [
  {
    count?: number;
    exactCount?: boolean;
    considerComments?: boolean;
  }?,
];

export interface PreferDefaultExportOption {
  target?: 'single' | 'any';
}

export interface NoUnassignedImportOption {
  devDependencies?: boolean | any[];
  optionalDependencies?: boolean | any[];
  peerDependencies?: boolean | any[];
  allow?: string[];
}

export type NoUselessPathSegmentsRuleConfig = [
  {
    commonjs?: boolean;
    noUselessIndex?: boolean;
  }?,
];

export interface DynamicImportChunknameOption {
  importFunctions?: string[];
  webpackChunknameFormat?: string;
  [k: string]: any;
}

/**
 * All Import rules.
 */
export interface ImportRules {
  /**
   * Ensure imports point to a file/module that can be resolved.
   * @see [no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-unresolved.md)
   */
  'import/no-unresolved': RuleConfig<[NoUnresolvedOption?]>;

  /**
   * Ensure named imports correspond to a named export in the remote file.
   * @see [named](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/named.md)
   */
  'import/named': RuleConfig<
    [
      {
        commonjs?: boolean;
      }?,
    ]
  >;

  /**
   * Ensure a default export is present, given a default import.
   * @see [default](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/default.md)
   */
  'import/default': EmptyRuleConfig;

  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * @see [namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/namespace.md)
   */
  'import/namespace': RuleConfig<[NamespaceOption?]>;

  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   * @see [no-namespace](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-namespace.md)
   */
  'import/no-namespace': RuleConfig<[NoNamespaceOption?]>;

  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   * @see [export](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/export.md)
   */
  'import/export': EmptyRuleConfig;

  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see [no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-mutable-exports.md)
   */
  'import/no-mutable-exports': EmptyRuleConfig;

  /**
   * Ensure consistent use of file extension within the import path.
   * @see [extensions](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/extensions.md)
   */
  'import/extensions': RuleConfig<ExtensionsOption>;

  /**
   * Enforce which files can be imported in a given folder.
   * @see [no-restricted-paths](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-restricted-paths.md)
   */
  'import/no-restricted-paths': RuleConfig<[NoRestrictedPathsOption?]>;

  /**
   * Forbid importing the submodules of other modules.
   * @see [no-internal-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-internal-modules.md)
   */
  'import/no-internal-modules': RuleConfig<[NoInternalModulesOption?]>;

  /**
   * Prefer named exports to be grouped together in a single export declaration.
   * @see [group-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/group-exports.md)
   */
  'import/group-exports': EmptyRuleConfig;

  /**
   * Forbid importing packages through relative paths.
   * @see [no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-relative-packages.md)
   */
  'import/no-relative-packages': RuleConfig<[NoRelativePackagesOption?]>;

  /**
   * Forbid importing modules from parent directories.
   * @see [no-relative-parent-imports](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-relative-parent-imports.md)
   */
  'import/no-relative-parent-imports': RuleConfig<
    [NoRelativeParentImportsOption?]
  >;

  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   * @see [consistent-type-specifier-style](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/consistent-type-specifier-style.md)
   */
  'import/consistent-type-specifier-style': RuleConfig<
    [('prefer-inline' | 'prefer-top-level')?]
  >;

  /**
   * Forbid a module from importing itself.
   * @see [no-self-import](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-self-import.md)
   */
  'import/no-self-import': EmptyRuleConfig;

  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   * @see [no-cycle](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-cycle.md)
   */
  'import/no-cycle': RuleConfig<[NoCycleOption?]>;

  /**
   * Forbid named default exports.
   * @see [no-named-default](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-named-default.md)
   */
  'import/no-named-default': EmptyRuleConfig;

  /**
   * Forbid use of exported name as identifier of default export.
   * @see [no-named-as-default](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-named-as-default.md)
   */
  'import/no-named-as-default': EmptyRuleConfig;

  /**
   * Forbid use of exported name as property of default export.
   * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-named-as-default-member.md)
   */
  'import/no-named-as-default-member': EmptyRuleConfig;

  /**
   * Forbid anonymous values as default exports.
   * @see [no-anonymous-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-anonymous-default-export.md)
   */
  'import/no-anonymous-default-export': RuleConfig<NoAnonymousDefaultExport.NoAnonymousDefaultExportRuleConfig>;

  /**
   * Forbid modules without exports, or exports without matching import in another module.
   * @see [no-unused-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-unused-modules.md)
   */
  'import/no-unused-modules': RuleConfig<NoUnusedModules.NoUnusedModulesRuleConfig>;

  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   * @see [no-commonjs](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-commonjs.md)
   */
  'import/no-commonjs': RuleConfig<NoCommonjsOption>;

  /**
   * Forbid AMD `require` and `define` calls.
   * @see [no-amd](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-amd.md)
   */
  'import/no-amd': EmptyRuleConfig;

  /**
   * Forbid repeated import of the same module in multiple places.
   * @see [no-duplicates](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-duplicates.md)
   */
  'import/no-duplicates': RuleConfig<[NoDuplicatesOption?]>;

  /**
   * Ensure all imports appear before other statements.
   * @see [first](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/first.md)
   */
  'import/first': RuleConfig<[('absolute-first' | 'disable-absolute-first')?]>;

  /**
   * Enforce the maximum number of dependencies a module can have.
   * @see [max-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/max-dependencies.md)
   */
  'import/max-dependencies': RuleConfig<
    [
      {
        max?: number;
        ignoreTypeImports?: boolean;
      }?,
    ]
  >;

  /**
   * Forbid the use of extraneous packages.
   * @see [no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-extraneous-dependencies.md)
   */
  'import/no-extraneous-dependencies': RuleConfig<
    [NoExtraneousDependenciesOption?]
  >;

  /**
   * Forbid import of modules using absolute paths.
   * @see [no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-absolute-path.md)
   */
  'import/no-absolute-path': RuleConfig<[NoAbsolutePathOption?]>;

  /**
   * Forbid Node.js builtin modules.
   * @see [no-nodejs-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-nodejs-modules.md)
   */
  'import/no-nodejs-modules': RuleConfig<
    [
      {
        allow?: string[];
      }?,
    ]
  >;

  /**
   * Forbid webpack loader syntax in imports.
   * @see [no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-webpack-loader-syntax.md)
   */
  'import/no-webpack-loader-syntax': EmptyRuleConfig;

  /**
   * Enforce a convention in module import order.
   * @see [order](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/order.md)
   */
  'import/order': RuleConfig<[OrderOption?]>;

  /**
   * Enforce a newline after import statements.
   * @see [newline-after-import](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/newline-after-import.md)
   */
  'import/newline-after-import': RuleConfig<NewlineAfterImportRuleConfig>;

  /**
   * Prefer a default export if module exports a single name or multiple names.
   * @see [prefer-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/prefer-default-export.md)
   */
  'import/prefer-default-export': RuleConfig<[PreferDefaultExportOption?]>;

  /**
   * Forbid default exports.
   * @see [no-default-export](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-default-export.md)
   */
  'import/no-default-export': EmptyRuleConfig;

  /**
   * Forbid named exports.
   * @see [no-named-export](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-named-export.md)
   */
  'import/no-named-export': EmptyRuleConfig;

  /**
   * Forbid `require()` calls with expressions.
   * @see [no-dynamic-require](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-dynamic-require.md)
   */
  'import/no-dynamic-require': RuleConfig<
    [
      {
        esmodule?: boolean;
      }?,
    ]
  >;

  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   * @see [unambiguous](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/unambiguous.md)
   */
  'import/unambiguous': EmptyRuleConfig;

  /**
   * Forbid unassigned imports.
   * @see [no-unassigned-import](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-unassigned-import.md)
   */
  'import/no-unassigned-import': RuleConfig<[NoUnassignedImportOption?]>;

  /**
   * Forbid unnecessary path segments in import and require statements.
   * @see [no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-useless-path-segments.md)
   */
  'import/no-useless-path-segments': RuleConfig<NoUselessPathSegmentsRuleConfig>;

  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   * @see [dynamic-import-chunkname](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/dynamic-import-chunkname.md)
   */
  'import/dynamic-import-chunkname': RuleConfig<
    [DynamicImportChunknameOption?]
  >;

  /**
   * Forbid import statements with CommonJS module.exports.
   */
  'import/no-import-module-exports': RuleConfig<
    [
      {
        exceptions?: any[];
      }?,
    ]
  >;

  /**
   * Forbid empty named import blocks.
   * @see [no-empty-named-blocks](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-empty-named-blocks.md)
   */
  'import/no-empty-named-blocks': EmptyRuleConfig;

  /**
   * Ensure all exports appear after other statements.
   * @see [exports-last](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/exports-last.md)
   */
  'import/exports-last': EmptyRuleConfig;

  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   * @see [no-deprecated](https://github.com/import-js/eslint-plugin-import/blob/v2.29.1/docs/rules/no-deprecated.md)
   */
  'import/no-deprecated': EmptyRuleConfig;

  /**
   * Replaced by `import/first`.
   * @deprecated
   * @see [imports-first](https://github.com/import-js/eslint-plugin-import/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)
   */
  'import/imports-first': RuleConfig<
    [('absolute-first' | 'disable-absolute-first')?]
  >;
}
