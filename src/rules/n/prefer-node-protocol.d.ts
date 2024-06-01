import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface PreferNodeProtocolOption {
  version?: string;
}

/**
 * Options.
 */
export type PreferNodeProtocolOptions = [PreferNodeProtocolOption?];

/**
 * Enforce using the `node:` protocol when importing Node.js builtin modules.
 *
 * @see [prefer-node-protocol](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md)
 */
export type PreferNodeProtocolRuleConfig =
  RuleConfig<PreferNodeProtocolOptions>;

/**
 * Enforce using the `node:` protocol when importing Node.js builtin modules.
 *
 * @see [prefer-node-protocol](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md)
 */
export interface PreferNodeProtocolRule {
  /**
   * Enforce using the `node:` protocol when importing Node.js builtin modules.
   *
   * @see [prefer-node-protocol](https://github.com/eslint-community/eslint-plugin-n/blob/HEAD/docs/rules/prefer-node-protocol.md)
   */
  'n/prefer-node-protocol': PreferNodeProtocolRuleConfig;
}
