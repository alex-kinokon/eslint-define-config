import type { RulesObject } from '../rule-config';

export interface EventHandlersOption {
  /**
   * if true, don't warn on ambiguously named event handlers like `onclick` or `onchange`
   */
  ignoreCase?: boolean;
  /**
   * if true, warn when spreading event handlers onto JSX. Enable for Solid < v1.6.
   */
  warnOnSpread?: boolean;
}

export interface JsxNoDuplicatePropsOption {
  /**
   * Consider two prop names differing only by case to be the same.
   */
  ignoreCase?: boolean;
  [k: string]: any;
}

export interface JsxNoUndefOption {
  /**
   * When true, the rule will consider the global scope when checking for defined components.
   */
  allowGlobals?: boolean;
  /**
   * Automatically import certain components from `"solid-js"` if they are undefined.
   */
  autoImport?: boolean;
  /**
   * Adjusts behavior not to conflict with TypeScript's type checking.
   */
  typescriptEnabled?: boolean;
}

export interface NoInnerhtmlOption {
  /**
   * if the innerHTML value is guaranteed to be a static HTML string (i.e. no user input), allow it
   */
  allowStatic?: boolean;
}

export interface NoUnknownNamespacesOption {
  /**
   * an array of additional namespace names to allow
   *
   * @minItems 1
   */
  allowedNamespaces?: [string, ...string[]];
}

export interface PreferClasslistOption {
  /**
   * An array of names to treat as `classnames` functions
   *
   * @minItems 1
   */
  classnames?: [string, ...string[]];
}

export interface ReactivityOption {
  /**
   * List of function names to consider as reactive functions (allow signals to be safely passed as arguments). In addition, any create* or use* functions are automatically included.
   */
  customReactiveFunctions?: string[];
}

export interface SelfClosingCompOption {
  /**
   * which Solid components should be self-closing when possible
   */
  component?: 'all' | 'none';
  /**
   * which native elements should be self-closing when possible
   */
  html?: 'all' | 'void' | 'none';
}

export interface StylePropOption {
  /**
   * an array of prop names to treat as a CSS style object
   *
   * @minItems 1
   */
  styleProps?: [string, ...string[]];
  /**
   * if allowString is set to true, this rule will not convert a style string literal into a style object (not recommended for performance)
   */
  allowString?: boolean;
}

/**
 * All Solid rules.
 */
export interface SolidRules {
  /**
   * Disallow early returns in components. Solid components only run once, and so conditionals should be inside JSX.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [components-return-once](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/components-return-once.md)
   */
  'solid/components-return-once': null;

  /**
   * Enforce naming DOM element event handlers consistently and prevent Solid's analysis from misunderstanding whether a prop should be an event handler.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [event-handlers](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/event-handlers.md)
   */
  'solid/event-handlers': [EventHandlersOption?];

  /**
   * Enforce consistent imports from "solid-js", "solid-js/web", and "solid-js/store".
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [imports](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/imports.md)
   */
  'solid/imports': null;

  /**
   * Disallow passing the same prop twice in JSX.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [jsx-no-duplicate-props](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/jsx-no-duplicate-props.md)
   */
  'solid/jsx-no-duplicate-props': [JsxNoDuplicatePropsOption?];

  /**
   * Disallow references to undefined variables in JSX. Handles custom directives.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [jsx-no-undef](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/jsx-no-undef.md)
   */
  'solid/jsx-no-undef': [JsxNoUndefOption?];

  /**
   * Disallow javascript: URLs.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [jsx-no-script-url](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/jsx-no-script-url.md)
   */
  'solid/jsx-no-script-url': null;

  /**
   * Prevent variables used in JSX from being marked as unused.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [jsx-uses-vars](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/jsx-uses-vars.md)
   */
  'solid/jsx-uses-vars': null;

  /**
   * Disallow destructuring props. In Solid, props must be used with property accesses (`props.foo`) to preserve reactivity. This rule only tracks destructuring in the parameter list.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [no-destructure](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/no-destructure.md)
   */
  'solid/no-destructure': null;

  /**
   * Disallow usage of the innerHTML attribute, which can often lead to security vulnerabilities.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [no-innerhtml](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/no-innerhtml.md)
   */
  'solid/no-innerhtml': [NoInnerhtmlOption?];

  /**
   * Disallow usage of APIs that use ES6 Proxies, only to target environments that don't support them.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [no-proxy-apis](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/no-proxy-apis.md)
   */
  'solid/no-proxy-apis': null;

  /**
   * Disallow usage of dependency arrays in `createEffect` and `createMemo`.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [no-react-deps](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/no-react-deps.md)
   */
  'solid/no-react-deps': null;

  /**
   * Disallow usage of React-specific `className`/`htmlFor` props, which were deprecated in v1.4.0.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [no-react-specific-props](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/no-react-specific-props.md)
   */
  'solid/no-react-specific-props': null;

  /**
   * Enforce using only Solid-specific namespaced attribute names (i.e. `'on:'` in `<div on:click={...} />`).
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [no-unknown-namespaces](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/no-unknown-namespaces.md)
   */
  'solid/no-unknown-namespaces': [NoUnknownNamespacesOption?];

  /**
   * Enforce using the classlist prop over importing a classnames helper. The classlist prop accepts an object `{ [class: string]: boolean }` just like classnames.
   * @deprecated
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [prefer-classlist](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/prefer-classlist.md)
   */
  'solid/prefer-classlist': [PreferClasslistOption?];

  /**
   * Enforce using Solid's `<For />` component for mapping an array to JSX elements.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [prefer-for](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/prefer-for.md)
   */
  'solid/prefer-for': null;

  /**
   * Enforce using Solid's `<Show />` component for conditionally showing content. Solid's compiler covers this case, so it's a stylistic rule only.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [prefer-show](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/prefer-show.md)
   */
  'solid/prefer-show': null;

  /**
   * Enforce that reactivity (props, signals, memos, etc.) is properly used, so changes in those values will be tracked and update the view as expected.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [reactivity](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/reactivity.md)
   */
  'solid/reactivity': [ReactivityOption?];

  /**
   * Disallow extra closing tags for components without children.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [self-closing-comp](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/self-closing-comp.md)
   */
  'solid/self-closing-comp': [SelfClosingCompOption?];

  /**
   * Require CSS properties in the `style` prop to be valid and kebab-cased (ex. 'font-size'), not camel-cased (ex. 'fontSize') like in React, and that property values with dimensions are strings, not numbers with implicit 'px' units.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [style-prop](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/style-prop.md)
   */
  'solid/style-prop': [StylePropOption?];

  /**
   * Disallow usage of type-unsafe event handlers.
   * @preset `solid/recommended`, `solid/typescript`, `solid/flat/recommended`, `solid/flat/typescript`
   * @see [no-array-handlers](https://github.com/solidjs-community/eslint-plugin-solid/blob/main/packages/eslint-plugin-solid/docs/no-array-handlers.md)
   */
  'solid/no-array-handlers': null;
}

export type SolidRulesObject = RulesObject<SolidRules>;
