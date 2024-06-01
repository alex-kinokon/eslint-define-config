import type { RuleConfig } from '../rule-config';

/**
 * Forbid use of exported name as property of default export.
 *
 * @see [no-named-as-default-member](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-as-default-member.md)
 */
export type NoNamedAsDefaultMemberRuleConfig = RuleConfig<[]>;

/**
 * Forbid use of exported name as property of default export.
 *
 * @see [no-named-as-default-member](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-as-default-member.md)
 */
export interface NoNamedAsDefaultMemberRule {
  /**
   * Forbid use of exported name as property of default export.
   *
   * @see [no-named-as-default-member](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-named-as-default-member.md)
   */
  'import-x/no-named-as-default-member': NoNamedAsDefaultMemberRuleConfig;
}
