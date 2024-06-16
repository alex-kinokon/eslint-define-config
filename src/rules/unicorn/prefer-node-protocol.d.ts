import type { RuleConfig } from '../rule-config';

/**
 * Prefer using the `node:` protocol when importing Node.js builtin modules.
 *
 * @see [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-node-protocol.md)
 */
export type PreferNodeProtocolRuleConfig = RuleConfig<[]>;

/**
 * Prefer using the `node:` protocol when importing Node.js builtin modules.
 *
 * @see [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-node-protocol.md)
 */
export interface PreferNodeProtocolRule {
  /**
   * Prefer using the `node:` protocol when importing Node.js builtin modules.
   *
   * @see [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v54.0.0/docs/rules/prefer-node-protocol.md)
   */
  'unicorn/prefer-node-protocol': PreferNodeProtocolRuleConfig;
}
