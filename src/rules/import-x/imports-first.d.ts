import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type ImportsFirstOption = 'absolute-first' | 'disable-absolute-first';

/**
 * Options.
 */
export type ImportsFirstOptions = [ImportsFirstOption?];

/**
 * Replaced by `import-x/first`.
 *
 * @deprecated
 *
 * @see [imports-first](https://github.com/un-ts/eslint-plugin-import-x/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)
 */
export type ImportsFirstRuleConfig = RuleConfig<ImportsFirstOptions>;

/**
 * Replaced by `import-x/first`.
 *
 * @deprecated
 *
 * @see [imports-first](https://github.com/un-ts/eslint-plugin-import-x/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)
 */
export interface ImportsFirstRule {
  /**
   * Replaced by `import-x/first`.
   *
   * @deprecated
   *
   * @see [imports-first](https://github.com/un-ts/eslint-plugin-import-x/blob/7b25c1cb95ee18acc1531002fd343e1e6031f9ed/docs/rules/imports-first.md)
   */
  'import-x/imports-first': ImportsFirstRuleConfig;
}
