import type { RulesObject } from '../rule-config';

export namespace Prettier {
  export interface PrettierOption {
    [k: string]: any;
  }

  export interface PrettierConfig {
    usePrettierrc?: boolean;
    fileInfoOptions?: {
      [k: string]: any;
    };
    [k: string]: any;
  }

  export type PrettierRuleConfig = [PrettierOption?, PrettierConfig?];
}

/**
 * All Prettier rules.
 */
export interface PrettierRules {
  /**
   * @see [prettier](https://github.com/prettier/eslint-plugin-prettier#options)
   */
  'prettier/prettier': Prettier.PrettierRuleConfig;
}

export type PrettierRulesObject = RulesObject<PrettierRules>;
