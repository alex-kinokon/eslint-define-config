import type { RuleConfig } from '../rule-config';

/**
 * Require creating a `Promise` constructor before using it in an ES5 environment.
 *
 * @see [no-native](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md)
 */
export type NoNativeRuleConfig = RuleConfig<[]>;

/**
 * Require creating a `Promise` constructor before using it in an ES5 environment.
 *
 * @see [no-native](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md)
 */
export interface NoNativeRule {
  /**
   * Require creating a `Promise` constructor before using it in an ES5 environment.
   *
   * @see [no-native](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-native.md)
   */
  'promise/no-native': NoNativeRuleConfig;
}
