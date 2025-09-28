import type { RulesObject } from '../rule-config';

/**
 * All EslintMarkdown rules.
 */
export interface EslintMarkdownRules {
  /**
   * Require languages for fenced code blocks.
   * @preset `markdown/recommended`
   * @see [fenced-code-language](https://github.com/eslint/markdown/blob/main/docs/rules/fenced-code-language.md)
   */
  'markdown/fenced-code-language': [
    {
      required?: string[];
    }?,
  ];

  /**
   * Enforce heading levels increment by one.
   * @preset `markdown/recommended`
   * @see [heading-increment](https://github.com/eslint/markdown/blob/main/docs/rules/heading-increment.md)
   */
  'markdown/heading-increment': [
    {
      frontmatterTitle?: string;
    }?,
  ];

  /**
   * Disallow bare URLs.
   * @see [no-bare-urls](https://github.com/eslint/markdown/blob/main/docs/rules/no-bare-urls.md)
   */
  'markdown/no-bare-urls': null;

  /**
   * Disallow duplicate definitions.
   * @preset `markdown/recommended`
   * @see [no-duplicate-definitions](https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-definitions.md)
   */
  'markdown/no-duplicate-definitions': [
    {
      allowDefinitions?: string[];
      allowFootnoteDefinitions?: string[];
    }?,
  ];

  /**
   * Disallow duplicate headings in the same document.
   * @see [no-duplicate-headings](https://github.com/eslint/markdown/blob/main/docs/rules/no-duplicate-headings.md)
   */
  'markdown/no-duplicate-headings': [
    {
      checkSiblingsOnly?: boolean;
    }?,
  ];

  /**
   * Disallow empty definitions.
   * @preset `markdown/recommended`
   * @see [no-empty-definitions](https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-definitions.md)
   */
  'markdown/no-empty-definitions': [
    {
      allowDefinitions?: string[];
      allowFootnoteDefinitions?: string[];
      checkFootnoteDefinitions?: boolean;
    }?,
  ];

  /**
   * Disallow empty images.
   * @preset `markdown/recommended`
   * @see [no-empty-images](https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-images.md)
   */
  'markdown/no-empty-images': null;

  /**
   * Disallow empty links.
   * @preset `markdown/recommended`
   * @see [no-empty-links](https://github.com/eslint/markdown/blob/main/docs/rules/no-empty-links.md)
   */
  'markdown/no-empty-links': null;

  /**
   * Disallow HTML tags.
   * @see [no-html](https://github.com/eslint/markdown/blob/main/docs/rules/no-html.md)
   */
  'markdown/no-html': [
    {
      allowed?: string[];
      allowedIgnoreCase?: boolean;
    }?,
  ];

  /**
   * Disallow invalid label references.
   * @preset `markdown/recommended`
   * @see [no-invalid-label-refs](https://github.com/eslint/markdown/blob/main/docs/rules/no-invalid-label-refs.md)
   */
  'markdown/no-invalid-label-refs': null;

  /**
   * Disallow headings without a space after the hash characters.
   * @preset `markdown/recommended`
   * @see [no-missing-atx-heading-space](https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-atx-heading-space.md)
   */
  'markdown/no-missing-atx-heading-space': [
    {
      checkClosedHeadings?: boolean;
    }?,
  ];

  /**
   * Disallow missing label references.
   * @preset `markdown/recommended`
   * @see [no-missing-label-refs](https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-label-refs.md)
   */
  'markdown/no-missing-label-refs': [
    {
      allowLabels?: string[];
    }?,
  ];

  /**
   * Disallow link fragments that do not reference valid headings.
   * @preset `markdown/recommended`
   * @see [no-missing-link-fragments](https://github.com/eslint/markdown/blob/main/docs/rules/no-missing-link-fragments.md)
   */
  'markdown/no-missing-link-fragments': [
    {
      ignoreCase?: boolean;
      allowPattern?: string;
    }?,
  ];

  /**
   * Disallow multiple H1 headings in the same document.
   * @preset `markdown/recommended`
   * @see [no-multiple-h1](https://github.com/eslint/markdown/blob/main/docs/rules/no-multiple-h1.md)
   */
  'markdown/no-multiple-h1': [
    {
      frontmatterTitle?: string;
    }?,
  ];

  /**
   * Disallow URLs that match defined reference identifiers.
   * @preset `markdown/recommended`
   * @see [no-reference-like-urls](https://github.com/eslint/markdown/blob/main/docs/rules/no-reference-like-urls.md)
   */
  'markdown/no-reference-like-urls': null;

  /**
   * Disallow reversed link and image syntax.
   * @preset `markdown/recommended`
   * @see [no-reversed-media-syntax](https://github.com/eslint/markdown/blob/main/docs/rules/no-reversed-media-syntax.md)
   */
  'markdown/no-reversed-media-syntax': null;

  /**
   * Disallow spaces around emphasis markers.
   * @preset `markdown/recommended`
   * @see [no-space-in-emphasis](https://github.com/eslint/markdown/blob/main/docs/rules/no-space-in-emphasis.md)
   */
  'markdown/no-space-in-emphasis': [
    {
      checkStrikethrough?: boolean;
    }?,
  ];

  /**
   * Disallow unused definitions.
   * @preset `markdown/recommended`
   * @see [no-unused-definitions](https://github.com/eslint/markdown/blob/main/docs/rules/no-unused-definitions.md)
   */
  'markdown/no-unused-definitions': [
    {
      allowDefinitions?: string[];
      allowFootnoteDefinitions?: string[];
    }?,
  ];

  /**
   * Require alternative text for images.
   * @preset `markdown/recommended`
   * @see [require-alt-text](https://github.com/eslint/markdown/blob/main/docs/rules/require-alt-text.md)
   */
  'markdown/require-alt-text': null;

  /**
   * Disallow data rows in a GitHub Flavored Markdown table from having more cells than the header row.
   * @preset `markdown/recommended`
   * @see [table-column-count](https://github.com/eslint/markdown/blob/main/docs/rules/table-column-count.md)
   */
  'markdown/table-column-count': [
    {
      checkMissingCells?: boolean;
    }?,
  ];
}

export type EslintMarkdownRulesObject = RulesObject<EslintMarkdownRules>;
