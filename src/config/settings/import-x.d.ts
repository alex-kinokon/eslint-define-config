// https://github.com/un-ts/eslint-plugin-import-x/blob/34e1334a907d56150133bf338174a172ce89173d/README.md

/**
 * @see https://github.com/un-ts/eslint-plugin-import-x#settings
 */
export interface ImportXSettings {
  /**
   * A list of file extensions that will be parsed as modules and inspected for
   * `export`s.
   *
   * This defaults to `['.js']`, unless you are using the `react` shared config,
   * in which case it is specified as `['.js', '.jsx']`. Despite the default,
   * if you are using TypeScript (without the `plugin:import-x/typescript` config
   * described above) you must specify the new extensions (`.ts`, and also `.tsx`
   * if using React).
   *
   * @see https://github.com/un-ts/eslint-plugin-import-x#import-xextensions
   *
   * @example
   *
   * ```yaml
   * import-x/extensions: [.js, .jsx]
   * ```
   *
   * If you require more granular extension definitions, you can use:
   * @example
   * ```yaml
   * import-x/resolver:
   *   node:
   *     extensions: [.js, .jsx]
   * ```
   *
   * Note that this is different from (and likely a subset of) any `import-x/resolver`
   * extensions settings, which may include `.json`, `.coffee`, etc. which will still
   * factor into the `no-unresolved` rule.
   *
   * Also, the following `import-x/ignore` patterns will overrule this list.
   */
  'import-x/extensions'?: string[];

  /**
   * A list of regex strings that, if matched by a path, will
   * not report the matching module if no `export`s are found.
   * In practice, this means rules other than [`no-unresolved`](./docs/rules/no-unresolved.md#ignore) will not report on any
   * `import`s with (absolute filesystem) paths matching this pattern.
   *
   * `no-unresolved` has its own [`ignore`](./docs/rules/no-unresolved.md#ignore) setting.
   *
   * @see https://github.com/un-ts/eslint-plugin-import-x#import-xignore
   *
   * @example
   * ```yaml
   * settings:
   *   import-x/ignore:
   *     - \.coffee$ # fraught with parse errors
   *     - \.(scss|less|css)$ # can't parse unprocessed CSS modules, either
   * ```
   */
  'import-x/ignore'?: string[];

  /**
   * An array of additional modules to consider as "core" modules--modules that should
   * be considered resolved but have no path on the filesystem. Your resolver may
   * already define some of these (for example, the Node resolver knows about `fs` and
   * `path`), so you need not redefine those.
   *
   * @see https://github.com/un-ts/eslint-plugin-import-x#import-xcore-modules
   *
   * For example, Electron exposes an `electron` module:
   *
   * @example
   * ```js
   * import 'electron' // without extra config, will be flagged as unresolved!
   * ```
   *
   * that would otherwise be unresolved. To avoid this, you may provide `electron` as a
   * core module:
   *
   * @example
   * ```yaml
   * # .eslintrc.yml
   * settings:
   *   import-x/core-modules: [electron]
   * ```
   *
   * In Electron's specific case, there is a shared config named `electron`
   * that specifies this for you.
   */
  'import-x/core-modules'?: string[];

  /**
   * An array of folders. Resolved modules only from those folders will be considered as "external". By default - `["node_modules"]`. Makes sense if you have configured your path or webpack to handle your internal paths differently and want to consider modules from some folders, for example `bower_components` or `jspm_modules`, as "external".
   *
   * This option is also useful in a monorepo setup: list here all directories that contain monorepo's packages and they will be treated as external ones no matter which resolver is used.
   *
   * If you are using `yarn` PnP as your package manager, add the `.yarn` folder and all your installed dependencies will be considered as `external`, instead of `internal`.
   *
   * Each item in this array is either a folder's name, its subpath, or its absolute prefix path:
   *
   * - `jspm_modules` will match any file or folder named `jspm_modules` or which has a direct or non-direct parent named `jspm_modules`, e.g. `/home/me/project/jspm_modules` or `/home/me/project/jspm_modules/some-pkg/index.js`.
   *
   * - `packages/core` will match any path that contains these two segments, for example `/home/me/project/packages/core/src/utils.js`.
   *
   * - `/home/me/project/packages` will only match files and directories inside this directory, and the directory itself.
   *
   * Please note that incomplete names are not allowed here so `components` won't match `bower_components` and `packages/ui` won't match `packages/ui-utils` (but will match `packages/ui/utils`).
   *
   * @see https://github.com/un-ts/eslint-plugin-import-x#import-xexternal-module-folders
   */
  'import-x/external-module-folders'?: string[];

  /**
   * A map from parsers to file extension arrays. If a file extension is matched, the
   * dependency parser will require and use the map key as the parser instead of the
   * configured ESLint parser. This is useful if you're inter-op-ing with TypeScript
   * directly using webpack, for example:
   *
   * ```yaml
   * settings:
   *   import-x/parsers:
   *     '@typescript-eslint/parser': [.ts, .tsx]
   * ```
   *
   * In this case, [`@typescript-eslint/parser`](https://www.npmjs.com/package/@typescript-eslint/parser)
   * must be installed and require-able from the running `eslint` module's location
   * (i.e., install it as a peer of ESLint).
   *
   * This is currently only tested with `@typescript-eslint/parser` (and its predecessor,
   * `typescript-eslint-parser`) but should theoretically work with any moderately
   * ESTree-compliant parser.
   *
   * It's difficult to say how well various plugin features will be supported, too,
   * depending on how far down the rabbit hole goes. Submit an issue if you find strange
   * behavior beyond here, but steel your heart against the likely outcome of closing
   * with `wontfix`.
   *
   * @see https://github.com/un-ts/eslint-plugin-import-x#import-xparsers
   */
  'import-x/parsers'?: {
    [parser: string]: string[];
  };

  /**
   * @see https://github.com/un-ts/eslint-plugin-import-x#import-xresolver
   */
  'import-x/resolver'?: unknown;

  /**
   * Settings for cache behavior. Memoization is used at various levels to avoid the copious amount of `fs.statSync`/module parse calls required to correctly report errors.
   *
   * For normal `eslint` console runs, the cache lifetime is irrelevant, as we can strongly assume that files should not be changing during the lifetime of the linter process (and thus, the cache in memory)
   *
   * For long-lasting processes, like [`eslint_d`] or [`eslint-loader`], however, it's important that there be some notion of staleness.
   *
   * If you never use [`eslint_d`] or [`eslint-loader`], you may set the cache lifetime to `Infinity` and everything should be fine:
   *
   * ```yaml
   * # .eslintrc.yml
   * settings:
   *   import-x/cache:
   *     lifetime: ∞ # or Infinity
   * ```
   *
   * Otherwise, set some integer, and cache entries will be evicted after that many seconds have elapsed:
   *
   * ```yaml
   * # .eslintrc.yml
   * settings:
   *   import-x/cache:
   *     lifetime: 5 # 30 is the default
   * ```
   *
   * [`eslint_d`]: https://www.npmjs.com/package/eslint_d
   * [`eslint-loader`]: https://www.npmjs.com/package/eslint-loader
   */
  'import-x/cache'?: {
    lifetime?: number;
  };

  /**
   * A regex for packages should be treated as internal. Useful when you are utilizing a monorepo setup or developing a set of packages that depend on each other.
   *
   * By default, any package referenced from [`import-x/external-module-folders`](#importexternal-module-folders) will be considered as "external", including packages in a monorepo like yarn workspace or lerna environment. If you want to mark these packages as "internal" this will be useful.
   *
   * For example, if your packages in a monorepo are all in `@scope`, you can configure `import-x/internal-regex` like this
   *
   * ```yaml
   * # .eslintrc.yml
   * settings:
   *   import-x/internal-regex: ^@scope/
   * ```
   */
  'import-x/internal-regex'?: string;
}
