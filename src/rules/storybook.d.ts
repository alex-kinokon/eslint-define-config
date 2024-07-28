import type { RulesObject } from '../rule-config';

export interface NoUninstalledAddonsOption {
  packageJsonLocation?: string;
  ignore?: string[];
  [k: string]: any;
}

/**
 * All Storybook rules.
 */
export interface StorybookRules {
  /**
   * Interactions should be awaited.
   * @see [await-interactions](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/await-interactions.md)
   */
  'storybook/await-interactions': null;

  /**
   * Pass a context when invoking play function of another story.
   * @see [context-in-play-function](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/context-in-play-function.md)
   */
  'storybook/context-in-play-function': null;

  /**
   * The component property should be set.
   * @see [csf-component](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/csf-component.md)
   */
  'storybook/csf-component': null;

  /**
   * Story files should have a default export.
   * @see [default-exports](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/default-exports.md)
   */
  'storybook/default-exports': null;

  /**
   * Deprecated hierarchy separator in title property.
   * @see [hierarchy-separator](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/hierarchy-separator.md)
   */
  'storybook/hierarchy-separator': null;

  /**
   * Meta should only have inline properties.
   * @see [meta-inline-properties](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/meta-inline-properties.md)
   */
  'storybook/meta-inline-properties': [
    {
      csfVersion?: number;
    }?,
  ];

  /**
   * A story should not have a redundant name property.
   * @see [no-redundant-story-name](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-redundant-story-name.md)
   */
  'storybook/no-redundant-story-name': null;

  /**
   * StoriesOf is deprecated and should not be used.
   * @see [no-stories-of](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-stories-of.md)
   */
  'storybook/no-stories-of': null;

  /**
   * Do not define a title in meta.
   * @see [no-title-property-in-meta](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-title-property-in-meta.md)
   */
  'storybook/no-title-property-in-meta': null;

  /**
   * This rule identifies storybook addons that are invalid because they are either not installed or contain a typo in their name.
   * @see [no-uninstalled-addons](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/no-uninstalled-addons.md)
   */
  'storybook/no-uninstalled-addons': [NoUninstalledAddonsOption?];

  /**
   * Stories should use PascalCase.
   * @see [prefer-pascal-case](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/prefer-pascal-case.md)
   */
  'storybook/prefer-pascal-case': null;

  /**
   * A story file must contain at least one story export.
   * @see [story-exports](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/story-exports.md)
   */
  'storybook/story-exports': null;

  /**
   * Use expect from `@storybook/jest`.
   * @see [use-storybook-expect](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/use-storybook-expect.md)
   */
  'storybook/use-storybook-expect': null;

  /**
   * Do not use testing-library directly on stories.
   * @see [use-storybook-testing-library](https://github.com/storybookjs/eslint-plugin-storybook/blob/main/docs/rules/use-storybook-testing-library.md)
   */
  'storybook/use-storybook-testing-library': null;
}

export type StorybookRulesObject = RulesObject<StorybookRules>;
