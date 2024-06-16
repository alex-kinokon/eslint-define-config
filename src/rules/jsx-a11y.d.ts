import type { RulesObject } from '../rule-config';

export interface AccessibleEmojiOption {
  [k: string]: any;
}

export interface AltTextOption {
  elements?: string[];
  img?: string[];
  object?: string[];
  area?: string[];
  'input[type="image"]'?: string[];
  [k: string]: any;
}

export interface AnchorAmbiguousTextOption {
  words?: string[];
  [k: string]: any;
}

export interface AnchorHasContentOption {
  components?: string[];
  [k: string]: any;
}

export interface AnchorIsValidOption {
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

export interface AriaActivedescendantHasTabindexOption {
  [k: string]: any;
}

export interface AriaPropsOption {
  [k: string]: any;
}

export interface AriaProptypesOption {
  [k: string]: any;
}

export interface AriaRoleOption {
  allowedInvalidRoles?: string[];
  ignoreNonDOM?: boolean;
  [k: string]: any;
}

export interface AriaUnsupportedElementsOption {
  [k: string]: any;
}

export interface AutocompleteValidOption {
  inputComponents?: string[];
  [k: string]: any;
}

export interface ClickEventsHaveKeyEventsOption {
  [k: string]: any;
}

export interface ControlHasAssociatedLabelOption {
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

export interface HeadingHasContentOption {
  components?: string[];
  [k: string]: any;
}

export interface HtmlHasLangOption {
  [k: string]: any;
}

export interface IframeHasTitleOption {
  [k: string]: any;
}

export interface ImgRedundantAltOption {
  components?: string[];
  words?: string[];
  [k: string]: any;
}

export interface InteractiveSupportsFocusOption {
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

export interface LabelHasAssociatedControlOption {
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

export interface LabelHasForOption {
  components?: string[];
  required?:
    | ('nesting' | 'id')
    | {
        /**
         * @minItems 0
         */
        some: ('nesting' | 'id')[];
        [k: string]: any;
      }
    | {
        /**
         * @minItems 0
         */
        every: ('nesting' | 'id')[];
        [k: string]: any;
      };
  allowChildren?: boolean;
  [k: string]: any;
}

export interface LangOption {
  [k: string]: any;
}

export interface MediaHasCaptionOption {
  audio?: string[];
  video?: string[];
  track?: string[];
  [k: string]: any;
}

export interface MouseEventsHaveKeyEventsOption {
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

export interface NoAccessKeyOption {
  [k: string]: any;
}

export interface NoAriaHiddenOnFocusableOption {
  [k: string]: any;
}

export interface NoAutofocusOption {
  ignoreNonDOM?: boolean;
  [k: string]: any;
}

export interface NoDistractingElementsOption {
  /**
   * @minItems 0
   */
  elements?: ('marquee' | 'blink')[];
  [k: string]: any;
}

export interface NoInteractiveElementToNoninteractiveRoleOption {
  [k: string]: string[];
}

export interface NoNoninteractiveElementInteractionsOption {
  handlers?: string[];
  [k: string]: any;
}

export interface NoNoninteractiveElementToInteractiveRoleOption {
  [k: string]: string[];
}

export interface NoNoninteractiveTabindexOption {
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

export interface NoOnchangeOption {
  [k: string]: any;
}

export interface NoRedundantRolesOption {
  [k: string]: string[];
}

export interface NoStaticElementInteractionsOption {
  handlers?: string[];
  [k: string]: any;
}

export interface PreferTagOverRoleOption {
  [k: string]: any;
}

export interface RoleHasRequiredAriaPropsOption {
  [k: string]: any;
}

export interface RoleSupportsAriaPropsOption {
  [k: string]: any;
}

export interface ScopeOption {
  [k: string]: any;
}

export interface TabindexNoPositiveOption {
  [k: string]: any;
}

/**
 * All JsxA11y rules.
 */
export interface JsxA11yRules {
  /**
   * Enforce emojis are wrapped in `<span>` and provide screenreader access.
   * @deprecated
   * @see [accessible-emoji](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/accessible-emoji.md)
   */
  'jsx-a11y/accessible-emoji': [AccessibleEmojiOption?];

  /**
   * Enforce all elements that require alternative text have meaningful information to relay back to end user.
   * @see [alt-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/alt-text.md)
   */
  'jsx-a11y/alt-text': [AltTextOption?];

  /**
   * Enforce `<a>` text to not exactly match "click here", "here", "link", or "a link".
   * @see [anchor-ambiguous-text](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-ambiguous-text.md)
   */
  'jsx-a11y/anchor-ambiguous-text': [AnchorAmbiguousTextOption?];

  /**
   * Enforce all anchors to contain accessible content.
   * @see [anchor-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-has-content.md)
   */
  'jsx-a11y/anchor-has-content': [AnchorHasContentOption?];

  /**
   * Enforce all anchors are valid, navigable elements.
   * @see [anchor-is-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/anchor-is-valid.md)
   */
  'jsx-a11y/anchor-is-valid': [AnchorIsValidOption?];

  /**
   * Enforce elements with aria-activedescendant are tabbable.
   * @see [aria-activedescendant-has-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-activedescendant-has-tabindex.md)
   */
  'jsx-a11y/aria-activedescendant-has-tabindex': [
    AriaActivedescendantHasTabindexOption?,
  ];

  /**
   * Enforce all `aria-*` props are valid.
   * @see [aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-props.md)
   */
  'jsx-a11y/aria-props': [AriaPropsOption?];

  /**
   * Enforce ARIA state and property values are valid.
   * @see [aria-proptypes](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-proptypes.md)
   */
  'jsx-a11y/aria-proptypes': [AriaProptypesOption?];

  /**
   * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
   * @see [aria-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md)
   */
  'jsx-a11y/aria-role': [AriaRoleOption?];

  /**
   * Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
   * @see [aria-unsupported-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-unsupported-elements.md)
   */
  'jsx-a11y/aria-unsupported-elements': [AriaUnsupportedElementsOption?];

  /**
   * Enforce that autocomplete attributes are used correctly.
   * @see [autocomplete-valid](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/autocomplete-valid.md)
   */
  'jsx-a11y/autocomplete-valid': [AutocompleteValidOption?];

  /**
   * Enforce a clickable non-interactive element has at least one keyboard event listener.
   * @see [click-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/click-events-have-key-events.md)
   */
  'jsx-a11y/click-events-have-key-events': [ClickEventsHaveKeyEventsOption?];

  /**
   * Enforce that a control (an interactive element) has a text label.
   * @see [control-has-associated-label](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md)
   */
  'jsx-a11y/control-has-associated-label': [ControlHasAssociatedLabelOption?];

  /**
   * Enforce heading (`h1`, `h2`, etc) elements contain accessible content.
   * @see [heading-has-content](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/heading-has-content.md)
   */
  'jsx-a11y/heading-has-content': [HeadingHasContentOption?];

  /**
   * Enforce `<html>` element has `lang` prop.
   * @see [html-has-lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/html-has-lang.md)
   */
  'jsx-a11y/html-has-lang': [HtmlHasLangOption?];

  /**
   * Enforce iframe elements have a title attribute.
   * @see [iframe-has-title](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/iframe-has-title.md)
   */
  'jsx-a11y/iframe-has-title': [IframeHasTitleOption?];

  /**
   * Enforce `<img>` alt prop does not contain the word "image", "picture", or "photo".
   * @see [img-redundant-alt](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/img-redundant-alt.md)
   */
  'jsx-a11y/img-redundant-alt': [ImgRedundantAltOption?];

  /**
   * Enforce that elements with interactive handlers like `onClick` must be focusable.
   * @see [interactive-supports-focus](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/interactive-supports-focus.md)
   */
  'jsx-a11y/interactive-supports-focus': [InteractiveSupportsFocusOption?];

  /**
   * Enforce that a `label` tag has a text label and an associated control.
   * @see [label-has-associated-control](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md)
   */
  'jsx-a11y/label-has-associated-control': [LabelHasAssociatedControlOption?];

  /**
   * Enforce that `<label>` elements have the `htmlFor` prop.
   * @deprecated
   * @see [label-has-for](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/label-has-for.md)
   */
  'jsx-a11y/label-has-for': [LabelHasForOption?];

  /**
   * Enforce lang attribute has a valid value.
   * @see [lang](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/lang.md)
   */
  'jsx-a11y/lang': [LangOption?];

  /**
   * Enforces that `<audio>` and `<video>` elements must have a `<track>` for captions.
   * @see [media-has-caption](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/media-has-caption.md)
   */
  'jsx-a11y/media-has-caption': [MediaHasCaptionOption?];

  /**
   * Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.
   * @see [mouse-events-have-key-events](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md)
   */
  'jsx-a11y/mouse-events-have-key-events': [MouseEventsHaveKeyEventsOption?];

  /**
   * Enforce that the `accessKey` prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
   * @see [no-access-key](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-access-key.md)
   */
  'jsx-a11y/no-access-key': [NoAccessKeyOption?];

  /**
   * Disallow `aria-hidden="true"` from being set on focusable elements.
   * @see [no-aria-hidden-on-focusable](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-aria-hidden-on-focusable.md)
   */
  'jsx-a11y/no-aria-hidden-on-focusable': [NoAriaHiddenOnFocusableOption?];

  /**
   * Enforce autoFocus prop is not used.
   * @see [no-autofocus](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-autofocus.md)
   */
  'jsx-a11y/no-autofocus': [NoAutofocusOption?];

  /**
   * Enforce distracting elements are not used.
   * @see [no-distracting-elements](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-distracting-elements.md)
   */
  'jsx-a11y/no-distracting-elements': [NoDistractingElementsOption?];

  /**
   * Interactive elements should not be assigned non-interactive roles.
   * @see [no-interactive-element-to-noninteractive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md)
   */
  'jsx-a11y/no-interactive-element-to-noninteractive-role': [
    NoInteractiveElementToNoninteractiveRoleOption?,
  ];

  /**
   * Non-interactive elements should not be assigned mouse or keyboard event listeners.
   * @see [no-noninteractive-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-interactions.md)
   */
  'jsx-a11y/no-noninteractive-element-interactions': [
    NoNoninteractiveElementInteractionsOption?,
  ];

  /**
   * Non-interactive elements should not be assigned interactive roles.
   * @see [no-noninteractive-element-to-interactive-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md)
   */
  'jsx-a11y/no-noninteractive-element-to-interactive-role': [
    NoNoninteractiveElementToInteractiveRoleOption?,
  ];

  /**
   * `tabIndex` should only be declared on interactive elements.
   * @see [no-noninteractive-tabindex](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-tabindex.md)
   */
  'jsx-a11y/no-noninteractive-tabindex': [NoNoninteractiveTabindexOption?];

  /**
   * Enforce usage of `onBlur` over `onChange` on select menus for accessibility.
   * @deprecated
   * @see [no-onchange](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-onchange.md)
   */
  'jsx-a11y/no-onchange': [NoOnchangeOption?];

  /**
   * Enforce explicit role property is not the same as implicit/default role property on element.
   * @see [no-redundant-roles](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-redundant-roles.md)
   */
  'jsx-a11y/no-redundant-roles': [NoRedundantRolesOption?];

  /**
   * Enforce that non-interactive, visible elements (such as `<div>`) that have click handlers use the role attribute.
   * @see [no-static-element-interactions](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-static-element-interactions.md)
   */
  'jsx-a11y/no-static-element-interactions': [
    NoStaticElementInteractionsOption?,
  ];

  /**
   * Enforces using semantic DOM elements over the ARIA `role` property.
   * @see [prefer-tag-over-role](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/prefer-tag-over-role.md)
   */
  'jsx-a11y/prefer-tag-over-role': [PreferTagOverRoleOption?];

  /**
   * Enforce that elements with ARIA roles must have all required attributes for that role.
   * @see [role-has-required-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-has-required-aria-props.md)
   */
  'jsx-a11y/role-has-required-aria-props': [RoleHasRequiredAriaPropsOption?];

  /**
   * Enforce that elements with explicit or implicit roles defined contain only `aria-*` properties supported by that `role`.
   * @see [role-supports-aria-props](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/role-supports-aria-props.md)
   */
  'jsx-a11y/role-supports-aria-props': [RoleSupportsAriaPropsOption?];

  /**
   * Enforce `scope` prop is only used on `<th>` elements.
   * @see [scope](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/scope.md)
   */
  'jsx-a11y/scope': [ScopeOption?];

  /**
   * Enforce `tabIndex` value is not greater than zero.
   * @see [tabindex-no-positive](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/tabindex-no-positive.md)
   */
  'jsx-a11y/tabindex-no-positive': [TabindexNoPositiveOption?];
}

export type JsxA11yRulesObject = RulesObject<JsxA11yRules>;
