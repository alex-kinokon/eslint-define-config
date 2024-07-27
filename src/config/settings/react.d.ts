import type { LiteralUnion } from '../../utility-types';

/**
 * React settings.
 *
 * @see [React settings](https://eslint-react.xyz/docs/configuration)
 */
export interface ReactSettings extends Partial<Record<string, unknown>> {
  'react-x'?: {
    /**
     * The source where React is imported from.
     * This allows to specify a custom import location for React when not
     * using the official distribution (e.g. @pika/react, etc).
     *
     * @default 'react'
     */
    importSource?: LiteralUnion<'react'>;

    /**
     * The identifier that’s used for JSX Element creation.
     * This should not be a member expression (i.e. use "createElement"
     * instead of "React.createElement").
     *
     * @default 'createElement'
     */
    jsxPragma?: LiteralUnion<'createElement'>;

    /**
     * The identifier that’s used for JSX fragment elements.
     * This should not be a member expression (i.e. use "Fragment" instead of
     * "React.Fragment").
     *
     * @default 'Fragment'
     */
    jsxPragmaFrag?: LiteralUnion<'Fragment'>;

    /**
     * React version to use, "detect" means auto detect React version from the
     * project’s dependencies.
     *
     * If importSource is specified, an equivalent version of React should be
     * provided here.
     *
     * @default 'detect'
     */
    version?: LiteralUnion<'detect'>;

    /**
     * A object of aliases for React built-in hooks. ESLint React will
     * recognize these aliases as equivalent to the built-in hooks in all its
     * rules.
     * This is intended to cover edge cases. We suggest to use this option very
     * sparingly, if at all.
     * (e.g. `{ useLayoutEffect: ["useIsomorphicLayoutEffect"] })`.
     */
    additionalHooks?: { [key: string]: string[] };

    /**
     * An array of user-defined components, used to inform the ESLint React
     * plugins how to treat these components during checks.
     *
     * This is intended to cover edge cases. We suggest to use this option
     * very sparingly, if at all.
     */
    additionalComponents?: Array<{
      name: string;
      as: string;
      attributes: object[];
    }>;
  };
}
