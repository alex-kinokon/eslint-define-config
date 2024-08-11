/// <reference path="./types.d.ts" />
import { pascalCase } from 'change-case';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { LoadedPlugin, PluginEntry } from './registry.ts';
import { concatDoc, format, RegionReplacer } from './text.ts';

const __dirname: string = fileURLToPath(new URL('.', import.meta.url));

export class ExtendsCollector {
  extends: Array<{ entry: PluginEntry; configs: string[] }> = [];

  add({ plugin, entry }: LoadedPlugin): void {
    this.extends.push({
      entry,
      configs: Object.keys(plugin.configs ?? {}),
    });
  }

  async write(): Promise<void> {
    const extendsFile = join(__dirname, '../src/config/extends.d.ts');
    const source = await fs.readFile(extendsFile, 'utf-8');

    const extensions = this.extends
      .flatMap(({ entry, configs }) => {
        const link = entry.docs?.extends ?? entry.docs?.home;
        configs = configs.filter((x) => !x.includes('flat'));

        if (!configs.length && entry.id !== 'eslint') {
          return undefined;
        }

        return {
          ...entry,
          configs:
            entry.id === 'eslint'
              ? ['eslint:recommended', 'eslint:all']
              : configs
                  .map((config) => `plugin:${entry.prefix}/${config}`)
                  .sort(),
          link,
          extendName: pascalCase(entry.name) + 'Extends',
        };
      })
      .filter(Boolean);

    const replaced = new RegionReplacer(source)
      .replace(
        'extensions',
        extensions
          .flatMap(({ name, link, ..._ }) => [
            concatDoc([
              `ESLint ${name} extends.`,
              ...(link ? [' ', `@see [${name} extends](${link})`] : []),
            ]),
            `type ${_.extendName} =`,
            ..._.configs.map((config) => `  | '${config}'`),
            '\n',
          ])
          .join('\n'),
      )
      .replace(
        'union',
        extensions.map(({ extendName }) => `| ${extendName}`).join('\n'),
      )
      .get();

    await fs.writeFile(extendsFile, await format(replaced));
  }
}
