import type { RulesObject } from '../rule-config';

export interface NoExpressionInMessageOption {}

export interface NoUnlocalizedStringsOption {
  ignore?: string[];
  ignoreNames?: (
    | string
    | {
        regex: {
          pattern: string;
          flags?: string;
        };
      }
  )[];
  ignoreFunctions?: string[];
  ignoreMethodsOnTypes?: string[];
  useTsTypes?: boolean;
}

export interface NoSingleTagToTranslateOption {}

export interface NoSingleVariablesToTranslateOption {}

export interface TCallInFunctionOption {}

export interface TextRestrictionsOption {
  rules?: {
    patterns?: string[];
    flags?: string;
    message?: string;
    [k: string]: any;
  }[];
}

export interface NoTransInsideTransOption {}

/**
 * All Lingui rules.
 */
export interface LinguiRules {
  /**
   * Doesn't allow functions or member expressions in templates.
   * @preset `lingui/recommended`, `lingui/flat/recommended`
   * @see [no-expression-in-message](https://github.com/lingui/eslint-plugin/blob/main/docs/rules/no-expression-in-message.md)
   */
  'lingui/no-expression-in-message': [NoExpressionInMessageOption?];

  /**
   * Ensures all strings, templates, and JSX text are properly wrapped with `<Trans>`, `t`, or `msg` for translation.
   * @see [no-unlocalized-strings](https://github.com/lingui/eslint-plugin/blob/main/docs/rules/no-unlocalized-strings.md)
   */
  'lingui/no-unlocalized-strings': [NoUnlocalizedStringsOption?];

  /**
   * Doesn't allow <Trans></Trans> to wrap a single element unnecessarily.
   * @preset `lingui/recommended`, `lingui/flat/recommended`
   * @see [no-single-tag-to-translate](https://github.com/lingui/eslint-plugin/blob/main/docs/rules/no-single-tag-to-translate.md)
   */
  'lingui/no-single-tag-to-translate': [NoSingleTagToTranslateOption?];

  /**
   * Doesn't allow single variables without text to translate.
   * @preset `lingui/recommended`, `lingui/flat/recommended`
   * @see [no-single-variables-to-translate](https://github.com/lingui/eslint-plugin/blob/main/docs/rules/no-single-variables-to-translate.md)
   */
  'lingui/no-single-variables-to-translate': [
    NoSingleVariablesToTranslateOption?,
  ];

  /**
   * Allow t call only inside functions.
   * @preset `lingui/recommended`, `lingui/flat/recommended`
   * @see [t-call-in-function](https://github.com/lingui/eslint-plugin/blob/main/docs/rules/t-call-in-function.md)
   */
  'lingui/t-call-in-function': [TCallInFunctionOption?];

  /**
   * Text restrictions.
   * @see [text-restrictions](https://github.com/lingui/eslint-plugin/blob/main/docs/rules/text-restrictions.md)
   */
  'lingui/text-restrictions': [TextRestrictionsOption?];

  /**
   * Doesn't allow Trans component be inside Trans component.
   * @preset `lingui/recommended`, `lingui/flat/recommended`
   * @see [no-trans-inside-trans](https://github.com/lingui/eslint-plugin/blob/main/docs/rules/no-trans-inside-trans.md)
   */
  'lingui/no-trans-inside-trans': [NoTransInsideTransOption?];
}

export type LinguiRulesObject = RulesObject<LinguiRules>;
