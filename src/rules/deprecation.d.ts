import type { EmptyRuleConfig } from '../rule-config';

/**
 * All Deprecation rules.
 */
export interface DeprecationRules {
  /**
   * Do not use deprecated APIs.
   * @see [deprecation](https://github.com/gund/eslint-plugin-deprecation)
   */
  'deprecation/deprecation': EmptyRuleConfig;
}
