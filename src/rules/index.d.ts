import type { RuleConfig, RulesObject } from '../rule-config';
import type { DeprecationRulesObject } from './deprecation';
import type { EslintRulesObject } from './eslint';
import type { EslintCommentsRulesObject } from './eslint-comments';
import type { GraphQLRulesObject } from './graphql-eslint';
import type { ImportRulesObject } from './import';
import type { JSDocRulesObject } from './jsdoc';
import type { JsoncRulesObject } from './jsonc';
import type { JsxA11yRulesObject } from './jsx-a11y';
import type { NRulesObject } from './n';
import type { NodeRulesObject } from './node';
import type { PromiseRulesObject } from './promise';
import type { ReactRulesObject } from './react';
import type { ReactHooksRulesObject } from './react-hooks';
import type { SonarJSRulesObject } from './sonarjs';
import type { SpellcheckRulesObject } from './spellcheck';
import type { TestingLibraryRulesObject } from './testing-library';
import type { TypeScriptRulesObject } from './typescript-eslint';
import type { UnicornRulesObject } from './unicorn';
import type { VitestRulesObject } from './vitest';
import type { VueRulesObject } from './vue';
import type { VueI18nRulesObject } from './vue-i18n';
import type { VuePugRulesObject } from './vue-pug';
import type { YmlRulesObject } from './yml';

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
    DeprecationRulesObject,
    EslintRulesObject,
    EslintCommentsRulesObject,
    GraphQLRulesObject,
    ImportRulesObject,
    JSDocRulesObject,
    JsoncRulesObject,
    JsxA11yRulesObject,
    NodeRulesObject,
    NRulesObject,
    PromiseRulesObject,
    ReactHooksRulesObject,
    ReactRulesObject,
    SonarJSRulesObject,
    SpellcheckRulesObject,
    TestingLibraryRulesObject,
    TypeScriptRulesObject,
    UnicornRulesObject,
    VitestRulesObject,
    VueRulesObject,
    VueI18nRulesObject,
    VuePugRulesObject,
    YmlRulesObject,
    Record<string, RuleConfig> {}
