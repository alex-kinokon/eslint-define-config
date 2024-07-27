import type { LiteralUnion } from '../utility-types';

/**
 * Eslint extends.
 */
type EslintExtends = 'eslint:recommended' | 'eslint:all';

/**
 * Eslint EslintComments extends.
 *
 * @see [Eslint EslintComments extends](https://mysticatea.github.io/eslint-plugin-eslint-comments/#%F0%9F%93%96-usage)
 */
type EslintCommentsExtends = 'plugin:eslint-comments/recommended';

/**
 * Eslint GraphQL extends.
 *
 * @see [Eslint GraphQL extends](https://the-guild.dev/graphql/eslint/docs/configs)
 */
type GraphqlExtends =
  | 'plugin:@graphql-eslint/operations-all'
  | 'plugin:@graphql-eslint/operations-recommended'
  | 'plugin:@graphql-eslint/relay'
  | 'plugin:@graphql-eslint/schema-all'
  | 'plugin:@graphql-eslint/schema-recommended';

/**
 * Eslint import extends.
 *
 * @see [Eslint import extends](https://github.com/benmosher/eslint-plugin-import#installation)
 */
type ImportExtends =
  | 'plugin:import/errors'
  | 'plugin:import/warnings'
  | 'plugin:import/typescript';

/**
 * Eslint JSDoc extends.
 *
 * @see [Eslint JSDoc extends](https://github.com/gajus/eslint-plugin-jsdoc#configuration)
 */
type JsdocExtends = 'plugin:jsdoc/recommended';

/**
 * Eslint Jsonc extends.
 *
 * @see [Eslint Jsonc extends](https://github.com/ota-meshi/eslint-plugin-jsonc#configuration)
 */
type JsoncExtends =
  | 'plugin:jsdoc/base'
  | 'plugin:jsdoc/recommended'
  | 'plugin:jsonc/recommended-with-json'
  | 'plugin:jsonc/recommended-with-jsonc'
  | 'plugin:jsonc/recommended-with-json5'
  | 'plugin:jsonc/prettier'
  | 'plugin:jsonc/all';

/**
 * Eslint JSX A11y extends.
 *
 * @see [Eslint JSX A11y extends](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
 */
type JsxA11yExtends = 'plugin:jsx-a11y/strict' | 'plugin:jsx-a11y/recommended';

/**
 * Eslint MDX extends.
 *
 * @see [Eslint MDX extends](https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx)
 */
type MdxExtends =
  | 'plugin:mdx/base'
  | 'plugin:mdx/code-blocks'
  | 'plugin:mdx/overrides'
  | 'plugin:mdx/recommended';

/**
 * Eslint N (Node) extends.
 *
 * @see [Eslint N extends](https://github.com/eslint-community/eslint-plugin-n#-configs)
 */
type NExtends =
  | 'plugin:n/recommended'
  | 'plugin:n/recommended-module'
  | 'plugin:n/recommended-script';
/**
 * Eslint Node extends.
 *
 * @see [Eslint Node extends](https://github.com/mysticatea/eslint-plugin-node#-configs)
 */
type NodeExtends =
  | 'plugin:node/recommended'
  | 'plugin:node/recommended-module'
  | 'plugin:node/recommended-script';
/**
 * Eslint Prettier extends.
 *
 * @see [Eslint Prettier extends](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)
 */
type PrettierExtends = 'plugin:prettier/recommended' | 'prettier';
/**
 * Eslint promise extends.
 *
 * @see [Eslint promise extends](https://github.com/eslint-community/eslint-plugin-promise#usage)
 */
type PromiseExtends = 'plugin:promise/recommended';
/**
 * Eslint React extends.
 *
 * @see [Eslint React extends](https://eslint-react.xyz/docs/installation)
 */
type ReactExtends = 'plugin:@eslint-react/recommended-legacy';

/**
 * Eslint ReactHooks extends.
 *
 * @see [Eslint ReactHooks extends](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
 */
type ReactHooksExtends = 'plugin:react-hooks/recommended';

/**
 * Eslint Sonarjs extends.
 *
 * @see [Eslint Sonarjs extends](https://github.com/SonarSource/eslint-plugin-sonarjs#available-configurations)
 */
type SonarjsExtends = 'plugin:sonarjs/recommended';

/**
 * Eslint TestingLibrary extends.
 *
 * @see [Eslint TestingLibrary extends](https://github.com/testing-library/eslint-plugin-testing-library)
 */
type TestingLibraryExtends =
  | 'plugin:testing-library/angular'
  | 'plugin:testing-library/dom'
  | 'plugin:testing-library/marko'
  | 'plugin:testing-library/react'
  | 'plugin:testing-library/vue';

/**
 * Eslint Unicorn extends.
 *
 * @see [Eslint Unicorn extends](https://github.com/sindresorhus/eslint-plugin-unicorn)
 */
type UnicornExtends = 'plugin:unicorn/recommended' | 'plugin:unicorn/all';

/**
 * Eslint Vitest extends.
 *
 * @see [Eslint Vitest extends](https://eslint.vuejs.org/user-guide/#usage)
 */
type VitestExtends = 'plugin:vitest/all' | 'plugin:vitest/recommended';

/**
 * Eslint Vue extends.
 *
 * @see [Eslint Vue extends](https://eslint.vuejs.org/user-guide/#usage)
 */
type VueExtends =
  | 'plugin:vue/base'
  | 'plugin:vue/vue3-essential'
  | 'plugin:vue/vue3-strongly-recommended'
  | 'plugin:vue/vue3-recommended'
  | 'plugin:vue/essential'
  | 'plugin:vue/strongly-recommended'
  | 'plugin:vue/recommended';

/**
 * Eslint Vue Pug extends.
 *
 * @see [Eslint Vue Pug extends](https://github.com/rashfael/eslint-plugin-vue-pug#usage)
 */
type VuePugExtends =
  | 'plugin:vue-pug/base'
  | 'plugin:vue-pug/vue3-essential'
  | 'plugin:vue-pug/vue3-strongly-recommended'
  | 'plugin:vue-pug/vue3-recommended'
  | 'plugin:vue-pug/essential'
  | 'plugin:vue-pug/strongly-recommended'
  | 'plugin:vue-pug/recommended';

/**
 * Eslint Intlify VueI18n extends.
 *
 * @see [Eslint Intlify VueI18n extends](https://eslint-plugin-vue-i18n.intlify.dev/started.html)
 */
type IntlifyVueI18nExtends = 'plugin:@intlify/vue-i18n/recommended';

/**
 * Typescript eslint extends.
 *
 * @see [Typescript eslint extends](https://typescript-eslint.io/linting/configs#recommended-configurations)
 */
type TypescriptEslintExtends =
  | 'plugin:@typescript-eslint/all'
  | 'plugin:@typescript-eslint/base'
  | 'plugin:@typescript-eslint/disable-type-checked'
  | 'plugin:@typescript-eslint/eslint-recommended'
  | 'plugin:@typescript-eslint/recommended-requiring-type-checking' // this requiring-type-checking is deprecated and only for @typescript-eslint/eslint-plugin@v5
  | 'plugin:@typescript-eslint/recommended-type-checked'
  | 'plugin:@typescript-eslint/recommended'
  | 'plugin:@typescript-eslint/strict-type-checked'
  | 'plugin:@typescript-eslint/strict'
  | 'plugin:@typescript-eslint/stylistic-type-checked'
  | 'plugin:@typescript-eslint/stylistic';

/**
 * This is a special exported interface for other packages to declare
 * additional extensions that should bail out for eslint extensions. For example
 * `'@typescript-eslint/eslint-plugin'` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'eslint-define-config' {
 *   export interface CustomExtends {
 *     'plugin:@typescript-eslint/all': void;
 *     'plugin:@typescript-eslint/base': void;
 *     'plugin:@typescript-eslint/disable-type-checked': void;
 *     'plugin:@typescript-eslint/eslint-recommended': void;
 *     'plugin:@typescript-eslint/recommended-type-checked': void;
 *     'plugin:@typescript-eslint/recommended': void;
 *     'plugin:@typescript-eslint/strict-type-checked': void;
 *     'plugin:@typescript-eslint/strict': void;
 *     'plugin:@typescript-eslint/stylistic-type-checked': void;
 *     'plugin:@typescript-eslint/stylistic': void;
 *   }
 * }
 * ```
 */
export interface CustomExtends {}

/**
 * All known extends.
 */
export type KnownExtends = LiteralUnion<
  | EslintCommentsExtends
  | EslintExtends
  | GraphqlExtends
  | ImportExtends
  | IntlifyVueI18nExtends
  | JsdocExtends
  | JsoncExtends
  | JsxA11yExtends
  | MdxExtends
  | NExtends
  | NodeExtends
  | PrettierExtends
  | PromiseExtends
  | ReactExtends
  | ReactHooksExtends
  | SonarjsExtends
  | TestingLibraryExtends
  | TypescriptEslintExtends
  | UnicornExtends
  | VitestExtends
  | VueExtends
  | VuePugExtends
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  | keyof CustomExtends
>;

/**
 * Extending Configuration Files.
 *
 * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
 */
export type Extends = KnownExtends | KnownExtends[];
