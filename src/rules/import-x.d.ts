import type { RulesObject } from '../rule-config';

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
        checkTypeImports?: boolean;
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
        checkTypeImports?: boolean;
        [k: string]: any;
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
    ]
  | [
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
      target?: string | [string, ...string[]];
      from?: string | [string, ...string[]];
      except?: string[];
      message?: string;
    },
    ...{
      target?: string | [string, ...string[]];
      from?: string | [string, ...string[]];
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
        /**
         * @minItems 1
         */
        src?: [any, ...any[]];
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
    /**
     * ignore type exports without any usage
     */
    ignoreUnusedTypeExports?: boolean;
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
  whitelist?: any[];
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

export namespace Order {
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
    'newlines-between-types'?:
      | 'ignore'
      | 'always'
      | 'always-and-inside-groups'
      | 'never';
    consolidateIslands?: 'inside-groups' | 'never';
    sortTypesGroup?: boolean;
    named?:
      | boolean
      | {
          enabled?: boolean;
          import?: boolean;
          export?: boolean;
          require?: boolean;
          cjsExports?: boolean;
          types?: 'mixed' | 'types-first' | 'types-last';
        };
    alphabetize?: {
      caseInsensitive?: boolean;
      order?: 'ignore' | 'asc' | 'desc';
      orderImportKind?: 'ignore' | 'asc' | 'desc';
    };
    warnOnUnassignedImports?: boolean;
  }

  export type OrderRuleConfig = [OrderOption?];
}

export interface PreferDefaultExportOption {
  target?: 'single' | 'any';
}

export interface NoUnassignedImportOption {
  devDependencies?: boolean | any[];
  optionalDependencies?: boolean | any[];
  peerDependencies?: boolean | any[];
  allow?: string[];
}

export interface DynamicImportChunknameOption {
  importFunctions?: string[];
  allowEmpty?: boolean;
  webpackChunknameFormat?: string;
  [k: string]: any;
}

/**
 * All ImportX rules.
 */
export interface ImportXRules {
  /**
   * Ensure imports point to a file/module that can be resolved.
   * @see [no-unresolved](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-unresolved.md)
   */
  'import-x/no-unresolved': [NoUnresolvedOption?];

  /**
   * Ensure named imports correspond to a named export in the remote file.
   * @see [named](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/named.md)
   */
  'import-x/named': [
    {
      commonjs?: boolean;
    }?,
  ];

  /**
   * Ensure a default export is present, given a default import.
   * @see [default](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/default.md)
   */
  'import-x/default': null;

  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   * @see [namespace](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/namespace.md)
   */
  'import-x/namespace': [NamespaceOption?];

  /**
   * Forbid namespace (a.k.a. "wildcard" `*`) imports.
   * @see [no-namespace](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-namespace.md)
   */
  'import-x/no-namespace': [NoNamespaceOption?];

  /**
   * Forbid any invalid exports, i.e. re-export of the same name.
   * @see [export](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/export.md)
   */
  'import-x/export': null;

  /**
   * Forbid the use of mutable exports with `var` or `let`.
   * @see [no-mutable-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-mutable-exports.md)
   */
  'import-x/no-mutable-exports': null;

  /**
   * Ensure consistent use of file extension within the import path.
   * @see [extensions](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/extensions.md)
   */
  'import-x/extensions': ExtensionsOption;

  /**
   * Enforce which files can be imported in a given folder.
   * @see [no-restricted-paths](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-restricted-paths.md)
   */
  'import-x/no-restricted-paths': [NoRestrictedPathsOption?];

  /**
   * Forbid importing the submodules of other modules.
   * @see [no-internal-modules](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-internal-modules.md)
   */
  'import-x/no-internal-modules': [NoInternalModulesOption?];

  /**
   * Prefer named exports to be grouped together in a single export declaration.
   * @see [group-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/group-exports.md)
   */
  'import-x/group-exports': null;

  /**
   * Forbid importing packages through relative paths.
   * @see [no-relative-packages](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-relative-packages.md)
   */
  'import-x/no-relative-packages': [NoRelativePackagesOption?];

  /**
   * Forbid importing modules from parent directories.
   * @see [no-relative-parent-imports](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-relative-parent-imports.md)
   */
  'import-x/no-relative-parent-imports': [NoRelativeParentImportsOption?];

  /**
   * Enforce or ban the use of inline type-only markers for named imports.
   * @see [consistent-type-specifier-style](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/consistent-type-specifier-style.md)
   */
  'import-x/consistent-type-specifier-style': [
    ('prefer-top-level' | 'prefer-inline')?,
  ];

  /**
   * Forbid a module from importing itself.
   * @see [no-self-import](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-self-import.md)
   */
  'import-x/no-self-import': null;

  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   * @see [no-cycle](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-cycle.md)
   */
  'import-x/no-cycle': [NoCycleOption?];

  /**
   * Forbid named default exports.
   * @see [no-named-default](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-named-default.md)
   */
  'import-x/no-named-default': null;

  /**
   * Forbid use of exported name as identifier of default export.
   * @see [no-named-as-default](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-named-as-default.md)
   */
  'import-x/no-named-as-default': null;

  /**
   * Forbid use of exported name as property of default export.
   * @see [no-named-as-default-member](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-named-as-default-member.md)
   */
  'import-x/no-named-as-default-member': null;

  /**
   * Forbid anonymous values as default exports.
   * @see [no-anonymous-default-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-anonymous-default-export.md)
   */
  'import-x/no-anonymous-default-export': NoAnonymousDefaultExport.NoAnonymousDefaultExportRuleConfig;

  /**
   * Forbid importing a default export by a different name.
   * @see [no-rename-default](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-rename-default.md)
   */
  'import-x/no-rename-default': [
    {
      commonjs?: boolean;
      preventRenamingBindings?: boolean;
    }?,
  ];

  /**
   * Forbid modules without exports, or exports without matching import in another module.
   * @see [no-unused-modules](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-unused-modules.md)
   */
  'import-x/no-unused-modules': NoUnusedModules.NoUnusedModulesRuleConfig;

  /**
   * Forbid CommonJS `require` calls and `module.exports` or `exports.*`.
   * @see [no-commonjs](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-commonjs.md)
   */
  'import-x/no-commonjs': NoCommonjsOption;

  /**
   * Forbid AMD `require` and `define` calls.
   * @see [no-amd](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-amd.md)
   */
  'import-x/no-amd': null;

  /**
   * Forbid repeated import of the same module in multiple places.
   * @see [no-duplicates](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-duplicates.md)
   */
  'import-x/no-duplicates': [NoDuplicatesOption?];

  /**
   * Ensure all imports appear before other statements.
   * @see [first](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/first.md)
   */
  'import-x/first': [('absolute-first' | 'disable-absolute-first')?];

  /**
   * Enforce the maximum number of dependencies a module can have.
   * @see [max-dependencies](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/max-dependencies.md)
   */
  'import-x/max-dependencies': [
    {
      max?: number;
      ignoreTypeImports?: boolean;
    }?,
  ];

  /**
   * Forbid the use of extraneous packages.
   * @see [no-extraneous-dependencies](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-extraneous-dependencies.md)
   */
  'import-x/no-extraneous-dependencies': [NoExtraneousDependenciesOption?];

  /**
   * Forbid import of modules using absolute paths.
   * @see [no-absolute-path](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-absolute-path.md)
   */
  'import-x/no-absolute-path': [NoAbsolutePathOption?];

  /**
   * Forbid Node.js builtin modules.
   * @see [no-nodejs-modules](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-nodejs-modules.md)
   */
  'import-x/no-nodejs-modules': [
    {
      allow?: string[];
    }?,
  ];

  /**
   * Forbid webpack loader syntax in imports.
   * @see [no-webpack-loader-syntax](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-webpack-loader-syntax.md)
   */
  'import-x/no-webpack-loader-syntax': null;

  /**
   * Enforce a convention in module import order.
   * @see [order](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/order.md)
   */
  'import-x/order': Order.OrderRuleConfig;

  /**
   * Enforce a newline after import statements.
   * @see [newline-after-import](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/newline-after-import.md)
   */
  'import-x/newline-after-import': [
    {
      count?: number;
      exactCount?: boolean;
      considerComments?: boolean;
    }?,
  ];

  /**
   * Prefer a default export if module exports a single name or multiple names.
   * @see [prefer-default-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/prefer-default-export.md)
   */
  'import-x/prefer-default-export': [PreferDefaultExportOption?];

  /**
   * Forbid default exports.
   * @see [no-default-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-default-export.md)
   */
  'import-x/no-default-export': null;

  /**
   * Forbid named exports.
   * @see [no-named-export](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-named-export.md)
   */
  'import-x/no-named-export': null;

  /**
   * Forbid `require()` calls with expressions.
   * @see [no-dynamic-require](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-dynamic-require.md)
   */
  'import-x/no-dynamic-require': [
    {
      esmodule?: boolean;
    }?,
  ];

  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   * @see [unambiguous](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/unambiguous.md)
   */
  'import-x/unambiguous': null;

  /**
   * Forbid unassigned imports.
   * @see [no-unassigned-import](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-unassigned-import.md)
   */
  'import-x/no-unassigned-import': [NoUnassignedImportOption?];

  /**
   * Forbid unnecessary path segments in import and require statements.
   * @see [no-useless-path-segments](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-useless-path-segments.md)
   */
  'import-x/no-useless-path-segments': [
    {
      commonjs?: boolean;
      noUselessIndex?: boolean;
    }?,
  ];

  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   * @see [dynamic-import-chunkname](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/dynamic-import-chunkname.md)
   */
  'import-x/dynamic-import-chunkname': [DynamicImportChunknameOption?];

  /**
   * Forbid import statements with CommonJS module.exports.
   * @see [no-import-module-exports](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-import-module-exports.md)
   */
  'import-x/no-import-module-exports': [
    {
      exceptions?: any[];
    }?,
  ];

  /**
   * Forbid empty named import blocks.
   * @see [no-empty-named-blocks](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-empty-named-blocks.md)
   */
  'import-x/no-empty-named-blocks': null;

  /**
   * Ensure all exports appear after other statements.
   * @see [exports-last](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/exports-last.md)
   */
  'import-x/exports-last': null;

  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   * @see [no-deprecated](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/no-deprecated.md)
   */
  'import-x/no-deprecated': null;

  /**
   * Replaced by `import-x/first`.
   * @deprecated
   * @see [imports-first](https://github.com/un-ts/eslint-plugin-import-x/blob/v4.11.0/docs/rules/imports-first.md)
   */
  'import-x/imports-first': [('absolute-first' | 'disable-absolute-first')?];
}

export type ImportXRulesObject = RulesObject<ImportXRules>;
