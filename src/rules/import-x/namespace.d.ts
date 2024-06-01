import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NamespaceOption {
  /**
   * If `false`, will report computed (and thus, un-lintable) references to namespace members.
   */
  allowComputed?: boolean;
}

/**
 * Options.
 */
export type NamespaceOptions = [NamespaceOption?];

/**
 * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
 *
 * @see [namespace](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/namespace.md)
 */
export type NamespaceRuleConfig = RuleConfig<NamespaceOptions>;

/**
 * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
 *
 * @see [namespace](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/namespace.md)
 */
export interface NamespaceRule {
  /**
   * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
   *
   * @see [namespace](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/namespace.md)
   */
  'import-x/namespace': NamespaceRuleConfig;
}
