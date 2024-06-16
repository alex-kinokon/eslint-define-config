import type { EmptyRuleConfig } from '../rule-config';

/**
 * All Mdx rules.
 */
export interface MdxRules {
  /**
   * Linter integration with remark plugins.
   */
  'mdx/remark': EmptyRuleConfig;
}
