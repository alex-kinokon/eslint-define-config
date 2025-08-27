import type { RuleConfig, RulesObject } from '../rule-config';

// #region imports
import type { AstroRulesObject } from './astro';
import type { CspellRulesObject } from './cspell';
import type { DeprecationRulesObject } from './deprecation';
import type { EsXRulesObject } from './es-x';
import type { EslintCommentsRulesObject } from './eslint-comments';
import type { EslintJsRulesObject } from './eslint-js';
import type { EslintJsonRulesObject } from './eslint-json';
import type { EslintMarkdownRulesObject } from './eslint-markdown';
import type { GraphQLRulesObject } from './graphql-eslint';
import type { ImportRulesObject } from './import';
import type { ImportXRulesObject } from './import-x';
import type { JSDocRulesObject } from './jsdoc';
import type { JsoncRulesObject } from './jsonc';
import type { JsxA11yRulesObject } from './jsx-a11y';
import type { LinguiRulesObject } from './lingui';
import type { MdxRulesObject } from './mdx';
import type { NRulesObject } from './n';
import type { PerfectionistRulesObject } from './perfectionist';
import type { PlaywrightRulesObject } from './playwright';
import type { PnpmRulesObject } from './pnpm';
import type { PrettierRulesObject } from './prettier';
import type { PromiseRulesObject } from './promise';
import type { ReactRulesObject } from './react';
import type { ReactHooksRulesObject } from './react-hooks';
import type { ReactQueryRulesObject } from './react-query';
import type { ReactRefreshRulesObject } from './react-refresh';
import type { RegExpRulesObject } from './regexp';
import type { SecurityRulesObject } from './security';
import type { SolidRulesObject } from './solid';
import type { SonarJSRulesObject } from './sonarjs';
import type { SpellcheckRulesObject } from './spellcheck';
import type { StorybookRulesObject } from './storybook';
import type { StylisticRulesObject } from './stylistic';
import type { TailwindRulesObject } from './tailwind';
import type { TestingLibraryRulesObject } from './testing-library';
import type { TypeScriptRulesObject } from './typescript-eslint';
import type { UnicornRulesObject } from './unicorn';
import type { VitestRulesObject } from './vitest';
import type { VueRulesObject } from './vue';
import type { VueI18nRulesObject } from './vue-i18n';
import type { VuePugRulesObject } from './vue-pug';
import type { YmlRulesObject } from './yml';
// #endregion imports

/**
 * This is a special exported interface for other packages to declare
 * additional types that should bail out for eslint rules. For example
 * `@typescript-eslint/eslint-plugin` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'eslint-define-config' {
 *   export interface CustomRuleOptions {
 *     /**
 *      * Require consistently using either `T[]` or `Array<T>` for arrays.
 *      *
 *      * \@see [array-type](https://typescript-eslint.io/rules/array-type)
 *      *\/
 *     '@typescript-eslint/array-type': [
 *       {
 *         default?: 'array' | 'generic' | 'array-simple';
 *         readonly?: 'array' | 'generic' | 'array-simple';
 *       },
 *     ];
 *
 *     // ... more Rules
 *   }
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CustomRuleOptions {}

type CustomRules = {
  [TRuleName in keyof CustomRuleOptions]: RuleConfig<
    CustomRuleOptions[TRuleName]
  >;
};

/**
 * Rules.
 *
 * @see [Rules](https://eslint.org/docs/user-guide/configuring/rules)
 */
export interface Rules
  extends RulesObject<CustomRules>,
    // #region union
    AstroRulesObject,
    CspellRulesObject,
    DeprecationRulesObject,
    EsXRulesObject,
    EslintJsRulesObject,
    EslintJsonRulesObject,
    EslintMarkdownRulesObject,
    EslintCommentsRulesObject,
    GraphQLRulesObject,
    ImportRulesObject,
    ImportXRulesObject,
    JSDocRulesObject,
    JsoncRulesObject,
    JsxA11yRulesObject,
    LinguiRulesObject,
    MdxRulesObject,
    NRulesObject,
    PerfectionistRulesObject,
    PrettierRulesObject,
    PlaywrightRulesObject,
    PnpmRulesObject,
    PromiseRulesObject,
    ReactRulesObject,
    ReactHooksRulesObject,
    ReactQueryRulesObject,
    ReactRefreshRulesObject,
    RegExpRulesObject,
    SecurityRulesObject,
    SonarJSRulesObject,
    SolidRulesObject,
    SpellcheckRulesObject,
    StorybookRulesObject,
    StylisticRulesObject,
    TailwindRulesObject,
    TestingLibraryRulesObject,
    TypeScriptRulesObject,
    UnicornRulesObject,
    VitestRulesObject,
    VueRulesObject,
    VueI18nRulesObject,
    VuePugRulesObject,
    YmlRulesObject,
    // #endregion union
    Record<string, RuleConfig> {}
