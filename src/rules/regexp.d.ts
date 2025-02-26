import type { RulesObject } from '../rule-config';

export interface LetterCaseOption {
  caseInsensitive?: 'lowercase' | 'uppercase' | 'ignore';
  unicodeEscape?: 'lowercase' | 'uppercase' | 'ignore';
  hexadecimalEscape?: 'lowercase' | 'uppercase' | 'ignore';
  controlEscape?: 'lowercase' | 'uppercase' | 'ignore';
}

export interface MatchAnyOption {
  /**
   * @minItems 1
   */
  allows?: [
    '[\\s\\S]' | '[\\S\\s]' | '[^]' | 'dotAll',
    ...('[\\s\\S]' | '[\\S\\s]' | '[^]' | 'dotAll')[],
  ];
}

export interface NoDupeDisjunctionsOption {
  report?: 'all' | 'trivial' | 'interesting';
  reportExponentialBacktracking?: 'none' | 'certain' | 'potential';
  reportUnreachable?: 'certain' | 'potential';
}

export interface NoLegacyFeaturesOption {
  staticProperties?: (
    | 'input'
    | '$_'
    | 'lastMatch'
    | '$&'
    | 'lastParen'
    | '$+'
    | 'leftContext'
    | '$`'
    | 'rightContext'
    | "$'"
    | '$1'
    | '$2'
    | '$3'
    | '$4'
    | '$5'
    | '$6'
    | '$7'
    | '$8'
    | '$9'
  )[];
  prototypeMethods?: 'compile'[];
}

export interface NoObscureRangeOption {
  allowed?:
    | ('all' | 'alphanumeric')
    | ['all' | 'alphanumeric']
    | ['alphanumeric' | string, ...('alphanumeric' | string)[]];
}

export interface NoSuperLinearBacktrackingOption {
  report?: 'certain' | 'potential';
}

export interface NoSuperLinearMoveOption {
  report?: 'certain' | 'potential';
  ignoreSticky?: boolean;
  ignorePartial?: boolean;
}

export interface NoUselessFlagOption {
  ignore?: ('i' | 'm' | 's' | 'g' | 'y')[];
  strictTypes?: boolean;
}

export interface NoUselessNonCapturingGroupOption {
  allowTop?: boolean | ('always' | 'never' | 'partial');
}

export interface OptimalQuantifierConcatenationOption {
  capturingGroups?: 'ignore' | 'report';
}

export interface PreferDOption {
  insideCharacterClass?: 'ignore' | 'range' | 'd';
}

export interface PreferRangeOption {
  target?:
    | ('all' | 'alphanumeric')
    | ['all' | 'alphanumeric']
    | ['alphanumeric' | string, ...('alphanumeric' | string)[]];
}

export interface SortCharacterClassElementsOption {
  order?: ('\\s' | '\\w' | '\\d' | '\\p' | '*' | '\\q' | '[]')[];
}

export interface UnicodePropertyOption {
  generalCategory?: 'always' | 'never' | 'ignore';
  key?: 'short' | 'long' | 'ignore';
  property?:
    | ('short' | 'long' | 'ignore')
    | {
        binary?: 'short' | 'long' | 'ignore';
        generalCategory?: 'short' | 'long' | 'ignore';
        script?: 'short' | 'long' | 'ignore';
      };
}

/**
 * All RegExp rules.
 */
export interface RegExpRules {
  /**
   * Disallow confusing quantifiers.
   * @see [confusing-quantifier](https://ota-meshi.github.io/eslint-plugin-regexp/rules/confusing-quantifier.html)
   */
  'regexp/confusing-quantifier': null;

  /**
   * Enforce consistent escaping of control characters.
   * @see [control-character-escape](https://ota-meshi.github.io/eslint-plugin-regexp/rules/control-character-escape.html)
   */
  'regexp/control-character-escape': null;

  /**
   * Enforce single grapheme in string literal.
   * @see [grapheme-string-literal](https://ota-meshi.github.io/eslint-plugin-regexp/rules/grapheme-string-literal.html)
   */
  'regexp/grapheme-string-literal': null;

  /**
   * Enforce consistent usage of hexadecimal escape.
   * @see [hexadecimal-escape](https://ota-meshi.github.io/eslint-plugin-regexp/rules/hexadecimal-escape.html)
   */
  'regexp/hexadecimal-escape': [('always' | 'never')?];

  /**
   * Enforce into your favorite case.
   * @see [letter-case](https://ota-meshi.github.io/eslint-plugin-regexp/rules/letter-case.html)
   */
  'regexp/letter-case': [LetterCaseOption?];

  /**
   * Enforce match any character style.
   * @see [match-any](https://ota-meshi.github.io/eslint-plugin-regexp/rules/match-any.html)
   */
  'regexp/match-any': [MatchAnyOption?];

  /**
   * Enforce use of escapes on negation.
   * @see [negation](https://ota-meshi.github.io/eslint-plugin-regexp/rules/negation.html)
   */
  'regexp/negation': null;

  /**
   * Disallow elements that contradict assertions.
   * @see [no-contradiction-with-assertion](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-contradiction-with-assertion.html)
   */
  'regexp/no-contradiction-with-assertion': null;

  /**
   * Disallow control characters.
   * @see [no-control-character](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-control-character.html)
   */
  'regexp/no-control-character': null;

  /**
   * Disallow duplicate characters in the RegExp character class.
   * @see [no-dupe-characters-character-class](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-characters-character-class.html)
   */
  'regexp/no-dupe-characters-character-class': null;

  /**
   * Disallow duplicate disjunctions.
   * @see [no-dupe-disjunctions](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-dupe-disjunctions.html)
   */
  'regexp/no-dupe-disjunctions': [NoDupeDisjunctionsOption?];

  /**
   * Disallow alternatives without elements.
   * @see [no-empty-alternative](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-alternative.html)
   */
  'regexp/no-empty-alternative': null;

  /**
   * Disallow capturing group that captures empty.
   * @see [no-empty-capturing-group](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-capturing-group.html)
   */
  'regexp/no-empty-capturing-group': null;

  /**
   * Disallow character classes that match no characters.
   * @see [no-empty-character-class](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-character-class.html)
   */
  'regexp/no-empty-character-class': null;

  /**
   * Disallow empty group.
   * @see [no-empty-group](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-group.html)
   */
  'regexp/no-empty-group': null;

  /**
   * Disallow empty lookahead assertion or empty lookbehind assertion.
   * @see [no-empty-lookarounds-assertion](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-lookarounds-assertion.html)
   */
  'regexp/no-empty-lookarounds-assertion': null;

  /**
   * Disallow empty string literals in character classes.
   * @see [no-empty-string-literal](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-empty-string-literal.html)
   */
  'regexp/no-empty-string-literal': null;

  /**
   * Disallow escape backspace (`[\b]`).
   * @see [no-escape-backspace](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-escape-backspace.html)
   */
  'regexp/no-escape-backspace': null;

  /**
   * Disallow unnecessary nested lookaround assertions.
   * @see [no-extra-lookaround-assertions](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-extra-lookaround-assertions.html)
   */
  'regexp/no-extra-lookaround-assertions': null;

  /**
   * Disallow invalid regular expression strings in `RegExp` constructors.
   * @see [no-invalid-regexp](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invalid-regexp.html)
   */
  'regexp/no-invalid-regexp': null;

  /**
   * Disallow invisible raw character.
   * @see [no-invisible-character](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-invisible-character.html)
   */
  'regexp/no-invisible-character': null;

  /**
   * Disallow lazy quantifiers at the end of an expression.
   * @see [no-lazy-ends](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-lazy-ends.html)
   */
  'regexp/no-lazy-ends': [
    {
      ignorePartial?: boolean;
    }?,
  ];

  /**
   * Disallow legacy RegExp features.
   * @see [no-legacy-features](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-legacy-features.html)
   */
  'regexp/no-legacy-features': [NoLegacyFeaturesOption?];

  /**
   * Disallow capturing groups that do not behave as one would expect.
   * @see [no-misleading-capturing-group](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-capturing-group.html)
   */
  'regexp/no-misleading-capturing-group': [
    {
      reportBacktrackingEnds?: boolean;
    }?,
  ];

  /**
   * Disallow multi-code-point characters in character classes and quantifiers.
   * @see [no-misleading-unicode-character](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-misleading-unicode-character.html)
   */
  'regexp/no-misleading-unicode-character': [
    {
      fixable?: boolean;
    }?,
  ];

  /**
   * Disallow missing `g` flag in patterns used in `String#matchAll` and `String#replaceAll`.
   * @see [no-missing-g-flag](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-missing-g-flag.html)
   */
  'regexp/no-missing-g-flag': [
    {
      strictTypes?: boolean;
    }?,
  ];

  /**
   * Disallow non-standard flags.
   * @see [no-non-standard-flag](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-non-standard-flag.html)
   */
  'regexp/no-non-standard-flag': null;

  /**
   * Disallow obscure character ranges.
   * @see [no-obscure-range](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-obscure-range.html)
   */
  'regexp/no-obscure-range': [NoObscureRangeOption?];

  /**
   * Disallow octal escape sequence.
   * @see [no-octal](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-octal.html)
   */
  'regexp/no-octal': null;

  /**
   * Disallow optional assertions.
   * @see [no-optional-assertion](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-optional-assertion.html)
   */
  'regexp/no-optional-assertion': null;

  /**
   * Disallow backreferences that reference a group that might not be matched.
   * @see [no-potentially-useless-backreference](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-potentially-useless-backreference.html)
   */
  'regexp/no-potentially-useless-backreference': null;

  /**
   * Disallow standalone backslashes (`\`).
   * @see [no-standalone-backslash](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-standalone-backslash.html)
   */
  'regexp/no-standalone-backslash': null;

  /**
   * Disallow exponential and polynomial backtracking.
   * @see [no-super-linear-backtracking](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-backtracking.html)
   */
  'regexp/no-super-linear-backtracking': [NoSuperLinearBacktrackingOption?];

  /**
   * Disallow quantifiers that cause quadratic moves.
   * @see [no-super-linear-move](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-super-linear-move.html)
   */
  'regexp/no-super-linear-move': [NoSuperLinearMoveOption?];

  /**
   * Disallow trivially nested assertions.
   * @see [no-trivially-nested-assertion](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-assertion.html)
   */
  'regexp/no-trivially-nested-assertion': null;

  /**
   * Disallow nested quantifiers that can be rewritten as one quantifier.
   * @see [no-trivially-nested-quantifier](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-trivially-nested-quantifier.html)
   */
  'regexp/no-trivially-nested-quantifier': null;

  /**
   * Disallow unused capturing group.
   * @see [no-unused-capturing-group](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-unused-capturing-group.html)
   */
  'regexp/no-unused-capturing-group': [
    {
      fixable?: boolean;
      allowNamed?: boolean;
    }?,
  ];

  /**
   * Disallow assertions that are known to always accept (or reject).
   * @see [no-useless-assertions](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-assertions.html)
   */
  'regexp/no-useless-assertions': null;

  /**
   * Disallow useless backreferences in regular expressions.
   * @see [no-useless-backreference](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-backreference.html)
   */
  'regexp/no-useless-backreference': null;

  /**
   * Disallow character class with one character.
   * @see [no-useless-character-class](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-character-class.html)
   */
  'regexp/no-useless-character-class': [
    {
      ignores?: string[];
    }?,
  ];

  /**
   * Disallow useless `$` replacements in replacement string.
   * @see [no-useless-dollar-replacements](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-dollar-replacements.html)
   */
  'regexp/no-useless-dollar-replacements': null;

  /**
   * Disallow unnecessary escape characters in RegExp.
   * @see [no-useless-escape](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-escape.html)
   */
  'regexp/no-useless-escape': null;

  /**
   * Disallow unnecessary regex flags.
   * @see [no-useless-flag](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-flag.html)
   */
  'regexp/no-useless-flag': [NoUselessFlagOption?];

  /**
   * Disallow unnecessarily non-greedy quantifiers.
   * @see [no-useless-lazy](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-lazy.html)
   */
  'regexp/no-useless-lazy': null;

  /**
   * Disallow unnecessary non-capturing group.
   * @see [no-useless-non-capturing-group](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-non-capturing-group.html)
   */
  'regexp/no-useless-non-capturing-group': [NoUselessNonCapturingGroupOption?];

  /**
   * Disallow quantifiers that can be removed.
   * @see [no-useless-quantifier](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-quantifier.html)
   */
  'regexp/no-useless-quantifier': null;

  /**
   * Disallow unnecessary character ranges.
   * @see [no-useless-range](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-range.html)
   */
  'regexp/no-useless-range': null;

  /**
   * Disallow unnecessary elements in expression character classes.
   * @see [no-useless-set-operand](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-set-operand.html)
   */
  'regexp/no-useless-set-operand': null;

  /**
   * Disallow string disjunction of single characters in `\q{...}`.
   * @see [no-useless-string-literal](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-string-literal.html)
   */
  'regexp/no-useless-string-literal': null;

  /**
   * Disallow unnecessary `{n,m}` quantifier.
   * @see [no-useless-two-nums-quantifier](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-useless-two-nums-quantifier.html)
   */
  'regexp/no-useless-two-nums-quantifier': null;

  /**
   * Disallow quantifiers with a maximum of zero.
   * @see [no-zero-quantifier](https://ota-meshi.github.io/eslint-plugin-regexp/rules/no-zero-quantifier.html)
   */
  'regexp/no-zero-quantifier': null;

  /**
   * Disallow the alternatives of lookarounds that end with a non-constant quantifier.
   * @see [optimal-lookaround-quantifier](https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-lookaround-quantifier.html)
   */
  'regexp/optimal-lookaround-quantifier': null;

  /**
   * Require optimal quantifiers for concatenated quantifiers.
   * @see [optimal-quantifier-concatenation](https://ota-meshi.github.io/eslint-plugin-regexp/rules/optimal-quantifier-concatenation.html)
   */
  'regexp/optimal-quantifier-concatenation': [
    OptimalQuantifierConcatenationOption?,
  ];

  /**
   * Enforce using character class.
   * @see [prefer-character-class](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-character-class.html)
   */
  'regexp/prefer-character-class': [
    {
      minAlternatives?: number;
    }?,
  ];

  /**
   * Enforce using `\d`.
   * @see [prefer-d](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-d.html)
   */
  'regexp/prefer-d': [PreferDOption?];

  /**
   * Enforces escape of replacement `$` character (`$$`).
   * @see [prefer-escape-replacement-dollar-char](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-escape-replacement-dollar-char.html)
   */
  'regexp/prefer-escape-replacement-dollar-char': null;

  /**
   * Prefer lookarounds over capturing group that do not replace.
   * @see [prefer-lookaround](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-lookaround.html)
   */
  'regexp/prefer-lookaround': [
    {
      lookbehind?: boolean;
      strictTypes?: boolean;
    }?,
  ];

  /**
   * Enforce using named backreferences.
   * @see [prefer-named-backreference](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-backreference.html)
   */
  'regexp/prefer-named-backreference': null;

  /**
   * Enforce using named capture groups.
   * @see [prefer-named-capture-group](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-capture-group.html)
   */
  'regexp/prefer-named-capture-group': null;

  /**
   * Enforce using named replacement.
   * @see [prefer-named-replacement](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-named-replacement.html)
   */
  'regexp/prefer-named-replacement': [
    {
      strictTypes?: boolean;
    }?,
  ];

  /**
   * Enforce using `+` quantifier.
   * @see [prefer-plus-quantifier](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-plus-quantifier.html)
   */
  'regexp/prefer-plus-quantifier': null;

  /**
   * Prefer predefined assertion over equivalent lookarounds.
   * @see [prefer-predefined-assertion](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-predefined-assertion.html)
   */
  'regexp/prefer-predefined-assertion': null;

  /**
   * Enforce using quantifier.
   * @see [prefer-quantifier](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-quantifier.html)
   */
  'regexp/prefer-quantifier': null;

  /**
   * Enforce using `?` quantifier.
   * @see [prefer-question-quantifier](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-question-quantifier.html)
   */
  'regexp/prefer-question-quantifier': null;

  /**
   * Enforce using character class range.
   * @see [prefer-range](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-range.html)
   */
  'regexp/prefer-range': [PreferRangeOption?];

  /**
   * Enforce that `RegExp#exec` is used instead of `String#match` if no global flag is provided.
   * @see [prefer-regexp-exec](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-exec.html)
   */
  'regexp/prefer-regexp-exec': null;

  /**
   * Enforce that `RegExp#test` is used instead of `String#match` and `RegExp#exec`.
   * @see [prefer-regexp-test](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-regexp-test.html)
   */
  'regexp/prefer-regexp-test': null;

  /**
   * Enforce using result array `groups`.
   * @see [prefer-result-array-groups](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-result-array-groups.html)
   */
  'regexp/prefer-result-array-groups': [
    {
      strictTypes?: boolean;
    }?,
  ];

  /**
   * Prefer character class set operations instead of lookarounds.
   * @see [prefer-set-operation](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-set-operation.html)
   */
  'regexp/prefer-set-operation': null;

  /**
   * Enforce using `*` quantifier.
   * @see [prefer-star-quantifier](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-star-quantifier.html)
   */
  'regexp/prefer-star-quantifier': null;

  /**
   * Enforce use of unicode codepoint escapes.
   * @see [prefer-unicode-codepoint-escapes](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-unicode-codepoint-escapes.html)
   */
  'regexp/prefer-unicode-codepoint-escapes': null;

  /**
   * Enforce using `\w`.
   * @see [prefer-w](https://ota-meshi.github.io/eslint-plugin-regexp/rules/prefer-w.html)
   */
  'regexp/prefer-w': null;

  /**
   * Enforce the use of the `u` flag.
   * @see [require-unicode-regexp](https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-regexp.html)
   */
  'regexp/require-unicode-regexp': null;

  /**
   * Enforce the use of the `v` flag.
   * @see [require-unicode-sets-regexp](https://ota-meshi.github.io/eslint-plugin-regexp/rules/require-unicode-sets-regexp.html)
   */
  'regexp/require-unicode-sets-regexp': null;

  /**
   * Require simplify set operations.
   * @see [simplify-set-operations](https://ota-meshi.github.io/eslint-plugin-regexp/rules/simplify-set-operations.html)
   */
  'regexp/simplify-set-operations': null;

  /**
   * Sort alternatives if order doesn't matter.
   * @see [sort-alternatives](https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-alternatives.html)
   */
  'regexp/sort-alternatives': null;

  /**
   * Enforces elements order in character class.
   * @see [sort-character-class-elements](https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-character-class-elements.html)
   */
  'regexp/sort-character-class-elements': [SortCharacterClassElementsOption?];

  /**
   * Require regex flags to be sorted.
   * @see [sort-flags](https://ota-meshi.github.io/eslint-plugin-regexp/rules/sort-flags.html)
   */
  'regexp/sort-flags': null;

  /**
   * Disallow not strictly valid regular expressions.
   * @see [strict](https://ota-meshi.github.io/eslint-plugin-regexp/rules/strict.html)
   */
  'regexp/strict': null;

  /**
   * Enforce consistent usage of unicode escape or unicode codepoint escape.
   * @see [unicode-escape](https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-escape.html)
   */
  'regexp/unicode-escape': [('unicodeCodePointEscape' | 'unicodeEscape')?];

  /**
   * Enforce consistent naming of unicode properties.
   * @see [unicode-property](https://ota-meshi.github.io/eslint-plugin-regexp/rules/unicode-property.html)
   */
  'regexp/unicode-property': [UnicodePropertyOption?];

  /**
   * Use the `i` flag if it simplifies the pattern.
   * @see [use-ignore-case](https://ota-meshi.github.io/eslint-plugin-regexp/rules/use-ignore-case.html)
   */
  'regexp/use-ignore-case': null;
}

export type RegExpRulesObject = RulesObject<RegExpRules>;
