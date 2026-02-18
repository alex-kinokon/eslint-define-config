/**
 * Tailwind settings.
 * @see https://github.com/schoero/eslint-plugin-better-tailwindcss#tailwind-settings
 */
export interface TailwindSetting {
  entryPoint: string;
  tailwindConfig: string;
}

export interface TailwindSettings {
  /**
   * Tailwind settings.
   */
  'better-tailwindcss'?: Partial<TailwindSetting>;
}
