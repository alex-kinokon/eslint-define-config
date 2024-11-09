import type { LiteralUnion } from '../../utility-types';

/**
 * Tailwind settings.
 * @see https://github.com/francoismassart/eslint-plugin-tailwindcss#more-settings
 */
export interface TailwindSetting {
  /**
   * @default ['classnames', 'clsx', 'ctl']
   */
  callees: Array<LiteralUnion<'classnames' | 'clsx' | 'cx'>>;

  /**
   * Returned from `loadConfig()` utility if not provided
   * @default ['className']
   */
  config: LiteralUnion<
    | 'tailwind.config.js'
    | 'tailwind.config.mjs'
    | 'tailwind.config.ts'
    | 'tailwind.config.mts'
    | 'tailwind.config.cjs'
  >;

  cssFiles: string[];

  cssFilesRefreshRate: number;

  removeDuplicates: boolean;

  skipClassAttribute: boolean;

  whitelist: string[];

  /**
   * Can be set to e.g. ['tw'] for use in tw`bg-blue`
   */
  tags: string[];

  /**
   * can be modified to support custom attributes. E.g. "^tw$" for `twin.macro`
   * @default '^class(Name)?$'
   */
  classRegex: string;
}

export interface TailwindSettings {
  /**
   * Tailwind settings.
   */
  tailwindcss?: Partial<TailwindSetting>;
}
