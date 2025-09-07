import type { LiteralUnion } from '../utility-types';

// #region extensions
/**
 * ESLint Astro extends.
 */
type AstroExtends =
  | 'plugin:astro/all'
  | 'plugin:astro/base'
  | 'plugin:astro/jsx-a11y-recommended'
  | 'plugin:astro/jsx-a11y-strict'
  | 'plugin:astro/recommended';

/**
 * ESLint Cspell extends.
 */
type CspellExtends =
  | 'plugin:cspell/debug'
  | 'plugin:cspell/debug-legacy'
  | 'plugin:cspell/recommended'
  | 'plugin:cspell/recommended-legacy';

/**
 * ESLint Deprecation extends.
 */
type DeprecationExtends = 'plugin:deprecation/recommended';

/**
 * ESLint EsX extends.
 *
 * @see [EsX extends](https://eslint-community.github.io/eslint-plugin-es-x/rules/)
 */
type EsXExtends =
  | 'plugin:es-x/no-2015'
  | 'plugin:es-x/no-2016'
  | 'plugin:es-x/no-2017'
  | 'plugin:es-x/no-2018'
  | 'plugin:es-x/no-2019'
  | 'plugin:es-x/no-5'
  | 'plugin:es-x/no-array-grouping'
  | 'plugin:es-x/no-arraybuffer-base64'
  | 'plugin:es-x/no-change-array-by-copy'
  | 'plugin:es-x/no-class-fields'
  | 'plugin:es-x/no-explicit-resource-management'
  | 'plugin:es-x/no-float16array'
  | 'plugin:es-x/no-import-attributes'
  | 'plugin:es-x/no-intl-numberformat-v3'
  | 'plugin:es-x/no-is-usv-string'
  | 'plugin:es-x/no-iterator-helpers'
  | 'plugin:es-x/no-new-in-es2015'
  | 'plugin:es-x/no-new-in-es2015-intl-api'
  | 'plugin:es-x/no-new-in-es2016'
  | 'plugin:es-x/no-new-in-es2016-intl-api'
  | 'plugin:es-x/no-new-in-es2017'
  | 'plugin:es-x/no-new-in-es2017-intl-api'
  | 'plugin:es-x/no-new-in-es2018'
  | 'plugin:es-x/no-new-in-es2018-intl-api'
  | 'plugin:es-x/no-new-in-es2019'
  | 'plugin:es-x/no-new-in-es2019-intl-api'
  | 'plugin:es-x/no-new-in-es2020'
  | 'plugin:es-x/no-new-in-es2020-intl-api'
  | 'plugin:es-x/no-new-in-es2021'
  | 'plugin:es-x/no-new-in-es2021-intl-api'
  | 'plugin:es-x/no-new-in-es2022'
  | 'plugin:es-x/no-new-in-es2022-intl-api'
  | 'plugin:es-x/no-new-in-es2023'
  | 'plugin:es-x/no-new-in-es2023-intl-api'
  | 'plugin:es-x/no-new-in-es2024'
  | 'plugin:es-x/no-new-in-es2024-intl-api'
  | 'plugin:es-x/no-new-in-es2025'
  | 'plugin:es-x/no-new-in-es2025-intl-api'
  | 'plugin:es-x/no-new-in-es5'
  | 'plugin:es-x/no-new-in-esnext'
  | 'plugin:es-x/no-new-in-esnext-intl-api'
  | 'plugin:es-x/no-relative-indexing-method'
  | 'plugin:es-x/no-set-methods'
  | 'plugin:es-x/no-string-matchall'
  | 'plugin:es-x/restrict-to-es-intl-api-1st-edition'
  | 'plugin:es-x/restrict-to-es2015'
  | 'plugin:es-x/restrict-to-es2015-intl-api'
  | 'plugin:es-x/restrict-to-es2016'
  | 'plugin:es-x/restrict-to-es2016-intl-api'
  | 'plugin:es-x/restrict-to-es2017'
  | 'plugin:es-x/restrict-to-es2017-intl-api'
  | 'plugin:es-x/restrict-to-es2018'
  | 'plugin:es-x/restrict-to-es2018-intl-api'
  | 'plugin:es-x/restrict-to-es2019'
  | 'plugin:es-x/restrict-to-es2019-intl-api'
  | 'plugin:es-x/restrict-to-es2020'
  | 'plugin:es-x/restrict-to-es2020-intl-api'
  | 'plugin:es-x/restrict-to-es2021'
  | 'plugin:es-x/restrict-to-es2021-intl-api'
  | 'plugin:es-x/restrict-to-es2022'
  | 'plugin:es-x/restrict-to-es2022-intl-api'
  | 'plugin:es-x/restrict-to-es2023'
  | 'plugin:es-x/restrict-to-es2023-intl-api'
  | 'plugin:es-x/restrict-to-es2024'
  | 'plugin:es-x/restrict-to-es2024-intl-api'
  | 'plugin:es-x/restrict-to-es3'
  | 'plugin:es-x/restrict-to-es5';

/**
 * ESLint EslintJs extends.
 */
type EslintJsExtends = 'eslint:recommended' | 'eslint:all';

/**
 * ESLint EslintJson extends.
 */
type EslintJsonExtends = 'plugin:json/recommended';

/**
 * ESLint EslintMarkdown extends.
 */
type EslintMarkdownExtends =
  | 'plugin:markdown/processor'
  | 'plugin:markdown/recommended'
  | 'plugin:markdown/recommended-legacy';

/**
 * ESLint EslintComments extends.
 *
 * @see [EslintComments extends](https://mysticatea.github.io/eslint-plugin-eslint-comments/#%F0%9F%93%96-usage)
 */
type EslintCommentsExtends = 'plugin:eslint-comments/recommended';

/**
 * ESLint EslintPlugin extends.
 */
type EslintPluginExtends =
  | 'plugin:eslint-plugin/all'
  | 'plugin:eslint-plugin/all-type-checked'
  | 'plugin:eslint-plugin/recommended'
  | 'plugin:eslint-plugin/rules'
  | 'plugin:eslint-plugin/rules-recommended'
  | 'plugin:eslint-plugin/tests'
  | 'plugin:eslint-plugin/tests-recommended';

/**
 * ESLint GraphQL extends.
 *
 * @see [GraphQL extends](https://the-guild.dev/graphql/eslint/docs/configs)
 */
type GraphQlExtends =
  | 'plugin:@graphql-eslint/operations-all'
  | 'plugin:@graphql-eslint/operations-recommended'
  | 'plugin:@graphql-eslint/schema-all'
  | 'plugin:@graphql-eslint/schema-recommended'
  | 'plugin:@graphql-eslint/schema-relay';

/**
 * ESLint Import extends.
 *
 * @see [Import extends](https://github.com/import-js/eslint-plugin-import#installation)
 */
type ImportExtends =
  | 'plugin:import/electron'
  | 'plugin:import/errors'
  | 'plugin:import/react'
  | 'plugin:import/react-native'
  | 'plugin:import/recommended'
  | 'plugin:import/stage-0'
  | 'plugin:import/typescript'
  | 'plugin:import/warnings';

/**
 * ESLint ImportX extends.
 */
type ImportXExtends =
  | 'plugin:import-x/electron'
  | 'plugin:import-x/errors'
  | 'plugin:import-x/react'
  | 'plugin:import-x/react-native'
  | 'plugin:import-x/recommended'
  | 'plugin:import-x/stage-0'
  | 'plugin:import-x/typescript'
  | 'plugin:import-x/warnings';

/**
 * ESLint JSDoc extends.
 *
 * @see [JSDoc extends](https://github.com/gajus/eslint-plugin-jsdoc#configuration)
 */
type JsDocExtends =
  | 'plugin:jsdoc/default-expressions'
  | 'plugin:jsdoc/examples'
  | 'plugin:jsdoc/examples-and-default-expressions'
  | 'plugin:jsdoc/recommended'
  | 'plugin:jsdoc/recommended-error'
  | 'plugin:jsdoc/recommended-typescript'
  | 'plugin:jsdoc/recommended-typescript-error'
  | 'plugin:jsdoc/recommended-typescript-flavor'
  | 'plugin:jsdoc/recommended-typescript-flavor-error';

/**
 * ESLint Jsonc extends.
 *
 * @see [Jsonc extends](https://github.com/ota-meshi/eslint-plugin-jsonc#configuration)
 */
type JsoncExtends =
  | 'plugin:jsonc/all'
  | 'plugin:jsonc/auto-config'
  | 'plugin:jsonc/base'
  | 'plugin:jsonc/prettier'
  | 'plugin:jsonc/recommended-with-json'
  | 'plugin:jsonc/recommended-with-json5'
  | 'plugin:jsonc/recommended-with-jsonc';

/**
 * ESLint JsxA11y extends.
 *
 * @see [JsxA11y extends](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#usage---legacy-config-eslintrc)
 */
type JsxA11yExtends = 'plugin:jsx-a11y/recommended' | 'plugin:jsx-a11y/strict';

/**
 * ESLint Lingui extends.
 *
 * @see [Lingui extends](https://github.com/lingui/eslint-plugin#rules)
 */
type LinguiExtends = 'plugin:lingui/recommended';

/**
 * ESLint Mdx extends.
 *
 * @see [Mdx extends](https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx#classic)
 */
type MdxExtends =
  | 'plugin:mdx/base'
  | 'plugin:mdx/code-blocks'
  | 'plugin:mdx/codeBlocks'
  | 'plugin:mdx/overrides'
  | 'plugin:mdx/recommended';

/**
 * ESLint N extends.
 *
 * @see [N extends](https://github.com/eslint-community/eslint-plugin-n#-configs)
 */
type NExtends =
  | 'plugin:n/recommended'
  | 'plugin:n/recommended-module'
  | 'plugin:n/recommended-script';

/**
 * ESLint Perfectionist extends.
 */
type PerfectionistExtends =
  | 'plugin:perfectionist/recommended-alphabetical'
  | 'plugin:perfectionist/recommended-alphabetical-legacy'
  | 'plugin:perfectionist/recommended-custom'
  | 'plugin:perfectionist/recommended-custom-legacy'
  | 'plugin:perfectionist/recommended-line-length'
  | 'plugin:perfectionist/recommended-line-length-legacy'
  | 'plugin:perfectionist/recommended-natural'
  | 'plugin:perfectionist/recommended-natural-legacy';

/**
 * ESLint Prettier extends.
 *
 * @see [Prettier extends](https://github.com/prettier/eslint-plugin-prettier#configuration-legacy-eslintrc)
 */
type PrettierExtends = 'plugin:prettier/recommended';

/**
 * ESLint Playwright extends.
 *
 * @see [Playwright extends](https://github.com/playwright-community/eslint-plugin-playwright#rules)
 */
type PlaywrightExtends =
  | 'plugin:playwright/playwright-test'
  | 'plugin:playwright/recommended';

/**
 * ESLint Pnpm extends.
 */
type PnpmExtends =
  | 'plugin:pnpm/json'
  | 'plugin:pnpm/recommended'
  | 'plugin:pnpm/yaml';

/**
 * ESLint Promise extends.
 *
 * @see [Promise extends](https://github.com/eslint-community/eslint-plugin-promise#usage)
 */
type PromiseExtends = 'plugin:promise/recommended';

/**
 * ESLint React extends.
 *
 * @see [React extends](https://eslint-react.xyz/docs/installation)
 */
type ReactExtends =
  | 'plugin:@eslint-react/all'
  | 'plugin:@eslint-react/all-legacy'
  | 'plugin:@eslint-react/core'
  | 'plugin:@eslint-react/core-legacy'
  | 'plugin:@eslint-react/debug'
  | 'plugin:@eslint-react/debug-legacy'
  | 'plugin:@eslint-react/disable-debug'
  | 'plugin:@eslint-react/disable-debug-legacy'
  | 'plugin:@eslint-react/disable-dom'
  | 'plugin:@eslint-react/disable-dom-legacy'
  | 'plugin:@eslint-react/disable-type-checked'
  | 'plugin:@eslint-react/disable-type-checked-legacy'
  | 'plugin:@eslint-react/disable-web-api'
  | 'plugin:@eslint-react/disable-web-api-legacy'
  | 'plugin:@eslint-react/dom'
  | 'plugin:@eslint-react/dom-legacy'
  | 'plugin:@eslint-react/off'
  | 'plugin:@eslint-react/off-dom'
  | 'plugin:@eslint-react/off-dom-legacy'
  | 'plugin:@eslint-react/off-legacy'
  | 'plugin:@eslint-react/recommended'
  | 'plugin:@eslint-react/recommended-legacy'
  | 'plugin:@eslint-react/recommended-type-checked'
  | 'plugin:@eslint-react/recommended-type-checked-legacy'
  | 'plugin:@eslint-react/recommended-typescript'
  | 'plugin:@eslint-react/recommended-typescript-legacy'
  | 'plugin:@eslint-react/x'
  | 'plugin:@eslint-react/x-legacy';

/**
 * ESLint ReactHooks extends.
 *
 * @see [ReactHooks extends](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)
 */
type ReactHooksExtends =
  | 'plugin:react-hooks/recommended'
  | 'plugin:react-hooks/recommended-latest'
  | 'plugin:react-hooks/recommended-legacy';

/**
 * ESLint ReactQuery extends.
 *
 * @see [ReactQuery extends](https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query#legacy-config-eslintrc)
 */
type ReactQueryExtends = 'plugin:@tanstack/query/recommended';

/**
 * ESLint ReactRefresh extends.
 */
type ReactRefreshExtends =
  | 'plugin:react-refresh/recommended'
  | 'plugin:react-refresh/vite';

/**
 * ESLint RegExp extends.
 *
 * @see [RegExp extends](https://ota-meshi.github.io/eslint-plugin-regexp/rules/)
 */
type RegExpExtends = 'plugin:regexp/all' | 'plugin:regexp/recommended';

/**
 * ESLint Security extends.
 *
 * @see [Security extends](https://github.com/eslint-community/eslint-plugin-security#rules)
 */
type SecurityExtends =
  | 'plugin:security/recommended'
  | 'plugin:security/recommended-legacy';

/**
 * ESLint SonarJS extends.
 *
 * @see [SonarJS extends](https://github.com/SonarSource/eslint-plugin-sonarjs#available-configurations)
 */
type SonarJsExtends =
  | 'plugin:sonarjs/recommended'
  | 'plugin:sonarjs/recommended-legacy';

/**
 * ESLint Solid extends.
 *
 * @see [Solid extends](https://github.com/solidjs-community/eslint-plugin-solid#configuration)
 */
type SolidExtends = 'plugin:solid/recommended' | 'plugin:solid/typescript';

/**
 * ESLint Spellcheck extends.
 *
 * @see [Spellcheck extends](https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin#configuration-legacy-eslintrc)
 */
type SpellcheckExtends =
  | 'plugin:spellcheck/debug'
  | 'plugin:spellcheck/debug-legacy'
  | 'plugin:spellcheck/recommended'
  | 'plugin:spellcheck/recommended-legacy';

/**
 * ESLint Storybook extends.
 */
type StorybookExtends =
  | 'plugin:storybook/addon-interactions'
  | 'plugin:storybook/csf'
  | 'plugin:storybook/csf-strict'
  | 'plugin:storybook/recommended';

/**
 * ESLint Stylistic extends.
 */
type StylisticExtends =
  | 'plugin:stylistic/all'
  | 'plugin:stylistic/customize'
  | 'plugin:stylistic/disable-legacy'
  | 'plugin:stylistic/recommended';

/**
 * ESLint Tailwind extends.
 */
type TailwindExtends = 'plugin:tailwindcss/recommended';

/**
 * ESLint TestingLibrary extends.
 *
 * @see [TestingLibrary extends](https://github.com/testing-library/eslint-plugin-testing-library)
 */
type TestingLibraryExtends =
  | 'plugin:testing-library/angular'
  | 'plugin:testing-library/dom'
  | 'plugin:testing-library/marko'
  | 'plugin:testing-library/react'
  | 'plugin:testing-library/svelte'
  | 'plugin:testing-library/vue';

/**
 * ESLint TypeScript extends.
 */
type TypeScriptExtends =
  | 'plugin:@typescript-eslint/all'
  | 'plugin:@typescript-eslint/base'
  | 'plugin:@typescript-eslint/disable-type-checked'
  | 'plugin:@typescript-eslint/eslint-recommended'
  | 'plugin:@typescript-eslint/recommended'
  | 'plugin:@typescript-eslint/recommended-requiring-type-checking'
  | 'plugin:@typescript-eslint/recommended-type-checked'
  | 'plugin:@typescript-eslint/recommended-type-checked-only'
  | 'plugin:@typescript-eslint/strict'
  | 'plugin:@typescript-eslint/strict-type-checked'
  | 'plugin:@typescript-eslint/strict-type-checked-only'
  | 'plugin:@typescript-eslint/stylistic'
  | 'plugin:@typescript-eslint/stylistic-type-checked'
  | 'plugin:@typescript-eslint/stylistic-type-checked-only';

/**
 * ESLint Unicorn extends.
 *
 * @see [Unicorn extends](https://github.com/sindresorhus/eslint-plugin-unicorn#usage-legacy-eslintrc-or-packagejson)
 */
type UnicornExtends =
  | 'plugin:unicorn/all'
  | 'plugin:unicorn/recommended'
  | 'plugin:unicorn/unopinionated';

/**
 * ESLint Vitest extends.
 *
 * @see [Vitest extends](https://github.com/veritem/eslint-plugin-vitest)
 */
type VitestExtends =
  | 'plugin:vitest/all'
  | 'plugin:vitest/env'
  | 'plugin:vitest/legacy-all'
  | 'plugin:vitest/legacy-recommended'
  | 'plugin:vitest/recommended';

/**
 * ESLint Vue extends.
 *
 * @see [Vue extends](https://eslint.vuejs.org/user-guide/#usage)
 */
type VueExtends =
  | 'plugin:vue/base'
  | 'plugin:vue/essential'
  | 'plugin:vue/no-layout-rules'
  | 'plugin:vue/recommended'
  | 'plugin:vue/strongly-recommended'
  | 'plugin:vue/vue2-essential'
  | 'plugin:vue/vue2-recommended'
  | 'plugin:vue/vue2-strongly-recommended';

/**
 * ESLint VueI18n extends.
 *
 * @see [VueI18n extends](https://eslint-plugin-vue-i18n.intlify.dev/started.html)
 */
type VueI18nExtends =
  | 'plugin:@intlify/vue-i18n/base'
  | 'plugin:@intlify/vue-i18n/base-legacy'
  | 'plugin:@intlify/vue-i18n/recommended'
  | 'plugin:@intlify/vue-i18n/recommended-legacy';

/**
 * ESLint VuePug extends.
 *
 * @see [VuePug extends](https://github.com/rashfael/eslint-plugin-vue-pug#usage)
 */
type VuePugExtends =
  | 'plugin:vue-pug/base'
  | 'plugin:vue-pug/essential'
  | 'plugin:vue-pug/recommended'
  | 'plugin:vue-pug/strongly-recommended'
  | 'plugin:vue-pug/vue3-essential'
  | 'plugin:vue-pug/vue3-recommended'
  | 'plugin:vue-pug/vue3-strongly-recommended';

/**
 * ESLint Yml extends.
 */
type YmlExtends =
  | 'plugin:yml/base'
  | 'plugin:yml/prettier'
  | 'plugin:yml/recommended'
  | 'plugin:yml/standard';
// #endregion extensions

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
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CustomExtends {}

/**
 * All known extends.
 */
export type KnownExtends = LiteralUnion<
  // #region union
  | AstroExtends
  | CspellExtends
  | DeprecationExtends
  | EsXExtends
  | EslintJsExtends
  | EslintJsonExtends
  | EslintMarkdownExtends
  | EslintCommentsExtends
  | EslintPluginExtends
  | GraphQlExtends
  | ImportExtends
  | ImportXExtends
  | JsDocExtends
  | JsoncExtends
  | JsxA11yExtends
  | LinguiExtends
  | MdxExtends
  | NExtends
  | PerfectionistExtends
  | PrettierExtends
  | PlaywrightExtends
  | PnpmExtends
  | PromiseExtends
  | ReactExtends
  | ReactHooksExtends
  | ReactQueryExtends
  | ReactRefreshExtends
  | RegExpExtends
  | SecurityExtends
  | SonarJsExtends
  | SolidExtends
  | SpellcheckExtends
  | StorybookExtends
  | StylisticExtends
  | TailwindExtends
  | TestingLibraryExtends
  | TypeScriptExtends
  | UnicornExtends
  | VitestExtends
  | VueExtends
  | VueI18nExtends
  | VuePugExtends
  | YmlExtends
  // #endregion union
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
  | keyof CustomExtends
>;

/**
 * Extending Configuration Files.
 *
 * @see [Extends](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)
 */
export type Extends = KnownExtends | KnownExtends[];
