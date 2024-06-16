import type { RulesObject } from '../rule-config';

/**
 * All Spellcheck rules.
 */
export interface SpellcheckRules {
  /**
   * Spell check.
   */
  'spellcheck/spell-checker': [
    {
      comments?: boolean;
      strings?: boolean;
      identifiers?: boolean;
      ignoreRequire?: boolean;
      enableUpperCaseUnderscoreCheck?: boolean;
      templates?: boolean;
      lang?: string;
      langDir?: string;
      skipWords?: any[];
      skipIfMatch?: any[];
      skipWordIfMatch?: any[];
      minLength?: number;
    }?,
  ];
}

export type SpellcheckRulesObject = RulesObject<SpellcheckRules>;
