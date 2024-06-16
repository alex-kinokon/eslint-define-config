import type { RuleConfig } from '../rule-config';

export type SpellCheckerRuleConfig = [
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

/**
 * All Spellcheck rules.
 */
export interface SpellcheckRules {
  /**
   * Spell check.
   */
  'spellcheck/spell-checker': RuleConfig<SpellCheckerRuleConfig>;
}
