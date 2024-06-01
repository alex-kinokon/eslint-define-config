import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoNodejsModulesOption {
  allow?: string[];
}

/**
 * Options.
 */
export type NoNodejsModulesOptions = [NoNodejsModulesOption?];

/**
 * Forbid Node.js builtin modules.
 *
 * @see [no-nodejs-modules](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-nodejs-modules.md)
 */
export type NoNodejsModulesRuleConfig = RuleConfig<NoNodejsModulesOptions>;

/**
 * Forbid Node.js builtin modules.
 *
 * @see [no-nodejs-modules](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-nodejs-modules.md)
 */
export interface NoNodejsModulesRule {
  /**
   * Forbid Node.js builtin modules.
   *
   * @see [no-nodejs-modules](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-nodejs-modules.md)
   */
  'import-x/no-nodejs-modules': NoNodejsModulesRuleConfig;
}
