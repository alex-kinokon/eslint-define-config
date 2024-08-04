/// <reference path="./types.d.ts" />
import { pascalCase } from 'change-case';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { concatDoc, format } from './index';
import type { LoadedPlugin, PluginEntry } from './registry';

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

    let replaced = replaceRegion(
      source,
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
    );

    replaced = replaceRegion(
      replaced,
      'union',
      extensions.map(({ extendName }) => `| ${extendName}`).join('\n'),
    );

    await fs.writeFile(extendsFile, await format(replaced));
  }
}

function replaceRegion(source: string, region: string, newText: string) {
  const list = source.split('\n');
  const start = list.findIndex((line) => line.endsWith(`// #region ${region}`));
  const end = list.findIndex((line) =>
    line.endsWith(`// #endregion ${region}`),
  );
  return list
    .slice(0, start + 1)
    .concat(newText.trimEnd())
    .concat(list.slice(end))
    .join('\n');
}
