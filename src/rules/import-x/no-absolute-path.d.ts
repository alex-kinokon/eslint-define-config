import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface NoAbsolutePathOption {
  commonjs?: boolean;
  amd?: boolean;
  esmodule?: boolean;
  /**
   * @minItems 1
   */
  ignore?: [string, ...string[]];
}

/**
 * Options.
 */
export type NoAbsolutePathOptions = [NoAbsolutePathOption?];

/**
 * Forbid import of modules using absolute paths.
 *
 * @see [no-absolute-path](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-absolute-path.md)
 */
export type NoAbsolutePathRuleConfig = RuleConfig<NoAbsolutePathOptions>;

/**
 * Forbid import of modules using absolute paths.
 *
 * @see [no-absolute-path](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-absolute-path.md)
 */
export interface NoAbsolutePathRule {
  /**
   * Forbid import of modules using absolute paths.
   *
   * @see [no-absolute-path](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/no-absolute-path.md)
   */
  'import-x/no-absolute-path': NoAbsolutePathRuleConfig;
}
