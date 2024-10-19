import type { RulesObject } from '../rule-config';

export type SemiOption =
  | []
  | ['never']
  | [
      'never',
      {
        beforeStatementContinuationChars?: 'always' | 'any' | 'never';
      },
    ]
  | ['always']
  | [
      'always',
      {
        omitLastInOneLineBlock?: boolean;
        omitLastInOneLineClassBody?: boolean;
      },
    ];

export interface SortAttributesOption {
  type?: 'alphabetical' | 'line-length';
  ignoreCase?: boolean;
  order?: 'asc' | 'desc';
}

export interface JsxA11YAltTextOption {
  elements?: string[];
  img?: string[];
  object?: string[];
  area?: string[];
  'input[type="image"]'?: string[];
  [k: string]: any;
}

export interface JsxA11YAnchorAmbiguousTextOption {
  words?: string[];
  [k: string]: any;
}

export interface JsxA11YAnchorHasContentOption {
  components?: string[];
  [k: string]: any;
}

export interface JsxA11YAnchorIsValidOption {
  components?: string[];
  specialLink?: string[];
  /**
   * @minItems 1
   */
  aspects?: [
    'noHref' | 'invalidHref' | 'preferButton',
    ...('noHref' | 'invalidHref' | 'preferButton')[],
  ];
  [k: string]: any;
}

export interface JsxA11YAriaActivedescendantHasTabindexOption {
  [k: string]: any;
}

export interface JsxA11YAriaPropsOption {
  [k: string]: any;
}

export interface JsxA11YAriaProptypesOption {
  [k: string]: any;
}

export interface JsxA11YAriaRoleOption {
  allowedInvalidRoles?: string[];
  ignoreNonDOM?: boolean;
  [k: string]: any;
}

export interface JsxA11YAriaUnsupportedElementsOption {
  [k: string]: any;
}

export interface JsxA11YAutocompleteValidOption {
  inputComponents?: string[];
  [k: string]: any;
}

export interface JsxA11YClickEventsHaveKeyEventsOption {
  [k: string]: any;
}

export interface JsxA11YControlHasAssociatedLabelOption {
  labelAttributes?: string[];
  controlComponents?: string[];
  ignoreElements?: string[];
  ignoreRoles?: string[];
  /**
   * JSX tree depth limit to check for accessible label
   */
  depth?: number;
  [k: string]: any;
}

export interface JsxA11YHeadingHasContentOption {
  components?: string[];
  [k: string]: any;
}

export interface JsxA11YHtmlHasLangOption {
  [k: string]: any;
}

export interface JsxA11YIframeHasTitleOption {
  [k: string]: any;
}

export interface JsxA11YImgRedundantAltOption {
  components?: string[];
  words?: string[];
  [k: string]: any;
}

export interface JsxA11YInteractiveSupportsFocusOption {
  /**
   * @minItems 0
   */
  tabbable?: (
    | 'button'
    | 'checkbox'
    | 'columnheader'
    | 'combobox'
    | 'grid'
    | 'gridcell'
    | 'link'
    | 'listbox'
    | 'menu'
    | 'menubar'
    | 'menuitem'
    | 'menuitemcheckbox'
    | 'menuitemradio'
    | 'option'
    | 'progressbar'
    | 'radio'
    | 'radiogroup'
    | 'row'
    | 'rowheader'
    | 'scrollbar'
    | 'searchbox'
    | 'slider'
    | 'spinbutton'
    | 'switch'
    | 'tab'
    | 'tablist'
    | 'textbox'
    | 'tree'
    | 'treegrid'
    | 'treeitem'
    | 'doc-backlink'
    | 'doc-biblioref'
    | 'doc-glossref'
    | 'doc-noteref'
  )[];
  [k: string]: any;
}

export interface JsxA11YLabelHasAssociatedControlOption {
  labelComponents?: string[];
  labelAttributes?: string[];
  controlComponents?: string[];
  /**
   * Assert that the label has htmlFor, a nested label, both or either
   */
  assert?: 'htmlFor' | 'nesting' | 'both' | 'either';
  /**
   * JSX tree depth limit to check for accessible label
   */
  depth?: number;
  [k: string]: any;
}

export interface JsxA11YLangOption {
  [k: string]: any;
}

export interface JsxA11YMediaHasCaptionOption {
  audio?: string[];
  video?: string[];
  track?: string[];
  [k: string]: any;
}

export interface JsxA11YMouseEventsHaveKeyEventsOption {
  /**
   * An array of events that need to be accompanied by `onFocus`
   */
  hoverInHandlers?: string[];
  /**
   * An array of events that need to be accompanied by `onBlur`
   */
  hoverOutHandlers?: string[];
  [k: string]: any;
}

export interface JsxA11YNoAccessKeyOption {
  [k: string]: any;
}

export interface JsxA11YNoAriaHiddenOnFocusableOption {
  [k: string]: any;
}

export interface JsxA11YNoAutofocusOption {
  ignoreNonDOM?: boolean;
  [k: string]: any;
}

export interface JsxA11YNoDistractingElementsOption {
  /**
   * @minItems 0
   */
  elements?: ('marquee' | 'blink')[];
  [k: string]: any;
}

export interface JsxA11YNoInteractiveElementToNoninteractiveRoleOption {
  [k: string]: string[];
}

export type JsxA11yNoInteractiveElementToNoninteractiveRoleRuleConfig = [
  JsxA11yNoInteractiveElementToNoninteractiveRoleOption?,
];

export interface JsxA11YNoNoninteractiveElementInteractionsOption {
  handlers?: string[];
  [k: string]: any;
}

export type JsxA11yNoNoninteractiveElementInteractionsRuleConfig = [
  JsxA11yNoNoninteractiveElementInteractionsOption?,
];

export interface JsxA11YNoNoninteractiveElementToInteractiveRoleOption {
  [k: string]: string[];
}

export type JsxA11yNoNoninteractiveElementToInteractiveRoleRuleConfig = [
  JsxA11yNoNoninteractiveElementToInteractiveRoleOption?,
];

export interface JsxA11YNoNoninteractiveTabindexOption {
  /**
   * An array of ARIA roles
   */
  roles?: string[];
  /**
   * An array of HTML tag names
   */
  tags?: string[];
  [k: string]: any;
}

export interface JsxA11YNoRedundantRolesOption {
  [k: string]: string[];
}

export interface JsxA11YNoStaticElementInteractionsOption {
  handlers?: string[];
  [k: string]: any;
}

export interface JsxA11YPreferTagOverRoleOption {
  [k: string]: any;
}

export interface JsxA11YRoleHasRequiredAriaPropsOption {
  [k: string]: any;
}

export interface JsxA11YRoleSupportsAriaPropsOption {
  [k: string]: any;
}

export interface JsxA11YScopeOption {
  [k: string]: any;
}

export interface JsxA11YTabindexNoPositiveOption {
  [k: string]: any;
}

/**
 * All Astro rules.
 */
export interface AstroRules {
  /**
   * The client:only directive is missing the correct component's framework value.
   * @see [missing-client-only-directive-value](https://ota-meshi.github.io/eslint-plugin-astro/rules/missing-client-only-directive-value/)
   */
  'astro/missing-client-only-directive-value': null;

  /**
   * Disallow conflicting set directives and child contents.
   * @see [no-conflict-set-directives](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-conflict-set-directives/)
   */
  'astro/no-conflict-set-directives': null;

  /**
   * Disallow using deprecated `Astro.canonicalURL`.
   * @see [no-deprecated-astro-canonicalurl](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-canonicalurl/)
   */
  'astro/no-deprecated-astro-canonicalurl': null;

  /**
   * Disallow using deprecated `Astro.fetchContent()`.
   * @see [no-deprecated-astro-fetchcontent](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-fetchcontent/)
   */
  'astro/no-deprecated-astro-fetchcontent': null;

  /**
   * Disallow using deprecated `Astro.resolve()`.
   * @see [no-deprecated-astro-resolve](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-astro-resolve/)
   */
  'astro/no-deprecated-astro-resolve': null;

  /**
   * Disallow using deprecated `getEntryBySlug()`.
   * @see [no-deprecated-getentrybyslug](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-deprecated-getentrybyslug/)
   */
  'astro/no-deprecated-getentrybyslug': null;

  /**
   * Disallow value export.
   * @see [no-exports-from-components](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-exports-from-components/)
   */
  'astro/no-exports-from-components': null;

  /**
   * Disallow use of `set:html` to prevent XSS attack.
   * @see [no-set-html-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-html-directive/)
   */
  'astro/no-set-html-directive': null;

  /**
   * Disallow use of `set:text`.
   * @see [no-set-text-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-set-text-directive/)
   */
  'astro/no-set-text-directive': null;

  /**
   * Disallow selectors defined in `style` tag that don't use in HTML.
   * @see [no-unused-css-selector](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-css-selector/)
   */
  'astro/no-unused-css-selector': null;

  /**
   * Disallow unused `define:vars={...}` in `style` tag.
   * @see [no-unused-define-vars-in-style](https://ota-meshi.github.io/eslint-plugin-astro/rules/no-unused-define-vars-in-style/)
   */
  'astro/no-unused-define-vars-in-style': null;

  /**
   * Require `class:list` directives instead of `class` with expressions.
   * @see [prefer-class-list-directive](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-class-list-directive/)
   */
  'astro/prefer-class-list-directive': null;

  /**
   * Require use object instead of ternary expression in `class:list`.
   * @see [prefer-object-class-list](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-object-class-list/)
   */
  'astro/prefer-object-class-list': null;

  /**
   * Require use split array elements in `class:list`.
   * @see [prefer-split-class-list](https://ota-meshi.github.io/eslint-plugin-astro/rules/prefer-split-class-list/)
   */
  'astro/prefer-split-class-list': [
    {
      splitLiteral?: boolean;
    }?,
  ];

  /**
   * Require or disallow semicolons instead of ASI.
   * @see [semi](https://ota-meshi.github.io/eslint-plugin-astro/rules/semi/)
   */
  'astro/semi': SemiOption;

  /**
   * Enforce sorting of attributes.
   * @see [sort-attributes](https://ota-meshi.github.io/eslint-plugin-astro/rules/sort-attributes/)
   */
  'astro/sort-attributes': [SortAttributesOption?];

  /**
   * Disallow warnings when compiling.
   * @see [valid-compile](https://ota-meshi.github.io/eslint-plugin-astro/rules/valid-compile/)
   */
  'astro/valid-compile': null;

  /**
   * Apply `jsx-a11y/alt-text` rule to Astro components.
   * @see [jsx-a11y/alt-text](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/alt-text/)
   */
  'astro/jsx-a11y/alt-text': [JsxA11yAltTextOption?];

  /**
   * Apply `jsx-a11y/anchor-ambiguous-text` rule to Astro components.
   * @see [jsx-a11y/anchor-ambiguous-text](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-ambiguous-text/)
   */
  'astro/jsx-a11y/anchor-ambiguous-text': [JsxA11yAnchorAmbiguousTextOption?];

  /**
   * Apply `jsx-a11y/anchor-has-content` rule to Astro components.
   * @see [jsx-a11y/anchor-has-content](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-has-content/)
   */
  'astro/jsx-a11y/anchor-has-content': [JsxA11yAnchorHasContentOption?];

  /**
   * Apply `jsx-a11y/anchor-is-valid` rule to Astro components.
   * @see [jsx-a11y/anchor-is-valid](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/anchor-is-valid/)
   */
  'astro/jsx-a11y/anchor-is-valid': [JsxA11yAnchorIsValidOption?];

  /**
   * Apply `jsx-a11y/aria-activedescendant-has-tabindex` rule to Astro components.
   * @see [jsx-a11y/aria-activedescendant-has-tabindex](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-activedescendant-has-tabindex/)
   */
  'astro/jsx-a11y/aria-activedescendant-has-tabindex': [
    JsxA11yAriaActivedescendantHasTabindexOption?,
  ];

  /**
   * Apply `jsx-a11y/aria-props` rule to Astro components.
   * @see [jsx-a11y/aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-props/)
   */
  'astro/jsx-a11y/aria-props': [JsxA11yAriaPropsOption?];

  /**
   * Apply `jsx-a11y/aria-proptypes` rule to Astro components.
   * @see [jsx-a11y/aria-proptypes](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-proptypes/)
   */
  'astro/jsx-a11y/aria-proptypes': [JsxA11yAriaProptypesOption?];

  /**
   * Apply `jsx-a11y/aria-role` rule to Astro components.
   * @see [jsx-a11y/aria-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-role/)
   */
  'astro/jsx-a11y/aria-role': [JsxA11yAriaRoleOption?];

  /**
   * Apply `jsx-a11y/aria-unsupported-elements` rule to Astro components.
   * @see [jsx-a11y/aria-unsupported-elements](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/aria-unsupported-elements/)
   */
  'astro/jsx-a11y/aria-unsupported-elements': [
    JsxA11yAriaUnsupportedElementsOption?,
  ];

  /**
   * Apply `jsx-a11y/autocomplete-valid` rule to Astro components.
   * @see [jsx-a11y/autocomplete-valid](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/autocomplete-valid/)
   */
  'astro/jsx-a11y/autocomplete-valid': [JsxA11yAutocompleteValidOption?];

  /**
   * Apply `jsx-a11y/click-events-have-key-events` rule to Astro components.
   * @see [jsx-a11y/click-events-have-key-events](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/click-events-have-key-events/)
   */
  'astro/jsx-a11y/click-events-have-key-events': [
    JsxA11yClickEventsHaveKeyEventsOption?,
  ];

  /**
   * Apply `jsx-a11y/control-has-associated-label` rule to Astro components.
   * @see [jsx-a11y/control-has-associated-label](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/control-has-associated-label/)
   */
  'astro/jsx-a11y/control-has-associated-label': [
    JsxA11yControlHasAssociatedLabelOption?,
  ];

  /**
   * Apply `jsx-a11y/heading-has-content` rule to Astro components.
   * @see [jsx-a11y/heading-has-content](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/heading-has-content/)
   */
  'astro/jsx-a11y/heading-has-content': [JsxA11yHeadingHasContentOption?];

  /**
   * Apply `jsx-a11y/html-has-lang` rule to Astro components.
   * @see [jsx-a11y/html-has-lang](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/html-has-lang/)
   */
  'astro/jsx-a11y/html-has-lang': [JsxA11yHtmlHasLangOption?];

  /**
   * Apply `jsx-a11y/iframe-has-title` rule to Astro components.
   * @see [jsx-a11y/iframe-has-title](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/iframe-has-title/)
   */
  'astro/jsx-a11y/iframe-has-title': [JsxA11yIframeHasTitleOption?];

  /**
   * Apply `jsx-a11y/img-redundant-alt` rule to Astro components.
   * @see [jsx-a11y/img-redundant-alt](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/img-redundant-alt/)
   */
  'astro/jsx-a11y/img-redundant-alt': [JsxA11yImgRedundantAltOption?];

  /**
   * Apply `jsx-a11y/interactive-supports-focus` rule to Astro components.
   * @see [jsx-a11y/interactive-supports-focus](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/interactive-supports-focus/)
   */
  'astro/jsx-a11y/interactive-supports-focus': [
    JsxA11yInteractiveSupportsFocusOption?,
  ];

  /**
   * Apply `jsx-a11y/label-has-associated-control` rule to Astro components.
   * @see [jsx-a11y/label-has-associated-control](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/label-has-associated-control/)
   */
  'astro/jsx-a11y/label-has-associated-control': [
    JsxA11yLabelHasAssociatedControlOption?,
  ];

  /**
   * Apply `jsx-a11y/lang` rule to Astro components.
   * @see [jsx-a11y/lang](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/lang/)
   */
  'astro/jsx-a11y/lang': [JsxA11yLangOption?];

  /**
   * Apply `jsx-a11y/media-has-caption` rule to Astro components.
   * @see [jsx-a11y/media-has-caption](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/media-has-caption/)
   */
  'astro/jsx-a11y/media-has-caption': [JsxA11yMediaHasCaptionOption?];

  /**
   * Apply `jsx-a11y/mouse-events-have-key-events` rule to Astro components.
   * @see [jsx-a11y/mouse-events-have-key-events](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/mouse-events-have-key-events/)
   */
  'astro/jsx-a11y/mouse-events-have-key-events': [
    JsxA11yMouseEventsHaveKeyEventsOption?,
  ];

  /**
   * Apply `jsx-a11y/no-access-key` rule to Astro components.
   * @see [jsx-a11y/no-access-key](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-access-key/)
   */
  'astro/jsx-a11y/no-access-key': [JsxA11yNoAccessKeyOption?];

  /**
   * Apply `jsx-a11y/no-aria-hidden-on-focusable` rule to Astro components.
   * @see [jsx-a11y/no-aria-hidden-on-focusable](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-aria-hidden-on-focusable/)
   */
  'astro/jsx-a11y/no-aria-hidden-on-focusable': [
    JsxA11yNoAriaHiddenOnFocusableOption?,
  ];

  /**
   * Apply `jsx-a11y/no-autofocus` rule to Astro components.
   * @see [jsx-a11y/no-autofocus](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-autofocus/)
   */
  'astro/jsx-a11y/no-autofocus': [JsxA11yNoAutofocusOption?];

  /**
   * Apply `jsx-a11y/no-distracting-elements` rule to Astro components.
   * @see [jsx-a11y/no-distracting-elements](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-distracting-elements/)
   */
  'astro/jsx-a11y/no-distracting-elements': [
    JsxA11yNoDistractingElementsOption?,
  ];

  /**
   * Apply `jsx-a11y/no-interactive-element-to-noninteractive-role` rule to Astro components.
   * @see [jsx-a11y/no-interactive-element-to-noninteractive-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-interactive-element-to-noninteractive-role/)
   */
  'astro/jsx-a11y/no-interactive-element-to-noninteractive-role': JsxA11yNoInteractiveElementToNoninteractiveRoleRuleConfig;

  /**
   * Apply `jsx-a11y/no-noninteractive-element-interactions` rule to Astro components.
   * @see [jsx-a11y/no-noninteractive-element-interactions](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-interactions/)
   */
  'astro/jsx-a11y/no-noninteractive-element-interactions': JsxA11yNoNoninteractiveElementInteractionsRuleConfig;

  /**
   * Apply `jsx-a11y/no-noninteractive-element-to-interactive-role` rule to Astro components.
   * @see [jsx-a11y/no-noninteractive-element-to-interactive-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-element-to-interactive-role/)
   */
  'astro/jsx-a11y/no-noninteractive-element-to-interactive-role': JsxA11yNoNoninteractiveElementToInteractiveRoleRuleConfig;

  /**
   * Apply `jsx-a11y/no-noninteractive-tabindex` rule to Astro components.
   * @see [jsx-a11y/no-noninteractive-tabindex](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-noninteractive-tabindex/)
   */
  'astro/jsx-a11y/no-noninteractive-tabindex': [
    JsxA11yNoNoninteractiveTabindexOption?,
  ];

  /**
   * Apply `jsx-a11y/no-redundant-roles` rule to Astro components.
   * @see [jsx-a11y/no-redundant-roles](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-redundant-roles/)
   */
  'astro/jsx-a11y/no-redundant-roles': [JsxA11yNoRedundantRolesOption?];

  /**
   * Apply `jsx-a11y/no-static-element-interactions` rule to Astro components.
   * @see [jsx-a11y/no-static-element-interactions](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/no-static-element-interactions/)
   */
  'astro/jsx-a11y/no-static-element-interactions': [
    JsxA11yNoStaticElementInteractionsOption?,
  ];

  /**
   * Apply `jsx-a11y/prefer-tag-over-role` rule to Astro components.
   * @see [jsx-a11y/prefer-tag-over-role](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/prefer-tag-over-role/)
   */
  'astro/jsx-a11y/prefer-tag-over-role': [JsxA11yPreferTagOverRoleOption?];

  /**
   * Apply `jsx-a11y/role-has-required-aria-props` rule to Astro components.
   * @see [jsx-a11y/role-has-required-aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-has-required-aria-props/)
   */
  'astro/jsx-a11y/role-has-required-aria-props': [
    JsxA11yRoleHasRequiredAriaPropsOption?,
  ];

  /**
   * Apply `jsx-a11y/role-supports-aria-props` rule to Astro components.
   * @see [jsx-a11y/role-supports-aria-props](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/role-supports-aria-props/)
   */
  'astro/jsx-a11y/role-supports-aria-props': [
    JsxA11yRoleSupportsAriaPropsOption?,
  ];

  /**
   * Apply `jsx-a11y/scope` rule to Astro components.
   * @see [jsx-a11y/scope](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/scope/)
   */
  'astro/jsx-a11y/scope': [JsxA11yScopeOption?];

  /**
   * Apply `jsx-a11y/tabindex-no-positive` rule to Astro components.
   * @see [jsx-a11y/tabindex-no-positive](https://ota-meshi.github.io/eslint-plugin-astro/rules/jsx-a11y/tabindex-no-positive/)
   */
  'astro/jsx-a11y/tabindex-no-positive': [JsxA11yTabindexNoPositiveOption?];
}

export type AstroRulesObject = RulesObject<AstroRules>;
