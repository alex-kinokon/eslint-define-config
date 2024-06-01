import type { RuleConfig } from '../rule-config';

/**
 * Forbid potentially ambiguous parse goal (`script` vs. `module`).
 *
 * @see [unambiguous](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/unambiguous.md)
 */
export type UnambiguousRuleConfig = RuleConfig<[]>;

/**
 * Forbid potentially ambiguous parse goal (`script` vs. `module`).
 *
 * @see [unambiguous](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/unambiguous.md)
 */
export interface UnambiguousRule {
  /**
   * Forbid potentially ambiguous parse goal (`script` vs. `module`).
   *
   * @see [unambiguous](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/unambiguous.md)
   */
  'import-x/unambiguous': UnambiguousRuleConfig;
}
