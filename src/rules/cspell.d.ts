import type { RulesObject } from '../rule-config';

export interface SpellcheckerOption {
  /**
   * Automatically fix common mistakes. This is only possible if a single preferred suggestion is available.
   */
  autoFix: boolean;
  /**
   * Spell check comments
   */
  checkComments?: boolean;
  /**
   * Spell check identifiers (variables names, function names, class names, etc.)
   */
  checkIdentifiers?: boolean;
  /**
   * Spell check JSX Text
   */
  checkJSXText?: boolean;
  /**
   * Scope selectors to spell check. This is a list of scope selectors to spell check.
   *
   * Example: ```js checkScope: [     ['YAMLPair[key] YAMLScalar', true],     ['YAMLPair[value] YAMLScalar', true],     ['YAMLSequence[entries] YAMLScalar', true],     ['JSONProperty[key] JSONLiteral', true],     ['JSONProperty[value] JSONLiteral', true],     ['JSONArrayExpression JSONLiteral', true], ], ```
   */
  checkScope?: [string, boolean][];
  /**
   * Spell check template strings
   */
  checkStringTemplates?: boolean;
  /**
   * Spell check strings
   */
  checkStrings?: boolean;
  /**
   * Path to the cspell configuration file. Relative paths, will be relative to the current working directory.
   */
  configFile?: string;
  /**
   * CSpell options to pass to the spell checker.
   */
  cspell?: {
    /**
     * True to enable compound word checking.
     */
    allowCompoundWords?: boolean;
    /**
     * Optional list of dictionaries to use. Each entry should match the name of the dictionary.
     *
     * To remove a dictionary from the list, add `!` before the name.
     *
     * For example, `!typescript` will turn off the dictionary with the name `typescript`.
     *
     * See the [Dictionaries](https://cspell.org/docs/dictionaries/) and [Custom Dictionaries](https://cspell.org/docs/dictionaries-custom/) for more details.
     */
    dictionaries?: string[];
    dictionaryDefinitions?: {
      /**
       * Optional description of the contents / purpose of the dictionary.
       */
      description?: string;
      /**
       * This is the name of a dictionary.
       *
       * Name Format:
       * - Must contain at least 1 number or letter.
       * - Spaces are allowed.
       * - Leading and trailing space will be removed.
       * - Names ARE case-sensitive.
       * - Must not contain `*`, `!`, `;`, `,`, `{`, `}`, `[`, `]`, `~`.
       */
      name: string;
      /**
       * Indicate that suggestions should not come from this dictionary. Words in this dictionary are considered correct, but will not be used when making spell correction suggestions.
       *
       * Note: if a word is suggested by another dictionary, but found in this dictionary, it will be removed from the set of possible suggestions.
       */
      noSuggest?: boolean;
      /**
       * Path to the file.
       */
      path: string;
      /**
       * Replacement pairs.
       */
      repMap?: [string, string][];
      /**
       * Type of file:
       * - S - single word per line,
       * - W - each line can contain one or more words separated by space,
       * - C - each line is treated like code (Camel Case is allowed).
       *
       * Default is S.
       *
       * C is the slowest to load due to the need to split each line based upon code splitting rules.
       *
       * Note: this settings does not apply to inline dictionaries or `.trie` files.
       */
      type?: 'S' | 'W' | 'C' | 'T';
      /**
       * Use Compounds.
       */
      useCompounds?: boolean;
    }[];
    /**
     * Is the spell checker enabled.
     */
    enabled?: boolean;
    /**
     * List of words to always be considered incorrect. Words found in `flagWords` override `words`.
     *
     * Format of `flagWords`
     * - single word entry - `word`
     * - with suggestions - `word:suggestion` or `word->suggestion, suggestions`
     *
     * Example: ```ts "flagWords": [   "color: colour",   "incase: in case, encase",   "canot->cannot",   "cancelled->canceled" ] ```
     */
    flagWords?: string[];
    /**
     * List of regular expression patterns or pattern names to exclude from spell checking.
     *
     * Example: `["href"]` - to exclude html href pattern.
     *
     * Regular expressions use JavaScript regular expression syntax.
     *
     * Example: to ignore ALL-CAPS words
     *
     * JSON ```json "ignoreRegExpList": ["/\\b[A-Z]+\\b/g"] ```
     *
     * YAML ```yaml ignoreRegExpList:   - >-    /\b[A-Z]+\b/g ```
     *
     * By default, several patterns are excluded. See [Configuration](https://cspell.org/configuration/patterns) for more details.
     *
     * While you can create your own patterns, you can also leverage several patterns that are [built-in to CSpell](https://cspell.org/types/cspell-types/types/PredefinedPatterns.html).
     */
    ignoreRegExpList?: (
      | string
      | (
          | 'Base64'
          | 'Base64MultiLine'
          | 'Base64SingleLine'
          | 'CStyleComment'
          | 'CStyleHexValue'
          | 'CSSHexValue'
          | 'CommitHash'
          | 'CommitHashLink'
          | 'Email'
          | 'EscapeCharacters'
          | 'HexValues'
          | 'href'
          | 'PhpHereDoc'
          | 'PublicKey'
          | 'RsaCert'
          | 'SshRsa'
          | 'SHA'
          | 'HashStrings'
          | 'SpellCheckerDisable'
          | 'SpellCheckerDisableBlock'
          | 'SpellCheckerDisableLine'
          | 'SpellCheckerDisableNext'
          | 'SpellCheckerIgnoreInDocSetting'
          | 'string'
          | 'UnicodeRef'
          | 'Urls'
          | 'UUID'
          | 'Everything'
        )
    )[];
    /**
     * List of words to be ignored. An ignored word will not show up as an error, even if it is also in the `flagWords`.
     */
    ignoreWords?: string[];
    /**
     * Allows this configuration to inherit configuration for one or more other files.
     *
     * See [Importing / Extending Configuration](https://cspell.org/configuration/imports/) for more details.
     */
    import?: string | string[];
    /**
     * List of regular expression patterns or defined pattern names to match for spell checking.
     *
     * If this property is defined, only text matching the included patterns will be checked.
     *
     * While you can create your own patterns, you can also leverage several patterns that are [built-in to CSpell](https://cspell.org/types/cspell-types/types/PredefinedPatterns.html).
     */
    includeRegExpList?: (
      | string
      | (
          | 'Base64'
          | 'Base64MultiLine'
          | 'Base64SingleLine'
          | 'CStyleComment'
          | 'CStyleHexValue'
          | 'CSSHexValue'
          | 'CommitHash'
          | 'CommitHashLink'
          | 'Email'
          | 'EscapeCharacters'
          | 'HexValues'
          | 'href'
          | 'PhpHereDoc'
          | 'PublicKey'
          | 'RsaCert'
          | 'SshRsa'
          | 'SHA'
          | 'HashStrings'
          | 'SpellCheckerDisable'
          | 'SpellCheckerDisableBlock'
          | 'SpellCheckerDisableLine'
          | 'SpellCheckerDisableNext'
          | 'SpellCheckerIgnoreInDocSetting'
          | 'string'
          | 'UnicodeRef'
          | 'Urls'
          | 'UUID'
          | 'Everything'
        )
    )[];
    /**
     * Current active spelling language. This specifies the language locale to use in choosing the general dictionary.
     *
     * For example:
     *
     * - "en-GB" for British English.
     * - "en,nl" to enable both English and Dutch.
     */
    language?: string;
    /**
     * List of words to be considered correct.
     */
    words?: string[];
  };
  /**
   * Specify the root path of the cspell configuration. It is used to resolve `imports` found in  {@link  cspell } .
   *
   * example: ```js cspellOptionsRoot: import.meta.url // or cspellOptionsRoot: __filename ```
   */
  cspellOptionsRoot?: string;
  /**
   * Specify a path to a custom word list file.
   *
   * example: ```js customWordListFile: "./myWords.txt" ```
   */
  customWordListFile?:
    | string
    | {
        /**
         * Path to word list file. File format: 1 word per line
         */
        path: string;
      };
  /**
   * Output debug logs to `.cspell-eslint-plugin.log` default false
   */
  debugMode?: boolean;
  /**
   * Generate suggestions
   */
  generateSuggestions: boolean;
  /**
   * Ignore the properties of imported variables, structures, and types.
   *
   * Example: ``` import { example } from 'third-party';
   *
   * const msg = example.property; // `property` is not spell checked. ```
   */
  ignoreImportProperties?: boolean;
  /**
   * Ignore import and require names
   */
  ignoreImports?: boolean;
  /**
   * Number of spelling suggestions to make.
   */
  numSuggestions: number;
}

/**
 * All Cspell rules.
 */
export interface CspellRules {
  /**
   * CSpell spellchecker.
   */
  'cspell/spellchecker': [SpellcheckerOption?];
}

export type CspellRulesObject = RulesObject<CspellRules>;
