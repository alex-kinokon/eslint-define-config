import { format as prettierFormat } from 'prettier';

/**
 * Format the given content with Prettier.
 */
export function format(content: string): Promise<string> {
  return prettierFormat(content, {
    plugins: ['prettier-plugin-organize-imports'],
    parser: 'typescript',
    singleQuote: true,
    trailingComma: 'all',
  });
}

export function concatDoc(lines: string[]): string {
  lines = lines.filter(Boolean);
  if (!lines.length || lines.every((line) => !line.trim())) {
    return '';
  }

  return ['/**', ...lines.map((line) => ` * ${line}`), ' */'].join('\n');
}

export class RegionReplacer {
  constructor(private source: string) {}

  replace(region: string, newText: string): RegionReplacer {
    const list = this.source.split('\n');
    const start = list.findIndex((line) =>
      line.endsWith(`// #region ${region}`),
    );
    const end = list.findIndex((line) =>
      line.endsWith(`// #endregion ${region}`),
    );
    this.source = list
      .slice(0, start + 1)
      .concat(newText.trimEnd())
      .concat(list.slice(end))
      .join('\n');
    return this;
  }

  get(): string {
    return this.source;
  }
}
