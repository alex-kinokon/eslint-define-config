import type { RuleConfig } from '../rule-config';

/**
 * Ensure a default export is present, given a default import.
 *
 * @see [default](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/default.md)
 */
export type DefaultRuleConfig = RuleConfig<[]>;

/**
 * Ensure a default export is present, given a default import.
 *
 * @see [default](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/default.md)
 */
export interface DefaultRule {
  /**
   * Ensure a default export is present, given a default import.
   *
   * @see [default](https://github.com/un-ts/eslint-plugin-import-x/blob/v0.5.1/docs/rules/default.md)
   */
  'import-x/default': DefaultRuleConfig;
}
