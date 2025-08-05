import type { RulesObject } from '../rule-config';

export type NoRestrictedDisableOption = string[];

export namespace NoUse {
  export interface NoUseOption {
    allow?: (
      | 'eslint'
      | 'eslint-disable'
      | 'eslint-disable-line'
      | 'eslint-disable-next-line'
      | 'eslint-enable'
      | 'eslint-env'
      | 'exported'
      | 'global'
      | 'globals'
    )[];
  }

  export type NoUseRuleConfig = [NoUseOption?];
}
export namespace RequireDescription {
  export interface RequireDescriptionOption {
    ignore?: (
      | 'eslint'
      | 'eslint-disable'
      | 'eslint-disable-line'
      | 'eslint-disable-next-line'
      | 'eslint-enable'
      | 'eslint-env'
      | 'exported'
      | 'global'
      | 'globals'
    )[];
  }

  export type RequireDescriptionRuleConfig = [RequireDescriptionOption?];
}

/**
 * All EslintComments rules.
 */
export interface EslintCommentsRules {
  /**
   * Require a `eslint-enable` comment for every `eslint-disable` comment.
   * @preset `eslint-comments/recommended`
   * @see [disable-enable-pair](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html)
   */
  'eslint-comments/disable-enable-pair': [
    {
      allowWholeFile?: boolean;
    }?,
  ];

  /**
   * Disallow a `eslint-enable` comment for multiple `eslint-disable` comments.
   * @preset `eslint-comments/recommended`
   * @see [no-aggregating-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html)
   */
  'eslint-comments/no-aggregating-enable': null;

  /**
   * Disallow duplicate `eslint-disable` comments.
   * @preset `eslint-comments/recommended`
   * @see [no-duplicate-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html)
   */
  'eslint-comments/no-duplicate-disable': null;

  /**
   * Disallow `eslint-disable` comments about specific rules.
   * @see [no-restricted-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html)
   */
  'eslint-comments/no-restricted-disable': NoRestrictedDisableOption;

  /**
   * Disallow `eslint-disable` comments without rule names.
   * @preset `eslint-comments/recommended`
   * @see [no-unlimited-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html)
   */
  'eslint-comments/no-unlimited-disable': null;

  /**
   * Disallow unused `eslint-disable` comments.
   * @see [no-unused-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html)
   */
  'eslint-comments/no-unused-disable': null;

  /**
   * Disallow unused `eslint-enable` comments.
   * @preset `eslint-comments/recommended`
   * @see [no-unused-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html)
   */
  'eslint-comments/no-unused-enable': null;

  /**
   * Disallow ESLint directive-comments.
   * @see [no-use](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html)
   */
  'eslint-comments/no-use': NoUse.NoUseRuleConfig;

  /**
   * Require include descriptions in ESLint directive-comments.
   * @see [require-description](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html)
   */
  'eslint-comments/require-description': RequireDescription.RequireDescriptionRuleConfig;
}

export type EslintCommentsRulesObject = RulesObject<EslintCommentsRules>;
