import type { RulesObject } from '../rule-config';

/**
 * All Mdx rules.
 */
export interface MdxRules {
  /**
   * Linter integration with remark plugins.
   * @preset `mdx/base`, `mdx/flat`
   */
  'mdx/remark': null;
}

export type MdxRulesObject = RulesObject<MdxRules>;
