import type { EmptyRuleConfig, RuleConfig } from '../rule-config';

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
   * @see [disable-enable-pair](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/disable-enable-pair.html)
   */
  'eslint-comments/disable-enable-pair': RuleConfig<
    [
      {
        allowWholeFile?: boolean;
      }?,
    ]
  >;

  /**
   * Disallow a `eslint-enable` comment for multiple `eslint-disable` comments.
   * @see [no-aggregating-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-aggregating-enable.html)
   */
  'eslint-comments/no-aggregating-enable': EmptyRuleConfig;

  /**
   * Disallow duplicate `eslint-disable` comments.
   * @see [no-duplicate-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-duplicate-disable.html)
   */
  'eslint-comments/no-duplicate-disable': EmptyRuleConfig;

  /**
   * Disallow `eslint-disable` comments about specific rules.
   * @see [no-restricted-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-restricted-disable.html)
   */
  'eslint-comments/no-restricted-disable': RuleConfig<NoRestrictedDisableOption>;

  /**
   * Disallow `eslint-disable` comments without rule names.
   * @see [no-unlimited-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unlimited-disable.html)
   */
  'eslint-comments/no-unlimited-disable': EmptyRuleConfig;

  /**
   * Disallow unused `eslint-disable` comments.
   * @see [no-unused-disable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-disable.html)
   */
  'eslint-comments/no-unused-disable': EmptyRuleConfig;

  /**
   * Disallow unused `eslint-enable` comments.
   * @see [no-unused-enable](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-unused-enable.html)
   */
  'eslint-comments/no-unused-enable': EmptyRuleConfig;

  /**
   * Disallow ESLint directive-comments.
   * @see [no-use](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/no-use.html)
   */
  'eslint-comments/no-use': RuleConfig<NoUse.NoUseRuleConfig>;

  /**
   * Require include descriptions in ESLint directive-comments.
   * @see [require-description](https://mysticatea.github.io/eslint-plugin-eslint-comments/rules/require-description.html)
   */
  'eslint-comments/require-description': RuleConfig<RequireDescription.RequireDescriptionRuleConfig>;
}
