import type { ESLintMdxSettings as MdxSettings } from 'eslint-plugin-mdx';

import type { ImportXSettings } from './import-x';
import type { JSDocSettings } from './jsdoc';
import type { JsxA11ySettings } from './jsx-a11y';
import type { NodeSettings } from './node';
import type { ReactSettings } from './react';
import type { TailwindSettings } from './tailwind';

/**
 * This is a special exported interface for other packages to declare
 * additional settings that should bail out for eslint settings. For example
 * `'eslint-plugin-jsx-a11y'` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'eslint-define-config' {
 *   export interface CustomSettings {
 *     'jsx-a11y': {
 *       components?: Record<string, string>;
 *     };
 *   }
 * }
 * ```
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CustomSettings {}

/**
 * Settings.
 */
export interface Settings
  extends ImportXSettings,
    JSDocSettings,
    JsxA11ySettings,
    MdxSettings,
    NodeSettings,
    ReactSettings,
    TailwindSettings,
    Partial<CustomSettings>,
    Partial<Record<string, unknown>> {}
