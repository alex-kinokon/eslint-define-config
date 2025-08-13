import { createRequire } from 'node:module';

import { pascalCase } from 'change-case';
import type { ESLint, Rule } from 'eslint';

const require = createRequire(import.meta.url);

export interface LoadedPlugin {
  entry: PluginEntry;
  plugin: ESLint.Plugin;
}

/**
 * Map of plugins for which the script will generate rule files.
 */
export const PLUGIN_REGISTRY: PluginEntry[] = [
  include('astro', {
    import: () => import('eslint-plugin-astro'),
  }),
  include('cspell', {
    import: () => import('@cspell/eslint-plugin'),
  }),
  include('deprecation', {
    import: () => import('eslint-plugin-deprecation'),
  }),
  include('es-x', {
    // @ts-expect-error no types
    import: () => import('eslint-plugin-es-x'),
    docs: {
      extends: 'https://eslint-community.github.io/eslint-plugin-es-x/rules/',
    },
  }),
  include('eslint-js', {
    name: 'EslintJs',
    import: () => import('@eslint/js'),
  }),
  include('eslint-json', {
    name: 'EslintJson',
    prefix: 'json',
    import: () => import('@eslint/json'),
  }),
  include('eslint-markdown', {
    name: 'EslintMarkdown',
    prefix: 'markdown',
    import: () => import('@eslint/markdown'),
  }),
  include('eslint-comments', {
    // @ts-expect-error no types
    import: () => import('eslint-plugin-eslint-comments'),
    docs: {
      extends:
        'https://mysticatea.github.io/eslint-plugin-eslint-comments/#%F0%9F%93%96-usage',
    },
  }),
  include('graphql-eslint', {
    name: 'GraphQL',
    prefix: '@graphql-eslint',
    import: () => import('@graphql-eslint/eslint-plugin') as ESLint.Plugin,
    docs: {
      extends: 'https://the-guild.dev/graphql/eslint/docs/configs',
    },
  }),
  include('import', {
    import: () => import('eslint-plugin-import'),
    docs: {
      extends: 'https://github.com/import-js/eslint-plugin-import#installation',
    },
  }),
  include('import-x', {
    import: () => import('eslint-plugin-import-x'),
  }),
  include('jsdoc', {
    name: 'JSDoc',
    prefix: 'jsdoc',
    import: () => import('eslint-plugin-jsdoc'),
    docs: {
      extends: 'https://github.com/gajus/eslint-plugin-jsdoc#configuration',
    },
  }),
  include('jsonc', {
    import: () => import('eslint-plugin-jsonc'),
    docs: {
      extends: 'https://github.com/ota-meshi/eslint-plugin-jsonc#configuration',
    },
  }),
  include('jsx-a11y', {
    name: 'JsxA11y',
    // @ts-expect-error no types
    import: () => import('eslint-plugin-jsx-a11y'),
    docs: {
      extends:
        'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y#usage---legacy-config-eslintrc',
    },
  }),
  include('lingui', {
    import: () => import('eslint-plugin-lingui'),
    docs: {
      extends: 'https://github.com/lingui/eslint-plugin#rules',
    },
  }),
  include('mdx', {
    import: () => import('eslint-plugin-mdx'),
    docs: {
      extends:
        'https://github.com/mdx-js/eslint-mdx/tree/master/packages/eslint-plugin-mdx#classic',
    },
  }),
  include('n', {
    import: () => import('eslint-plugin-n'),
    docs: {
      extends: 'https://github.com/eslint-community/eslint-plugin-n#-configs',
    },
  }),
  include('prettier', {
    import: () => import('eslint-plugin-prettier'),
    docs: {
      extends:
        'https://github.com/prettier/eslint-plugin-prettier#configuration-legacy-eslintrc',
    },
  }),
  include('playwright', {
    import: () => import('eslint-plugin-playwright'),
    docs: {
      extends:
        'https://github.com/playwright-community/eslint-plugin-playwright#rules',
    },
  }),
  include('promise', {
    // @ts-expect-error no types
    import: () => import('eslint-plugin-promise'),
    docs: {
      extends:
        'https://github.com/eslint-community/eslint-plugin-promise#usage',
    },
  }),
  include('react', {
    prefix: '@eslint-react',
    import: () => import('@eslint-react/eslint-plugin'),
    docs: {
      extends: 'https://eslint-react.xyz/docs/installation',
    },
  }),
  include('react-hooks', {
    import: () => import('eslint-plugin-react-hooks'),
    docs: {
      home: 'https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks',
    },
  }),
  include('react-query', {
    prefix: '@tanstack/query',
    import: () => import('@tanstack/eslint-plugin-query'),
    docs: {
      extends:
        'https://tanstack.com/query/latest/docs/eslint/eslint-plugin-query#legacy-config-eslintrc',
    },
  }),
  include('react-refresh', {
    import: () => import('eslint-plugin-react-refresh'),
  }),
  include('regexp', {
    name: 'RegExp',
    import: () => import('eslint-plugin-regexp'),
    docs: {
      extends: 'https://ota-meshi.github.io/eslint-plugin-regexp/rules/',
    },
  }),
  include('security', {
    // @ts-expect-error no types
    import: () => import('eslint-plugin-security'),
    docs: {
      extends:
        'https://github.com/eslint-community/eslint-plugin-security#rules',
    },
  }),
  include('sonarjs', {
    name: 'SonarJS',
    prefix: 'sonarjs',
    import: () => import('eslint-plugin-sonarjs'),
    docs: {
      extends:
        'https://github.com/SonarSource/eslint-plugin-sonarjs#available-configurations',
    },
  }),
  include('solid', {
    import: () => import('eslint-plugin-solid'),
    docs: {
      extends:
        'https://github.com/solidjs-community/eslint-plugin-solid#configuration',
    },
  }),
  include('spellcheck', {
    import: () => import('@cspell/eslint-plugin'),
    docs: {
      extends:
        'https://github.com/streetsidesoftware/cspell/tree/main/packages/cspell-eslint-plugin#configuration-legacy-eslintrc',
    },
  }),
  include('storybook', {
    import: () => import('eslint-plugin-storybook'),
  }),
  include('stylistic', {
    prefix: 'stylistic',
    import: () => import('@stylistic/eslint-plugin'),
  }),
  include('tailwind', {
    prefix: 'tailwindcss',
    import: () => import('eslint-plugin-tailwindcss'),
  }),
  include('testing-library', {
    import: () => import('eslint-plugin-testing-library'),
    docs: {
      home: 'https://github.com/testing-library/eslint-plugin-testing-library',
    },
  }),
  include('typescript-eslint', {
    name: 'TypeScript',
    prefix: '@typescript-eslint',
    import: () => import('@typescript-eslint/eslint-plugin'),
  }),
  include('unicorn', {
    import: () => import('eslint-plugin-unicorn'),
    docs: {
      extends:
        'https://github.com/sindresorhus/eslint-plugin-unicorn#usage-legacy-eslintrc-or-packagejson',
    },
  }),
  include('vitest', {
    import: () => import('@vitest/eslint-plugin'),
    docs: {
      home: 'https://github.com/veritem/eslint-plugin-vitest',
    },
  }),
  include('vue', {
    import: () => import('eslint-plugin-vue'),
    docs: {
      extends: 'https://eslint.vuejs.org/user-guide/#usage',
    },
  }),
  include('vue-i18n', {
    name: 'VueI18n',
    prefix: '@intlify/vue-i18n',
    import: () => import('@intlify/eslint-plugin-vue-i18n'),
    docs: {
      extends: 'https://eslint-plugin-vue-i18n.intlify.dev/started.html',
    },
  }),
  include('vue-pug', {
    // @ts-expect-error no types
    import: () => import('eslint-plugin-vue-pug'),
    docs: {
      extends: 'https://github.com/rashfael/eslint-plugin-vue-pug#usage',
    },
  }),
  include('yml', {
    import: () => import('eslint-plugin-yml'),
  }),
];

export type PluginRules = Record<string, Rule.RuleModule>;

export interface PluginEntry {
  id: string;
  name: string;
  prefix: string;
  import: () => ESLint.Plugin | Promise<ESLint.Plugin>;
  docs?: {
    home?: string;
    extends?: string;
  };
}

function include(
  id: string,
  entry: Pick<PluginEntry, 'docs'> & {
    import: () => any;
    prefix?: string;
    name?: string;
  },
): PluginEntry {
  return {
    name: pascalCase(id),
    prefix: id,
    id,
    ...entry,
  };
}

const order = [
  /**
   * Map of plugins for which the script will generate rule files.
   */
  'deprecation',
  'es-x',
  'eslint-comments',
  'eslint',
  'graphql-eslint',
  'import-x',
  'import',
  'jsdoc',
  'jsonc',
  'jsx-a11y',
  'lingui',
  'mdx',
  'n',
  'node',
  'playwright',
  'promise',
  'react-hooks',
  'react-query',
  'react',
  'react-refresh',
  'regexp',
  'security',
  'solid',
  'sonarjs',
  'spellcheck',
  'storybook',
  'stylistic',
  'tailwind',
  'testing-library',
  'typescript-eslint',
  'unicorn',
  'vitest',
  'vue',
  'vue-i18n',
  'vue-pug',
  'yml',
];

Object(order);
