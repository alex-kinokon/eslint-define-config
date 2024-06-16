import type { RulesObject } from '../rule-config';

export type KeyFormatStyleRuleConfig = [
  (
    | 'camelCase'
    | 'kebab-case'
    | 'lowercase'
    | 'snake_case'
    | 'SCREAMING_SNAKE_CASE'
  )?,
  {
    allowArray?: boolean;
    splitByDots?: boolean;
  }?,
];

export interface NoRawTextOption {
  attributes?: {
    /**
     */
    [k: string]: string[];
  };
  ignoreNodes?: any[];
  ignorePattern?: string;
  ignoreText?: any[];
  [k: string]: any;
}

/**
 * All VueI18n rules.
 */
export interface VueI18nRules {
  /**
   * Enforce specific casing for localization keys.
   * @see [key-format-style](https://eslint-plugin-vue-i18n.intlify.dev/rules/key-format-style.html)
   */
  '@intlify/vue-i18n/key-format-style': KeyFormatStyleRuleConfig;

  /**
   * Disallow using deprecated `<i18n>` components (in Vue I18n 9.0.0+).
   * @see [no-deprecated-i18n-component](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-component.html)
   */
  '@intlify/vue-i18n/no-deprecated-i18n-component': null;

  /**
   * Disallow using deprecated `place` attribute (Removed in Vue I18n 9.0.0+).
   * @see [no-deprecated-i18n-place-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-place-attr.html)
   */
  '@intlify/vue-i18n/no-deprecated-i18n-place-attr': null;

  /**
   * Disallow using deprecated `places` prop (Removed in Vue I18n 9.0.0+).
   * @see [no-deprecated-i18n-places-prop](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-i18n-places-prop.html)
   */
  '@intlify/vue-i18n/no-deprecated-i18n-places-prop': null;

  /**
   * Enforce modulo interpolation to be named interpolation.
   * @see [no-deprecated-modulo-syntax](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-modulo-syntax.html)
   */
  '@intlify/vue-i18n/no-deprecated-modulo-syntax': null;

  /**
   * Disallow using deprecated `tc` or `$tc` (Deprecated in Vue I18n 10.0.0, removed fully in Vue I18n 11.0.0).
   * @see [no-deprecated-tc](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-deprecated-tc.html)
   */
  '@intlify/vue-i18n/no-deprecated-tc': null;

  /**
   * Disallow duplicate localization keys within the same locale.
   * @see [no-duplicate-keys-in-locale](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-duplicate-keys-in-locale.html)
   */
  '@intlify/vue-i18n/no-duplicate-keys-in-locale': [
    {
      ignoreI18nBlock?: boolean;
    }?,
  ];

  /**
   * Disallow localization dynamic keys at localization methods.
   * @see [no-dynamic-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-dynamic-keys.html)
   */
  '@intlify/vue-i18n/no-dynamic-keys': null;

  /**
   * Disallow use HTML localization messages.
   * @see [no-html-messages](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-html-messages.html)
   */
  '@intlify/vue-i18n/no-html-messages': null;

  /**
   * Disallow using `path` prop with `<i18n-t>`.
   * @see [no-i18n-t-path-prop](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-i18n-t-path-prop.html)
   */
  '@intlify/vue-i18n/no-i18n-t-path-prop': null;

  /**
   * Disallow missing locale message keys in other locales.
   * @see [no-missing-keys-in-other-locales](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-missing-keys-in-other-locales.html)
   */
  '@intlify/vue-i18n/no-missing-keys-in-other-locales': [
    {
      ignoreLocales?: string[];
    }?,
  ];

  /**
   * Disallow missing locale message key at localization methods.
   * @see [no-missing-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-missing-keys.html)
   */
  '@intlify/vue-i18n/no-missing-keys': null;

  /**
   * Disallow to string literal in template or JSX.
   * @see [no-raw-text](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-raw-text.html)
   */
  '@intlify/vue-i18n/no-raw-text': [NoRawTextOption?];

  /**
   * Disallow unknown locale name.
   * @see [no-unknown-locale](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-unknown-locale.html)
   */
  '@intlify/vue-i18n/no-unknown-locale': [
    {
      locales?: string[];
      disableRFC5646?: boolean;
    }?,
  ];

  /**
   * Disallow unused localization keys.
   * @see [no-unused-keys](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-unused-keys.html)
   */
  '@intlify/vue-i18n/no-unused-keys': [
    {
      src?: string;
      extensions?: string[];
      ignores?: string[];
      enableFix?: boolean;
    }?,
  ];

  /**
   * Disallow use of localization methods on v-html to prevent XSS attack.
   * @see [no-v-html](https://eslint-plugin-vue-i18n.intlify.dev/rules/no-v-html.html)
   */
  '@intlify/vue-i18n/no-v-html': null;

  /**
   * Enforce linked key to be enclosed in parentheses.
   * @see [prefer-linked-key-with-paren](https://eslint-plugin-vue-i18n.intlify.dev/rules/prefer-linked-key-with-paren.html)
   */
  '@intlify/vue-i18n/prefer-linked-key-with-paren': null;

  /**
   * Require lang attribute on `<i18n>` block.
   * @see [prefer-sfc-lang-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/prefer-sfc-lang-attr.html)
   */
  '@intlify/vue-i18n/prefer-sfc-lang-attr': null;

  /**
   * Require or disallow the locale attribute on `<i18n>` block.
   * @see [sfc-locale-attr](https://eslint-plugin-vue-i18n.intlify.dev/rules/sfc-locale-attr.html)
   */
  '@intlify/vue-i18n/sfc-locale-attr': [('always' | 'never')?];

  /**
   * Disallow invalid message syntax.
   * @see [valid-message-syntax](https://eslint-plugin-vue-i18n.intlify.dev/rules/valid-message-syntax.html)
   */
  '@intlify/vue-i18n/valid-message-syntax': [
    {
      allowNotString?: boolean;
    }?,
  ];
}

export type VueI18nRulesObject = RulesObject<VueI18nRules>;
